<template>
  <div class="flex flex-wrap">
    <UiButton
      :key="currency.id"
      class="mb-2 mr-2"
      v-for="currency in allCurrencies"
      :variant="currency.id === currentCurrencyId ? 'primary' : 'outline'"
      @click="handleCurrencyChange(currency.id)"
    >
      {{ currency.symbol }}
    </UiButton>
  </div>
</template>

<script lang="ts" setup>
import type { CurrencyId } from '~/types/currencies';

defineProps<{
  allCurrencies: CurrencyId[];
  currentCurrencyId: CurrencyId;
}>();

const emit = defineEmits<{
  (e: 'changeCurrentCurrency', currencyId: CurrencyId): void;
}>();

const handleCurrencyChange = (currencyId: CurrencyId) => {
  emit('changeCurrentCurrency', currencyId);
}
</script>