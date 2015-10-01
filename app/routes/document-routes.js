(function() {
  'use strict';

  var RouterFactory = require('node-express-crud-router').RouterFactory;

  var documentModel = require('../models/document-model.js');



  // Create the crud router
  module.exports = RouterFactory.create({
    path: "documents",
    model: documentModel
  });

}());
