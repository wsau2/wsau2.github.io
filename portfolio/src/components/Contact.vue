<script setup lang="ts">
</script>

<template>
    <div id="contact">
        <div class="px-5 flex flex-col space-y-6">
            <div class="flex justify-center">
                <h2 class="text-3xl font-bold tracking-tighter">Get in Touch</h2>
            </div>
            <p class="muted-text text-center">Please contact me directly at <a class="underline" href="mailto:wsaulnier1004@gmail.com">wsaulnier1004@gmail.com</a> or through this form.</p>
            <form class="flex flex-col">
                <input name="senderEmail" type="text" class="border border-gray-200 rounded-lg h-14 px-4" placeholder="Your Email"></input>
                <textarea name="message" class="border border-gray-200 rounded-lg my-3 h-52 p-4" placeholder="Your Message"></textarea>
                <div>
                    <button type="submit" class="group bg-black rounded-full text-white h-[3rem] w-[8rem] flex items-center justify-center hover:scale-110 gap-2 transition-all">Submit
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" 
                        class="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" 
                        height="1em" 
                        width="1em" 
                        xmlns="http://www.w3.org/2000/svg"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
</style>