clean:
	grunt clean

publish: clean
	grunt build
	scp  -r dist/* www-data@hyperfox.org:/var/www/hyperfox.org/live/
