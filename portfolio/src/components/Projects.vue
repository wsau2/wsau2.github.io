<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
</script>

<template>
    <section id="projects">
        <div class="my-10">
            <div class="flex justify-center">
                <h2 class="text-3xl font-bold tracking-tighter">Projects</h2>
            </div>
            <div class="flex flex-col space-y-5 my-5">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>