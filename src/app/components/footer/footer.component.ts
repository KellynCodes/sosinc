import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  ContactLinks,
  ImportantLinks,
  LinkDto,
  LinkType,
} from '../../../utils/link';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'sosinc-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  newLetterSubscriptionForm!: FormGroup;
  importantLinks = signal<Array<LinkDto>>(ImportantLinks);
  contactLinks = signal<Array<LinkDto>>(ContactLinks);
  linkType = LinkType;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.newLetterSubscriptionForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^\\+(?:[0-9] ?){6,14}[0-9]$')]],
      date: [new Date().toDateString(), Validators.required],
      department: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(100)]],
    });
  }

  onSubmit(): void {}
}
