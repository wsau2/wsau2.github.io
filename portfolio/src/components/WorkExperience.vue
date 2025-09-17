<script setup lang="ts">
import Job from './Job.vue';
import KubotekPhoto from '../assets/Saulnier-William-Sunset-250410-1913.jpg'
import TriPhoto from '../assets/triathlon-will-photo.jpg'
</script>

<template>
    <section id="work">
        <div class="flex flex-col gap-y-3">
            <h2 class="text-xl font-bold">Work Experience</h2>
            <Job
                company="Kubotek"
                role="Software Engineer"
                date="Jan 2024 - Present"
                :image="KubotekPhoto"
                :bullets="[
                    'Built scalable services',
                    'Improved developer productivity',
                    'Worked across platform teams'
                ]"
            />
            <Job
                company="Another Company"
                role="Backend Developer"
                date="2022 - 2023"
                :image="TriPhoto"
                :bullets="[
                    'Implemented APIs',
                    'Optimized database queries'
                ]"
            />
        </div>
    </section>
</template>

<style scoped>
</style>