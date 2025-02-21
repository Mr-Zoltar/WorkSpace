import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

interface Scores {
  date: string;
  hour: number;
  name: string;
  courtNumber: number;
  handler: string;
}

@Component({
  selector: 'app-tenis',
  imports: [FooterComponent, MatButtonModule, CommonModule],
  templateUrl: './tenis.component.html',
  styleUrl: './tenis.component.scss',
})
export class TenisComponent {
  agenda: Scores[] = [
    {
      date: '2021-09-20',
      hour: 10,
      name: 'Maria',
      courtNumber: 1,
      handler: 'Jan',
    },
    {
      date: '2021-09-20',
      hour: 11,
      name: 'Hubert',
      courtNumber: 2,
      handler: 'Maria',
    },
    {
      date: '2021-09-20',
      hour: 12,
      name: 'Jacek',
      courtNumber: 1,
      handler: 'Cyprian',
    },
    {
      date: '2021-09-20',
      hour: 13,
      name: 'Jan',
      courtNumber: 2,
      handler: 'Tymek',
    },
  ];

  addScore() {
    const newScore: Scores = {
      date: '2021-09-20',
      hour: 14,
      name: 'Nowy gracz',
      courtNumber: 2,
      handler: 'nowy prowadzący',
    };

    this.agenda.push(newScore);
  }

  removeScore() {
    this.agenda.pop();
  }

  sectionEmail = 'tenis@email.com';
}
