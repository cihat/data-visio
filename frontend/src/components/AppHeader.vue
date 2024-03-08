<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const selected = ref<string[]>(['']);
</script>

<template>
  <a-layout-header class="header">
    <a-menu v-model:selectedKeys="selected" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
      <a-menu-item key="home">
        <RouterLink to="/">
          Home
        </RouterLink>
      </a-menu-item>
      <a-menu-item key="chart">
        <RouterLink to="/chart">
          Chart
        </RouterLink>
      </a-menu-item>
      <a-menu-item key="editor">
        <RouterLink to="/editor">
          Editor
        </RouterLink>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>
