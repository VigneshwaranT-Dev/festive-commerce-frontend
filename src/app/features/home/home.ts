import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Banner } from '../../shared/models/banner.model';
import { BannerCarousel, CategoryCard } from '../../shared/components';

@Component({
  selector: 'app-home',
  imports: [CommonModule, BannerCarousel, CategoryCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  banners: Banner[] = [
    {
      id: '1',
      title: 'Diwali Offer - Flat 30% OFF',
      imageUrl: 'assets/banners/21670.jpg',
      targetType: 'offer',
      offerCode: 'DIWALI30',
    },
    {
      id: '2',
      title: 'Ground Crackers Sale',
      imageUrl: 'assets/banners/21469.jpg',
      targetType: 'category',
      categorySlug: 'ground-crackers',
    },
    {
      id: '3',
      title: 'Sky Crackers Special',
      imageUrl: 'assets/banners/crackers_offer_image.jpg',
      targetType: 'category',
      categorySlug: 'sky-crackers',
    },
  ];

  categories = [
    {
      name: 'Ground Crackers',
      slug: 'ground-crackers',
      image: 'assets/banners/21469.jpg',
    },
    {
      name: 'Sky Shots',
      slug: 'sky-crackers',
      image: 'assets/banners/21670.jpg',
    },
    {
      name: 'Gift Boxes',
      slug: 'gift-boxes',
      image: 'assets/banners/crackers_offer_image.jpg',
    },
    {
      name: 'Ground Crackers',
      slug: 'ground-crackers',
      image: 'assets/banners/21469.jpg',
    },
    {
      name: 'Sky Shots',
      slug: 'sky-crackers',
      image: 'assets/banners/21670.jpg',
    },
    {
      name: 'Gift Boxes',
      slug: 'gift-boxes',
      image: 'assets/banners/crackers_offer_image.jpg',
    },
  ];

  featuredProducts = [
    {
      name: 'Classic Flower Pot',
      price: 299,
      image: 'https://picsum.photos/300/300?random=11',
    },
    {
      name: 'Rocket Deluxe',
      price: 199,
      image: 'https://picsum.photos/300/300?random=12',
    },
    {
      name: 'Sparklers Pack',
      price: 149,
      image: 'https://picsum.photos/300/300?random=13',
    },
  ];
}
