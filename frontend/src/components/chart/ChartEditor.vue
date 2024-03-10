<script lang="ts" setup>
import MonacoEditor from '@guolao/vue-monaco-editor';
import { useChartStore } from '@/router/useChartStore';
import { shallowRef, watch } from 'vue';
const { chartOptions, setChartOptions } = useChartStore()

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  fontSize: 16,
}

const code = JSON.stringify(chartOptions, null, 2)
const editorRef = shallowRef()
const handleMount = (editor: any) => (editorRef.value = editor)

const onChange = (newValue: string) => {
  setChartOptions(JSON.parse(newValue))
}


watch(chartOptions, (newValue) => {
  console.log('newValue', newValue)
  // editorRef.value.setValue(JSON.stringify(newValue, null, 2))
})

</script>

<template>
  <monaco-editor v-model:value="code" theme="vs-dark" language="json" :options="MONACO_EDITOR_OPTIONS"
    @mount="handleMount" @change="onChange" />
</template>

<style scoped>
.editor {
  height: 100%;
}
</style>
