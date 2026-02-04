
export enum ServiceCategory {
  CLEANING = 'Cleaning',
  LAUNDRY = 'Laundry',
  COOKING = 'Cooking',
  NANNY = 'Nanny',
  ERRANDS = 'Errands'
}

export interface Service {
  id: string;
  category: ServiceCategory;
  title: string;
  description: string;
  icon: string;
  imageId?: string;
  features: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export type PricingDuration = 'Daily' | 'Weekly' | 'Monthly' | '3 Months' | '6 Months' | '1 Year';
