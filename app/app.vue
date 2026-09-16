<template>
  <div id="portfolio-app">
    <!-- Preloader screen -->
    <UiPreloader />

    <!-- Custom Cursor -->
    <UiCustomCursor />

    <!-- Accessibility route announcer -->
    <NuxtRouteAnnouncer />

    <!-- Page Content -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// Main application shell
</script>

<style>
#portfolio-app {
  min-height: 100vh;
  position: relative;
}
</style>
