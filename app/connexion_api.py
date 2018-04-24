"""
server.py

This file acts as the main entry point for running the flask server
              _               _     ___ _                 _
  /\/\  _   _| |_ _   _  __ _| |   / __\ | ___  _   _  __| |___
 /    \| | | | __| | | |/ _` | |  / /  | |/ _ \| | | |/ _` / __|
/ /\/\ \ |_| | |_| |_| | (_| | | / /___| | (_) | |_| | (_| \__ \
\/    \/\__,_|\__|\__,_|\__,_|_| \____/|_|\___/ \__,_|\__,_|___/
"""

import os
import connexion

from injector import Binder
from flask_injector import FlaskInjector
from connexion.resolver import RestyResolver

from services.if_else import IfElseEngine

def configure(binder: Binder) -> Binder:
    binder.bind(
        IfElseEngine,
        IfElseEngine(
            {'crash': 0.6,
             'died': 0.7,
             'married': 0.76,
             'funeral': 0.8
            }
        )
    )

    return binder

if __name__ == '__main__':
    from flask_cors import CORS

    app = connexion.App(__name__, specification_dir='resources/swagger/')

    app.add_api('api_config.yaml', resolver=RestyResolver('api'))
    FlaskInjector(app=app.app, modules=[configure])

    # Cross-Origin support because we're hacky af
    CORS(app.app)

    app.run()

