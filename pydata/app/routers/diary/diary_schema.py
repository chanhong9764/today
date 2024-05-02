from pydantic import BaseModel
from typing import List

class createImageIn(BaseModel):
    prompt: str

class createImageOut(BaseModel):
    imageUrl: List[str]
    emotion: dict
    mbti: str
