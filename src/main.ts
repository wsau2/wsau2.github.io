import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Particles from "@tsparticles/vue3";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.


// icons
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaGithub, FaLinkedin } from "oh-vue-icons/icons/fa";

addIcons(FaGithub, FaLinkedin);

createApp(App)
    .use(Particles, {
    init: async engine => {
        // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
        await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
    },
    })
    .component('v-icon', OhVueIcon)
    .mount('#app')
