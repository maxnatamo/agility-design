#!/bin/sh

lessc less/simplicity-design.less \
	      --clean-css="--s1 --advanced --compatibility=ie8" \
	      css/simplicity-design.min.css
