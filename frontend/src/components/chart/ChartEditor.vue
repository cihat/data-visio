<script lang="ts" setup>
import MonacoEditor from '@guolao/vue-monaco-editor';
import { useChartStore } from '@/router/useChartStore';
import { shallowRef } from 'vue';

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  fontSize: 14,
}

const { chartOptions, setChartOptions } = useChartStore()
const code = JSON.stringify(chartOptions, null, 2)
const editorRef = shallowRef()
const handleMount = (editor: any) => (editorRef.value = editor)

const onChange = (newValue: string) => {
  setChartOptions(JSON.parse(newValue))
}
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
