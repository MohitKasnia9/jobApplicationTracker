import { Injectable } from '@angular/core';
import { signal } from '@angular/core';


export interface JobApplication{
  companyName: string,
  position: string,
  status: string,
  location: string,
  jobLink: string,
  notes: string
}

@Injectable({
  providedIn: 'root',
})
export class JobApplications {
  
  
  applications= signal<JobApplication[]>([]);
  public email: string;
  public password: string;


  public addApplication(app: JobApplication){
    this.applications.update(apps=> [...apps,app])
  }


  public signUpCred(email :string, password : string){
    this.email=email;
    this.password=password

  }

  public validCred(enteredMail: string, enteredPassword: string): boolean {
    if ( enteredMail == this.email && enteredPassword == this.password){
      return true;
    }
    return false;
  }
  
}
