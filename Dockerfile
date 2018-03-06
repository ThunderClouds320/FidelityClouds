# Build the first Docker image from node so we can compile our jsx
FROM node as react_bundle

WORKDIR app/ui/

COPY app/ui/ ./

# Bundle our React files
RUN npm install
RUN npm run build

##################################

# Build our Docker image using the python3.6 base image
FROM python:3.6

# Copy the app/ directory to the Docker image
ADD app/ /app

# Set the working directory for all future Docker commands
WORKDIR /app

# Copy our bundled jsx files from the first image into this one
COPY --from=react_bundle /app/ui/static/js/index.js ui/static/js/

# Install all python packages listed in our requirements file
RUN pip install -r requirements.txt

# Expose port 5000 of the container to the host (this computer)
EXPOSE 5000

# Run the python application
CMD ["/usr/local/bin/python", "server.py"]