<template>
  <div class="px-5" :class="$style['root']">
    <header class="flex justify-between">
      <UiTypographyHeadline :level="2">Financial Summary</UiTypographyHeadline>
      <div>Filter</div>
    </header>
    <main :class="$style['main']">
      <Card
        :currency="invoiceSummary.currency"
        :received-money="invoiceSummary.receivedMoney"
        :due-money="invoiceSummary.dueMoney"
        :overdue-money="invoiceSummary.overdueMoney"
        :average-payment-date="invoiceSummary.averagePaymentDate"
        :received-transactions="invoiceSummary.receivedTransactions"
        :due-transactions="invoiceSummary.dueTransactions"
        :overdue-transactions="invoiceSummary.overdueTransactions"
      >
        <template #title>
          <IconsOutlineShowChart
            class="text-state-success block h-6 w-6 min-w-6"
          ></IconsOutlineShowChart>
          Invoices
        </template>
      </Card>
      <Card
        :currency="paymentsSummary.currency"
        :received-money="paymentsSummary.receivedMoney"
        :due-money="paymentsSummary.dueMoney"
        :overdue-money="paymentsSummary.overdueMoney"
        :average-payment-date="paymentsSummary.averagePaymentDate"
        :received-transactions="paymentsSummary.receivedTransactions"
        :due-transactions="paymentsSummary.dueTransactions"
        :overdue-transactions="paymentsSummary.overdueTransactions"
      >
        <template #title>
          <IconsOutlineShowChart
            class="text-state-error rotate-x-180 block h-6 w-6 min-w-6 transform"
          ></IconsOutlineShowChart>
          Payments
        </template>
      </Card>

      <TopCard
        :items="overdueInvoices"
      >
        <template #title>
          <span class="bg-state-error w-4.5 h-4.5 min-w-4.5 flex items-center justify-center rounded-full"></span>
          Top-5 Overdue Invoices
        </template>
      </TopCard>

      <TopCard
        :items="overduePayments"
      >
        <template #title>
          <span class="bg-state-error w-4.5 h-4.5 min-w-4.5 flex items-center justify-center rounded-full"></span>
          Top-5 Overdue payments
        </template>
      </TopCard>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Card, {type Props as CardComponentProps} from "./card.vue";
import TopCard, {type Props as TopCardComponentProps } from "./top-card.vue";

const props = defineProps<{
  invoiceSummary: CardComponentProps;
  paymentsSummary: CardComponentProps;
  overdueInvoices: TopCardComponentProps['items'];
  overduePayments: TopCardComponentProps['items'];
}>();
</script>

<style module lang="scss">
.root {
  container-type: inline-size;
}
.main {
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;

  @container (min-width: 701px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
