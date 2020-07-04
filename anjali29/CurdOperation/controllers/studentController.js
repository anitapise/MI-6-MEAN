const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Student = mongoose.model('Student');
router.get('/', (req, res) => {
    res.render("student/list", {
        viewTitle: "Insert Student"
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
 router.post('student/list', (req, res) => {
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
    var student = new Student();
    student.first_name = req.body.first_name;
   student.last_name = req.body.last_name;
    student.address = req.body.address;
   student.gender = req.body.gender;
    student.dateOfBirth=req.body.dob;
    student.save((err, doc) => {
        if (!err)
            res.redirect('student/list');
        else {
                res.render("student/list", {
                    viewTitle: "Insert student",
                    student: req.body
                });
            }

    });
}
function updateRecord(req, res) {  
    var str=req.body._id;
    var st=str.pop();
    console.log(st);
    console.log(req.body._id);
    Student.updateOne({ '_id': str }, req.body, { new: true }, (err, doc) => {
        if (!err) {
                res.redirect('student/list'); 
                console.log(req.body);         
           }
        else {
               console.log(err);
                res.render("student/list", {
                    student: req.body
                });
            } 
    }); 
}
router.get('/list', (req, res) => {
    Student.find((err, docs) => {
        console.log(docs);
        if (!err) {
            res.render("student/list", {
                list: docs
            });
        }
        else {  
               console.log('Error in retrieving student list :' + err);
        }
    });
});
router.get('/delete/:id',(req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/student/list');
        }
        else { console.log('Error in student delete :' + err); }
    });
});
module.exports = router;
