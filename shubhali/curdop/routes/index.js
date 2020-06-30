var express = require('express');
var router = express.Router();
var empModel = require('../modules/employee');
var employee = empModel.find({});
router.get('/', function(req, res, next) {
  employee.exec(function(err, data) {
    if(err) throw err;
    res.render('index', { title: 'Employee Records', records:data });
  })
});
router.post('/', function(req, res, next) {
  var empDetails = new empModel({
    name: req.body.uname,
    email: req.body.email,
    lastname: req.body.lastname,
    phone: req.body.phone,
    field: req.body.field,
    city: req.body.city,
  });
  empDetails.save(function(err, req1) {
    if(err) throw err;
    employee.exec(function(err, data) {
      if(err) throw err;
      res.render('index', { title: 'Employee Records', records: data, success:'Record Inserted Successfully' });
    });
  })
});
router.get('/delete/:id', function(req, res, next){
  var id = req.params.id;
  var del = empModel.findByIdAndDelete(id);
  del.exec(function(err){
    if(err) throw err;
    res.redirect('/');
  });
});
router.get('/edit/:id', function(req, res, next) {
  var id = req.params.id;
  var updatevalue = empModel.findById(id);
  updatevalue.exec(function(err,data) {
    if(err) throw err;
    res.render('edit', { title: ' Edit employee Records', records:data, success:'Record Inserted Successfully' });
  });
})
router.post('/update/',function(req, res, next) {
  var update = empModel.findByIdAndUpdate(req.body.id, {
    name: req.body.uname,
    email: req.body.email,
    lastname: req.body.lastname,
    phone: req.body.phone,
    field: req.body.field,
    city: req.body.city,
  });
  update.exec(function(err, data) {
    if(err) throw err;
    res.redirect('/');
  });
})
module.exports = router;
