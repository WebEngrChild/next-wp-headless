# Docker
init:
	docker-compose build --no-cache
	docker-compose up -d
	docker-compose exec front yarn dev

up:
	docker-compose up -d
	docker-compose exec front yarn dev

down:
	docker-compose down

build:
	docker-compose build --no-cache

# next.js
dev:
	docker-compose exec front yarn dev

serve:
	docker-compose exec front yarn serve

exec front:
	docker-compose exec front sh

# wordpress
exec wp:
	docker compose exec wordpress bash
# cd wp-content/themes/twentytwentytwo/