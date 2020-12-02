/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = {
  paths(paths) {
    paths.appIndexJs = path.resolve(__dirname, 'client/index.js');
    paths.appSrc = path.resolve(__dirname, 'client');
    return paths;
  }
};
