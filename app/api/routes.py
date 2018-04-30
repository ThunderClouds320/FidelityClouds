from flask_restful import Api, Resource
from flask import request, jsonify, render_template
from app import app

api = Api(app)


class User(Resource):
    """
    A User class acting as an API resource for the /api/user route

    Request Types:
        GET
    """

    def get(self, user_handle=None):
        from TwitterSearch import TwitterSearch, TwitterUserOrder, TwitterSearchException

        if user_handle is None:
            return jsonify({'response': [], 'status': 400, 'message': 'No handle provided'})

        try:
            import itertools

            user_profile = TwitterUserOrder(user_handle)

            # Hardcode our API keys for optimal security
            consumer = 'CedAugFXME85jW5MRraKTJFgO'
            consumer_secret = 'RjLOp02iZqQnGM5cOt4bBeFjFHtFyVW09NSH14rVEyPouFvWLs'
            access = '378294925-zdTFn1Gf8rcBzv6gshfjfONZG9ZSc8QFUlZd1YO8'
            access_secret = '0MV9lR9kFdoUkLnKoWgdZCl74vunMAoCR7INC7pQYrSfW'

            ts = TwitterSearch(consumer_key=consumer,
                               consumer_secret=consumer_secret,
                               access_token=access,
                               access_token_secret=access_secret)

            # Fetch a list of tweets from the user with the provided handle
            tweet_iterator = ts.search_tweets_iterable(user_profile)

            # By default, we fetch only 20 tweets unless a query parameter is specified
            num_tweets = int(request.args.get('numTweets', 20))
            resolved_tweets = list(itertools.islice(tweet_iterator, num_tweets))

            return jsonify({'response': resolved_tweets, 'status': 200})

        except TwitterSearchException as e:
            return jsonify({'response': [],
                            'status': 404,
                            'message': 'There was a problem fetching the data for {}: {}'.format(user_handle, e)})

# Index page
@app.route('/')
def index():
    return render_template("index.html")

api.add_resource(User, '/api/user/<string:user_handle>', '/api/user/')