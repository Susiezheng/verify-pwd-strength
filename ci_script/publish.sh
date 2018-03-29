#!/bin/bash
echo "current directory:$(pwd)"
current_dir=$(pwd)

npm run deploy
node "${current_dir}"/ci_script/genPackage.js
cd ./deploy || exit
npm publish
