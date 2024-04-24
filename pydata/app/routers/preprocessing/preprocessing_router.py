from fastapi import APIRouter
from app.routers.preprocessing.preprocessing_schema import Input_content

router = APIRouter(prefix="/api/data/preprocessing")

@router.get("/test")
def test():
    st = "success test!"
    print(st)
    return {"msg" : st}

# @router.post("")
# def preprocessing(data: Input_content):
