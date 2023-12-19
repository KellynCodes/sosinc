import { Component, signal } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderSettings } from '../../../libs/data/slick.slider.setting';
import { TestimonialDto } from '../../../libs/types';
import { Testimonials } from '../../../libs/data/testimonials.data';

@Component({
  selector: 'sosinc-testimonials',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  sliderConfig = SliderSettings;
  slides = signal<TestimonialDto[]>(Testimonials);
}
