<!-- Dock.vue -->
<script setup lang="ts">
import { ref } from "vue"
import Home from '../assets/icons/home.svg'
import Blog from '../assets/icons/blog.svg'
import LinkedIn from '../assets/icons/linkedin.svg'
import Github from '../assets/icons/github.svg'
import Sun from '../assets/icons/sun.svg'
import Moon from '../assets/icons/moon.svg'

const dark = ref(false)

function toggleDark() {
  dark.value = !dark.value
  document.documentElement.classList.toggle("dark", dark.value)
}
</script>

<template>
    <div class="fixed bottom-0 left-0 w-full h-14 bg-linear-to-t from-white"></div>

    <nav
        class="fixed bottom-4 left-1/2 -translate-x-1/2 
            flex items-center gap-6 
            bg-white  shadow-lg 
            rounded-full px-6 py-3 
            border border-gray-200 
            z-50"
    >
        <!-- Home -->
        <a href="#top" class="nav-button">
            <Home class="size-4" />
        </a>
        
        <!-- Blog -->
        <a href="/blog" class="nav-button">
            <Blog class="size-4" />
        </a>

        <!-- LinkedIn -->
        <a href="https://linkedin.com/in/william-saulnier" target="_blank" class="nav-button">
            <LinkedIn class="size-4" />
        </a>

        <!-- GitHub -->
        <a href="https://github.com/wsau2" target="_blank" class="nav-button">
            <Github class="size-4" />
        </a>

        <div class="w-[1px] h-full bg-black">

        </div>
        

        <!-- Light/Dark -->
        <button @click="toggleDark" class="nav-button">
        <Sun v-if="dark" class="size-5" />
        <Moon v-else class="size-5" />
        </button>
    </nav>
</template>

<style>
.nav-button:hover {
    /* padding: 4px; */
    background-color: lightgrey;
    border-radius: 100%;
}
</style>