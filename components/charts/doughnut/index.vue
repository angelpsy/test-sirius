<template>
  <Doughnut :data="data" :options="options" />
</template>

<script lang="ts" setup>
import { Chart as ChartJS, ArcElement, type ChartData } from 'chart.js';
import { Doughnut } from 'vue-chartjs';

ChartJS.register(ArcElement);

const options = {
  responsive: true,
  maintainAspectRatio: true
}

defineProps<{
  data: ChartData<'doughnut'>;
}>();

</script>