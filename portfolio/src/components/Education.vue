<script setup lang="ts">
import Job from './Job.vue';
import KubotekPhoto from '../assets/Saulnier-William-Sunset-250410-1913.jpg'
import TriPhoto from '../assets/triathlon-will-photo.jpg'
</script>

<template>
    <section id='education'>
        <div class="flex flex-col gap-y-3">
            <h2 class="text-xl font-bold">Education</h2>
            <Job
                company="University of Massachusetts Amherst"
                role="Software Engineer"
                date="Jan 2024 - Present"
                :image="KubotekPhoto"
                :bullets="[
                    'GPA 3.68/4',
                    'Major in Computer Science',
                    'Deans List'
                ]"
            />

        </div>
        
    </section>
</template>

<style scoped>
</style>