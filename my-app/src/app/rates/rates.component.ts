import {
  Component,
  computed,
  inject,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  ExchangeRateApiService,
  Table,
} from '../api/services/exchange-rate-api.service';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { LastExchangeRateDto } from '../api/models/exchange-rate-api';

@Component({
  selector: 'app-rates',
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [DatePipe],
  templateUrl: './rates.component.html',
  styleUrl: './rates.component.scss',
})
export class RatesComponent implements OnInit {
  private exchangeRateApiService = inject(ExchangeRateApiService);
  private datePipe = inject(DatePipe);
  private router = inject(Router);
  rates: WritableSignal<LastExchangeRateDto[]> = signal([]);

  filterForm = new FormGroup({
    table: new FormControl<Table>('a', { nonNullable: true }),
    date: new FormControl<Date>(new Date(), { nonNullable: true }),
  });
  currencyList: Signal<LastExchangeRateDto[]> = computed(() => this.rates());
  readonly maxDate = new Date();

  ngOnInit(): void {
    this.getData();
  }

  filterRates() {
    const table = this.filterForm.controls.table.value;
    const date = this.filterForm.controls.date.value;
    this.exchangeRateApiService
      .getFilterdRatesByDate(
        table,
        this.datePipe.transform(date, 'yyyy-MM-dd') ?? 'last'
      )
      .subscribe({
        next: (data) => {
          this.rates.set(data.rates);
        },
        complete: () => {
          console.log('complete');
        },
        error: (error) => {
          console.log(`błąd ${error}`);
          this.rates.set([]);
        },
      });
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  private getData(table?: Table) {
    this.exchangeRateApiService.getRatesTable(table).subscribe((data) => {
      this.rates.set(data.rates);
      this.filterForm.controls.date.setValue(new Date(data.effectiveDate));
    });
  }

  showDetails(code: string) {
    this.router.navigate(['/details', code]);
  }
}
