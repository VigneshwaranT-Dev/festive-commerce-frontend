import { Routes } from '@angular/router';
import { UserLayout } from './layouts/user-layout/user-layout';

export const routes: Routes = [
  {
    path: '',
    component: UserLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home').then((c) => c.Home),
      },
    ],
  },
];
