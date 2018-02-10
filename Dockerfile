# Build our Docker container using the python3.6 base image
FROM python:3.6

# Copy the app/ directory to the Docker image
ADD app/ /app

# Set the working directory for all future Docker commands
WORKDIR /app

# Install all python packages listed in our requirements file
RUN pip install -r requirements.txt

# Run the python application
CMD ["/usr/local/bin/python","app.py"]