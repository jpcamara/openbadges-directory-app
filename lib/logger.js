var bunyan = require('bunyan');

module.exports = bunyan.createLogger({
  name: 'directory-app',
  serializers: {
    req: bunyan.stdSerializers.req
  }
});