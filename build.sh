#!/bin/sh

lessc less/agility-design.less \
	      --clean-css="--s1 --advanced --compatibility=ie8" \
	      css/agility-design.min.css
