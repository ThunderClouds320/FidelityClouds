"""
app.py

This file hosts and creates the flask object

@authors: CS320
"""

from flask import Flask, render_template

from config import STATIC_FOLDER, TEMPLATE_FOLDER

app = Flask(__name__, static_folder=STATIC_FOLDER, template_folder=TEMPLATE_FOLDER)

# Import our API resources after we initialize the flask object
from api.routes import *



