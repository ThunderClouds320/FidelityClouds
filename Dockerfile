# Build our Docker container using the python3.6 base image
FROM python:3.6

# Copy the app/ directory to the Docker image
ADD app/ /app

# Set the working directory for all future Docker commands
WORKDIR /app

# Install all python packages listed in our requirements file
RUN pip install -r requirements.txt

# Expose port 8000 of the container to the host (this computer)
EXPOSE 8000

# Run the python application
CMD ["/usr/local/bin/python", "manage.py", "runserver", "0.0.0.0:8000"]