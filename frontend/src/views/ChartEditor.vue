<script setup lang="ts" >
import MonocaEditor from '@/components/chart/MonocaEditor.vue';
import { Pane, Splitpanes } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { reactive } from 'vue'

const chartOptions = reactive({
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Test Dashboard'
  },
  series: [{
    data: [10, 0, 8, 2, 6, 4, 5, 5]
  }],
  accessibility: {
    description: 'This is a description of the entire chart.'
  }
})

</script>
<template>
  <a-layout>
    <splitpanes>
      <pane min-size="30" max-size="70" class="wrapper">
        <monoca-editor />
      </pane>
      <pane class="wrapper">
        <highcharts :options="chartOptions"></highcharts>
      </pane>
    </splitpanes>
  </a-layout>
</template>
