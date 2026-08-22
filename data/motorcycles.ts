import { Motorcycle } from "@/types/motorcycle";

export const motorcycles: Motorcycle[] = [
  {
    id: 1,
    slug: "honda-beat-street-110",
    name: "Honda Beat Street",
    cc: "110cc",
    transmission: "Matic",
    seats: 2,
    description:
      "Ringan, irit dan lincah untuk menemani perjalananmu menjelajahi Bali.",
    image: "/images/motorcycles/beat-street-110.png",

    pricing: [
      {
        label: "2–3 Hari",
        minDays: 2,
        maxDays: 3,
        pricePerDay: 150000,
      },
      {
        label: "4–6 Hari",
        minDays: 4,
        maxDays: 6,
        pricePerDay: 135000,
      },
      {
        label: "7+ Hari",
        minDays: 7,
        pricePerDay: 125000,
      },
      {
        label: "30+ Hari",
        minDays: 30,
        pricePerDay: 115000,
      },
    ],
  },

  {
    id: 2,
    slug: "honda-pcx-160",
    name: "Honda PCX 160",
    cc: "160cc",
    transmission: "Matic",
    seats: 2,
    description:
      "Nyaman dan bertenaga untuk perjalanan santai maupun jarak jauh di Bali.",
    image: "/images/motorcycles/pcx-160.png",

    pricing: [
      {
        label: "2–3 Hari",
        minDays: 2,
        maxDays: 3,
        pricePerDay: 180000,
      },
      {
        label: "4–6 Hari",
        minDays: 4,
        maxDays: 6,
        pricePerDay: 165000,
      },
      {
        label: "7+ Hari",
        minDays: 7,
        pricePerDay: 150000,
      },
      {
        label: "30+ Hari",
        minDays: 30,
        pricePerDay: 135000,
      },
    ],
  },
];

export function getRentalPrice(motorcycle: Motorcycle, days: number) {
  return [...motorcycle.pricing]
    .sort((a, b) => b.minDays - a.minDays)
    .find((price) => {
      const meetsMinimum = days >= price.minDays;

      const meetsMaximum = price.maxDays === undefined || days <= price.maxDays;

      return meetsMinimum && meetsMaximum;
    });
}
