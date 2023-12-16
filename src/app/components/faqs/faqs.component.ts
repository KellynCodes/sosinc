import { Component } from '@angular/core';
import { MaterialModule } from '../../../design/material.module';
import { FaqDto } from '../../../libs/types';
import { AboutUsFaq } from '../../../libs/data';

@Component({
  selector: 'sosinc-faqs',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
})
export class FaqsComponent {
  public faqs: FaqDto[] = AboutUsFaq;
}
