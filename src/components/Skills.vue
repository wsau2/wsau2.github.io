<script setup lang="ts">
import { ref, computed } from "vue";
import SkillCard from "./SkillCard.vue";
import VueIcon from "../assets/icons/vue.svg?component"

// Backend
import NodeJSIcon from "../assets/icons/nodejs.svg?component"
import TypeScriptIcon from '../assets/icons/typescript.svg?component'
import PythonIcon from '../assets/icons/python.svg?component'

// the currently selected category
const selected = ref("Backend");

// categories to render
const categories = ["Backend", "Frontend", "DevOps", "Practices", "Tools"];


const skills = [
  { name: "Node.js", category: "Backend", icon: NodeJSIcon },
  { name: "TypeScript", category: "Backend", icon: TypeScriptIcon },
  { name: "Python", category: "Backend", icon: PythonIcon },
  { name: "SQL", category: "Backend", icon: "VueIcon" },
  { name: "PostgreSQL", category: "Backend", icon: "VueIcon" },
  { name: "REST APIs", category: "Backend", icon: "VueIcon" },

  { name: "React", category: "Frontend", icon: "VueIcon" },
  { name: "Next.js", category: "Frontend", icon: "VueIcon" },
  { name: "HTML5", category: "Frontend", icon: "VueIcon" },
  { name: "CSS3", category: "Frontend", icon: "VueIcon" },
  { name: "TailwindCSS", category: "Frontend", icon: "VueIcon" },
  { name: "Vue", category: "Frontend", icon: "VueIcon" },
  { name: "Responsive Design", category: "Frontend", icon: "VueIcon" },

  { name: "Docker", category: "DevOps", icon: "VueIcon" },
  { name: "Kubernetes", category: "DevOps", icon: "VueIcon" },

  { name: "Database Design", category: "Practices", icon: "VueIcon" },
  { name: "Event Driven Architecture", category: "Practices", icon: "VueIcon" },
  { name: "Agile", category: "Practices", icon: "VueIcon" },
  { name: "Scrum", category: "Practices", icon: "VueIcon" },
  { name: "OOP", category: "Practices", icon: "VueIcon" },
  { name: "TDD", category: "Practices", icon: "VueIcon" },

  { name: "Git", category: "Tools", icon: "VueIcon" },
  { name: "Super long name", category: "Tools", icon: "VueIcon" },
];

// Computed array of skills for the selected category
const filteredSkills = computed(() =>
  skills.filter((skill) => skill.category === selected.value)
);
</script>

<template>
  <section id="skills">
    <div class="my-10 flex flex-col space-y-6">
      <!-- Header -->
      <div class="flex justify-center">
        <h2 class="text-3xl font-bold tracking-tighter">Skills</h2>
      </div>

      <!-- Category Select -->
      <div class="flex flex-wrap gap-3 justify-center">
        <button
          v-for="category in categories"
          :key="category"
          @click="selected = category"
          :class="[
            'inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-8 rounded-md text-xs px-4 py-2 shadow-sm cursor-pointer',
            selected === category
              ? 'bg-black text-white'
              : 'bg-white text-black hover:bg-gray-200 border border-gray-300'
          ]"
        >
          {{ category }}
        </button>
      </div>

        <!-- Skill Cards -->
        <div class="flex justify-center">
          <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-xl">
                <SkillCard
                    v-for="(skill, index) in filteredSkills"
                    :key="skill.name"
                    :skill="skill.name"
                    :icon="skill.icon"
                    class="skill-card"
                    :style="{ animationDelay: `${index * 100}ms` }"
                />
          </div>
        </div>
    </div>
  </section>
</template>

<style scoped>
.skill-card {
  animation-name: animation-fade-in;
  animation-duration:0.5s;
  animation-timing-function: ease;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  animation-direction: alternate;
  animation-fill-mode: both;
  animation-play-state: running;
}

@keyframes animation-fade-in {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

</style>