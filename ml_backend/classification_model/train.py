import onnx
import tensorflow as tf
# from keras.applications.mobilenet_v2 import MobileNetV2
# import numpy as np
# from PIL import Image
# import onnxruntime as ort
import tf2onnx


# Load Keras model
model = tf.keras.applications.MobileNetV2(weights="imagenet", input_shape=(224, 224, 3))

# Export to ONNX
spec = (tf.TensorSpec((1, 224, 224, 3), tf.float32, name="input"),)
onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=spec, opset=13)

# Save the ONNX model
with open("mobilenet_v2.onnx", "wb") as f:
    f.write(onnx_model.SerializeToString())
    
    
    


