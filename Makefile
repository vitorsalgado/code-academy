SHELL := /bin/bash
CONTEXT := $$(pwd)
TRAINING := $$TRAVIS_PULL_REQUEST_BRANCH

lint:
	docker build -f Dockerfile.jvm -t code-academy . && \
	docker run -v $(CONTEXT):/app --name code-academy -t code-academy

check:
	cd training && \
	./gradlew --no-build-cache :sample:check --stacktrace && \
	cd ..
