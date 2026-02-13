import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category-cards',
  imports: [CommonModule],
  templateUrl: './category-cards.html',
  styleUrl: './category-cards.scss',
})
export class CategoryCards {
  categories = [
    {
      title: 'Flower Pots',
      subtitle: 'Classic ground sparks',
      image: 'assets/category/flower-pot.png',
    },
    {
      title: 'Chakra Crackers',
      subtitle: 'Spin the festive joy',
      image: 'assets/category/Chakras.png',
    },
    {
      title: 'Sparklers',
      subtitle: 'Safe sparkle fun',
      image: 'assets/category/sprinkler.png',
    },
    {
      title: 'Sky Shots',
      subtitle: 'Light up the sky',
      image: 'assets/category/sky-shot.png',
    },
    {
      title: 'Gift Boxes',
      subtitle: 'Celebrate, all packed',
      image: 'assets/category/gift-box.png',
    },
  ];
}
