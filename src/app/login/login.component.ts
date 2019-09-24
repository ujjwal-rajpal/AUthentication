import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm = new FormGroup({
    Email: new FormControl('', [
      Validators.required,
      Validators.email,
      
    ]),
    Password: new FormControl('',[
      Validators.required
    ]),
  });

public hasError = (controlName: string, errorName: string) =>{
    return this.LoginForm.controls[controlName].hasError(errorName);
  }
  constructor() { }

  ngOnInit() {
  }

}
