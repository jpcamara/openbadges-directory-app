var express = require('express'),
    logger  = require('./logger'),
    app     = express();

module.exports = function () {
  app.use(express.static(__dirname + '/../public'));

  app.listen(process.env.PORT || 3500);
  logger.info('Server started');
};