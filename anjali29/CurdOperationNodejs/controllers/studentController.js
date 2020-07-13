const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Student = mongoose.model('Student');

/*
router.get('/', (req, res) => {
    res.render("layouts/mainLayout", {
        viewTitle: "Insert Person"
    });
});*/
router.post('/', (req, res) => {
    if (req.body._id == ''){     
        insertRecord(req, res);
    }
    else{
       // console.log(req.body._id);
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
    var dateNew=new Date(req.body.dob);
    student.dateOfBirth=dateNew.getDate()+"/"+dateNew.getMonth()+"/"+dateNew.getFullYear();
    //console.log(student.dateOfBirth.getDate()+"/"+student.dateOfBirth.getMonth()+"/"+student.dateOfBirth.getFullYear());

       // console.log(dateNew.getDate());

    student.save((err, doc) => {
        if (!err)
            res.redirect('/');
        else {
                res.render("/", {
                    viewTitle: "Insert Student",
                    student: req.body
                });
            }

    });
}
function updateRecord(req, res) {  
    var str=req.body._id;

    Student.updateOne({ '_id': str }, req.body, { new: true }, (err, doc) => {
        if (!err) {
                res.redirect('/'); 
                console.log(req.body);         
           }
        else {
               console.log(err);
                res.render("", {
                    student: req.body
                });
            } 
    }); 
}
router.get('/', (req, res) => {
    Student.find((err, docs) => {

        if (!err) {
            res.render("student/list", {
                list: docs
            });
        }
        else {  
               console.log('Error in retrieving Student list :' + err);
        }
    });
});
router.get('/delete/:id',(req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/');
        }
        else { 
            console.log('Error in Student delete :' + err);
         }
    });
});
module.exports = router;

