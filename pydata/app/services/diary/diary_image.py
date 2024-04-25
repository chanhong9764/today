import app.utils.global_vars
from pathlib import Path
from dotenv import load_dotenv
import openai
import os

load_dotenv()

def create_image(prompt):
    # 모델 설정
    base = app.utils.global_vars.base
    # 이미지 타입
    types = ["childrens_book_illustration, ", "Aardman Animations Style page, ", "pixel art, 64 bit, ", "realistic, "]
    # Lora 타입
    lora_types = ["child", "animate", "pixel", "detail"]
    # 추론 횟수
    n_steps = 40
    # 부정 프롬프트
    negative_prompt = "ugly, tiling, poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, extra limbs, disfigured, deformed, body out of frame, bad anatomy, watermark, signature, cut off, low contrast, underexposed, overexposed, bad art, beginner, amateur, distorted face, b&w, watermark EasyNegative"
    
    images = []

    save_path = Path("/home/j-k10b108/image")

    for i in range(4):
        base.set_adapters(lora_types[i])
        image = base(
            prompt=types[i] + prompt,
            guidance_scale=7,
            negative_prompt=negative_prompt,
            num_inference_steps=n_steps,
        ).images[0]
        images.append(image)

    for i, image in enumerate(images):
        file_name = f"image_{i}.png"
        file_path = save_path / file_name
        image.save(file_path)

def diary_translate(content):
    openai_api_key = os.getenv("OPENAI_API_KEY")
    client = openai.OpenAI(api_key=openai_api_key)
    
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Stable Diffusion is an AI art generation model similar to DALLE-2."},
{"role": "system", "content": "I'm going to put it in the prompt of the Stable Diffusion model"},
{"role": "system", "content": "Please let me know the answer that satisfies the rules below"},
{"role": "system", "content": "- Please don't transform the text you entered"},
{"role": "system", "content": "- Please translate Korean into English"},
{"role": "system", "content": "- Please extract it in a keyword format, not a sentence format"},
{"role": "system", "content": "- Extract the key words from the translation and distribute the words with commas"},
{"role": "system", "content": "- I'm going to put it in the prompt of the Stable Diffusion model, so change the format according to the prompt"},
{"role": "system", "content": "- Just write the keywords and let me know"},
{"role": "system", "content": "I want you to write me a list of detailed prompts exactly about the idea written after IDEA."},
{"role": "user", "content": "IDEA:" +  content}
        ]

    )
    return completion.choices[0].message.content

    
