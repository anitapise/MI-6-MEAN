import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user',
  template: `
    <div class="wrapper">
      <div id="formContent">
        <h2 class="underlineHover" [routerLink]="'/login'" routerLinkActive="active">
          Sign In /
        </h2>
        <h2 class="underlineHover" [routerLink]="'/signup'" routerLinkActive="active">
          Sign Up
        </h2>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./user.css'],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
