from fastapi import APIRouter
from googletrans import Translator

from app.routers.translator.translator_schema import Trans_output, Trans_input
from app.routers.spell_checker.spell_checker import spell_check

router = APIRouter(prefix="/api/data/translator")
translator_instance = Translator()

@router.get("/test")
def test():
    print("test!!")

@router.post("", response_model=Trans_output)
def translator(data: Trans_input):

    spell_check(data.content_ko)
    res = translator_instance.translate(data.content_ko, dest='en', src='auto')

    return Trans_output(content_eng=res.text)
