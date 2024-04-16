from fastapi import FastAPI, APIRouter

app = FastAPI(docs_url='/api/data/docs', redoc_url='/api/data/redoc')

router = APIRouter(prefix="/api/data")


# main은 깔끔하게 사용하기
# main은 routers에서 호출만!!!!!!!

@app.get("/")
async def root():
    return {"message": "Hello World"}

@router.get("/test")
def test():
    return {"message": "this is just test"}

app.include_router(router)