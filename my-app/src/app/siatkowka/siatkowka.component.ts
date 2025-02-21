import { Component, inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { SiatkowkaService } from './siatkowka.service';

export interface Scores {
  date: string;
  hour: number;
  name: string;
  pitchNumber: number;
  handler: string;
}

@Component({
  selector: 'app-siatkowka',
  imports: [FooterComponent],
  templateUrl: './siatkowka.component.html',
  styleUrl: './siatkowka.component.scss',
})
export class SiatkowkaComponent {
  sectionEmail = 'email';

  siatkowkaService = inject(SiatkowkaService);

  addNewScore() {
    const newScore: Scores = {
      date: '2021-09-20',
      hour: 14,
      name: 'Nowy gracz',
      pitchNumber: 2,
      handler: 'nowy prowadzący',
    };

    this.siatkowkaService.addScore(newScore);
  }

  removeScore() {
    this.siatkowkaService.removeScore();
  }
}
