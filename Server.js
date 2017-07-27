var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000;
  var path = require('path');
  mongoose = require('mongoose'),
  Task = require('./models/todoModel'),
  bodyParser = require('body-parser');

  // mongoose.Promise = global.Promise;
  // mongoose.connect('mongodb://localhost:27017/tododb'); 
  var promise = mongoose.connect('mongodb://localhost:27017/tododb', {
  useMongoClient: true,
});
promise.then(function(db) {
     console.log("MongoDB Connection Established");
});
// bodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var index = require('./routes/index');
var tasks = require('./routes/tasks');
// var routes = require('./api/routes/todoRoutes');
// routes(app);
  // View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Static folder
app.use(express.static(path.join(__dirname, 'client')));

app.use('/', index);
app.use('/api', tasks);

app.listen(port);

//    //Middleware
app.use(function(req, res) {
  // redirect and respond whenever a wrong route is entered 
  res.status(404).send({url: req.originalUrl + ' not found'});
});

console.log('todo list RESTful API server started on: ' + port);