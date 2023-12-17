import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { FaqsComponent } from '../../components/faqs/faqs.component';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'sosinc-about',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, CtaComponent, FaqsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
