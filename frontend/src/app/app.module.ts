import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ShowsComponent } from './components/shows/shows.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    ShowsComponent,
    AboutComponent,
    ProfileComponent,
    ContactsComponent,
    BookingComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatDividerModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  providers: [],
})
export class AppModule {}
