export interface RentalPrice {
  label: string;
  minDays: number;
  maxDays?: number;
  pricePerDay: number;
}

export interface Motorcycle {
  id: number;
  slug: string;
  name: string;
  cc: string;
  transmission: string;
  seats: number;
  description: string;
  image: string;
  pricing: RentalPrice[];
}
