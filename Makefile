IMAGE=super-dev
EXTERNAL_PORT=3000
INTERNAL_PORT=8080

build:
	docker build --rm -t $(IMAGE) -f Dockerfile .

run: build
	docker run -it --rm --name $(IMAGE) -p $(EXTERNAL_PORT):$(INTERNAL_PORT) $(IMAGE)

stop:
	docker kill $(IMAGE)

remove:
	docker rm $(IMAGE)
