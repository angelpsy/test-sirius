<script setup lang="ts">
import type { NuxtError } from '#app'

interface ErrorData {
  refreshData?: () => void;
}

interface CustomNuxtError extends NuxtError {
  data?: ErrorData;
}

const props = defineProps({
  error: Object as () => CustomNuxtError
})

const refreshData = () => {
  props.error?.data?.refreshData?.()
}
</script>

<template>
  <div>
    <h2>{{ error?.statusCode }}</h2>
    <p>{{ error?.message }}</p>
    <button @click="refreshData">Refresh Data</button>
  </div>
</template>
