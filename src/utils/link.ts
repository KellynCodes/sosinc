export interface LinkDto {
  id: number;
  url: string;
  linkText: string;
  activeClass?: string;
  type?: LinkType;
}

export enum LinkType {
  RouterLink = 1,
  href,
}

export const ImportantLinks: LinkDto[] = [
  {
    id: 1,
    url: '/',
    linkText: 'Home',
    activeClass: 'text-secondary',
    type: LinkType.RouterLink,
  },
  {
    id: 2,
    url: '/about',
    linkText: 'About',
    activeClass: 'text-secondary',
    type: LinkType.RouterLink,
  },
  {
    id: 3,
    url: '/contact',
    linkText: 'Contact',
    activeClass: 'text-secondary',
    type: LinkType.RouterLink,
  },
  {
    id: 4,
    url: '/appointment',
    linkText: 'Appointment',
    activeClass: 'text-secondary',
    type: LinkType.RouterLink,
  },
  {
    id: 5,
    url: 'https://maps.app.goo.gl/c8ghPzKvT5FxjL1c8',
    linkText: 'Location',
    activeClass: 'text-secondary',
    type: LinkType.href,
  },
];

export const ContactLinks: LinkDto[] = [
  {
    id: 1,
    url: 'tel:+707-633-9805',
    type: LinkType.href,
    linkText: 'Call: (707)-633-9805',
  },
  {
    id: 2,
    type: LinkType.href,
    url: 'mailto:info@specializedorthosurgeons.com',
    linkText: 'Email: info@specializedorthosurgeons.com',
  },
  {
    id: 3,
    type: LinkType.href,
    url: 'https://maps.app.goo.gl/c8ghPzKvT5FxjL1c8',
    linkText:
      'Specialized Orthopedic Surgeons, Inc. 1010 Nut Tree Road, Vacaville, CA, 95687',
  },
  {
    id: 4,
    type: LinkType.RouterLink,
    url: '',
    linkText: 'America',
  },
];
