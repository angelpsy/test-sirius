import type { Currency, CurrencyId } from "~/types/currencies";
import { getRoundedNumber } from "../utils/numbers";
import { useFakeFetch } from "./dashboard/useFakeFetch";

export const useDashboard = () => {
  const { isFatalFakeError, fakeError, fakeStatus, fakeRefresh } =
    useFakeFetch();

  const { currentCurrencyId, currenciesById } = useCurrencies() as {
    currentCurrencyId: Ref<CurrencyId>;
    currenciesById: Ref<Record<CurrencyId, Currency>>;
  };

  const rates = reactive<Record<string, number>>({
    usd_usd: 1,
    usd_eur: 0.93,
    usd_mdl: 18.03,
    usd_ron: 4.63,
  });

  const generalInvoiceDataRaw = reactive({
    total: 0,
    currency: "usd",
    paid: 0,
    notPaidPercentage: 0,
    notPaid: 0,
    averagePaymentDate: 0,
  });
  const generalPaymentDataRaw = reactive({
    total: 0,
    currency: "usd",
    paid: 0,
    notPaidPercentage: 0,
    notPaid: 0,
    averagePaymentDate: 0,
  });

  const invoiceSummaryRaw = reactive({
    currency: "usd",
    averagePaymentDate: 0,
    receivedMoney: 100,
    dueMoney: 5,
    overdueMoney: 0,
    receivedTransactions: 100,
    dueTransactions: 40,
    overdueTransactions: 60,
  });
  const paymentsSummaryRaw = reactive({
    currency: "usd",
    receivedMoney: 0,
    dueMoney: 0,
    overdueMoney: 0,
    averagePaymentDate: 0,
    receivedTransactions: 50,
    dueTransactions: 20,
    overdueTransactions: 30,
  });
  const overdueInvoicesRaw = reactive([
    {
      id: "1",
      name: "Hetzner",
      daysAgo: 124,
      amount: 232,
      currency: "usd",
    },
    {
      id: "2",
      name: "DigitalOcean",
      daysAgo: 100,
      amount: 150,
      currency: "eur",
    },
    {
      id: "3",
      name: "AWS",
      daysAgo: 90,
      amount: 300,
      currency: "mdl",
    },
    {
      id: "4",
      name: "Google Cloud",
      daysAgo: 60,
      amount: 400,
      currency: "ron",
    },
    {
      id: "5",
      name: "Azure",
      daysAgo: 30,
      amount: 500,
      currency: "usd",
    },
  ]);
  const overduePaymentsRaw = reactive([
    {
      id: "1",
      name: "Hetzner",
      daysAgo: 124,
      amount: 232,
      currency: "usd",
    },
    {
      id: "2",
      name: "DigitalOcean",
      daysAgo: 90,
      amount: 150,
      currency: "usd",
    },
    {
      id: "3",
      name: "AWS",
      daysAgo: 60,
      amount: 300,
      currency: "usd",
    },
  ]);

  const generalInvoiceData = computed(() => {
    const rate =
      rates[`${generalInvoiceDataRaw.currency}_${currentCurrencyId.value}`] ||
      1;
    return {
      total: getRoundedNumber(generalInvoiceDataRaw.total * rate),
      currency: currenciesById.value[currentCurrencyId.value].sign,
      paid: getRoundedNumber(generalInvoiceDataRaw.paid * rate),
      notPaidPercentage: generalInvoiceDataRaw.notPaidPercentage,
      notPaid: getRoundedNumber(generalInvoiceDataRaw.notPaid * rate),
      averagePaymentDate: generalInvoiceDataRaw.averagePaymentDate,
    };
  });

  const generalPaymentData = computed(() => {
    const rate =
      rates[`${generalPaymentDataRaw.currency}_${currentCurrencyId.value}`] ||
      1;
    return {
      total: getRoundedNumber(generalPaymentDataRaw.total * rate),
      currency: currenciesById.value[currentCurrencyId.value].sign,
      paid: getRoundedNumber(generalPaymentDataRaw.paid * rate),
      notPaidPercentage: generalPaymentDataRaw.notPaidPercentage,
      notPaid: getRoundedNumber(generalPaymentDataRaw.notPaid * rate),
      averagePaymentDate: generalPaymentDataRaw.averagePaymentDate,
    };
  });

  const invoiceSummary = computed(() => {
    const rate =
      rates[`${invoiceSummaryRaw.currency}_${currentCurrencyId.value}`] || 1;
    return {
      currency: currenciesById.value[currentCurrencyId.value].sign,

      receivedMoney: getRoundedNumber(invoiceSummaryRaw.receivedMoney * rate),
      dueMoney: getRoundedNumber(invoiceSummaryRaw.dueMoney * rate),
      overdueMoney: getRoundedNumber(invoiceSummaryRaw.overdueMoney * rate),
      averagePaymentDate: invoiceSummaryRaw.averagePaymentDate,

      receivedTransactions: invoiceSummaryRaw.receivedTransactions,
      dueTransactions: invoiceSummaryRaw.dueTransactions,
      overdueTransactions: invoiceSummaryRaw.overdueTransactions,
    };
  });

  const paymentsSummary = computed(() => {
    const rate =
      rates[`${paymentsSummaryRaw.currency}_${currentCurrencyId.value}`] || 1;
    return {
      currency: currenciesById.value[currentCurrencyId.value].sign,

      receivedMoney: getRoundedNumber(paymentsSummaryRaw.receivedMoney * rate),
      dueMoney: getRoundedNumber(paymentsSummaryRaw.dueMoney * rate),
      overdueMoney: getRoundedNumber(paymentsSummaryRaw.overdueMoney * rate),
      averagePaymentDate: paymentsSummaryRaw.averagePaymentDate,

      receivedTransactions: paymentsSummaryRaw.receivedTransactions,
      dueTransactions: paymentsSummaryRaw.dueTransactions,
      overdueTransactions: paymentsSummaryRaw.overdueTransactions,
    };
  });

  const overdueInvoices = computed(() => {
    return overdueInvoicesRaw.map((invoice) => {
      const rate = rates[`${invoice.currency}_${currentCurrencyId.value}`] || 1;
      return {
        ...invoice,
        amount: getRoundedNumber(invoice.amount * rate),
        currency: currenciesById.value[currentCurrencyId.value].sign,
      };
    });
  });

  const overduePayments = computed(() => {
    return overduePaymentsRaw.map((payment) => {
      const rate = rates[`${payment.currency}_${currentCurrencyId.value}`] || 1;
      return {
        ...payment,
        amount: getRoundedNumber(payment.amount * rate),
        currency: currenciesById.value[currentCurrencyId.value].sign,
      };
    });
  });

  return {
    generalInvoiceData,
    generalPaymentData,
    invoiceSummary,
    paymentsSummary,
    overdueInvoices,
    overduePayments,

    isFatalFakeError,
    fakeError,
    fakeStatus,
    fakeRefresh,
  };
};
