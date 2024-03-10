<script setup lang="ts">
import { useChartStore } from '@/router/useChartStore';

const { chartOptions } = useChartStore()
</script>

<template>
  <high-charts :options="chartOptions" />
</template>
