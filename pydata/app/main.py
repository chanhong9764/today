from fastapi import FastAPI
from app.routers.translator import translator_router
from app.routers.diary import diary_router
from app.routers.mbti import mbti_router
from app.utils.init import load_env, load_sdxl

app = FastAPI(docs_url='/api/data/docs', redoc_url='/api/data/redoc')


@app.on_event("startup")
def startup():
    global base
    # 초기 환경변수 설정
    load_env()
    # 초기 Stable Diffusion XL 설정
    base = load_sdxl()
    print(base)


# main은 깔끔하게 사용하기
# main은 routers에서 호출만!!!!!!!
app.include_router(diary_router.router)
app.include_router(translator_router.router)
app.include_router(mbti_router.router)
