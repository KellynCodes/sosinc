import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ServiceDto } from '../../../libs/types';
import { ServiceData } from '../../../libs/data';

@Component({
  selector: 'sosinc-services',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services: ServiceDto[] = ServiceData;
}
