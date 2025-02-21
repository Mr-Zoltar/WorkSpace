import { Component, inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

export interface Scores {
  date: string;
  hour: number;
  name: string;
  courtNumber: number;
  handler: string;
}

@Component({
  selector: 'app-tenis',
  imports: [
    FooterComponent,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './tenis.component.html',
  styleUrls: ['./tenis.component.scss'],
})
export class TenisComponent {
  formBuilder = inject(FormBuilder);
  formGroup: FormGroup = this.formBuilder.group({
    date: [ '', Validators.required ],
    hour: [ null, Validators.required ],
    name: [ '', Validators.required ],
    courtNumber: [ null, Validators.required ],
    handler: [ '', Validators.required ],
  });
  selectedIndex: number | null = null;
  editing: boolean = false;

  agenda: Scores[] = [
  ];

  isFormValid() {
    return this.formGroup.valid;
  }

  addScore() {
    if (!this.isFormValid()) return;
    const formValue = this.formGroup.getRawValue();
    this.agenda.push({
      date: formValue.date,
      hour: formValue.hour ?? 0,
      name: formValue.name,
      courtNumber: formValue.courtNumber ?? 0,
      handler: formValue.handler,
    });
    this.formGroup.reset();
  }

  selectRow(index: number) {
    if (!this.editing) {
      this.selectedIndex = index;
    }
  }

  removeScore() {
    if (this.selectedIndex !== null) {
      this.agenda.splice(this.selectedIndex, 1);
      this.selectedIndex = null;
    }
  }

  editScore() {
    if (this.selectedIndex !== null) {
      const score = this.agenda[this.selectedIndex];
      this.formGroup.setValue({
        date: score.date,
        hour: score.hour,
        name: score.name,
        courtNumber: score.courtNumber,
        handler: score.handler,
      });
      this.editing = true;
    }
  }

  saveEdit() {
    if (this.selectedIndex !== null && this.formGroup.valid) {
      const formValue = this.formGroup.getRawValue();
      this.agenda[this.selectedIndex] = {
        date: formValue.date,
        hour: formValue.hour ?? 0,
        name: formValue.name,
        courtNumber: formValue.courtNumber ?? 0,
        handler: formValue.handler,
      };
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.formGroup.reset();
    this.editing = false;
    this.selectedIndex = null;
  }

  sectionEmail = 'tenis@email.com';
}
