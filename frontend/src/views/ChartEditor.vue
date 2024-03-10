<script setup lang="ts" >
import EditorDrawer from '@/components/chart/EditorDrawer.vue';
import HighCharts from '@/components/chart/HighCharts.vue';
import { useChartStore } from '@/router/useChartStore';
import DropdownComponent from '@/components/Dropdown.vue';
import { ref } from 'vue';
const { onChangeEditorStatus } = useChartStore()



</script>
<template>
  <a-layout>
    <a-layout-header class="header">
      <a-button type="primary" @click="onChangeEditorStatus(true)">Open Editor (⌘ + E)</a-button>
      <dropdown-component />

    </a-layout-header>
    <a-row class="chart-container" justify="space-around" align="middle">
      <a-col :span="16">
        <high-charts />
      </a-col>
    </a-row>
    <editor-drawer />
  </a-layout>
</template>

<style scoped>
.chart-container {
  height: 100vh;
}
</style>
