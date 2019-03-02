SHELL := /bin/bash
CONTEXT := $$(pwd)
TRAINING := $$TRAVIS_PULL_REQUEST_BRANCH

lint:
	docker build -f Dockerfile.jvm -t code-academy . && \
	docker run -v $(CONTEXT)/sample:/app --name code-academy -it code-academy
