# MutualClouds
CS320 Team 2 Liberty Mutual Final Project

# Installation

## Docker
This project requires Docker, as it is an efficient way to streamline our development environment. Be sure to [install the appropriate version](https://docs.docker.com/install/) for your operating system.

## Make (Windows only)
If you are using Windows, you will also need to install GNU's [Make for Windows](http://gnuwin32.sourceforge.net/packages/make.htm). We will be using Makefiles to group various build commands together for continuous integration. The download link can be found at the bottom of the page. **Note**: *You may need to add the directory containing make.exe to your PATH variable*.

## Running the Application
Once you have pulled the most recent version of the code from this repository, navigate to the root directory of this project. Ensure you have Docker running and run `make build`. This will construct the docker image for our project. An image is an environment bundled with various dependencies where you may run programs independent of your current OS environment. After the image is built, run `make run` to create a Docker container for the project, which will start running the application. A container is a running instance of a Docker image. If all went well, you should be able to access the main dashboard by navigating to http://localhost:5005/ in your browser!
