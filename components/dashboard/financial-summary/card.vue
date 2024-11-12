<template>
  <UiCard class="space-y-5">
    <div class="flex justify-between gap-2">
      <div class="flex space-x-1">
        <slot name="title" />
      </div>
      <div>
        <div class="text-xs">
          Average Payment Date: <br>
          <span class="text-primary-blue-4">{{ averagePaymentDate }} days</span>
        </div>
      </div>
    </div>
    <div class="flex justify-between gap-6">
      <div :class="$style['cart-wrapper']">
        <div :class="$style['cart-container']">
          <ChartsDoughnut :data="chartData" />
        </div>
      </div>
      <div class="space-y-3">
        <CardRow :classes="{ transactions: 'bg-primary-blue-4 text-white', name: 'font-700 ', money: 'font-700' }">
          <template #transactions>{{ totalTransactions }}</template>
          <template #name>Total</template>
          <template #money>{{ totalMoney }}&nbsp;{{ currency }}</template>
        </CardRow>

        <CardRow :classes="{ transactions: 'bg-[#39ABF8] text-white', }">
          <template #transactions>{{ receivedTransactions }}</template>
          <template #name>Received</template>
          <template #money>{{ receivedMoney }}&nbsp;{{ currency }}</template>
        </CardRow>

        <CardRow :classes="{ transactions: 'bg-[#BEE9FF] text-black', }">
          <template #transactions>{{ dueTransactions }}</template>
          <template #name>Due</template>
          <template #money>{{ dueMoney }}&nbsp;{{ currency }}</template>
        </CardRow>

        <CardRow :classes="{ transactions: 'bg-state-error text-white', }">
          <template #transactions>{{ overdueTransactions }}</template>
          <template #name>Overdue</template>
          <template #money>{{ overdueMoney }}&nbsp;{{ currency }}</template>
        </CardRow>
      </div>
    </div>
  </UiCard>
</template>

<script lang="ts" setup>
import CardRow from './card-row.vue';

const CHART_COLORS = [
  'rgb(57 171 248)',
  'rgb(190 233 255)',
  'rgb(186 0 0)',
];

export type Props = {
  averagePaymentDate: number;
  currency: string;
  receivedTransactions: number;
  receivedMoney: number;
  dueTransactions: number;
  dueMoney: number;
  overdueTransactions: number;
  overdueMoney: number;
}

const props = defineProps<Props>();

const totalMoney = computed(() => {
  return props.receivedMoney + props.dueMoney + props.overdueMoney;
});

const totalTransactions = computed(() => {
  return props.receivedTransactions + props.dueTransactions + props.overdueTransactions;
});

const chartData = computed(() => {
  const data = [props.receivedTransactions, props.dueTransactions, props.overdueTransactions];
  return mapDataToDoughnutChart(data, CHART_COLORS);
});
</script>

<style module>
.cart-wrapper {
  position: relative;
  width: 100%;
  min-height: 150px;
}
.cart-container {
  position: absolute;
  height: 100%;
  width: 100%;

  canvas {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
