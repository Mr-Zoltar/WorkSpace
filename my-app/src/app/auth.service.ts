import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { BehaviorSubject } from 'rxjs';

export interface UserData {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly dialog = inject(MatDialog);

  databaseOfUsers: UserData[] = [{ username: 'user1', password: 'password1' }];
  private user$ = new BehaviorSubject<UserData | null>(null);

  openDialog(): void {
    this.dialog.open(LoginDialogComponent);
  }


  login(name: string, password: string): boolean {
    const user = this.databaseOfUsers.find((user) => user.username === name && user.password === password);
    if (user) {
      this.user$.next(user)
      console.log('Logowanie udane');
      return true;
    } else {
      console.error('Błędne dane logowania');
      return false;
    }
  }

  getUserName(): string {
    const currentUser = this.user$.value;
    return currentUser ? currentUser.username : '';
  }

  getUser() {
    return this.user$
  }

  logout(): void {
    this.user$.next(null);
    console.log('Wylogowano');
  }
}
