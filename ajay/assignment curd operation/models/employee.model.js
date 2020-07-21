const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'This field is required.'
    },
    lastName: {
        type: String
    },
    address: {
        type: String
    },
    gender: {
        type: String
    },
    dateOfBirth:
    {
        type:String
    }
  

});
mongoose.model('Employee', employeeSchema);