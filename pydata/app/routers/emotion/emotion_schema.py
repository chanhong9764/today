from pydantic import BaseModel

class Content(BaseModel):
    content: list[str]