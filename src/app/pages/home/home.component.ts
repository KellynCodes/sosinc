import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CtaComponent,
  FaqsComponent,
  GenericServiceComponent,
  TestimonialsComponent,
} from '../../components';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'sosinc-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    CtaComponent,
    FaqsComponent,
    GenericServiceComponent,
    TestimonialsComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
