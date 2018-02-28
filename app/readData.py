import facebook
from facepy import GraphAPI

def process(oauth_access_token):
  facebook_graph = GraphAPI(oauth_access_token)

  # Try to post something on the wall.
  try:

    profile = facebook_graph.get('me/posts')
    print(profile)
  except facebook.GraphAPIError as e:
    print('Something went wrong:', e.type, e.message)