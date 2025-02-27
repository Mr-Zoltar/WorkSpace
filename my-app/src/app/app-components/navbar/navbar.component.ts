import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private authService = inject(AuthService);
  private destroyRef = inject(DestroyRef)
  userName: string | null = null

  ngOnInit(): void {
    this.authService.getUser().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(user => {
      this.userName = user?.username ?? null
    })
  }

  openDialog(): void {
    this.authService.openDialog();
  }

  logout(): void {
    this.authService.logout();
  }


}
