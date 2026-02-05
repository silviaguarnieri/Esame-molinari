<template>
<Navbar variant="white" />
<section class="relative w-full h-screen bg-black">
    <ul class="w-full h-full flex flex-col justify-center items-center gap-10">
        <li v-for="item in contact" :key="item.id">
            <a :href="item.contactLink" target="_blank" class="text-white text-8xl max-sm:text-2xl font-bold text-center hover:underline">
                {{ item.contactTitle }}
            </a>
        </li>
    </ul>

</section>
<Footer />
</template>
<script setup>
    import Navbar from '../components/Navbar.vue';
    import Footer from '../components/Footer.vue';
    import { contact } from '../Database/informazioni.js';
</script>