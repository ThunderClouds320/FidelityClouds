"""
routes.py

This file hosts the routes that will be used by the flask object

@authors: CS320
"""

from flask import render_template
from flask_restful import Api

from app import app
from resources.api import User

api = Api(app)

# Index page
@app.route('/')
def index():
    return render_template("index.html")

api.add_resource(User, '/api/user/<string:user_handle>', '/api/user')
