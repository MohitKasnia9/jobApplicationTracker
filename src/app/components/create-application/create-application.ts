import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl, Validator, FormBuilder } from '@angular/forms';
import { validate } from '@angular/forms/signals';
import { JobApplication, JobApplications } from '../../services/job-applications';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-application',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './create-application.html',
  styleUrl: './create-application.scss',
})
export class CreateApplication {

  applicationForm: FormGroup;


  constructor(private fb: FormBuilder, private appService :JobApplications, private router: Router) {

  }



  intializeApplicationForm(): void {

    this.applicationForm = this.fb.group({
      companyName: ['', Validators.required],
      position: ['', Validators.required],
      location: [],
      jobLink: ['', Validators.required],
      status: ['', Validators.required],
      notes: ['']
    })

  }

  ngOnInit() {
    this.intializeApplicationForm();

  }


  onApplicationSubmit(){
    if (this.applicationForm.valid) {
      const applicationData: JobApplication = this.applicationForm.value;
      this.appService.addApplication(applicationData);
      this.applicationForm.reset();
      this.router.navigate(['/']);
    } else {
      Object.keys(this.applicationForm.controls).forEach(key => {
        this.applicationForm.get(key)?.markAsTouched();
      });
    }
  }

  
}
