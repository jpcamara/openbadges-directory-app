var express  = require('express'),
    nunjucks = require('nunjucks'),
    logger   = require('./logger'),
    app      = express();

module.exports = function () {
  nunjucks.configure('views', {
    autoescape: true,
    express: app,
    tags: {
      blockStart: '[[%',
      blockEnd: '%]]',
      variableStart: '[[',
      variableEnd: ']]',
      commentStart: '[[--',
      commentEnd: '--]]'
    }
  });
  app.use(express.static(__dirname + '/../public'));

  app.get('/', function(req, res) {
    res.render('index.html', {
      endpoint: process.env.ENDPOINT,
      apiKey: process.env.API_KEY
    });
  });

  app.listen(process.env.PORT || 3500);
  logger.info('Server started');
};