<template>
  <div class="flex justify-between space-x-2.5 text-sm">
          <div class="flex space-x-2.5">
            <div
              class="flex h-5 w-5 min-w-5 max-w-5 items-center justify-center overflow-hidden rounded-full text-xs"
              :class="classes.transactions"
            >
              <slot name="transactions" />
            </div>
            <div :class="classes.name">
              <slot name="name" />
            </div>
          </div>
          <div :class="classes.money">
            <slot name="money" />
          </div>
        </div>
</template>

<script lang="ts" setup>
defineProps<{
  classes: {
    transactions?: string;
    name?: string;
    money?: string;
  };
}>();
</script>