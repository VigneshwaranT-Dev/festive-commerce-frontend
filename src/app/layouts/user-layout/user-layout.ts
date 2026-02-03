import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer, Header, MobileBottomNav } from '../../shared/components';

@Component({
  selector: 'app-user-layout',
  imports: [RouterOutlet, Header, Footer, MobileBottomNav],
  templateUrl: './user-layout.html',
  styleUrl: './user-layout.scss',
})
export class UserLayout {}
