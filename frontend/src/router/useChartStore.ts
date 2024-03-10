import { reactive, ref } from "vue"

const chartData = ref<Array<any>>([10, 0, 8, 2, 6, 4, 5, 5])
const chartType = ref<String>("line")
const chartTitle = ref<String>("")
const isEditorOpen = ref<Boolean>(true);
let chartOptions = reactive<any>({
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

function setChartData(data: Array<any>) {
  chartData.value = data
}

function setChartOptions(options: any) {
  Object.assign(chartOptions, options) 
}

function setChartType(type: String) {
  chartType.value = type
}

function setChartTitle(title: String) {
  chartTitle.value = title
}

function onChangeEditorStatus(status: boolean) {
  isEditorOpen.value = status
}

export function useChartStore() {
  return {
    chartData,
    chartOptions,
    chartType,
    chartTitle,
    isEditorOpen,
    setChartData,
    setChartOptions,
    setChartType,
    setChartTitle,
    onChangeEditorStatus
  }
}

