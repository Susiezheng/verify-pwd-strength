let runUi = require('./runUi');

if (runUi.md5Check()) {
    runUi.npmCmd('npm run build');
} else {
    runUi.npmCmd('npm run dll && npm run build');
}