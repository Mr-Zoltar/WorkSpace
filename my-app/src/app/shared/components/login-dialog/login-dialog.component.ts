import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-dialog',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss',
})
export class LoginDialogComponent {
  name: string = '';
  password: string = '';
  errorMode: boolean = false

  readonly dialogRef = inject(MatDialogRef<LoginDialogComponent>);
  private authService = inject(AuthService);

  login(): void {
    if (this.authService.login(this.name, this.password)) {
      this.resetAndClose();
      console.log(this.name, this.password)
    } else {
      console.error('Błędne dane logowania');
      this.errorMode = true
    }
  }

  notEmpty(): boolean {
    return this.name.trim() == '' || this.password.trim() == '';
  }

  resetAndClose(): void {
    this.name = '';
    this.password = '';
    this.dialogRef.close();
  }
}
