DOCKER_REPO_NAME ?=
DOCKER_CONTAINER_NAME ?= mutual-clouds
DOCKER_IMAGE_NAME ?= ${DOCKER_REPO_NAME}${DOCKER_CONTAINER_NAME}

build:
	docker build -t ${DOCKER_IMAGE_NAME} .
	docker create --name=${DOCKER_CONTAINER_NAME} ${DOCKER_CONTAINER_NAME}:latest
	docker rm ${DOCKER_CONTAINER_NAME}

run:
	docker run -it --rm --env-file .env ${DOCKER_IMAGE_NAME}