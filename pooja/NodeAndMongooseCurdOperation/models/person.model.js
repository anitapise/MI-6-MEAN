const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
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
        type:String
    }
});
mongoose.model('Person', userSchema);
