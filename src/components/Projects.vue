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
                <ProjectCard 
                    name="UMass WSSL - Blood Pressure Sensor App"
                    description="Developed an Android application in React Native that interfaces with a wearable smart ring to monitor and display a user's blood pressure. The ring, created by the UMass Wireless and Sensor Systems Lab, functions by contracting around the finger and gradually releasing to capture readings."
                    github="https://github.com/wsau2/blood-pressure-sensor-app"
                    demo=""
                    image=""
                />
                <ProjectCard 
                    name="StudySpaces"
                    description="StudySpace is a progressive web app (PWA) that allows UMass students and faculty to locate nearby buildings and rooms to study in. Users can choose rooms based on images, proximity to their location, and distinct features of a given room. Built using Vue.js/TypeScript, HTML/CSS, Pinia, PrimeVue, Tailwind CSS"
                    github="https://github.com/nwierzbowski/SpaceFace"
                    demo="https://docs.google.com/document/d/1lOMiRaG3wMFmLV0vtoqjn2o9XYCBBCOyxMu7OSJEgNQ/edit?usp=sharing"
                    image=""
                />
                <ProjectCard 
                    name="PaperlessOA - Office Automation Software"
                    description="Developed an Office Automation system that streamlined employee, absence, and task management for startups. Delivered analytics features that improved visibility into task completion and employee performance. Built and tested APIs to ensure seamless integration between frontend and backend. Tech stack included React, TypeScript, Next.js, Flask, and Amazon RDS with PostgreSQL."
                    github="https://github.com/Aryan-Sajith/PaperlessOA"
                    demo="https://drive.google.com/file/d/1SfKQhxpnAxQdZkfd5bScsZ5pdQ48jJaU/view?usp=sharing"
                    image=""
                />
                
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>