import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder){
  }

  ngOnInit(){
    this.initializeSignUpForm();  
  }

  initializeSignUpForm(){
    this.signUpForm=this.fb.group({
      name : ['',Validators.required],
      email : ['',Validators.required],
      password : ['', Validators.required],
      confirmPassword:['',Validators.required]

    })
  }

  onFormSubmit(){
    localStorage.setItem('cred',JSON.stringify(this.signUpForm))
  }


}
