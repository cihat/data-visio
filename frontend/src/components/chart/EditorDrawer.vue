<script lang="ts" setup>
import ChartEditor from './ChartEditor.vue';
import { useChartStore } from '@/router/useChartStore';

const { chartOptions, isEditorOpen, onChangeEditorStatus } = useChartStore()

window.addEventListener('keydown', (e) => {
  if (e.key === 'e' && e.metaKey) onChangeEditorStatus(isEditorOpen.value ? false : true)
})

</script>
<template>
  <a-drawer title="Chart Editor" v-model:open="isEditorOpen" width="50%" placement="left"
    @close="onChangeEditorStatus(false)">
    <chart-editor :data="chartOptions" />
  </a-drawer>
</template>
