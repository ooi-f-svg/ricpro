// RicPro website type definitions

export interface NavItem {
  text: string;
  href: string;
  children?: NavSubItem[];
}

export interface NavSubItem {
  text: string;
  href: string;
  children?: NavSubItem[];
}

export interface ContactButton {
  href: string;
  icon: string;
  label: string;
  subLabel: string;
  bgColor: string;
  variant: 'instagram' | 'inquiry' | 'line' | 'reservation';
}

export interface MvCard {
  title: string;        // 外装 / 内装
  subtitle: string;     // リフォーム
  desc: string;
  href: string;
  variant: 'outer' | 'inner';
}

export interface ReasonCard {
  num: string;          // "01", "02", "03"
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaHref?: string;
  ctaText?: string;
}

export interface VoiceCard {
  image: string;
  imageAlt: string;
  tags: string[];
  comment: string;
}

export interface FlowStep {
  num: string;          // "01" – "08"
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CompanyInfo {
  name: string;
  established: string;
  employees: string;
  address: string;
  licenses: string;
}

export interface FooterNavItem {
  title: string;
  href: string;
  children?: { text: string; href: string }[];
}
