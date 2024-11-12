<template>
  <div class="min-h-screen space-y-12 pt-16 lg:pt-0 max-w-[1000px] mx-auto">
    <header
      class="flex items-center gap-6 px-5 justify-between lg:gap-2 flex-wrap"
    >
      <UiTypographyHeadline :level="1">Dashboard</UiTypographyHeadline>
      <CommonCurrencies
        :allCurrencies="allCurrencies"
        :currentCurrencyId="currentCurrencyId"
        @changeCurrentCurrency="onChangeCurrentCurrency"
      />
    </header>

    <CommonError v-if="fakeStatus === 'error'" :title="fakeError?.message || 'An error occurred'">
      <template v-if="fakeError?.statusCode === 500">
        <div class="flex justify-start">
          <UiButton @click="fakeRefresh" variant="error">
            Refresh data
          </UiButton>
        </div>
      </template>
    </CommonError>

    <DashboardGeneralOverview
      :generalInvoiceData="generalInvoiceData"
      :generalPaymentData="generalPaymentData"
    />
    <DashboardFinancialSummary
      :invoiceSummary="invoiceSummary"
      :paymentsSummary="paymentsSummary"
      :overdueInvoices="overdueInvoices"
      :overduePayments="overduePayments"
      class="pb-40"
    />
  </div>
</template>

<script lang="ts" setup>
const { allCurrencies, currentCurrencyId, onChangeCurrentCurrency } =
  useCurrencies();

const {
  generalInvoiceData,
  generalPaymentData,
  invoiceSummary,
  paymentsSummary,
  overdueInvoices,
  overduePayments,
  fakeError,
  fakeStatus,
  fakeRefresh,
} = useDashboard();
</script>
