import gradio as gr
from diffusers import StableDiffusionPipeline
import torch

pipe = StableDiffusionPipeline.from_pretrained("stabilityai/stable-diffusion-2", torch_dtype=torch.float16)
pipe.to("cuda" if torch.cuda.is_available() else "cpu")

def generar_imagen(prompt):
    image = pipe(prompt).images[0]
    return image

demo = gr.Interface(fn=generar_imagen, inputs="text", outputs="image", title="Simulador de Instalación LED")
demo.launch()
