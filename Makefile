setup:
	rm -rf node_modules && \
	$(MAKE) node_modules

node_modules:
	npm install

standard:
	standard --fix
