import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';
import { NavbarComponent } from './app-components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  providers: [provideNativeDateAdapter()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
