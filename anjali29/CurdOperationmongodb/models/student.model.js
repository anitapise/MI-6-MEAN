const mongoose = require('mongoose');
var studentSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: 'This field is required.'
    },
    last_name: {
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
        type:Date
    }
});
mongoose.model('Student', studentSchema); 
