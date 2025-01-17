import { Sushi } from '@/types';

export const sushiData: Sushi[] = [
  {
    id: 1,
    name: 'Salmon Nigiri',
    description: 'Fresh salmon on hand-pressed rice',
    price: 5.99,
    image: '/images/salmon-nigiri.jpg',
    category: 'nigiri',
  },
  {
    id: 2,
    name: 'Spicy Tuna Roll',
    description: 'Tuna, spicy mayo, cucumber',
    price: 8.99,
    image: '/images/spicy-tuna.jpg',
    category: 'maki',
    isSpicy: true,
  },
  // Add more sushi items as needed
];
