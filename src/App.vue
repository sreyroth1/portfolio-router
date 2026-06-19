<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app-shell">
    <Navigation />
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  width: min(1000px, 100%);
  margin: 0 auto;
  padding: 24px 16px 56px;
}
</style>
