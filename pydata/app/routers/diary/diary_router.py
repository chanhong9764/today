import app.utils.global_vars

from fastapi import APIRouter
from pathlib import Path
from app.services.diary.diary_image import create_image, diary_translate
from app.routers.diary.diary_schema import createImageIn, createImageOut
from app.utils.response import successResponse
from app.utils.response_code import successResponseCode, errorResponseCode

router = APIRouter(prefix="/api/data/diary")


@router.post("")
def make_image(data: createImageIn):
    # 핵심 단어 추출
    keyword = diary_translate(data.prompt)
    # 이미지 추출 및 저장
    images_url = create_image(keyword)
    
    return successResponse(successResponseCode.createImage, createImageOut(imageUrl=images_url).model_dump_json())
