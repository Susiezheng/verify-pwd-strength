#!/bin/bash
echo "current directory:`pwd`"
alias tar='tar --no-same-owne'
scp download@download.yfb.sunline.cn:${CI_PROJECT_NAME}/node_modules.tar.gz node_modules.tar.gz
tar zxf ./node_modules.tar.gz
scp download@download.yfb.sunline.cn:${CI_PROJECT_NAME}/package.json.md5 package.json.md5
md5sum -c package.json.md5
if [ "$?" != "0" ];then
# npm install --production
npm install
tar zcf ./node_modules.tar.gz ./node_modules
scp -r node_modules.tar.gz download@download.yfb.sunline.cn:${CI_PROJECT_NAME}/node_modules.tar.gz
fi