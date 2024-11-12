import { type Currency, type CurrencyId } from '~/types/currencies';

const CURRENCIES_IDS = ['mdl', 'usd', 'eur', 'ron'] as const;

type State = {
  readonly ids: CurrencyId[];
  byId: Record<CurrencyId, Currency>;
  current: CurrencyId;
}

const DEFAULT: CurrencyId = 'usd';

export const useCurrenciesStore = defineStore('CurrenciesStore', {
  state: (): State => ({
    ids: CURRENCIES_IDS as unknown as CurrencyId[],
    byId: {
      mdl: { id: 'mdl', name: 'MDL1', sign: 'L' },
      usd: { id: 'usd', name: 'USD', sign: '$' },
      eur: { id: 'eur', name: 'EUR', sign: '€' },
      ron: { id: 'ron', name: 'RON', sign: 'L' },
    },
    current: DEFAULT,
  }),
  getters: {
    all: (state: State) => state.ids.map((id) => state.byId[id]),
  },
  actions: {
    onChangeCurrent(id: CurrencyId) {
      this.current = id;
    },
  },
  persist: true,
});