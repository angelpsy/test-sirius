<template>
  <UiCard class="space-y-3">
    <header class="flex items-center gap-2 pb-4" :class="$style['header']">
      <slot name="title" />
    </header>
    <main>
      <ul class="space-y-3 p-0">
        <li
          v-for="item in items"
          :key="item.id"
          class="flex justify-between items-center border-b border-gray-200 pb-3"
        >
          <span class="mr-1 inline-flex items-end"><IconsByteSizeBag /></span>
          <span class="font-bold text-xl mr-auto ml-1">{{ item.name }}</span>
          <span class="text-color-gray px-4">{{ item.daysAgo }} days ago</span>
          <span class="font-bold text-xl">{{ item.amount }}&nbsp;{{ item.currency }}</span>
        </li>
      </ul>
    </main>
    <footer class="font-bold flex items-center justify-between text-xl pt-4" :class="$style['footer']">
      Total: <span>{{ total }}&nbsp;{{ currency }}</span>
    </footer>
  </UiCard>
</template>

<script lang="ts" setup>
export type Props = {
  items: {
    id: string;
    name: string;
    daysAgo: number;
    amount: number;
    currency: string;
  }[];
}

const props = defineProps<Props>();


const total = computed(() => {
  return getRoundedNumber(props.items.reduce((acc, invoice) => acc + invoice.amount, 0));
});


const currency = computed(() => {
  return props.items[0]?.currency;
});
</script>

<style module>
.header {
  border-bottom: 1px solid rgb(248 250 255);
}
.footer {
  border-top: 1px solid rgb(248 250 255);
}
</style>
