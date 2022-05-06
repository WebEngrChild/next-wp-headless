# Docker
init:
	docker-compose build --no-cache
	docker-compose up -d
	docker-compose exec front yarn
	docker-compose exec front yarn serve

up:
	docker-compose up -d
	docker-compose exec front yarn serve

down:
	docker-compose down

build:
	docker-compose build --no-cache

# next.js
dev:
	docker-compose exec front yarn dev

serve:
	docker-compose exec front yarn serve

front:
	docker-compose exec front sh

# wordpress
# wp-init:
# 	docker exec -it wordpress /bin/bash -c "/var/www/html/wp-content/conf/addfunctions.php >> /var/www/html/wp-content/themes/twentytwentytwo/functions.php"

wp:
	docker compose exec wordpress bash
# vim wp-content/themes/twentytwentytwo/functions.php