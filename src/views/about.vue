<script setup lang="ts">
const languages = ["HTML", "CSS", "JavaScript", "PHP", "Node.js"];
</script>

<template>
  <section>
    <h1>About</h1>

    <div>
      <span v-for="language in languages" :key="language">
        {{ language }}
      </span>
    </div>
  </section>
</template>