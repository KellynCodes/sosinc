import { CtaComponent } from '../../components/cta/cta.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { FaqsComponent } from '../../components/faqs/faqs.component';
import { GenericServiceComponent } from '../../components/generic-service/generic-service.component';

@Component({
  selector: 'sosinc-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    CtaComponent,
    FaqsComponent,
    GenericServiceComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
