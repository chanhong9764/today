from fastapi import APIRouter
from joblib import load
from app.routers.emotion.emotion_schema import Content

router = APIRouter(prefix="/api/data/emotion")

# 파일 로드 시 경로와 파일명이 올바른지 확인
cv_loaded = load('./routers/emotion/count_vectorizer_2.joblib')  # CountVectorizer 객체 로드
clf_loaded = load('./routers/emotion/emotion_classifier_model_2.joblib')  # MultinomialNB 객체 로드

@router.get("/test")
def test():
    return {"message": "success test!"}

@router.post("/getEmotion")
def emotion(data: Content):
    texts = data.content
    # CountVectorizer를 사용하여 입력 텍스트 변환
    transformed_texts = cv_loaded.transform(texts)
    # 예측 실행
    predictions = clf_loaded.predict(transformed_texts)
    probabilities = clf_loaded.predict_proba(transformed_texts)

    results = []
    for text, prediction, probability in zip(texts, predictions, probabilities):
        # 확률 값을 소수점 다섯 자리로 포맷
        formatted_probabilities = {emotion: f"{prob:.5f}" for emotion, prob in zip(clf_loaded.classes_, probability)}
        result = {
            "문장": text,
            "예측된 감정": prediction,
            "각 감정에 대한 확률": formatted_probabilities
        }
        results.append(result)
    return results
