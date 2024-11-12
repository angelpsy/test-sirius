<template>
  <div
    class="bg-red-50 border border-red-300 text-red-700 rounded-md p-4 space-y-2"
  >
    <div class="flex items-center space-x-2">
      <IconsCodiconError class="w-5 h-5 text-red-700" />
      <span class="font-semibold">{{ title }}</span>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
