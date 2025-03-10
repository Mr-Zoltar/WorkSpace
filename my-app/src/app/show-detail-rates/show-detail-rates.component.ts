import {
  Component,
  OnInit,
  signal,
  inject,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExchangeRateApiService } from '../api/services/exchange-rate-api.service';
import { ExchangeRateDto } from '../api/models/exchange-rate-api';

@Component({
  selector: 'app-show-detail-rates',
  standalone: true,
  templateUrl: './show-detail-rates.component.html',
  styleUrl: './show-detail-rates.component.scss',
})
export class ShowDetailRatesComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private exchangeRateApiService = inject(ExchangeRateApiService);

  rates: WritableSignal<ExchangeRateDto[]> = signal([]);
  currencyCode: string = '';

  ngOnInit(): void {
    this.currencyCode = this.route.snapshot.paramMap.get('code')!;
    this.exchangeRateApiService
      .getHistory(this.currencyCode)
      .subscribe((data) => {
        this.rates.set(data);
      });
  }
}
