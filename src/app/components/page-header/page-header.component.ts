import { Component, Input } from '@angular/core';

@Component({
  selector: 'sosinc-page-header',
  standalone: true,
  imports: [],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  @Input({ required: true }) pageTitle: string = '';
  @Input({ required: true }) page: string = '';
}
