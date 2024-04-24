from fastapi import APIRouter,HTTPException
from app.routers.mbti.mbti_schema import Content
import pickle

router = APIRouter(prefix="/api/data/mbti")

with open('./app/routers/mbti/mbti_model', 'rb') as f:
    model = pickle.load(f)

@router.get("/test")
def test():
    print("success test!")


@router.post("/getMbti")
def predict(data: Content):
    try:
        transformed_input = model['tfidf'].transform([data.content])
        prediction = model['clf'].predict(transformed_input)
        result = prediction[0]
        return {"mbti": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
