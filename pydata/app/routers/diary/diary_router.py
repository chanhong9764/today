from fastapi import APIRouter
from app.services.diary.diary_image import test

router = APIRouter(prefix="/api/data/diary")


@router.get("/")
def create_image():
    print("이미지 생성")
    test()
