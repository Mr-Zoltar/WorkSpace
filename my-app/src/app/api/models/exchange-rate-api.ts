export interface LastExchangeRateDto {
  currency: string;
  code: string;
  mid: number;
}

export interface LastRateTableDto {
  table: string;
  no: string;
  tradingDate?: string;
  effectiveDate: string;
  rates: LastExchangeRateDto[];
}

export interface ExchangeRateDto {
  mid: number;
  effectiveDate: string;
  no: string;
}

export interface RateTableDto {
  currency: string;
  table: string;
  code: string;
  tradingDate?: string;
  rates: ExchangeRateDto[];
}

