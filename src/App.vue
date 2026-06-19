<template>
  <div class="app-wrapper">
    <Navigation />

    <main class="content">
      <!-- Home / Hero Section -->
      <section id="home" class="hero">
        <p class="subtitle">Frontend Developer & Designer</p>
        <h1>Designing clean interfaces and seamless web experiences.</h1>
        <p class="description">
          Hi, I'm Sreyroth. I specialize in building minimal, highly functional,
          and user-centric web applications using Vue and modern frontend tools.
        </p>
        <div class="cta-group">
          <a href="#projects" class="btn btn-primary">See my work</a>
          <a href="#contact" class="btn btn-secondary">Let's talk</a>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="projects">
        <div class="section-header">
          <h2>Selected Work</h2>
          <p>A collection of recent applications and design experiments.</p>
        </div>

        <div class="grid">
          <!-- Loop through your real projects array here -->
          <div class="card" v-for="project in myProjects" :key="project.id">
            <img :src="project.image" :alt="project.title" class="card-image" />
            <div class="card-meta">
              <span class="tag" v-for="tech in project.tags" :key="tech">{{
                tech
              }}</span>
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <a :href="project.link" target="_blank" class="card-link"
              >View Project ↗</a
            >
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="contact">
        <h2>Get in touch.</h2>
        <p>
          Whether you have a project in mind or just want to say hi, my inbox is
          open.
        </p>
        <a href="mailto:your.email@example.com" class="email-link"
          >sreyroth@gmail.com</a
        >
      </section>
    </main>
  </div>
</template>

<script setup>
import Navigation from "@/components/Navigation.vue";

// Define your real projects here
const myProjects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "An intuitive administration interface optimizing workflow automation and real-time inventory tracking metrics.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKKy3_MvIVZnnJS1E8pK2ZqxI2bV1ySOIj1xkn6aRwdVZJqv9DR4z2Ujz&s=10", // Maps directly to public/project-one.jpg
    tags: ["Vue 3", "Vite", "Pinia"],
    link: "https://unblast.com/wp-content/uploads/2020/08/Ecommerce-Dashboard-UI-Template-1.jpg",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A minimal Kanban board application designed to streamline personal productivity and daily event planning.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBU-mkhV_sRdmbg9JYM-b8QtN6j14VWbEmjnRtHL9kyUeLmJunzg4ngM&s=10", // Maps directly to public/project-two.jpg
    tags: ["Vue 3", "CSS Grid", "LocalStorage"],
    link: "https://github.com/yourusername/project-two",
  },
  {
    id: 3,
    title: "Weather Station Widget",
    description:
      "A responsive weather application fetching live geolocation data from open weather telemetry APIs.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv9_fIBhcbFLBpsS1Wsi1Fd3Xn1LC90ZNX43JBdMvnhMv3Y2RR0nZAidI&s=10", // Maps directly to public/project-three.jpg
    tags: ["JavaScript", "Fetch API", "Tailwind"],
    link: "https://github.com/yourusername/project-three",
  },
];
</script>

<style>
/* Reset & Base Variables */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fcfcfd;
  color: #333333;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

.content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

section {
  padding: 8rem 0 4rem 0;
}

/* Hero Section Styles */
.hero {
  padding-top: 12rem;
}

.subtitle {
  color: #0066cc;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: 3rem;
  color: #1a1a1a;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -1px;
  max-width: 750px;
  margin: 0 0 1.5rem 0;
}

.description {
  font-size: 1.15rem;
  color: #666666;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 2.5rem;
}

/* Modern Minimal Buttons */
.cta-group {
  display: flex;
  gap: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: #1a1a1a;
  color: #ffffff;
}

.btn-primary:hover {
  background-color: #333333;
}

.btn-secondary {
  background-color: transparent;
  color: #1a1a1a;
  border: 1px solid #dddddd;
}

.btn-secondary:hover {
  background-color: #f4f4f5;
}

/* Projects Section Styles */
.section-header {
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2rem;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
}

.section-header p {
  color: #666666;
  margin: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
}

.card {
  display: flex;
  flex-direction: column;
}

.card-image {
  width: 100%;
  height: 220px;
  object-fit: cover; /* Ensures images fill space cleanly without distortion */
  border-radius: 8px;
  margin-bottom: 1.25rem;
  transition: transform 0.3s ease;
}

.card:hover .card-image {
  transform: translateY(-4px);
}

.card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.tag {
  font-size: 0.75rem;
  background-color: #f0f2f5;
  color: #666666;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
}

.card h3 {
  font-size: 1.25rem;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
}

.card p {
  color: #666666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 1rem 0;
}

.card-link {
  color: #0066cc;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
}

/* Contact Section Styles */
.contact {
  text-align: center;
  padding: 10rem 0;
}

.contact h2 {
  font-size: 2.5rem;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
}

.contact p {
  color: #666666;
  max-width: 450px;
  margin: 0 auto 2rem auto;
  line-height: 1.5;
}

.email-link {
  font-size: 1.5rem;
  color: #0066cc;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;
}

.email-link:hover {
  border-color: #0066cc;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .hero h1 {
    font-size: 2.25rem;
  }
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
