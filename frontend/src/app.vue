<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppSidebar from './components/AppSidebar.vue';
</script>

<template>
  <a-layout id="app">
    <app-header />
    <a-layout>
      <app-sidebar />
      <a-layout>
        <a-layout-content class="content">
          <router-view />
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          2024 © Cihat SALIK
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.ant-layout-content {
  min-height: calc(100vh - 128px);
}
</style>
