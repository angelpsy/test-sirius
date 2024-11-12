<template>
  <component :is="HtmlTag" :class="classes">
    <slot />
  </component>
</template>

<script setup lang="ts">
// The 'level' prop determines the heading level (e.g., 1 for <h1>, 2 for <h2>, etc.)
// If 'level' is 0 or undefined, it defaults to a 'div' element.
const props = defineProps<{
  level?: number;
}>();

const HtmlTag = computed(() => {
  return props.level === 0 || props.level === undefined ? 'div' : `h${props.level}`;
});

const classes = computed(() => {
  switch (props.level) {
    case 1:
      return `lg:text-10 font-700 text-primary-dark text-xl`;
    case 2:
      return `font-700 text-sm lg:text-xl`;
    default:
      return '';
  }
});
</script>