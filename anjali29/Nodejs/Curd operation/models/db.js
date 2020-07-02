const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://anjali:anju95@cluster0-yy0u3.mongodb.net/employee?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');