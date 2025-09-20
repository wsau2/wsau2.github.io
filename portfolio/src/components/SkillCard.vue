<script setup lang="ts">
// import type { DefineComponent } from 'vue';

interface Props {
    skill: string,
    icon: string
}
const props = defineProps<Props>();
</script>

<template>
<div class="w-full">
    <div class="flex flex-col items-center justify-center p-3 sm:p-4 bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors w-full h-24 sm:h-28">
        <span class="text-xs text-center w-full ">{{ props.skill }}</span>
        <!-- <component :is="props.icon" class="w-6 h-6 mt-2" /> -->
        <img :src="props.icon" :alt="props.skill + ' icon'" class="w-6 h-6 mt-2" />
    </div>
</div>
</template>

<style scoped>
</style>