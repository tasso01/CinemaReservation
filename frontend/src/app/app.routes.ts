import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ShowsComponent } from './components/shows/shows.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
    {path: '', component: DashboardComponent, children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home',  component: HomeComponent},
        {path: 'shows', component: ShowsComponent},
        {path: 'booking', component: BookingComponent, canActivate: [AuthGuard] },
        {path: 'about', component: AboutComponent},
        {path: 'contactus', component: ContactsComponent},
        {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
        {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]}
    ]},
    {path: 'home', component: HomeComponent},
    {path: 'booking', component: BookingComponent, },
    {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'about', component: AboutComponent},
    {path: 'shows', component: ShowsComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'admin', component: AdminComponent}
];
