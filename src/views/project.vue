<script setup lang="ts">
const selectedProjects = [
  {
    title: "Attendance Management System (VC1 project)",
    range: "02 Feb – 31 Mar 2026",
    stack: "OOP, Vue.js, Laravel, Redis, Telegram Bot, MySQL",
    bullets: [
      "Built a full-stack attendance management system.",
      "Delivered successfully while learning new technologies during development.",
      "Collaborated in a team using modern engineering practices.",
    ],
  },
  {
    title: "Weather Web App",
    range: "22 Dec 2025 – 02 Jan 2026",
    stack: "JavaScript, Real-time Weather API",
    bullets: [
      "Scrum Master: organized tasks and managed workflow with Agile methods.",
      "Coordinated communication and ensured timely completion.",
      "Integrated a live weather API for real-time data display.",
    ],
  },
  {
    title: "Inventory Management System (Algorithm Project)",
    range: "Oct 2025 – Nov 2026",
    stack: "Algorithms, Full-stack development",
    bullets: [
      "Designed algorithms to manage product data efficiently.",
      "Demonstrated strong self-management and completion skills.",
    ],
  },
];
</script>

<template>
  <section>
    <h1 class="title">Projects</h1>
    <p class="subtitle">
      A selection of projects from your school work & challenges.
    </p>

    <div class="grid">
      <article v-for="p in selectedProjects" :key="p.title" class="card">
        <div class="card-header">
          <h2 class="card-title">{{ p.title }}</h2>
          <div class="card-range">{{ p.range }}</div>
        </div>
        <div class="card-stack">{{ p.stack }}</div>
        <ul class="card-list">
          <li v-for="b in p.bullets" :key="b">{{ b }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.title {
  font-size: 2rem;
  margin: 0 0 6px;
}
.subtitle {
  margin: 0 0 18px;
  color: #4b5563;
}
.grid {
  display: grid;
  gap: 14px;
}
.card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 16px;
}
.card-header {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: baseline;
  justify-content: space-between;
}
.card-title {
  margin: 0;
  font-size: 1.1rem;
}
.card-range {
  color: #6b7280;
  font-size: 0.95rem;
}
.card-stack {
  margin-top: 10px;
  color: #374151;
  font-weight: 600;
}
.card-list {
  margin: 10px 0 0;
  padding-left: 18px;
  color: #374151;
}

@media (min-width: 900px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
