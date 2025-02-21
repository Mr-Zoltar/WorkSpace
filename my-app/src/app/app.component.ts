import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [provideNativeDateAdapter()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
