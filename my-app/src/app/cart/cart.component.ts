import { Component, computed, inject, Signal } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../shared/models/cart-models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  private cartService = inject(CartService);
  products: Signal<CartItem[]> = this.cartService.cartItems;
  totalPrice: Signal<number> = computed(() => this.products().reduce((acc, item) => acc + item.price * item.quantity, 0));

  removeFromCart(product: CartItem): void {
    this.cartService.removeFromCart(product);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
