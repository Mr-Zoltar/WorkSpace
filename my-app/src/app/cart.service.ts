import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { CartItem, Product } from './shared/models/cart-models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartItems: WritableSignal<CartItem[]> = signal([]);
  cartItems: Signal<CartItem[]> = this._cartItems.asReadonly();

  addProduct(product: Product) {
    let existingItem = this._cartItems().find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
      this._cartItems.update((items) => [...items]);
    } else {
      this._cartItems.update((items) => [
        ...items,
        { ...product, quantity: 1 },
      ]);
    }
    console.log(this.cartItems());
  }

  removeFromCart(product: CartItem) {
    this._cartItems.update((items) => {
      const productIndex = items.findIndex((item) => item.id === product.id);
      if (productIndex > -1) {
        const currentItem = items[productIndex];
        if (currentItem.quantity > 1) {
          const updatedItem = { ...currentItem, quantity: currentItem.quantity - 1 };
          const newItems = [...items];
          newItems[productIndex] = updatedItem;
          return newItems;
        } else {
          return items.filter((item) => item.id !== product.id);
        }
      }
      return items;
    });
  }



  clearCart() {
    this._cartItems.update(() => []);
  }
}
