<script setup lang="ts">
import Job from './Job.vue';
import UMassPhoto from '../assets/UMass.png'
import UNHPhoto from '../assets/UNH.png'
</script>

<template>
    <section id='education'>
        <div class="flex flex-col gap-y-3">
            <h2 class="text-xl font-bold">Education</h2>
            <Job
                company="University of Massachusetts Amherst"
                role="Bachelor of Computer Science"
                date="2023 - 2025"
                :image="UMassPhoto"
                :bullets="[
                    'GPA 3.68/4',
                    'Major in Computer Science',
                    'Deans List: Spring 2024, Spring 2025, Fall 2025'
                ]"
            />

            <Job
                company="University of Massachusetts Amherst"
                role="Bachelor of Computer Science"
                date="2021 - 2023"
                :image="UNHPhoto"
                :bullets="[
                    'GPA 3.75/4',
                    'Major in Computer Science',
                    'Vice President of UNH Upsilon Pi Epsilon',
                    'UNH SEDS (Students for the Exploration and Development of Space)',
                ]"
            />

        </div>
        
    </section>
</template>

<style scoped>
</style>