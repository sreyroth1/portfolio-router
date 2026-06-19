<script setup lang="ts">
const experiences = [
  {
    title: "Web Developer",
    range: "Jun 2026 – Present",
  },
];
</script>

<template>
  <section>
    <h1>Home</h1>

    <div v-for="item in experiences" :key="item.title">
      <h3>{{ item.title }}</h3>
      <p>{{ item.range }}</p>
    </div>
  </section>
</template>