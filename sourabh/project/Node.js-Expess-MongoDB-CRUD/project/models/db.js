const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sourabh14:j3g55GaQpOKKugHJ@cluster0.nd5au.mongodb.net/employeedb?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');