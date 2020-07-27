import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  myimage1:string="assets/images/img1.jpg";
  myimage2:string="assets/images/img2.jpg";

  myimage3:string="assets/images/img3.jpg";


  constructor() { }

  ngOnInit(): void {
  }

}
