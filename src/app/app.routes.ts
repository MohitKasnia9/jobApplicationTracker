import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { CreateApplication } from './components/create-application/create-application';

export const routes: Routes = [
        {
    path: '',
    pathMatch: 'full',
    component: Dashboard  
},
{
    path: 'create',
    pathMatch: 'full',
    component: CreateApplication
}


];
