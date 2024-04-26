import app.utils.global_vars

from fastapi import APIRouter
from pathlib import Path
from app.services.diary.diary_image import create_image, diary_translate
from app.routers.diary.diary_schema import createImageDto

router = APIRouter(prefix="/api/data/diary")


@router.post("")
def make_image(data: createImageDto):
    # 핵심 단어 추출
    keyword = diary_translate(data.prompt)
    # 이미지 추출 및 저장
    create_image(keyword)
