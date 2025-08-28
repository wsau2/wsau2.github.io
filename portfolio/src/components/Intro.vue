<script setup lang="ts">
declare module "@tsparticles/vue3";
const particlesLoaded = async (container: any) => {
    console.log("Particles container loaded", container);
};
</script>

<template>
    <section id="intro-section" class="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-blue-900 to-blue-950">
        <div class="absolute inset-0">
            <vue-particles
                id="tsparticles"
                class="w-full h-full"
                @particles-loaded="particlesLoaded"
                :options="{
                    fullScreen: { enable: false }, 
                    background: {
                        color: {
                            value: 'transparent'
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'grab'
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: 'bounce',
                            random: false,
                            speed: 3,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 1, max: 5 }
                        }
                    },
                    detectRetina: true
                }"
            />
        </div>

        <div class="relative z-10 container mx-auto px-4 h-screen flex flex-col items-center justify-center text-center">
            <div class="mb-6">
                <img src="../assets/Saulnier-William-Sunset-250410-1913.jpg" alt="William Saulnier" class="rounded-full w-32 h-32 md:w-40 md:h-40 border-4 border-white shadow-lg">
            </div>
            <div class="text-white text-3xl md:text-4xl font-bold mb-4">
                Hello, I'm Will.
            </div>
            <div class="flex space-x-6 mt-6">
                <a href="https://github.com/wsaulnier" class="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950">Github<v-icon name="fa-github" /></a>
                <a href="https://linkedin.com/in/wsaulnier" class="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950">LinkedIn<v-icon name="fa-linkedin" /></a>
            </div>
        </div>
    </section>
</template>

<style scoped>
#tsparticles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
