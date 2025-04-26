.PHONY: install build serve clean

# Install dependencies
install:
	bundle install

# Build the site
build:
	bundle exec jekyll build

# Serve the site locally with live reload
serve:
	bundle exec jekyll serve --livereload

# Clean the site and kill existing Jekyll processes
clean:
	rm -rf _site
	rm -rf .jekyll-cache
	rm -rf .jekyll-metadata
	pkill -f jekyll || true

# Default target
all: install build 