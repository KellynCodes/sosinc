import { MassageFaqData } from './massage.faq';
import { PhysicalTherapyFaqData } from './physical-therapy.faq';
import { ServiceDto } from '../types';
import { MyOfascialFaqData } from './myoffascia.faq';
import { WomenHealthFaqData } from './women-health.faq';

export const ServiceData: ServiceDto[] = [
  {
    id: 'myofascial-release',
    title: 'REDISCOVER PAIN-FREE LIVING, NATURALLY',
    subTitle: 'DISCOVER THE BENEFITS OF MYOFASCIAL RELEASE',
    name: 'MYOFASCIAL RELEASE',
    desc: 'Myofascial release is a hands-on therapeutic technique meticulously crafted to alleviate tension within both the muscles and the fascia, spanning the entirety of the body.',
    image: '/assets/images/services/myofascial-release.jpeg',
    faqs: MyOfascialFaqData,
  },

  {
    id: 'therapeutic-massage',
    title: 'INCREASE BLOOD FLOW',
    subTitle: 'FIND RELIEF WITH THERAPEUTIC MASSAGE THERAPY',
    name: 'THERAPEUTIC MASSAGE',
    desc: 'Experience the rejuvenating touch of therapeutic massage, where skilled practitioners seamlessly blend healing techniques to promote relaxation, alleviate tension, and enhance overall well-being.',
    image: '../../assets/images/services/massage-therapy.jpg',
    faqs: MassageFaqData,
  },
  {
    id: 'women-health',
    title: 'WOMEN’S HEALTH PROGRAM',
    subTitle: 'WHERE YOU ARE OUR PRIMARY CONCERN',
    name: "WOMEN'S HEALTH",
    desc: "Our specialized approach to women's health encompasses orthopedic care tailored to address musculoskeletal issues, ensuring a holistic and patient-centered experience.",
    image: '../../assets/images/services/women-health.jpeg',
    faqs: WomenHealthFaqData,
  },
  {
    id: 'physical-therapy',
    title: 'PHYSICAL THERAPY',
    subTitle: 'INCREASE YOUR MOBILITY',
    name: 'PHYSICAL THERAPY',
    desc: 'Our expert team employs evidence-based practices to enhance your mobility, strength, and endurance, providing personalized care that focuses on restoring function and managing pain',
    image: '../../assets/images/services/physical-therapy.jpg',
    faqs: PhysicalTherapyFaqData,
  },
];
