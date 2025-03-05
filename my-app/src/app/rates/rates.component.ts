import { HttpClient } from '@angular/common/http';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-rates',
  imports: [],
  templateUrl: './rates.component.html',
  styleUrl: './rates.component.scss',
})
export class RatesComponent {
  private http = inject(HttpClient);

  dataSignal = toSignal(
    this.http.get(
      'https://api.nbp.pl/api/exchangerates/rates/c/usd/2016-04-04/?format=json'
    )
  );

  askValue = computed(() => {
    const data: any = this.dataSignal();
    return data && data.rates && data.rates.length > 0
      ? data.rates[0].ask
      : null;
  });
}
