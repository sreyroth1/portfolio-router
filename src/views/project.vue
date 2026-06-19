<script setup lang="ts">
const projects = [
  {
    title: "Attendance Management System",
  },
];
</script>

<template>
  <section>
    <h1>Projects</h1>

    <div v-for="project in projects" :key="project.title">
      {{ project.title }}
    </div>
  </section>
</template>