'use strict';

module.exports = function (app) {
  app.get('/saludo', function (req, res) {
    res.send('Hola');
  });
};
