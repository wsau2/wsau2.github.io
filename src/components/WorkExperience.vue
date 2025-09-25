<script setup lang="ts">
import Job from './Job.vue';
import KratosPhoto from '../assets/Kratos.png'
import IOLPhoto from '../assets/IOL.png'
import KubotekPhoto from '../assets/Kubotek.jpeg'
</script>

<template>
    <section id="work">
        <div class="flex flex-col gap-y-3">
            <h2 class="text-xl font-bold">Work Experience</h2>
            <Job
                company="Kratos Inno Tech"
                role="Frontend Developer Intern"
                date="June 2023 - Aug 2023"
                :image="KratosPhoto"
                :bullets="[
                    'Developed frontend in JavaScript and React for sales prediction software',
                    'Participated in weekly standup meetings to stay on track with goals',
                    'Conducted in-person client meetings to gather and understand software requirements'
                ]"
            />
            <Job
                company="UNH InterOperability Lab"
                role="NVMe Technician Intern"
                date="June 2022 - Sept 2022"
                :image="IOLPhoto"
                :bullets="[
                    'Developed IOL INTERACT software in Python to test NVMe SSD devices',
                    'Ensured devices under test were compliant with current NVMe specifications',
                    'Responded to and resolved customer issues from Intel, Samsung, Kioxia, Kingston, and more',
                    'Received Nebula Award for team coordination and surpassing set goals'
                ]"
            />
            <Job
                company="Kubotek USA"
                role="Software Developer Intern"
                date="June 2021 - Aug 2021"
                :image="KubotekPhoto"
                :bullets="[
                    'Authored C++ documentation outlining the functionality of KCM (Kubotek3D\'s CAD modeling software)',
                    'Focused on user experience to create intuitive documentation',
                    'Collaborated with other interns and senior developers to identify and resolve bugs'
                ]"
            />
        </div>
    </section>
</template>

<style scoped>
</style>