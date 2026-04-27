export type Language = 'uz' | 'kaa' | 'ru' | 'en';

export interface Translation {
  title: string;
  subtitle: string;
  continents: string;
  oceans: string;
  countries: string;
  videos: string;
  learnMore: string;
  interestingFacts: string;
  back: string;
  videoSectionTitle: string;
  videoSectionDesc: string;
  addItem: string;
  save: string;
  cancel: string;
  nameLabel: string;
  descLabel: string;
  factLabel: string;
  imageLabel: string;
  shareQR: string;
  qrTitle: string;
  qrDesc: string;
}

export interface GeoItem {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  facts: Record<Language, string[]>;
  image: string;
  color: string;
}

export interface VideoItem {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  thumbnail: string;
  videoUrl: string;
}
