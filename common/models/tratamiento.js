'use strict';
var jsreport = require('jsreport');

function getPresupuestos(tratamiento, cb) {

}

module.exports = function(Tratamiento) {

  Tratamiento.reporte = function (id, cb) {
    Tratamiento.findById(id, function (err, instance){
      console.log(instance);
      jsreport.render({
          template: {
            content: "Hello world from {{instance.nombre}}",
            engine: "handlebars",
            recipe: "html"

          },
          data: {name: "jsreport"}
        }
      ).then(function (out) {
        //pipes pdf with Hello world from JSREPORT
        out.stream.pipe(resp);
      })
    })
  };

  Tratamiento.remoteMethod('reporte', {
    description: 'Devuelve el url del reporte de jsreport',
    accessType: 'READ',
    accepts: [
      {
        arg: 'id', type: 'any', description: 'id del tratamiento', required: true,
        http: {source: 'path'}
      },
      {arg: 'options', type: 'object', http: 'optionsFromRequest'},
    ],
    returns: {arg: 'data', type: 'Model', root: true},
    http: {verb: 'get', path: '/:id/reporte'}
  });
};
