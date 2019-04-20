#!/bin/bash

if [ "$1" = "--without-cleancss" ]; then
	echo "Building without CleanCSS..."
	lessc less/agility-design.less css/agility-design.min.css
else
	echo "Building with CleanCSS..."
	lessc less/agility-design.less --clean-css="--s1 --advanced --compatibility=ie8" css/agility-design.min.css
fi
echo "Done."
