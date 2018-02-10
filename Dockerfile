# Build our Docker container using the python3.6 base image
FROM python:3.6

ADD app/ /app

WORKDIR /app

# Install all python packages listed in our requirements file
RUN pip install -r requirements.txt

CMD ["/usr/local/bin/python","app.py"]