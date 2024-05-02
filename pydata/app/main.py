from fastapi import FastAPI, APIRouter

from app.routers.diary import diary_router
from app.utils.init import load_env, load_sdxl, load_emotion, load_mbti, connect_openai ,connect_s3


app = FastAPI(docs_url='/api/data/docs', redoc_url='/api/data/redoc')

@app.on_event("startup")
def startup():
    # 초기 환경변수 설정
    load_env()
    # 초기 Stable Diffusion XL 설정
    load_sdxl()
    # 초기 감정 분석 모델 설정
    load_emotion()
    # 초기 MBTI 모델 설정
    load_mbti()
    # OPENAI 연결
    connect_openai()
    # S3 Bucket 연결
    connect_s3()


# main은 깔끔하게 사용하기
# main은 routers에서 호출만!!!!!!!
app.include_router(diary_router.router)
