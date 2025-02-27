import { Component, inject, OnInit } from '@angular/core';
import { SiatkowkaService } from '../siatkowka/siatkowka.service';
import { ActivatedRoute } from '@angular/router';
import { Scores } from '../siatkowka/siatkowka.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-more',
  imports: [CommonModule],
  templateUrl: './show-more.component.html',
  styleUrl: './show-more.component.scss'
})
export class ShowMoreComponent implements OnInit {
  siatkowkaService = inject(SiatkowkaService)
  route = inject(ActivatedRoute)
  score: Scores | undefined

  ngOnInit() {
    const idSiatkowka = this.route.snapshot.paramMap.get('id')
    if (idSiatkowka) {
      const id = parseFloat(idSiatkowka)
      this.score = this.siatkowkaService.agenda.find(game => game.id === id)
    }
  }
}
