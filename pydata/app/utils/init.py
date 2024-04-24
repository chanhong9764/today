import os
import torch
from diffusers import DPMSolverMultistepScheduler, StableDiffusionXLPipeline
from diffusers.models import AutoencoderKL

def load_sdxl():
    print("=================== Checkpoint loaded start ===================")
    base_dir="/home/j-k10b108/"
    base = StableDiffusionXLPipeline.from_single_file(base_dir + "checkpoint/stable-diffusion-xl-base-1.0.safetensors", torch_dtype=torch.float16, variant="fp16")
    base.to("cuda")
    base.scheduler = DPMSolverMultistepScheduler.from_config(base.scheduler.config, use_karras_sigmas="true", algorithm_type="sde-dpmsolver++")
    print("=================== Checkpoint loaded end ===================")
    
    print("=================== lora loaded start ===================")
    base.load_lora_weights(base_dir + "lora/detail.safetensors", adapter_name="detail")
    base.load_lora_weights(base_dir + "lora/children.safetensors", adapter_name="child")
    base.load_lora_weights(base_dir + "lora/animation.safetensors", adapter_name="animate")
    base.load_lora_weights(base_dir + "lora/pixel.safetensors", adapter_name="pixel")
    print("=================== lora loaded end ===================")

def load_env():
    print("=================== env loaded start ===================")
    os.environ['CUDA_VISIBLE_DEVICES']='7'
    os.environ['CUDA_HOME']='/home/j-k10b108/.conda/envs/sd'
    os.environ['LD_LIBRARY_PATH']='/home/j-k10b108/.conda/envs/sd/lib'
    print("=================== env loaded end ===================")
