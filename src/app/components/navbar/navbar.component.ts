import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'sosinc-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  IsOpen: boolean = false;

  toggle(): void {
    this.IsOpen = !this.IsOpen;
  }
}
