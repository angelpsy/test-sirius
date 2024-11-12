<template>
  <component :is="htmlTag" :class="buttonClass">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type ButtonVariant = 'primary' | 'outline' | 'error';

type Props = {
  variant?: ButtonVariant;
  htmlTag?: 'button' | 'a' | 'div' | 'span';
};

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  htmlTag: 'button',
});

const baseClasses = 'rounded border px-4 py-2 text-xs font-medium transition';
const primaryClasses = 'bg-primary-blue-4 text-white border-primary-blue-4 hover:bg-primary-blue-3';
const outlineClasses = 'text-primary-blue-4 bg-white hover:text-white border-primary-blue-4 hover:bg-primary-blue-3';
const errorClasses = 'bg-red-500 text-white border-red-500 hover:bg-red-600';

const buttonClass = computed(() => {
  switch (props.variant) {
    case 'error':
      return `${baseClasses} ${errorClasses}`;
    case 'outline':
      return `${baseClasses} ${outlineClasses}`;
    case 'primary':
      return `${baseClasses} ${primaryClasses}`;
    default:
      throw new Error(`Unknown variant: ${props.variant}`);
  }
});
</script>