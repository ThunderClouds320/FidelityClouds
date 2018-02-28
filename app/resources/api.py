'''
api.py

Contains the API routes for our flask server

@authors: CS320
'''

from flask_restful import Resource
from flask import request, jsonify
from bson.json_util import dumps

from db import mongo

class User(Resource):
    '''
    A User class acting as an API resource for the /api/user route

    Request Types:
        GET
        POST
        PUT
        DELETE
    '''

    # TODO:
    def get(self, userid=None):
        if userid is None:
            users = mongo.db.users.find()
            return jsonify({'response': dumps(users), 'status': 200})

    # TODO:
    def post(self):
        form_data = request.get_json()

        if not form_data:
            return jsonify({'response': 'Missing form data for POST request', 'status': 400})
        if 'userid' not in form_data:
            return jsonify({'response': 'Missing \'userid\' argument in POST request',
                            'status': 422})

    # TODO:
    def put(self):
        pass

    # TODO:
    def delete(self):
        pass
