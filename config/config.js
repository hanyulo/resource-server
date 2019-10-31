const ENV_CONSTANTS = require('../constants/env');

module.exports = Object.freeze({
  nodeEnv: process.NODE_ENV || ENV_CONSTANTS.DEVELOPMENT,
  origin: process.NODE_ENV === ENV_CONSTANTS.PRODUCTION ? 'https://url-shortener-back.appspot.com' : 'http://localhost:8080'
});