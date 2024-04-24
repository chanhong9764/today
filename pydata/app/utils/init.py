import os
import torch
from diffusers import DPMSolverMultistepScheduler, StableDiffusionXLPipeline
from diffusers.models import AutoencoderKL

def load_sdxl():
    print("=================== Checkpoint loaded start ===================")
    base_dir = "/home/j-k10b108/"
    model = StableDiffusionXLPipeline.from_single_file(base_dir + "checkpoint/stable-diffusion-xl-base-1.0.safetensors", torch_dtype=torch.float16, variant="fp16")
    model.to("cuda")
    model.scheduler = DPMSolverMultistepScheduler.from_config(model.scheduler.config, use_karras_sigmas="true", algorithm_type="sde-dpmsolver++")
    print("=================== Checkpoint loaded end ===================")
    
    print("=================== lora loaded start ===================")
    model.load_lora_weights(base_dir + "lora/detail.safetensors", adapter_name="detail")
    model.load_lora_weights(base_dir + "lora/children.safetensors", adapter_name="child")
    model.load_lora_weights(base_dir + "lora/animation.safetensors", adapter_name="animate")
    model.load_lora_weights(base_dir + "lora/pixel.safetensors", adapter_name="pixel")
    print("=================== lora loaded end ===================")

    return model
def load_env():
    print("=================== env loaded start ===================")
    os.environ['CUDA_VISIBLE_DEVICES']='7'
    os.environ['CUDA_HOME']='/home/j-k10b108/.conda/envs/sd'
    os.environ['LD_LIBRARY_PATH']='/home/j-k10b108/.conda/envs/sd/lib'
    print("=================== env loaded end ===================")
