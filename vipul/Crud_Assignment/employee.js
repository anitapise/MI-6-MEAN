var express =require('express');
var app = express();
var mongoose = require('mongoose');
// make a connection
mongoose.connect('mongodb://localhost:27017/Employee', {useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false});
// get reference to database
var db = mongoose.connection;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connection Successful!");
});

// define Schema
var employeeSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    address: String,
    dob: String
});  
// compile schema to model
var employeeModel = mongoose.model('Employee', employeeSchema);

// set ejs as templating engine
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  employeeModel.find({}, function (err, docs) {
    if (!err) {
      // console.log(docs);
      res.render('employee', {values:docs});
    } else {
      onErr(err, callback);
    }
  });
});
// add details
app.get('/addEmployee', function(req, res) {
  res.render('addEmployee');
 });
app.post('/add', function(req, res, next) {
    var employModel = new employeeModel({
      firstName: req.body.fname,
      lastName: req.body.lname,
      gender: req.body.gender,
      address: req.body.address,
      dob: req.body.dob
    });
  console.log(employeeModel);
  // save records to the collection 
    employModel.save(function (err, employModel) {
    if (err) return console.error(err); 
    employeeModel.find({}, function (err, docs) {
      if (!err) {
        // console.log(docs);
        res.render('employee', {values:docs});
      } else {
        onErr(err, callback);
      }
    });
  });
});

//edit details
app.get('/editEmployee/:id', (req, res) => {
  employeeModel.findById(req.params.id, (err, doc) => {
      if (!err) {
          res.render("editEmployee", {
              values: doc
          });
      }
  });
});

//update
app.post('/edit', function(req, res, next) {
employeeModel.findOneAndUpdate(
  { _id: req.body._id, },
  { 
    firstName: req.body.fname,
    lastName: req.body.lname,
    gender: req.body.gender,
    address: req.body.address,
    dob: req.body.dob
    },{ new: true },    
).then(result => {
  res.writeHead(302, { "Location": "http://localhost:8080/"});
      return res.end();
  });
});

app.get('/delete/:id', function(req, res)  {
  employeeModel.findByIdAndRemove(req.params.id, function (err, docs) {
    if (!err) {
      console.log(docs);
      res.writeHead(302, { "Location": "http://localhost:8080/"});
      return res.end();
    } 
  });
});

app.listen(8080,function(){
    console.log('Listening on port 8080...' );
  });