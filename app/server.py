"""
server.py

This file acts as the main entry point for running the flask server
              _               _     ___ _                 _
  /\/\  _   _| |_ _   _  __ _| |   / __\ | ___  _   _  __| |___
 /    \| | | | __| | | |/ _` | |  / /  | |/ _ \| | | |/ _` / __|
/ /\/\ \ |_| | |_| |_| | (_| | | / /___| | (_) | |_| | (_| \__ \
\/    \/\__,_|\__|\__,_|\__,_|_| \____/|_|\___/ \__,_|\__,_|___/
"""

# TODO: Fix bad naming :P
from app import app
from config import HOST_IP_ADDRESS, DEBUG

# Run the flask server
app.run(host=HOST_IP_ADDRESS, debug=DEBUG)