import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'view-cats',
    pathMatch: 'full',
  },
  {
    path: 'view-cats',
    loadComponent: () => import('./views/view-cats/view-cats.page').then(m => m.ViewCatsPage)
  },
];
