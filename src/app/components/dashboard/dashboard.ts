import { Component } from '@angular/core';
import { JobApplications } from '../../services/job-applications';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  constructor(private appService :JobApplications) {

  }

  public searchText: string;
  public currentApplications : any
  public currentApplicationsFiltered: any
  
  ngOnInit() {
    console.log(this.appService.applications());
    this.currentApplications= this.appService.applications();
    this.currentApplicationsFiltered = this.currentApplications;

  }

  getTotalInterviews(){
    return this.currentApplications.filter((application: any)=>application.status === 'interviewed').length;
  }

  getTotalOffers(){
    return this.currentApplications.filter((application: any) => application.status === 'offered').length;
  }

  getTotalRejected(){
    return this.currentApplications.filter((application: any) => application.status === 'rejected').length;
  }

  filterApplication(text: string){
    if (!text || text.trim() === '') {
      this.currentApplicationsFiltered = this.currentApplications;
      return;
    }
  
    this.currentApplicationsFiltered = this.currentApplications.filter(
      currentApplication => currentApplication?.companyName.toLowerCase().includes(text.toLowerCase())
    );
    
  }
}
