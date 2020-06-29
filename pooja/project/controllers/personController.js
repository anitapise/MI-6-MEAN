const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Person = mongoose.model('Person');
router.get('/', (req, res) => {
    res.render("person/list", {
        viewTitle: "Insert Person"
    });
});
router.post('/', (req, res) => {
    if (req.body._id == ''){     
        insertRecord(req, res);
    }
    else{
        console.log(req.body._id);
        updateRecord(req, res);
    }
 });
router.post('/list', (req, res) => {
    if (req.body._id == ''){
        insertRecord(req, res);
    }
    else
    {
        console.log(req.body._id);
        updateRecord(req, res);
    }
});
function insertRecord(req, res) {
    var person = new Person();
    person.first_name = req.body.first_name;
    person.last_name = req.body.last_name;
    person.address = req.body.address;
    person.gender = req.body.gender;
    person.dateOfBirth=req.body.dob;
    person.save((err, doc) => {
        if (!err)
            res.redirect('person/list');
        else {
                res.render("person/list", {
                    viewTitle: "Insert Person",
                    person: req.body
                });
            }
            
    });
}
function updateRecord(req, res) {  
    var str=req.body._id;
    var st=str.pop();
    console.log(st);
    console.log(req.body._id);
    Person.updateOne({ '_id': str }, req.body, { new: true }, (err, doc) => {
        if (!err) {
                res.redirect('/person/list'); 
                console.log(req.body);         
           }
        else {
               console.log(err);
                res.render("person/list", {
                    person: req.body
                });
            } 
    }); 
}
router.get('/list', (req, res) => {
    Person.find((err, docs) => {
        console.log(docs);
        if (!err) {
            res.render("person/list", {
                list: docs
            });
        }
        else {  
               console.log('Error in retrieving Person list :' + err);
        }
    });
});
router.get('/delete/:id',(req, res) => {
    Person.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/person/list');
        }
        else { console.log('Error in Person delete :' + err); }
    });
});
module.exports = router;

