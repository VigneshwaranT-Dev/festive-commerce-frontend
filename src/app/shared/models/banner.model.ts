export type BannerTargetType = 'offer' | 'category';

export interface Banner {
  id: string;
  title: string;
  imageUrl: string;

  targetType: BannerTargetType;

  // for category banners
  categorySlug?: string;

  // for offer banners (percentage / campaign)
  offerCode?: string;
}
