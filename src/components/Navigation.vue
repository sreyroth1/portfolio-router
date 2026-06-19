<template>
  <nav class="navbar">
    <div class="nav-container">
      <a href="#home" class="logo">SREYROTH<span class="dot">.</span></a>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(16, 84, 180, 0.8);
  backdrop-filter: blur(12px); /* Blur effect under the nav */
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid #eef0f3;
  z-index: 1000;
}

.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ebe5e5;
  text-decoration: none;
  letter-spacing: -0.5px;
}

.logo .dot {
  color: #edeef0; /* Clean accent blue */
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #ece9e9;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #1a1a1a;
}
</style>