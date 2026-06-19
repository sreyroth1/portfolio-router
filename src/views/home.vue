<script setup lang="ts">
const experiences = [
  {
    title: "Sister Of Code Club Leader",
    range: "Jun 2026 – present",
    description:
      "Deliver coding knowledge (Code.org, Scratch, HTML/CSS, WIX, AI) to high school students.",
    bullets: [],
  },
  {
    title: "AI Ready Asean Youth Challenge",
    range: "02 – 24 March 2026",
    description:
      "AI-based concept platform to detect deepfake and scam content, improving digital safety and awareness among users in Cambodia and ASEAN.",
    bullets: [],
  },
  {
    title: "Attendance Management System (VC1 project) — Developer",
    range: "02 Feb – 31 Mar 2026",
    description: "",
    bullets: [
      "Collaborated in a team to develop a full-stack system.",
      "Worked with modern technologies including OOP, Vue.js, Laravel, Redis, Telegram Bot, and MySQL.",
      "Successfully delivered the system despite learning new technologies during development.",
    ],
  },
  {
    title: "Weather Web App — Scrum Master",
    range: "22 Dec 2025 – 02 Jan 2026",
    description: "",
    bullets: [
      "Led a team as Scrum Master, organizing tasks and managing workflow using Agile methods.",
      "Coordinated team communication and ensured timely project completion.",
      "Integrated a real-time weather API for live data display.",
    ],
  },
  {
    title:
      "Inventory Management System — Full-stack Developer (Algorithm Project)",
    range: "Oct 2025 – Nov 2026",
    description: "",
    bullets: [
      "Applied problem-solving and algorithm design to manage product data efficiently.",
      "Demonstrated strong self-management and project completion skills.",
    ],
  },
];
</script>

<template>
  <section>
    <h1 class="title">Sreyroth</h1>
    <p class="subtitle">
      Front-End / Full-Stack Developer • Basic OOP • QA mindset
    </p>

    <h2 class="section-heading">Professional Experiences (School Project)</h2>

    <div class="grid">
      <article v-for="e in experiences" :key="e.title" class="card">
        <div class="card-header">
          <h3 class="card-title">{{ e.title }}</h3>
          <div class="card-range">{{ e.range }}</div>
        </div>
        <p v-if="e.description" class="card-desc">{{ e.description }}</p>
        <ul v-if="e.bullets.length" class="card-list">
          <li v-for="b in e.bullets" :key="b">{{ b }}</li>
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
  margin: 0 0 20px;
  color: #4b5563;
}
.section-heading {
  margin: 26px 0 14px;
  font-size: 1.25rem;
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
  font-size: 1.05rem;
}

.card-range {
  color: #6b7280;
  font-size: 0.95rem;
}

.card-desc {
  margin: 10px 0 0;
  color: #374151;
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
