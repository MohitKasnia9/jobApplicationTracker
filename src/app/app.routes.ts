import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { CreateApplication } from './components/create-application/create-application';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';

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
},
{
    path: 'login',
    pathMatch: 'full',
    component: Login
},
{
    path: 'signup',
    pathMatch: 'full',
    component: Signup
}



];
