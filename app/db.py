'''
db.py

This file hosts the database object

@authors: CS320
'''


from flask_pymongo import PyMongo
from app import app

mongo = PyMongo(app)
