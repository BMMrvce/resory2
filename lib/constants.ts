import { Room, Activity } from "./types";

// Dynamically import all images from the activities folder
const activityImages = import.meta.glob<string>(
  "../assets/activities/*.{jpg,jpeg,png,gif,webp}",
  { as: "url", eager: true },
);

// Generate activities dynamically based on available images
export const MOCK_ACTIVITIES: Activity[] = Object.entries(activityImages).map(
  ([, url], index) => ({
    id: String(index + 1),
    title: `Activity ${index + 1}`,
    image: url,
  }),
);

// Dynamically import all images from the rooms folder
const roomImages = import.meta.glob<string>(
  "../assets/rooms/*.{jpg,jpeg,png,gif,webp}",
  { as: "url", eager: true },
);

// Create a map of room images by filename (without extension)
const roomImageMap: Record<string, string> = {};
Object.entries(roomImages).forEach(([path, url]) => {
  const filename = path.split("/").pop()?.split(".")[0]; // Extract filename without extension
  if (filename) {
    roomImageMap[filename] = url;
  }
});

// Function to get room image or fallback to first available image
const getRoomImage = (roomId: string): string => {
  return (
    roomImageMap[roomId] ||
    Object.values(roomImageMap)[0] ||
    "/assets/rooms/villa.jpg"
  );
};

export const ROOMS: Room[] = [
  {
    id: "villa",
    name: "Lavish Meadow Bliss Villa",
    price: 3999,
    capacity: "6-8 People",
    capacityCount: 8,
    description: "The ultimate luxury experience for large families or groups.",
    highlights: [
      "AC 4-sharing & 2-sharing rooms",
      "52-inch Smart TV",
      "Private Swimming Pool",
      "Private Lawn Area",
      "Calm & Private Ambience",
    ],
    imageUrl: getRoomImage("villa"),
  },
  {
    id: "standard",
    name: "Lavish Standard Stay",
    price: 3499,
    capacity: "2 People",
    capacityCount: 2,
    description: "Perfect for couples looking for a peaceful getaway.",
    highlights: [
      "AC Couple Room",
      "Greenery View",
      "Peaceful Ambience",
      "Attached Balcony",
    ],
    imageUrl: getRoomImage("standard"),
  },
  {
    id: "aframe",
    name: "Lavish Mini A-Frame",
    price: 2999,
    capacity: "2 People",
    capacityCount: 2,
    description: "A cozy, budget-friendly nature stay.",
    highlights: [
      "Nature Stay Setup",
      "Bed Inside A-Frame",
      "WiFi Available",
      "Budget & Peaceful",
    ],
    imageUrl: getRoomImage("aframe"),
  },
  {
    id: "quad",
    name: "Lavish Quad Suite",
    price: 2799,
    capacity: "4-6 People",
    capacityCount: 6,
    description: "Spacious accommodation for friends and small families.",
    highlights: [
      "Spacious Quad Room",
      "AC Room",
      "Nature View Windows",
      "Sitting Area",
    ],
    imageUrl: getRoomImage("quad"),
  },
  {
    id: "group",
    name: "Lavish Deluxe Group Stay",
    price: 2499,
    capacity: "12-15 People",
    capacityCount: 15,
    description: "Ideal for large group getaways and corporate retreats.",
    highlights: [
      "Fully AC Dormitory",
      "TV + High-speed WiFi",
      "Ideal for Groups",
      "Multiple Washrooms",
    ],
    imageUrl: getRoomImage("group"),
  },
  {
    id: "camping",
    name: "Lavish Camping Tent",
    price: 1799,
    capacity: "2 People",
    capacityCount: 2,
    description: "Experience the raw beauty of nature in comfort.",
    highlights: [
      "Resort Camping Experience",
      "Safe & Cozy Setup",
      "Outdoor Nature Feel",
      "Bonfire Access",
    ],
    imageUrl: getRoomImage("camping"),
  },
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1571896349842-68c47eb17998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];
