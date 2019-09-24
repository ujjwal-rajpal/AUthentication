import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from '../validator/custom-validator';
import { MustMatch } from '../validator/password-validator';

@Component({

  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
Regex_Pattern = ''
  SignUpForm = new FormGroup({
    Name: new FormControl('',[Validators.required]),

    Email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),

    Password: new FormControl('',[
      // required
      Validators.required,
      // min length
      Validators.minLength(8),
      // Max length
      Validators.maxLength(25),
      // check whether the entered password has number
      CustomValidator.Pattern_Validator(/\d/, { hasNumber: true }),
      // check whether the entered password has capital letter
      CustomValidator.Pattern_Validator(/[A-Z]/, { hasCapitalCase: true }),
      // check whether the entered password has lower-case letter
      CustomValidator.Pattern_Validator(/[a-z]/, { hasSmallCase: true }),
      // check whether the entered password has special character
      
      // CustomValidator.patternValidator()
    ]),
    // confirm password
    ConfirmPassword: new FormControl("",
    [Validators.required],
    )
  },{
  // validator:CustomValidator.matchingPasswords(Password.value,ConfirmPassword.value)
  }
  );

  // fd which control has which error

 public hasError = (controlName: string,errorName: string)=>{
    return this.SignUpForm.controls[controlName].hasError(errorName);
 }
 
  constructor() { }

  ngOnInit() {
  }

  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }
 
  ConfirmPassword(){
    console.log("Ujjwal");
  }
}
