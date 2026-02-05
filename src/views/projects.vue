<template>
<Navbar variant="white" />
<section class="relative w-full h-screen bg-black flex justify-center items-center">
    <h1 class="text-white text-8xl max-sm:text-2xl font-bold text-center">PROJECTS / ⭐️</h1>
</section>
<section class="w-full h-auto flex flex-col">
    <ul class="w-full h-auto relative ">
        <li v-for="project in projects" :key="project.id" class="w-full relative h-screen max-sm:h-1/3">
            <img :src="project.imgProject" alt="" class="w-full h-full absolute z-0 inset-0 object-cover">
            <a :href="project.projectLink" target="_blank"  class="absolute bottom-10 left-12 text-white max-sm:bottom-4 max-sm:left-4 ">
            <h3 class="text-6xl max-sm:text-base font-semibold ">{{ project.descrizione }}</h3>
            </a>
        <div class="absolute bottom-10 right-12 font-semibold text-white flex flex-col items-end justify-end max-sm:items-start max-sm:left-4 "> 
            <p class="text-xl max-sm:text-sm">{{ project.year }}</p>
            <p class="text-xl max-sm:text-sm"> {{ project.nome }}</p>
        </div>
        </li>
    </ul> 
</section>  
<Footer />
</template>
<script setup>
    import Navbar from '../components/Navbar.vue';
    import Footer from '../components/Footer.vue';
    import { projects } from '../Database/informazioni.js';
</script>