var express =require('express');
var app = express();
const router = express.Router();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// make a connection
mongoose.connect('mongodb://localhost:27017/Person', {useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false});
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
var personSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNo : Number,
    address: String,
});  
// compile schema to model
var personModel = mongoose.model('Person', personSchema);

// set ejs as templating engine
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  personModel.find({}, function (err, docs) {
    if (!err) {
      // console.log(docs);
      res.render('person', {values:docs});
    } else {
      onErr(err, callback);
    }
  });
});

// add details
app.get('/addPerson', function(req, res) {
  res.render('addPerson');
 });
app.post('/add', function(req, res, next) {
    var persoModel = new personModel({
      firstName: req.body.fname,
      lastName: req.body.lname,
      phoneNo: req.body.phone,
      address: req.body.address,

    });
  console.log(personModel);
  // save records to the collection 
    persoModel.save(function (err, persoModel) {
    if (err) return console.error(err); 
    personModel.find({}, function (err, docs) {
      if (!err) {
        // console.log(docs);
        res.render('person', {values:docs});
      } else {
        onErr(err, callback);
      }
    });
  });
});

//edit details
app.get('/editPerson/:id', (req, res) => {
  personModel.findById(req.params.id, (err, doc) => {
      if (!err) {
          res.render("editPerson", {
              values: doc
          });
      }
  });
});

//update
app.post('/edit', function(req, res, next) {
personModel.findOneAndUpdate(
  { _id: req.body._id, },
  { 
    firstName: req.body.fname,
    lastName: req.body.lname,
    phoneNo: req.body.phone,
    address: req.body.address,
    },{ new: true },    
).then(result => {
  res.writeHead(302, {"Location": "http://localhost:8080/"});
      return res.end();
  });
});

app.get('/delete/:id', function(req, res)  {
  personModel.findByIdAndRemove(req.params.id, function (err, docs) {
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
