import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderSettings } from '../../../libs/data/slick.slider.setting';

@Component({
  selector: 'sosinc-testimonials',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  sliderConfig = SliderSettings;
  ngOnInit(): void {
    console.log(this.sliderConfig);
  }
}
