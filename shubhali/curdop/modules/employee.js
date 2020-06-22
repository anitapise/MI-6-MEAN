const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/mydb',
{useNewUrlParser:true});
mongoose.Collection;
 
var employeeSchema =new mongoose.Schema({
 name: String,
 lastname:String,
 email: String,
 phone: Number,
 field: String,
 city: String,
});
 
var employeeModel = mongoose.model('Employee', employeeSchema);
module.exports=employeeModel;