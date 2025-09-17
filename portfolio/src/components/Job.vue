<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  company: string
  role: string
  date: string
  image: string
  bullets: string[]
}

const props = defineProps<Props>()


const isOpen = ref(true);

function beforeEnter(el: Element) {
  (el as HTMLElement).style.maxHeight = "0";
  (el as HTMLElement).style.opacity = "0";
}
function enter(el: Element) {
  const element = el as HTMLElement;
  element.style.transition = "max-height 0.3s ease, opacity 0.3s ease";
  requestAnimationFrame(() => {
    element.style.maxHeight = element.scrollHeight + "px";
    element.style.opacity = "1";
  });
}
function beforeLeave(el: Element) {
  const element = el as HTMLElement;
  element.style.maxHeight = element.scrollHeight + "px";
  element.style.opacity = "1";
}
function leave(el: Element) {
  const element = el as HTMLElement;
  element.style.transition = "max-height 0.3s ease, opacity 0.3s ease";
  requestAnimationFrame(() => {
    element.style.maxHeight = "0";
    element.style.opacity = "0";
  });
}
</script>

<template>
    <div class="block cursor-pointer group" @click="isOpen = !isOpen">
        <div class="flex">
            <!-- Image -->
            <div class="flex-none">
                <span class="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                    <img :src="props.image" class="aspect-square h-full w-full object-contain"/>
                </span>
            </div>
            
            <!-- Content -->
            <div class="flex-grow ml-4">
                <div class="">
                    <div class="flex items-center justify-between">
                        <h3 class="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm>Kubotek">{{ props.company }}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                            class="transition-all duration-300 opacity-0 group-hover:opacity-100 ease-out translate-x-0 group-hover:translate-x-1" 
                            :class="{'rotate-90':!isOpen}">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </h3>
                        <div class="muted-text text-xs sm:text-sm">{{ props.date }}</div>
                    </div>
                    <div class="text-xs">{{ props.role }}</div>
                </div>

                <!-- Collapsable content -->
                <Transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @before-leave="beforeLeave"
                    @leave="leave"
                >
                    <ul v-show="!isOpen" class="mt-2 text-xs sm:text-sm list-disc list-outside ml-4 space-y-1">
                        <li v-for="(bullet, idx) in props.bullets" :key="idx">{{ bullet }}</li>
                    </ul>
                </Transition>
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>