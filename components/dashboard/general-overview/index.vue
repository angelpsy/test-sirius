<template>
  <div class="space-y-3 px-5">
    <header class="flex justify-between">
      <UiTypographyHeadline :level="2">General overview</UiTypographyHeadline>
      <div>Filter</div>
    </header>
    <main :class="$style['main']">
      <Card
        v-bind="generalInvoiceData"
      >
        <template #title>
          <IconsOutlineShowChart
            class="text-state-success block h-6 w-6 min-w-6"
          ></IconsOutlineShowChart>
          Total invoiced
        </template>
      </Card>
      <Card
        v-bind="generalPaymentData"
      >
        <template #title>
          <IconsOutlineShowChart
            class="text-state-error rotate-x-180 block h-6 w-6 min-w-6 transform"
          ></IconsOutlineShowChart>
          Total payments
        </template>
      </Card>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Card, { type Props as CardComponentProps } from "./card.vue";

defineProps<{
  generalInvoiceData: CardComponentProps;
  generalPaymentData: CardComponentProps;
}>();
</script>

<style module>
.main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0.75rem;
}
</style>
