<script lang="ts" setup>
import { ref, reactive } from 'vue';
const selectedKeys2 = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);

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
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          Chart
          <highcharts :options="chartOptions"></highcharts>

        </a-layout-content>
      </a-layout>
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
