# Docker
init:
	docker-compose build --no-cache
	docker-compose up -d
	docker-compose exec front yarn dev

up:
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose build --no-cache

# next.js
dev:
	docker-compose exec front yarn dev

exec front:
	docker-compose exec front sh

# wordpress
exec wp:
	docker compose exec wordpress bash
