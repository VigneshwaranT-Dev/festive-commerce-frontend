import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Banner } from '../../shared/models/banner.model';
import { BannerCarousel, CategoryCards, HeroBanner, ProductCards } from '../../shared/components';

@Component({
  selector: 'app-home',
  imports: [CommonModule, BannerCarousel, CategoryCards, ProductCards],
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

  products = [
    {
      id: 1,
      name: 'Flower Pots',
      sub: 'Ground crackers',
      weight: '1 box',
      price: 299,
      mrp: 349,
      image: 'assets/category/light.png',
      qty: 0,
      inStock: true,
    },
    {
      id: 2,
      name: 'Sparklers',
      sub: 'Kids safe',
      weight: '1 box',
      price: 199,
      mrp: 249,
      image: 'assets/category/light.png',
      qty: 1,
      inStock: true,
    },
    {
      id: 3,
      name: 'Flower Pots',
      sub: 'Ground crackers',
      weight: '1 box',
      price: 299,
      mrp: 349,
      image: 'assets/category/light.png',
      qty: 0,
      inStock: true,
    },
    {
      id: 4,
      name: 'Sparklers',
      sub: 'Kids safe',
      weight: '1 box',
      price: 199,
      mrp: 249,
      image: 'assets/category/light.png',
      qty: 1,
      inStock: true,
    },
    {
      id: 5,
      name: 'Sky Shots',
      sub: 'Aerial crackers',
      weight: '1 box',
      price: 499,
      mrp: 549,
      image: 'assets/category/light.png',
      qty: 0,
      inStock: false,
    },
    {
      id: 6,
      name: 'Sky Shots',
      sub: 'Aerial crackers',
      weight: '1 box',
      price: 499,
      mrp: 549,
      image: 'assets/category/light.png',
      qty: 0,
      inStock: false,
    },
    {
      id: 7,
      name: 'Sky Shots',
      sub: 'Aerial crackers',
      weight: '1 box',
      price: 499,
      mrp: 549,
      image: 'assets/category/light.png',
      qty: 0,
      inStock: false,
    },
  ];
}
