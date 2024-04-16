from fastapi import APIRouter
from googletrans import Translator

from app.routers.translator.translator_schema import Trans_output, Trans_input

router = APIRouter(prefix="/api/data/translator")
translator_instance = Translator()

@router.get("/test")
def test():
    print("test!!")

@router.post("/get", response_model=Trans_output)
def translator(data: Trans_input):
    print(data.trans_ko)

    res = translator_instance.translate(data.trans_ko, dest='en', src='auto')
    print(res.text)

    return Trans_output(trans_eng=res.text)
