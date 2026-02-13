import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-bottom-nav',
  imports: [CommonModule],
  templateUrl: './mobile-bottom-nav.html',
  styleUrl: './mobile-bottom-nav.scss',
})
export class MobileBottomNav {
  cartCount = 8;

  activeTab: 'shop' | 'cart' | 'account' | 'home' = 'home';

  setActive(tab: 'shop' | 'cart' | 'account' | 'home') {
    this.activeTab = tab;
  }

  constructor() {}

  ngOnInit() {
    //
  }
}
