import { useCurrenciesStore } from "~/stores/currencies";

export const useCurrencies = () => {
  const {
    all: allCurrencies,
    current: currentCurrencyId,
    byId: currenciesById,
  } = storeToRefs(useCurrenciesStore());

  const {onChangeCurrent: onChangeCurrentCurrency} = useCurrenciesStore();

  return { allCurrencies, currentCurrencyId, currenciesById, onChangeCurrentCurrency };
};
