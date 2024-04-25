import app.utils.global_vars

from fastapi import APIRouter
from pathlib import Path
from app.services.diary.diary_image import create_image
from app.routers.diary.diary_schema import createImageDto

router = APIRouter(prefix="/api/data/diary")


@router.post("/")
def make_image(data: createImageDto):
    print(data.prompt)
    #create_image()
