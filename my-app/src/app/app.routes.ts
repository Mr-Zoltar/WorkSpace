import { Routes } from '@angular/router';
import { TenisComponent } from './tenis/tenis.component';
import { SiatkowkaComponent } from './siatkowka/siatkowka.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tenis',
    pathMatch: 'full'
  },
  {
    path: 'tenis',
    component: TenisComponent
  },
  {
    path: 'siatkowka',
    component: SiatkowkaComponent
  },
  {
    path: '**',
    redirectTo: 'tenis'
  }
];
