from pathlib import Path


def create_image(prompt):
    global base
    # 이미지 타입
    types = ["childrens_book_illustration, ", "Aardman Animations Style page, ", "pixel art, 64 bit,", ""]
    lora_types = ["child", "animate", "pixel", "detail"]
    # 추론 횟수
    n_steps = 30
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
