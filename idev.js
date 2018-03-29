let runUi = require('./runUi');

if (runUi.md5Check()) {
    runUi.npmCmd('npm run dev');
} else {
    runUi.npmCmd('npm run dll && npm run dev');
}