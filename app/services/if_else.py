"""
If-Else Engine Microservice
"""

class IfElseEngine(object):
    def __init__(self, keywords: dict):
        self.keywords = keywords

    def analyze(self, post: str):
        from time import time
        import functools

        # Return a dictionary of all keywords that appear in the post, and their
        # related probabilities (fabricated, of course ;])
        current_time = time()
        text = post
        keyword_list = [keyword for keyword in self.keywords if keyword in post]
        confidence_list = [self.keywords[keyword] for keyword in keyword_list]

        if len(confidence_list) == 0:
            confidence_list = [1.0]
        clv = functools.reduce(lambda x, y: x * y, confidence_list) * 1000


        return {'time': current_time,
                'text': text,
                'keywords': keyword_list,
                'confidences': confidence_list,
                'clv': clv}