import { FaqDto } from './faq';

export interface ServiceDto {
  id: string;
  name: string;
  desc: string;
  title: string;
  subTitle: string;
  detailedDescription?: string;
  image: string;
  faqs?: FaqDto[];
}
