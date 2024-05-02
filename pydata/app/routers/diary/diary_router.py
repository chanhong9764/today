import app.utils.global_vars

from fastapi import APIRouter
from pathlib import Path
from app.services.diary.diary_image import create_image
from app.services.diary.diary_openai import diary_translate, diary_keyword
from app.services.diary.diary_emotion import emotion
from app.services.diary.diary_mbti import mbti
from app.routers.diary.diary_schema import createImageIn, createImageOut
from app.utils.response import successResponse
from app.utils.response_code import successResponseCode, errorResponseCode

router = APIRouter(prefix="/api/data/diary")


@router.post("")
def make_image(data: createImageIn):
    # 한글 to 영어
    translate_prompt = diary_translate(data.prompt)
    # 핵심 단어 추출
    keyword = diary_keyword(translate_prompt)
    # 이미지 추출 및 저장
    images_url = create_image(keyword)
    # 감정 분석 
    emotion_result = emotion(data.prompt)
    # MBTI 분석
    mbti_result = mbti(translate_prompt)
    
    return successResponse(successResponseCode.createImage, createImageOut(imageUrl=images_url, emotion=emotion_result, mbti=mbti_result))
