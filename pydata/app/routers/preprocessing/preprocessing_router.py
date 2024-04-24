from fastapi import APIRouter
from app.routers.preprocessing.preprocessing_schema import Input_content
from dotenv import load_dotenv
import openai
import os

router = APIRouter(prefix="/api/data/preprocessing")

load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")
client = openai.OpenAI(api_key=openai_api_key)

@router.get("/test")
def test():
    st = "success test!"
    print(st)
    return {"msg": st}

@router.post("")
def preprocessing(data: Input_content):
    print(data.content)
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "사용자가 입력한 문장을 영어로 번역해줘, 번역한 문장만 말해줘"},
            {"role": "user", "content": data.content}
        ]
    )
    print(completion)
    return {"msg": completion.choices[0].message}
