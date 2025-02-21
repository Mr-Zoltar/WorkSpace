import { Injectable } from '@angular/core';
import { Scores } from './siatkowka.component';

@Injectable({
  providedIn: 'root',
})
export class SiatkowkaService {
  agenda: Scores[] = [
  ];
  
  addScore(score: Scores) {
    this.agenda.push(score);
  }

  removeScoreByIndex(index: number) {
    this.agenda.splice(index, 1);
  }
}
