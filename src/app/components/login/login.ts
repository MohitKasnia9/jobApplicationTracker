import { Component } from '@angular/core';
import { ReactiveFormsModule,Validators } from '@angular/forms';
import { FormGroup , FormBuilder} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder){
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
    localStorage.setItem('cred',JSON.stringify(this.loginForm))
  }

}
