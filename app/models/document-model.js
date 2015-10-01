(function() {
  'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;


  var documentSchema = new Schema({
    did:  String,
    path: String,
    lastversion: String,
    versions: [
       {
          vnr:  String,
          file: String,
          mime: String,
          crc:  String,
          lastupdate: Date
       }]
  });


  module.exports = mongoose.model('documents', documentSchema);

}());
