import { Component, Input, booleanAttribute } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ServiceData } from '../../../libs/data';
import { ServiceDto } from '../../../libs/types';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'sosinc-generic-service',
  standalone: true,
  imports: [ButtonComponent, PageHeaderComponent],

  templateUrl: './generic-service.component.html',
  styleUrl: './generic-service.component.scss',
})
export class GenericServiceComponent {
  @Input({ required: true, transform: booleanAttribute })
  useHeaderView: boolean = false;
  @Input({ required: false }) additionalClass: string = '';
  services: ServiceDto[] = ServiceData;
}
