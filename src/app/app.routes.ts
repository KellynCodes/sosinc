import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, title: 'About Us' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us' },
  { path: 'services', component: ServicesComponent, title: 'Services' },
  {
    path: 'appointment',
    component: AppointmentComponent,
    title: 'Appointment',
  },
  { path: 'not-found', component: NotfoundComponent, title: 'Page not found' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
