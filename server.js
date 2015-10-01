(function() {
  'use strict';

  var bodyParser = require('body-parser');
  var methodOverride = require('method-override');
  var mongoose = require('mongoose');

  var documentRouter = require('./app/routes/document-routes.js');


  mongoose.connect('mongodb://localhost/test');



  // Add router to your express app
  var app = require('express')();

  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use("/api", documentRouter);


  var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

  });


}());
