# Increasing the image seemed to help

from PIL import Image
from pytesseract import image_to_string

print(image_to_string(Image.open("./codeScreenshots/jsReg1.PNG")))