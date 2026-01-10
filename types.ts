
export interface ServiceItem {
  id: string;
  name: string;
  icon?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FlowStep {
  number: number;
  title: string;
  content: string;
}

export interface VoiceSample {
  title: string;
  description: string;
  audioUrl: string;
}

export interface CustomerVoice {
  storeName: string;
  ownerInfo: string;
  comment: string;
}
