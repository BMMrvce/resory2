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
      "Air conditioned rooms (A/C)",
      "Smart TV",
      "WiFi Available",
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
    description:
      "Perfect for couples looking for a peaceful getaway and Candle night dinner.",
    highlights: [
      "AC Couple Room",
      "WiFi Available",
      "Greenery View",
      "Peaceful Ambience",
      "Attached Balcony",
    ],
    imageUrl: getRoomImage("standard"),
  },
  {
    id: "aframe",
    name: "Lavish Mini A-Frame",
    price: 2299,
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
      "WiFi Available",
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
    description:
      "Ideal for Families , large group getaways and corporate retreats.",
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
      "WiFi Available",
      "Outdoor Nature Feel",
      "Bonfire Access",
    ],
    imageUrl: getRoomImage("camping"),
  },
];

// Dynamically import all images from the gallery folder
const galleryImages = import.meta.glob<string>(
  "../assets/gallery/*.{jpg,jpeg,png,gif,webp}",
  { as: "url", eager: true },
);

// Generate gallery images dynamically based on available images
export const GALLERY_IMAGES: string[] = Object.values(galleryImages);
