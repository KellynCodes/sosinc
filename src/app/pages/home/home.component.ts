import { CtaComponent } from './../../components/cta/cta.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'sosinc-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, CtaComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
