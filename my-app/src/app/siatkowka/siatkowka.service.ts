import { Injectable } from '@angular/core';
import { Scores } from './siatkowka.component';

@Injectable({
  providedIn: 'root',
})
export class SiatkowkaService {
  agenda: Scores[] = [
    {
      date: '2023-04-10',
      hour: 10,
      name: 'Mecz piłki nożnej',
      pitchNumber: 1,
      handler: 'Jan Kowalski',
      id: 1
    },
    {
      date: '2023-04-11',
      hour: 14,
      name: 'Trening siatkówki',
      pitchNumber: 2,
      handler: 'Anna Nowak',
      id: 2
    }
  ];


  addScore(score: Scores) {
    this.agenda.push(score);
  }

  removeScoreByIndex(index: number) {
    this.agenda.splice(index, 1);
  }
}
