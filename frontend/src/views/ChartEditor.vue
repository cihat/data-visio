<script setup lang="ts" >
import EditorDrawer from '@/components/chart/EditorDrawer.vue';
import HighCharts from '@/components/chart/HighCharts.vue';
import { useChartStore } from '@/router/useChartStore';

const { onChangeEditorStatus } = useChartStore()

</script>
<template>
  <a-row class="chart-container" justify="space-around" align="middle">
    <a-col :span="16">
      <a-button type="primary" @click="onChangeEditorStatus(true)">Open Editor (⌘ + E)</a-button>
      <high-charts />
    </a-col>
  </a-row>
  <editor-drawer />
</template>

<style scoped>
.chart-container {
  padding-top: 20px;
  height: 100vh;
}
</style>
