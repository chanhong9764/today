from pydantic import BaseModel

class createImageDto(BaseModel):
    prompt: str
