export interface Room {
  id: string;
  name: string;
  price: number;
  capacity: string;
  capacityCount: number;
  description: string;
  highlights: string[];
  imageUrl: string;
}

export interface Activity {
  id: string;
  title: string;
  description?: string;
  image: string;
  timing?: string;
  price?: string;
}

export interface Enquiry {
  id?: string;
  name: string;
  phone: string;
  roomType: string;
  checkInDate: string;
  checkOutDate: string;
  message?: string;
  created_at?: string;
}

export type Tab = "home" | "rooms" | "activities" | "gallery" | "contact";
