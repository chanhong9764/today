from fastapi import APIRouter

router = APIRouter(prefix="/api/data/diary")

@router.post("/")
def create_image():
    print("이미지 생성")