<script setup lang="ts">
import { Menu, type MenuProps } from 'ant-design-vue';
import { ref } from 'vue';
import { useChartStore } from '@/router/useChartStore';


const { chartOptions, setChartOptions } = useChartStore()

const chartTypes = ref([
  { key: 'line', value: 'Line' },
  { key: 'bar', value: 'Bar' },
  { key: 'pie', value: 'Pie' },
  { key: 'area', value: 'Area' },
  // { key: 'scatter', value: 'Scatter' },
  // { key: 'bubble', value: 'Bubble' },
  // { key: 'heatmap', value: 'Heatmap' },
  // { key: 'radar', value: 'Radar' },
  // { key: 'gauge', value: 'Gauge' },
  // { key: 'funnel', value: 'Funnel' },
  // { key: 'map', value: 'Map' },
  // { key: 'sankey', value: 'Sankey' },
  // { key: 'treemap', value: 'Treemap' },
  // { key: 'sunburst', value: 'Sunburst' },
  // { key: 'boxplot', value: 'Boxplot' },
  // { key: 'candlestick', value: 'Candlestick' },
  // { key: 'ohlc', value: 'OHLC' },
  // { key: 'parallel', value: 'Parallel' },
  // { key: 'pictorialBar', value: 'PictorialBar' },
  // { key: 'themeRiver', value: 'ThemeRiver' },
  // { key: 'custom', value: 'Custom' },
  // { key: 'other', value: 'Other' },
])

const handleDropdownClick = (e: Event) => {
  console.log('click left button', e);
};

const handleMenuClick: MenuProps['onClick'] = e => {
  const { key } = e;

  setChartOptions({
    ...chartOptions, chart: {
      type: key
    }
  });
  console.log('chartOptions', chartOptions);

};
</script>

<template>
  <a-dropdown-button class="dropdown">
    Chart Types
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item v-for="type in chartTypes" :key="type.key">
          {{ type.value }}
        </a-menu-item>

      </a-menu>
    </template>
  </a-dropdown-button>
</template>

<style scoped lang="scss">
.dropdown {
  margin-right: 8px;
  margin-left: 8px;
  display: inline-block;
  vertical-align: middle;

  .ant-btn {
    display: flex;
    align-items: center;
  }

  .anticon {
    margin-left: 8px;
  }
}
</style>
