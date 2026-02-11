import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { JobApplication, JobApplications } from '../../services/job-applications';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private router : Router , private appService: JobApplications){
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
    // localStorage.setItem('cred',JSON.stringify(this.signUpForm))
    console.log(this.signUpForm);
    this.appService.signUpCred(this.signUpForm['email'], this.signUpForm['password']);
    this.router.navigate(['/login']);
  }


}
