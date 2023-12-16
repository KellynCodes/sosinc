import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'sosinc-no-item-found',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './no-item-found.component.html',
})
export class NoItemFoundComponent {
  @Input({ required: true })
  navigationLink: string = '';
  @Input({ required: true })
  buttonLabel: string = '';
  @Input({ required: true })
  message: string = '';
}
