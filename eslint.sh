echo "copying eslint config to directory `pwd`"
node [PATH_TO_INDEX.JS] `pwd`
npm install \
  eslint \
  eslint-config-prettier \
  eslint-plugin-prettier \
  prettier \
  --save-dev
