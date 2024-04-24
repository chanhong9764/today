from fastapi import FastAPI
from app.routers.translator import translator_router
from app.routers.diary import diary_router

app = FastAPI(docs_url='/api/data/docs', redoc_url='/api/data/redoc')


@app.on_event("startup")
def startup():
    print("HIHI")


app.include_router(diary_router.router)
app.include_router(translator_router.router)