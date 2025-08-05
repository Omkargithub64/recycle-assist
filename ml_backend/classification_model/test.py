import onnxruntime as ort
import numpy as np
from PIL import Image
from google import genai
from google.genai import types
from dotenv import load_dotenv
import os


load_dotenv()

def resize_image(img_path, size=(224,224)):
    img = Image.open(img_path)
    img = img.resize(size, Image.LANCZOS).convert("RGB")
    arr = np.array(img).astype(np.float32)
    arr = np.expand_dims(arr,axis=0)
    arr = (arr / 127.5) - 1.0
    return arr

def get_Labels(preds, top=1):
        
    with open("ImageNetLabels.txt") as f:
        labels = [line.strip() for line in f.readlines()]
    
    top_indices = preds[0].flatten().argsort()[-top:][::-1]
    return [(i, labels[i], preds[0].flatten()[i]) for i in top_indices]





img = resize_image("./images/icec.jpg")



model = ort.InferenceSession("mobilenet_v2.onnx")
input_name = model.get_inputs()[0].name
predictions = model.run(None, {input_name:img })




object = get_Labels(predictions)[0][1]


client = genai.Client(api_key=os.getenv('GEMINI_API_KEY'))

response = client.models.generate_content(
    model='gemini-2.5-flash',
    contents=f"is {object} recyclable? if so then give 3-5 bullet steps for recycling it. if not recyclable then give how to displose {object} safely in 3-5 bullet points",
    config=types.GenerateContentConfig(thinking_config=types.ThinkingConfig(thinking_budget=0))
)

print(response.text)