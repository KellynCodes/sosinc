import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceDto } from '../../../../libs/types';
import { ServiceData } from '../../../../libs/data';
import { MaterialModule } from '../../../../design/material.module';
import { NoItemFoundComponent } from '../../../components/no-item-found/no-item-found.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { CtaComponent } from '../../../components/cta/cta.component';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';

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
