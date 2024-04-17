from pydantic import BaseModel

class Trans_input(BaseModel) :
    content_ko : str

class Trans_output(BaseModel) :
    content_eng : str