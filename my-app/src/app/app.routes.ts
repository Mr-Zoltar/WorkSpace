import { Routes } from '@angular/router';
import { TenisComponent } from './tenis/tenis.component';
import { SiatkowkaComponent } from './siatkowka/siatkowka.component';
import { ShowMoreComponent } from './siatkowka/components/show-more/show-more.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tenis',
    pathMatch: 'full',
  },
  {
    path: 'tenis',
    component: TenisComponent,
  },
  {
    path: 'siatkowka',
    component: SiatkowkaComponent,
  },
  {
    path: 'siatkowka/:id',
    component: ShowMoreComponent,
  },
  {
    path: '**',
    redirectTo: 'tenis',
  },
];
