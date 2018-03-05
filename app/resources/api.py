"""
api.py

Contains the API routes for our flask server

@authors: CS320
"""

from flask_restful import Resource
from flask import request, jsonify

#from db import mongo

class User(Resource):
    """
    A User class acting as an API resource for the /api/user route

    Request Types:
        GET
        POST
        PUT
        DELETE
    """

    # TODO: Return a response containig Facepy data
    def get(self, accessToken=None):
        facebook_graph = GraphAPI(accessToken)
        try:

            response = facebook_graph.get('me/name')
            print(response)
        except facebook.GraphAPIError as e:
            print('Something went wrong:', e.type, e.message)
        return jsonify({'response': [], 'status': 200})

    # TODO:
    def post(self):
        return jsonify({'response': [], 'status': 200})

    # TODO:
    def put(self):
        return jsonify({'response': [], 'status': 200})

    # TODO:
    def delete(self):
        return jsonify({'response': [], 'status': 200})
