#!/usr/bin/bash
echo "copying eslint config to directory `pwd`"
node ~/just_for_fun/emily-lint/index.js `pwd`
npm install \
  eslint \
  eslint-config-prettier \
  eslint-plugin-prettier \
  prettier \
  --save-dev
