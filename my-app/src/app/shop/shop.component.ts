import { Component, inject } from '@angular/core';
import { Product } from '../shared/models/cart-models';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shop',
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {
  private cartService = inject(CartService);
  addToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}
