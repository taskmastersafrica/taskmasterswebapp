
import React from 'react';
import { 
  Sparkles, 
  Shirt, 
  Utensils, 
  Baby, 
  ShoppingBag, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Globe 
} from 'lucide-react';
import { Service, ServiceCategory, PricingPlan } from './types';

export const SERVICES: Service[] = [
  {
    id: 'clean-01',
    category: ServiceCategory.CLEANING,
    title: 'Cleaning Services',
    description: 'Impeccable home and office cleaning tailored to your standards of excellence.',
    icon: 'Sparkles',
    imageId: 'photo-1581578731548-c64695cc6958',
    features: ['Deep Home Cleaning', 'Office Sanitization', 'Post-Construction Cleaning']
  },
  {
    id: 'laundry-01',
    category: ServiceCategory.LAUNDRY,
    title: 'Laundry Services',
    description: 'Expert washing, precision drying, and perfect folding for your finest fabrics.',
    icon: 'Shirt',
    imageId: 'photo-1545173168-9f1947eebb7f',
    features: ['Eco-friendly Detergents', 'Delicate Fabric Care', 'Same-day Pickup']
  },
  {
    id: 'cooking-01',
    category: ServiceCategory.COOKING,
    title: 'Cooking Services',
    description: 'Nutritious, delicious, and professionally prepared meals in your own kitchen.',
    icon: 'Utensils',
    imageId: 'photo-1556910103-1c02745aae4d',
    features: ['Meal Preparation', 'Special Diet Menus', 'Kitchen Management']
  },
  {
    id: 'nanny-01',
    category: ServiceCategory.NANNY,
    title: 'Nanny Services',
    description: 'Compassionate and verified childcare support for your peace of mind.',
    icon: 'Baby',
    imageId: 'photo-1536640712247-c45474d61240',
    features: ['Certified Babysitters', 'Home Support', 'Homework Assistance']
  },
  {
    id: 'errands-01',
    category: ServiceCategory.ERRANDS,
    title: 'Errands Services',
    description: 'Efficient handling of your daily tasks so you can focus on what matters.',
    icon: 'ShoppingBag',
    imageId: 'photo-1441986300917-64674bd600d8',
    features: ['Grocery Shopping', 'Pickups & Deliveries', 'Personal Errands']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'p-ord',
    name: 'Ordinary',
    price: 'Varies',
    features: ['Basic Task Execution', 'Standard Support', 'Standard Response Time']
  },
  {
    id: 'p-sil',
    name: 'Silver',
    price: 'Call Us',
    features: ['Priority Booking', 'Verified Staff', 'Account Manager', 'Dedicated Support']
  },
  {
    id: 'p-gol',
    name: 'Gold',
    price: 'Custom',
    isPopular: true,
    features: ['All Silver Features', 'Weekend Support', 'Multi-task Discount', 'Premium Equipment']
  },
  {
    id: 'p-pre',
    name: 'Premium',
    price: 'Elite',
    features: ['24/7 Priority Support', 'Top-tier Professionals', 'Unlimited Re-dos', 'VIP Concierge']
  },
  {
    id: 'p-cus',
    name: 'Custom',
    price: 'Flexible',
    features: ['Tailored Solutions', 'Bespoke Schedules', 'Enterprise Grade', 'Direct Founder Access']
  }
];

export const ICON_MAP: Record<string, any> = {
  Sparkles: <Sparkles className="w-8 h-8" />,
  Shirt: <Shirt className="w-8 h-8" />,
  Utensils: <Utensils className="w-8 h-8" />,
  Baby: <Baby className="w-8 h-8" />,
  ShoppingBag: <ShoppingBag className="w-8 h-8" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-brandOrange" />,
  ShieldCheck: <ShieldCheck className="w-12 h-12 text-brandOrange" />,
  Clock: <Clock className="w-12 h-12 text-brandOrange" />,
  Globe: <Globe className="w-12 h-12 text-brandOrange" />
};

export const STEPS = [
  { title: 'Book a Service', desc: 'Choose your desired service and schedule a time that works for you.' },
  { title: 'We Execute', desc: 'Our verified taskmasters arrive and perform the task with professional precision.' },
  { title: 'Relax & Review', desc: 'Enjoy your clean home or completed errands and rate our performance.' }
];

export const TESTIMONIALS = [
  { name: 'Sarah J.', role: 'CEO, Tech Hub', text: 'Taskmaster Africa has changed my life. I finally have time to focus on my business while my home is handled.' },
  { name: 'David O.', role: 'Busy Parent', text: 'The nanny services are top-notch. Truly verified and compassionate staff.' },
  { name: 'Amara K.', role: 'Abuja Resident', text: 'Their laundry and cleaning services are the most reliable in Abuja. Highly recommended.' }
];
