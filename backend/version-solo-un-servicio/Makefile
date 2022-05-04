
run: ## Start the containers
	docker-compose up -d --remove-orphans

stop: ## Stop the containers
	docker-compose stop

restart: ## Restart the containers
	$(MAKE) stop && $(MAKE) run