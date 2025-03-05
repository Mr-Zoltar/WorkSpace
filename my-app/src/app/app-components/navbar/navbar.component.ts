import { Component, computed, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../shared/services/auth.service';
import { CartService } from '../../cart.service';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private authService = inject(AuthService);
  private cartService = inject(CartService);
  private destroyRef = inject(DestroyRef);
  amountOfProducts = computed(() => {
    const items = this.cartService.cartItems();
    return items.reduce((acc, item) => acc + item.quantity, 0);
  });
  userName: string | null = null;
  hidden = computed(() => this.amountOfProducts() === 0);

  ngOnInit(): void {
    this.authService
      .getUser()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user) => {
        this.userName = user?.username ?? null;
      });
  }

  openDialog(): void {
    this.authService.openDialog();
  }

  logout(): void {
    this.authService.logout();
  }
}
