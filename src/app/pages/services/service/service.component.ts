import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceDto } from '../../../../libs/types';
import { ServiceData } from '../../../../libs/data';
import { MaterialModule } from '../../../../design/material.module';
import {
  ButtonComponent,
  CtaComponent,
  NoItemFoundComponent,
  PageHeaderComponent,
} from '../../../components';

@Component({
  selector: 'sosinc-service',
  standalone: true,
  imports: [
    MaterialModule,
    NoItemFoundComponent,
    CtaComponent,
    ButtonComponent,
    PageHeaderComponent,
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent {
  serviceId!: string;
  service: ServiceDto | null = null;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.serviceId = this.router.snapshot.params['name'];
    if (this.serviceId) {
      ServiceData.filter((x) => x.id == this.serviceId).map((service) => {
        this.service = service;
      });
    }
  }
}
