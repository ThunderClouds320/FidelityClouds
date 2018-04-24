from app import app
from config import HOST_IP_ADDRESS, DEBUG, STATIC_FOLDER, TEMPLATE_FOLDER

app.run(host=HOST_IP_ADDRESS, port=5005, debug=DEBUG)