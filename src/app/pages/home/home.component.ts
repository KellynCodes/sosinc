import { CtaComponent } from './../../components/cta/cta.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { ServicesComponent } from '../services/services.component';
import { FaqsComponent } from '../../components/faqs/faqs.component';

@Component({
  selector: 'sosinc-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    CtaComponent,
    FaqsComponent,
    ServicesComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
