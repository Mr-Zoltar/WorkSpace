import { Component, inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { SiatkowkaService } from './siatkowka.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Scores {
  date: string;
  hour: number;
  name: string;
  pitchNumber: number;
  handler: string;
}

export interface NewScores {
  date: string;
  hour: number | null;
  name: string;
  pitchNumber: number | null;
  handler: string;
}

@Component({
  selector: 'app-siatkowka',
  imports: [
    CommonModule,
    FooterComponent,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
  ],
  templateUrl: './siatkowka.component.html',
  styleUrl: './siatkowka.component.scss',
})
export class SiatkowkaComponent {
  siatkowkaService = inject(SiatkowkaService);
  disabledButton = false;
  newItem: NewScores = {
    date: '',
    hour: null,
    name: '',
    pitchNumber: null,
    handler: '',
  };
  editing = false;
  selectedIndex: number | null = null;
  sectionEmail = 'email@tenis.com';

  isFormValid() {
    return (
      this.newItem.date !== '' &&
      this.newItem.hour !== null &&
      this.newItem.name.trim() !== '' &&
      this.newItem.pitchNumber !== null &&
      this.newItem.handler.trim() !== ''
    );
  }

  resetForm() {
    this.newItem = {
      date: '',
      hour: null,
      name: '',
      pitchNumber: null,
      handler: '',
    };
  }

  addNewScore() {
    if (!this.isFormValid()) {
      return;
    }
    const newScore: Scores = {
      date: this.newItem.date,
      hour: this.newItem.hour as number,
      name: this.newItem.name,
      pitchNumber: this.newItem.pitchNumber as number,
      handler: this.newItem.handler,
    };
    this.siatkowkaService.addScore(newScore);
    this.resetForm();
  }

  removeScore() {
    if (this.selectedIndex !== null) {
      this.siatkowkaService.removeScoreByIndex(this.selectedIndex);
      this.selectedIndex = null;
    }
  }

  editScore() {
    if (this.selectedIndex !== null) {
      const score = this.siatkowkaService.agenda[this.selectedIndex];
      this.newItem = { ...score };
      this.editing = true;
    }
  }

  saveEdit() {
    if (this.selectedIndex !== null && this.isFormValid()) {
      this.siatkowkaService.agenda[this.selectedIndex] = {
        date: this.newItem.date,
        hour: this.newItem.hour as number,
        name: this.newItem.name,
        pitchNumber: this.newItem.pitchNumber as number,
        handler: this.newItem.handler,
      };
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.resetForm();
    this.editing = false;
    this.selectedIndex = null;
  }

  selectRow(index: number) {
    if (!this.editing) {
      this.selectedIndex = index;
    }
  }
}
