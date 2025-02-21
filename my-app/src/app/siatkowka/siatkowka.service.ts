import { Injectable } from '@angular/core';
import { Scores } from './siatkowka.component';

@Injectable({
  providedIn: 'root',
})
export class SiatkowkaService {
  agenda: Scores[] = [
    {
      date: '2021-09-20',
      hour: 10,
      name: 'Maria',
      pitchNumber: 1,
      handler: 'Jan',
    },
    {
      date: '2021-09-20',
      hour: 11,
      name: 'Hubert',
      pitchNumber: 2,
      handler: 'Maria',
    },
    {
      date: '2021-09-20',
      hour: 12,
      name: 'Jacek',
      pitchNumber: 1,
      handler: 'Cyprian',
    },
    {
      date: '2021-09-20',
      hour: 13,
      name: 'Jan',
      pitchNumber: 2,
      handler: 'Tymek',
    },
  ];

  getAgenda() {
    return this.agenda;
  }

  addScore(score: Scores) {
    this.agenda.push(score);
  }

  removeScore() {
    this.agenda.pop();
  }
}
