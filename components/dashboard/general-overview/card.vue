<template>
  <UiCardTwoColumn class="space-x-6">
      <template #left>
        <div class="space-y-6 pr-2" :class="$style['left-column']">
          <div class="flex space-x-1"><slot name="title"/></div>
          <div class="space-y-3 text-7 font-700">{{ total }}&nbsp;{{ currency }}</div>
          <div class="text-xs">Average Payment Date: <span class="text-primary-blue-4">{{ averagePaymentDate }} days</span></div>
        </div>
      </template>
      <template #right>
        <div class="space-y-5">
          <div class="space-y-2">
            <div class="flex space-x-1">
              <IconsBaselineAccountBalanceWallet class="w-4.5 h-4.5 text-state-success block"/>
              <span class="text-sm">Paid</span>
            </div>
            <div class="font-700">{{ paid }} {{ currency }}</div>
          </div>
          <div class="space-y-2">
            <div class="flex space-x-1">
              <IconsBaselineAccountBalanceWallet class="w-4.5 h-4.5 text-state-warning block"/>
              <span class="text-sm">Not paid ({{ notPaidPercentage }}%)</span>
            </div>
            <div class="font-700">{{ notPaid }} {{ currency }}</div>
          </div>
        </div>
      </template>
    </UiCardTwoColumn>
</template>

<script lang="ts" setup>

export type Props = {
  total: number;
  currency: string;
  paid: number;
  notPaidPercentage: number;
  notPaid: number;
  averagePaymentDate: number;
}

defineProps<Props>();
</script>

<style module lang="scss">
.left-column {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 1px;
    background-color: rgb(248 250 255);
  }
}
</style>