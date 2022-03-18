#! /bin/sh
set -ex
mkdir temp_web
npm run deploy:build
cd temp_web
git clone --depth 1 -b gh-pages --single-branch https://github.com/joshualzb-jstk/lz-component-b && cd components

# build sub folder
SUB_FOLDER='2.15'
mkdir -p $SUB_FOLDER
rm -rf *.js *.css *.map static
rm -rf $SUB_FOLDER/**
cp -rf ../../examples/lz-component-b/** .
cp -rf ../../examples/lz-component-b/** $SUB_FOLDER/
cd ../..

# deploy domestic site
faas deploy daily -P components
rm -rf temp_web
