<template>
    <footer class="w-full h-40 flex justify-center items-start m-8 flex-col gap-20 pt-40 pb-8 max-sm:pt-60">
     <section class="flex w-full px-12 py-8items-center justify-start gap-20 max-sm:items-start max-sm:gap-6">
        <div class="flex flex-col gap-2">
        <h4 class="font-bold text-xl">Sito</h4>
        <ul class="flex flex-col gap-4 uppercase font-medium tracking-wide max-sm:gap-2"> 
            <li>
                <router-link 
                    to="/" 
                    class="pb-1 hover:opacity-50 transition-all duration-300 max-sm:text-xs"
                    active-class="border-b-2 border-current"
                >
                    Home
                </router-link>
            </li>            
            <li>
                <router-link 
                    to="/projects" 
                    class="pb-1 hover:opacity-50 transition-all duration-300 max-sm:text-xs"
                    active-class="border-b-2 border-current"
                >
                    Projects
                </router-link>
            </li>
            <li>
                <router-link 
                    to="/contact" 
                    class="pb-1 hover:opacity-50 transition-all duration-300 max-sm:text-xs"
                    active-class="border-b-2 border-current"
                >
                    Contact
                </router-link>
            </li>
        </ul>
        </div>
        <div>
            <h4 class="font-bold text-xl pb-2">Social</h4>
                <ul class="flex flex-col gap-4 uppercase font-medium tracking-wide max-sm:gap-2">
                <li v-for="item in contact" :key="item.id">
                    <a :href="item.contactLink" target="_blank" class="pb-1 hover:opacity-50 transition-all duration-300 max-sm:text-xs">
                        {{ item.contactTitle }}
                    </a>
                </li>
            </ul>
        </div>
    </section>  
    <section class="w-6/12 max-sm:w-8/12 h-16 px-12 flex justify-between items-center pb-16 max-sm:flex-col max-sm:gap-4 max-sm:h-auto max-sm:items-start">
        <div>
            <img src="/logo.svg" alt="">
        </div>
        <p>Silvia Guarnieri © 2026</p>
    </section> 
    </footer>   
</template>

<script setup>
    import { contact } from '../Database/informazioni.js';
</script>