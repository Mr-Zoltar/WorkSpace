import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  ExchangeRateDto,
  LastExchangeRateDto,
  LastRateTableDto,
  RateTableDto,
} from '../models/exchange-rate-api';
import { first, map, Observable } from 'rxjs';

export type Table = 'a' | 'b';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRateApiService {
  private http = inject(HttpClient);
  private baseURL = 'https://api.nbp.pl/api/exchangerates';

  getRatesTable(table: Table = 'a'): Observable<LastRateTableDto> {
    return this.http
      .get<LastRateTableDto[]>(
        `${this.baseURL}/tables/${table}/last/?format=json`
      )
      .pipe(
        first(),
        map((data) => data[0])
      );
  }

  getFilterdRatesByDate(
    table: Table,
    date: string
  ): Observable<LastRateTableDto> {
    return this.http
      .get<LastRateTableDto[]>(
        `${this.baseURL}/tables/${table}/${date}/?format=json`
      )
      .pipe(
        first(),
        map((data) => data[0])
      );
  }

  getHistory(code: string): Observable<ExchangeRateDto[]> {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);
    const formattedStartDate = startDate.toISOString().split('T')[0];
    const endDate = new Date().toISOString().split('T')[0];

    return this.http
      .get<RateTableDto>(
        `${this.baseURL}/rates/a/${code}/${formattedStartDate}/${endDate}/?format=json`
      )
      .pipe(map((data) => data.rates));
  }
}
