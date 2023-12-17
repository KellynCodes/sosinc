import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CtaComponent,
  FaqsComponent,
  PageHeaderComponent,
} from '../../components';

@Component({
  selector: 'sosinc-about',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, CtaComponent, FaqsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
