import { Room, Activity } from './types';

export const ROOMS: Room[] = [
  {
    id: 'villa',
    name: 'Lavish Meadow Bliss Villa',
    price: 3999,
    capacity: '6-8 People',
    capacityCount: 8,
    description: 'The ultimate luxury experience for large families or groups.',
    highlights: ['AC 4-sharing & 2-sharing rooms', '52-inch Smart TV', 'Private Swimming Pool', 'Private Lawn Area', 'Calm & Private Ambience'],
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'standard',
    name: 'Lavish Standard Stay',
    price: 3499,
    capacity: '2 People',
    capacityCount: 2,
    description: 'Perfect for couples looking for a peaceful getaway.',
    highlights: ['AC Couple Room', 'Greenery View', 'Peaceful Ambience', 'Attached Balcony'],
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'aframe',
    name: 'Lavish Mini A-Frame',
    price: 2999,
    capacity: '2 People',
    capacityCount: 2,
    description: 'A cozy, budget-friendly nature stay.',
    highlights: ['Nature Stay Setup', 'Bed Inside A-Frame', 'WiFi Available', 'Budget & Peaceful'],
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'quad',
    name: 'Lavish Quad Suite',
    price: 2799,
    capacity: '4-6 People',
    capacityCount: 6,
    description: 'Spacious accommodation for friends and small families.',
    highlights: ['Spacious Quad Room', 'AC Room', 'Nature View Windows', 'Sitting Area'],
    imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'group',
    name: 'Lavish Deluxe Group Stay',
    price: 2499,
    capacity: '12-15 People',
    capacityCount: 15,
    description: 'Ideal for large group getaways and corporate retreats.',
    highlights: ['Fully AC Dormitory', 'TV + High-speed WiFi', 'Ideal for Groups', 'Multiple Washrooms'],
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'camping',
    name: 'Lavish Camping Tent',
    price: 1799,
    capacity: '2 People',
    capacityCount: 2,
    description: 'Experience the raw beauty of nature in comfort.',
    highlights: ['Resort Camping Experience', 'Safe & Cozy Setup', 'Outdoor Nature Feel', 'Bonfire Access'],
    imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
];

// Fallback activities if Supabase is not connected
export const MOCK_ACTIVITIES: Activity[] = [
  {
    id: '1',
    title: 'Morning Nature Walk',
    description: 'Guided walking tour through the lush green trails surrounding the resort.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    timing: '6:30 AM - 8:00 AM',
    price: 'Free'
  },
  {
    id: '2',
    title: 'Swimming Pool Access',
    description: 'Relax in our infinity pool overlooking the valley.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    timing: '7:00 AM - 7:00 PM',
    price: 'Included'
  },
  {
    id: '3',
    title: 'Bonfire & Music',
    description: 'Evening gathering with music, dance, and warmth under the stars.',
    image: 'https://images.unsplash.com/photo-1517176118179-66f43697e1eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    timing: '8:00 PM - 10:30 PM',
    price: '₹500 / Group'
  },
  {
    id: '4',
    title: 'Off-Road Jeep Safari',
    description: 'Thrilling ride through the rugged terrains of the nearby forest.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    timing: 'On Request',
    price: '₹2000 / Jeep'
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1571896349842-68c47eb17998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
];