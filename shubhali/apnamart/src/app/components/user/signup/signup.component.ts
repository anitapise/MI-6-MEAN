import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  regiForm: FormGroup;
  FirstName: string = '';
  LastName: string = '';
  City: string = '';
  DOB: Date = null;
  Gender: string = '';
  Email: string = '';
  Pass: string = '';
  IsAccepted: number = 0;
  constructor(private fb: FormBuilder, private router: Router) {
    this.regiForm = fb.group({
      FirstName: [null, Validators.required],
      LastName: [null, Validators.required],
      City: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ]),
      ],
      Pass: [null, Validators.required],
      DOB: [null, Validators.required],
      Gender: [null, Validators.required],
      Email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      IsAccepted: [null],
    });
  }
  onChange(event: any) {
    if (event.checked == true) {
      this.IsAccepted = 1;
    } else {
      this.IsAccepted = 0;
    }
  }
  onFormSubmit(form: NgForm) {
    console.log(form);
     this.router.navigate(['/login'])
  }
}
