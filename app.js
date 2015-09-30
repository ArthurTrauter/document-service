var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var userSchema = new Schema({
  name:  String,
  vname: String
});

var userModel = mongoose.model("user", userSchema);



// Create the crud router
var RouterFactory = require('node-express-crud-router').RouterFactory;
var userRouter = RouterFactory.create({
  path: "users",
  model: userModel
});


// Add router to your express app
var app = require('express')();
app.use("/api", userRouter);


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
