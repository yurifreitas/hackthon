#!/bin/bash

cd client
if [ ! -d "./node_modules" ]; then
  npm install
fi
if [ ! -d "./build" ]; then
  npm run-script build
fi

cd ../server
if [ -x "$(command -v pip3)" ]; then # if pip3 executable exists in PATH
  pip3 install --editable .
else
  pip install --editable .
fi
export FLASK_APP=server
export FLASK_DEBUG=true
flask run
