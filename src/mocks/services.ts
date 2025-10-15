import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'business-name',
    name: 'Business Name Registration',
    description: 'Register your business name with CAC. Perfect for sole proprietors and small businesses.',
    price: 30000,
    duration: '5-10 minutes',
    icon: 'Briefcase',
  },
  {
    id: 'llc',
    name: 'Limited Liability Company',
    description: 'Incorporate your business as an LLC. Protect your personal assets with limited liability.',
    price: 60000,
    duration: '3-5 days',
    icon: 'Building2',
  },
  {
    id: 'ngo',
    name: 'NGO/Club',
    description: 'Register your non-profit organization or trust with CAC.',
    price: 140000,
    duration: '6 weeks',
    icon: 'Heart',
  },
  {
    id: 'trademark',
    name: 'Trademark Registration',
    description: 'Protect your brand identity with trademark registration.',
    price: 120000,
    duration: '6 weeks',
    icon: 'Shield',
  },
  {
    id: 'annual-returns',
    name: 'Annual Returns Filing',
    description: 'Stay compliant with CAC by filing your annual returns on time.',
    price: "Price Varies",
    duration: '2-3 business days',
    icon: 'FileText',
  },
  {
    id: 'change-of-name',
    name: 'Change of Company Name',
    description: 'Update your registered company name with CAC.',
    price: 25000,
    duration: '5-7 business days',
    icon: 'Edit',
  },
];
