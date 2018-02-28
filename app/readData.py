import facebook

def process(access):
  facebook_graph = facebook.GraphAPI(access)

  # Try to post something on the wall.
  try:
    profile = facebook_graph.get_object('me')
    args = {'fields': 'id,name,email,birthday,political,relationship_status,religion,posts', }
    profile = facebook_graph.get_object('me', **args)
    print(profile)
  except facebook.GraphAPIError as e:
    print('Something went wrong:', e.type, e.message)