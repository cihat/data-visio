<script lang="ts" setup>
import MonoEditor from '@guolao/vue-monaco-editor';
import { ref } from 'vue';

const code = ref<string>('console.log("Hello, world!")console.log("Hello, world!")console.log("Hello, world!")console.log("Hello, world!")console.log("Hello, world!")console.log("Hello, world!")console.log("Hello, world!")console.log("Hello, world!")');

</script>

<template>
  <mono-editor class="editor" v-model="code" language="javascript" theme="vs-dark" />
</template>

<style scoped>
.editor {
  height: 100%;
  min-height: 80vh;
}
</style>
