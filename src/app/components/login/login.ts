import { Component } from '@angular/core';
import { ReactiveFormsModule,Validators } from '@angular/forms';
import { FormGroup , FormBuilder} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JobApplications } from '../../services/job-applications';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private appService: JobApplications, private router : Router){
  }

  ngOnInit(){
    this.initializeLoginForm();  
  }

  initializeLoginForm(){
    this.loginForm=this.fb.group({
      email : ['',Validators.required],
      password : ['', Validators.required]

    })
  }

  onFormSubmit(){
    if(this.appService.validCred(this.loginForm['email'], this.loginForm['password'])){
      console.log("passedValid", this.loginForm);
      this.router.navigate(['/dashboard']);
    }else{
      console.log('invalid cred--------', this.loginForm);
    }
  }

}
