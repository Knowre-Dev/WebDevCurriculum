const path = require('path');

exports.getAssetPath = (...args) => path.posix.join('static', ...args);

exports.resolve = (...args) => path.posix.join(process.cwd(), ...args);
