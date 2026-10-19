export interface ChapterItem {
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  takeaways: string[];
}

export interface SocialContact {
  id: string;
  name: string;
  label: string;
  url: string;
  iconType: 'instagram' | 'facebook' | 'youtube' | 'tiktok' | 'kwai' | 'threads';
  color: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PurchaseEvent {
  id: string;
  type: string;
  timeAgo: string;
  city?: string;
}
