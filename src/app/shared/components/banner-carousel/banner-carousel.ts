import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Banner } from '../../models/banner.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-carousel',
  imports: [CommonModule],
  templateUrl: './banner-carousel.html',
  styleUrl: './banner-carousel.scss',
})
export class BannerCarousel {
  @Input() banners: Banner[] = [];

  constructor(private router: Router) {}

  onBannerClick(banner: Banner) {
    if (banner.targetType === 'category' && banner.categorySlug) {
      this.router.navigate(['/category', banner.categorySlug]);
    }

    if (banner.targetType === 'offer' && banner.offerCode) {
      this.router.navigate(['/offers', banner.offerCode]);
    }
  }
}
