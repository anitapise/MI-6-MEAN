import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Welcome in angular';
  checkingif=false;
  btnclick(){
    alert("you clicked me");
  }

  isvalid:boolean=true;
  changevalue(valid){
    this.isvalid=valid;
  }

  public choose='';
  setvalue(drp:any)
  {
    this.choose=drp.target.value;
  }

  Students:any[]=[{
    'name':'ajay'
  },
  {
    'name':'akash'
  }

];

Students1:any[];
constructor(){
  this.Students1=[
    {
      studentid:1,
      name:'ajay',

    },

    {
      studentid:2,
      name:'akash',
      
    },

    {
      studentid:3,
      name:'sonali',
      
    },

    {
      studentid:4,
      name:'rupali',
      
    }
  ];
}

getmorestudents():void{
  this.Students1=[
    {
      studentid:1,
      name:'ajay',

    },

    {
      studentid:2,
      name:'ajay',
      
    },

    {
      studentid:3,
      name:'ajay',
      
    },

    {
      studentid:4,
      name:'ajay',
      
    },
    {
      studentid:5,
      name:'ajay'
    }
  ];
}

trackbystudentid(index:number,student:any):string{
  return student.studentid;
}

showing =true;
showswitchstatement='three';

users=[
  {  id :1 ,name:'ajay'},
  {  id :2 ,name:'akash'},

  { id:3,name:'sonali'},

  { id:4,name:'rupali'}


];
colorval='blue';
colorval1='#add';

subtitle='welcome in interpolation';

user= {
  userid : 101,
  username:'ajay',
  DOB: 7/19/2020,
  salary:500000,
}
}
