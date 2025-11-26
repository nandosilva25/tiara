export interface NavItem {
  label: string;
  href: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: 'Shield' | 'Microscope' | 'Activity' | 'Target';
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  text: string;
  role?: string;
}