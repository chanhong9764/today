from fastapi import FastAPI

app = FastAPI()

# main은 깔끔하게 사용하기
# main은 routers에서 호출만!!!!!!!

@app.get("/")
async def root():
  return {"message": "Hello World"}
