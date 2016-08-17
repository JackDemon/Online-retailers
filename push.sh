#!/bin/sh
git pull o master
git add .
git commit -am "$1"
git push o master