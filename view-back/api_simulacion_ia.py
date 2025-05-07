import gradio as gr
from diffusers import StableDiffusionPipeline
import torch

# Cargar modelo Stable Diffusion
pipe = StableDiffusionPipeline.from_pretrained(
    "stabilityai/stable-diffusion-2",
    torch_dtype=torch.float16 if torch.cuda.is_available() else torch.float32
)
pipe.to("cuda" if torch.cuda.is_available() else "cpu")

# Función generadora
def generar_imagen(prompt):
    image = pipe(prompt, num_inference_steps=25).images[0]
    return image

# Interfaz Gradio
gr.Interface(
    fn=generar_imagen,
    inputs=gr.Textbox(label="Describe tu instalación", placeholder="Ej: Una pantalla LED en una sala de reuniones moderna"),
    outputs=gr.Image(label="Simulación generada"),
    title="Simulador de Instalación LED con IA",
    description="Escribí cómo querés que se vea la instalación y generá una simulación visual con IA."
).launch()
