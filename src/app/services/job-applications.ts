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

  public addApplication(app: JobApplication){
    this.applications.update(apps=> [...apps,app])
  }
  
}
