<template>
    <Navbar variant="black" />
    <section class="relative w-full h-auto flex flex-col items-center pt-30 gap-10 py-10">   
        <h1 class="text-[115px] max-sm:text-3xl font-bold text-center">{{ about.h1 }}</h1> 
        <div class="w-full h-auto flex justify-end items-center px-120 max-sm:px-6">
            <div class="w-130 h-130 max-sm:w-60 max-sm:h-60">
            <img class="object-cover w-full h-full" :src="about.imgsilvia" alt="Silvia Guarnieri" />
            </div>
        </div>
        <div class="w-full justify-start items-start py-20 max-sm:py-4">
        <h2 class="text-7xl/26 max-sm:text-xl font-semibold px-12 w-4/5 max-sm:w-full">{{ about.pAbout }}  </h2>
        </div>
    </section>
    <section class="px-12">
        <h3 class="text-[100px] max-sm:text-2xl font-bold"> SKILLS / 👩🏼‍💻
        </h3>
        <div class="py-20 max-sm:py-10">
            <ul class="flex justify-start gap-12 w-full items-centers">
                <li v-for="skill in skills" :key="skill.id">
                    <img :src="skill.imgSkill" :alt="skill.name" class="w-30">
                </li>
            </ul>
        </div>
    </section>
    <Footer />
    
</template>
<script setup>
    import Navbar from '../components/Navbar.vue';
    import Footer from '../components/Footer.vue';
    import { about, skills } from '../Database/informazioni.js';   



</script>