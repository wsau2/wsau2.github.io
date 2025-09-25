<script setup lang="ts">
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import WorkExperience from './components/WorkExperience.vue';
import Education from './components/Education.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';
import { onMounted } from 'vue';

onMounted(() => {
  requestAnimationFrame(() => {
    document.querySelectorAll<HTMLElement>(".fade-blur").forEach((el, i) => {
      // add staggered delay (e.g. 0.3s per step)
      el.style.transitionDelay = `${i * 0.3}s`
      el.classList.add("active");
    });
  });
});
</script>

<template>
  <main class="flex flex-col min-h-screen max-w-2xl antialiased mx-auto py-12 sm:py-24 px-6 space-y-10">
    <Intro class="fade-blur"/>
    <About class="fade-blur"/>
    <WorkExperience class="fade-blur"/>
    <Education class="fade-blur"/>
    <Projects class="fade-blur"/>
    <Skills class="fade-blur"/>
    <Contact class="fade-blur"/>
  </main>
</template>

<style scoped>
.fade-blur {
  opacity: 0;
  filter: blur(10px);
  transform: translateY(20px);
  transition: all 0.8s ease;
}

.fade-blur.active {
  opacity: 1;
  filter: blur(0px);
  transform: translateY(0);
}
</style>
