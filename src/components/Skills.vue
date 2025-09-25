<script setup lang="ts">
import { ref, computed } from "vue";
import SkillCard from "./SkillCard.vue";

const icons = import.meta.glob("../assets/icons/*.svg", {
  import: "default",
  eager: true,
});

function getIcon(name: string):string {
  // matches "../assets/icons/nodejs.svg"
  const key = `../assets/icons/${name}.svg`;
  return icons[key] as string;
}

// the currently selected category
const selected = ref("Backend");

// categories to render
const categories = ["Backend", "Frontend", "Practices", "Tools"];
// const categories = ["Backend", "Frontend", "DevOps", "Practices", "Tools"];


const skills = [
  { name: "Node.js", category: "Backend", icon: getIcon("nodejs") },
  { name: "TypeScript", category: "Backend", icon: getIcon("typescript") },
  { name: "Python", category: "Backend", icon: getIcon("python") },
  { name: "SQL", category: "Backend", icon: getIcon("sql") },
  { name: "PostgreSQL", category: "Backend", icon: getIcon("postgresql") },
  { name: "REST APIs", category: "Backend", icon: getIcon("restapi") },

  { name: "React", category: "Frontend", icon: getIcon("react") },
  { name: "Next.js", category: "Frontend", icon: getIcon("nextjs") },
  { name: "HTML5", category: "Frontend", icon: getIcon("html5") },
  { name: "CSS3", category: "Frontend", icon: getIcon("css3") },
  { name: "TailwindCSS", category: "Frontend", icon: getIcon("tailwindcss") },
  { name: "Vue", category: "Frontend", icon: getIcon("vue") },
  { name: "Responsive Design", category: "Frontend", icon: getIcon("responsive") },

  { name: "Docker", category: "DevOps", icon: getIcon("docker") },
  { name: "Kubernetes", category: "DevOps", icon: getIcon("kubernetes") },

  { name: "Database Design", category: "Practices", icon: getIcon("databasedesign") },
  { name: "Event Driven Architecture", category: "Practices", icon: getIcon("eventdrivenarchitecture") },
  { name: "Agile", category: "Practices", icon: getIcon("agile") },
  { name: "Scrum", category: "Practices", icon: getIcon("scrum") },
  { name: "OOP", category: "Practices", icon: getIcon("oop") },
  { name: "TDD", category: "Practices", icon: getIcon("tdd") },

  { name: "Git", category: "Tools", icon: getIcon("git") },
  { name: "Github", category: "Tools", icon: getIcon("github") },
  { name: "macOS", category: "Tools", icon: getIcon("macos") },
  { name: "Windows", category: "Tools", icon: getIcon("windows") },
  { name: "Railway", category: "Tools", icon: getIcon("railway") },
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