var cluster = require('cluster'),
    http    = require('http'),
    os      = require('os'),
    logger  = require('./lib/logger'),
    server  = require('./lib/server');

if (cluster.isWorker) {
  return server();
}
for (var i = 0; i < os.cpus().length; i++) {
  cluster.fork();
}

cluster.on('exit', function (worker, code) {
  logger.error('Worker %s died with code %s', worker.process.pid, code);
  cluster.fork();
});

process.on('uncaughtException', function (err) {
  logger.fatal(err);
  process.exit(err);
});