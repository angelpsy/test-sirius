import { CURRENCIES_IDS } from '../constants/currencies';

export type CurrencyId = typeof CURRENCIES_IDS[number];

export type Currency = {
  id: CurrencyId;
  name: string;
  sign: string;
}