from pydantic import BaseModel

class Trans_input(BaseModel) :
    trans_ko : str

class Trans_output(BaseModel) :
    trans_eng : str