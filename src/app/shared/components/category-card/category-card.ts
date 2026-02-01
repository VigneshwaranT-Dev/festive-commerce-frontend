import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface Category {
  name: string;
  slug: string;
  image: string;
}

@Component({
  selector: 'app-category-card',
  imports: [CommonModule],
  templateUrl: './category-card.html',
  styleUrl: './category-card.scss',
})
export class CategoryCard {
  @Input() category!: Category;

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/category', this.category.slug]);
  }
}
