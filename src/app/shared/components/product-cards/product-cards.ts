import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-cards',
  imports: [CommonModule],
  templateUrl: './product-cards.html',
  styleUrl: './product-cards.scss',
})
export class ProductCards implements AfterViewInit, OnDestroy {
  @ViewChild('carousel', { static: false })
  carousel!: ElementRef<HTMLDivElement>;

  @Input() products!: any;
  @Input() titleName!: any;

  loading: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 100);
  }

  openProductPreview(product: any) {
    console.log('Quick view:', product);

    // later:
    // open modal / bottom sheet
    // show images, reviews, rating
  }

  private rafId: number | null = null;
  private speed = 0.6; // 🔑 adjust speed here

  ngAfterViewInit(): void {
    // wait until *ngFor renders
    setTimeout(() => {
      if (this.products.length > 5) {
        this.start();
      }
    }, 500);
  }

  start(): void {
    const el = this.carousel.nativeElement;

    const step = () => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += this.speed;
      }
      this.rafId = requestAnimationFrame(step);
    };

    this.rafId = requestAnimationFrame(step);
  }

  pause(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  resume(): void {
    if (!this.rafId && this.products.length > 5) {
      this.start();
    }
  }

  ngOnDestroy(): void {
    this.pause();
  }
}
