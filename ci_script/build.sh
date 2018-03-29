#!/bin/bash
echo "current directory:$(pwd)"

echo "env"
env

scp download@download.yfb.sunline.cn:"${CI_PROJECT_NAME}"/vendor.tar.gz vendor.tar.gz
tar zxf ./vendor.tar.gz
scp download@download.yfb.sunline.cn:"${CI_PROJECT_NAME}"/webpack.dll.config.js.md5 ./vendor/webpack.dll.config.js.md5
md5sum -c ./vendor/webpack.dll.config.js.md5

scp -r download@download.yfb.sunline.cn:edsp-loader-api/keys ./keys

webpack_dll_config_js=$?
md5sum -c package.json.md5
package_json_md5=$?
if [ "$webpack_dll_config_js" != "0" ] || [ "$package_json_md5" != "0" ]; then
	npm run dll
	md5sum package.json >package.json.md5
	md5sum webpack.dll.config.js >webpack.dll.config.js.md5
	tar zcf ./vendor.tar.gz ./vendor
	scp -r package.json.md5 download@download.yfb.sunline.cn:"${CI_PROJECT_NAME}"/package.json.md5
	scp -r webpack.dll.config.js.md5 download@download.yfb.sunline.cn:"${CI_PROJECT_NAME}"/webpack.dll.config.js.md5
	scp -r vendor.tar.gz download@download.yfb.sunline.cn:"${CI_PROJECT_NAME}"/vendor.tar.gz
fi
