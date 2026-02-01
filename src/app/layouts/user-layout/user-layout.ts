import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer, Header } from '../../shared/components';

@Component({
  selector: 'app-user-layout',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './user-layout.html',
  styleUrl: './user-layout.scss',
})
export class UserLayout {

}
