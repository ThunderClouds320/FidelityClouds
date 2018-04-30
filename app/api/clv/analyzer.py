from flask_injector import inject

from services.if_else import IfElseEngine


class Text(object):
    @inject(analyzer=IfElseEngine)
    def analyze(self, analyzer: IfElseEngine, post: str):
        """
        Takes a POST request and analyzes its arguments in the `post` parameter
        """

        if post is None or post == '':
            return {'message': 'No `post` argument provided'}, 400

        return analyzer.analyze(post), 200

    @inject(analyzer=IfElseEngine)
    def analyze_all(self, analyzer: IfElseEngine, posts: list):
        """
        TODO: NOT IMPLEMENTED
        """
        return None

text = Text()