const fse = require('fs-extra');
const _ = require('lodash');
const path = require('path');

const packageJson = require('../package.json');

if (process.env.CI_BUILD_REF_NAME.match(/.*-release$/i) || process.env.CI_BUILD_REF_NAME.match(/.*-beta_[0-9]$/i)) {
  packageJson.version = process.env.CI_BUILD_REF_NAME.replace(/-RELEASE/i, '').replace(/-beta_/i, '-beta.');
} else {
  packageJson.name = '@' + process.env.GITLAB_USER_EMAIL.split('@')[0] + '/' + packageJson.name;
}

console.log('packageJson: ', packageJson);
console.log('__dirname: ', __dirname);

const newPackage = path.join(__dirname, '../', 'deploy', 'package.json');
console.log('newPackage: ', newPackage);

fse.writeFileSync(newPackage, JSON.stringify(packageJson, undefined, 4));
