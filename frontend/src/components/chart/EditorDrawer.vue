<script lang="ts" setup>
import ChartEditor from './ChartEditor.vue';
import { useChartStore } from '@/router/useChartStore';

const { chartOptions, isEditorOpen, onChangeEditorStatus } = useChartStore()

</script>
<template>
  <a-drawer title="Chart Editor" v-model:open="isEditorOpen" width="40%" placement="left"
    @close="onChangeEditorStatus(false)">
    <chart-editor :data="chartOptions" />
  </a-drawer>
</template>
