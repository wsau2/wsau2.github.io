<script setup lang="ts">
import Intro from './components/Intro.vue'
import SectionDivider from './components/SectionDivider.vue'
import Projects from './components/Projects.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Intro />
    <div class="flex flex-col min-h-screen">
      <SectionDivider />
      <Projects />
    </div>
  </div>
</template>

<style scoped>
</style>
