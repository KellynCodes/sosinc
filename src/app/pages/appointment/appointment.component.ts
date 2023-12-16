import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';

@Component({
  selector: 'sosinc-appointment',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss',
})
export class AppointmentComponent {}
