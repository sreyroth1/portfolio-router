<script setup lang="ts">
const trainings = [
  {
    range: "Jan 2026 – Present",
    label: "Sisters of Code Ambassador Program 2026",
  },
  { range: "11 Mar 2026", label: "Full Stack Development | PNC" },
  {
    range: "May – June 2025",
    label: "Leadership & Professional Development | YRDP",
  },
  { range: "06 Aug 2025", label: "Digital Security Training (DST) | EB" },
  {
    range: "22 Nov 2025",
    label: "Youth Digital storytelling & Community Engagement | VBNK",
  },
];

const languages = ["HTML", "CSS", "JavaScript", "PHP", "Node.js"];

const tools = [
  "Postman",
  "Jira",
  "GitHub",
  "Vercel",
  "AWS",
  "GoDaddy",
  "VS Code",
  "Google’s service",
  "Code.org / Scratch",
];

const databases = [
  "MongoDB (basic)",
  "MySQL (basic)",
  "SQL / NoSQL queries (basic)",
];
</script>

<template>
  <section>
    <h1 class="title">About</h1>

    <h2 class="section-heading">Training & Professional Development</h2>
    <div class="grid">
      <article v-for="t in trainings" :key="t.label" class="card">
        <div class="card-range">{{ t.range }}</div>
        <div class="card-label">{{ t.label }}</div>
      </article>
    </div>

    <h2 class="section-heading">Languages</h2>
    <div class="chips">
      <span v-for="l in languages" :key="l" class="chip">{{ l }}</span>
    </div>

    <h2 class="section-heading">Tools</h2>
    <div class="chips">
      <span v-for="t in tools" :key="t" class="chip">{{ t }}</span>
    </div>

    <h2 class="section-heading">Database</h2>
    <div class="chips">
      <span v-for="d in databases" :key="d" class="chip">{{ d }}</span>
    </div>
  </section>
</template>

<style scoped>
.title {
  font-size: 2rem;
  margin: 0 0 8px;
}
.section-heading {
  margin: 22px 0 12px;
  font-size: 1.15rem;
}
.grid {
  display: grid;
  gap: 12px;
}
.card {
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 14px;
  background: white;
}
.card-range {
  color: #6b7280;
  font-size: 0.95rem;
  margin-bottom: 6px;
}
.card-label {
  font-weight: 600;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.chip {
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 999px;
  padding: 8px 10px;
  font-size: 0.92rem;
}
</style>
