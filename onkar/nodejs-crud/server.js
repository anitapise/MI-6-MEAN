require('./models/db');

const express =require('express');
bodyParser = require('body-parser')

const path = require('path');
const exphbs = require('express-handlebars');
const employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyParser.urlencoded({
     extended: true
}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout:'mainLayout', layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine','hbs');

app.listen(3000, () => {
     console.log('express server started port no :3000');
});

app.use('/employee', employeeController);