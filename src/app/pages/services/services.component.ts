import { Component } from '@angular/core';
import { GenericServiceComponent } from '../../components';

@Component({
  selector: 'sosinc-services',
  standalone: true,
  imports: [GenericServiceComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {}
