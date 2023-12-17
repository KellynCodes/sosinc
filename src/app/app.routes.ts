import { Routes } from '@angular/router';
import {
  AboutComponent,
  AppointmentComponent,
  ContactComponent,
  HomeComponent,
  ServiceComponent,
  ServicesComponent,
} from './pages';
import { NotfoundComponent } from './components';
export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About Us' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us' },
  { path: 'services', component: ServicesComponent, title: 'Services' },
  { path: 'services/:name', component: ServiceComponent },
  {
    path: 'appointment',
    component: AppointmentComponent,
    title: 'Appointment',
  },
  { path: 'not-found', component: NotfoundComponent, title: 'Page not found' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
