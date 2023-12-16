import { Component } from '@angular/core';
import { GenericServiceComponent } from '../../components/generic-service/generic-service.component';

@Component({
  selector: 'sosinc-services',
  standalone: true,
  imports: [GenericServiceComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {}
