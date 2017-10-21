'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

// starts default express.js application containing jsreport studio and api
require('jsreport')(
  {
    httpPort: 2000,
    'blobStorage': 'fileSystem',
    'connectionString': {'name': 'fs'},
    'scripts': {
      'allowedModules': ['http'],
    },
    'authentication': {
      'cookieSession': {
        'secret': 'dasd321as56d1sd5s61vdv32',
      },
      'admin': {
        'username': 'admin',
        'password': 'password',
      },
    },
    'studio': {
      'entityTreeOrder': ['templates', 'data', 'scripts', 'assets', 'images'],
    },
  }
).init();

