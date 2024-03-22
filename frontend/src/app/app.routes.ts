import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ShowsComponent } from './components/shows/shows.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent, children: [
        {path: '', redirectTo: 'HOME', pathMatch: 'full'},
        {path: 'HOME', component: HomeComponent},
        {path: 'SPETTACOLI', component: ShowsComponent},
        {path: 'CHI SIAMO', component: AboutComponent},
        {path: 'CONTATTACI', component: ContactsComponent},
        {path: 'PROFILO', component: ProfileComponent},
    ]},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'about', component: AboutComponent},
    {path: 'shows', component: ShowsComponent},
    {path: 'profile', component: ProfileComponent},
];
