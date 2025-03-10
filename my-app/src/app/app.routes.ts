import { Routes } from '@angular/router';
import { TenisComponent } from './tenis/tenis.component';
import { SiatkowkaComponent } from './siatkowka/siatkowka.component';
import { ShowMoreComponent } from './siatkowka/components/show-more/show-more.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { RatesComponent } from './rates/rates.component';
import { ShowDetailRatesComponent } from './show-detail-rates/show-detail-rates.component';

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
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'rates',
    component: RatesComponent,
  },
  {
    path: 'details/:code',
    component: ShowDetailRatesComponent
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
