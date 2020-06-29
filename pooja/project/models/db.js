const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/PersonsDb', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});
require('./person.model');
