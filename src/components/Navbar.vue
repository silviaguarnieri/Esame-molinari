<template>
    <header class="fixed z-10 top-0 left-0 right-0 w-full px-12 py-8">
        <div class="flex justify-between items-center w-full">
            <div class="logo max-sm:w-8" >
                <router-link to="/">
                    <img :src="variant === 'black' ? '/logo-black.svg' : '/logo-white.svg'" alt="Logo" />
                </router-link>
            </div>
            <nav>
                <ul 
                    class="flex gap-8 uppercase font-medium tracking-wide max-sm:gap-4" 
                    :class="variant === 'black' ? 'text-black' : 'text-white'"
                >
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
            </nav>
        </div>
    </header>
</template>

<script setup>
defineProps({
    variant: {
        type: String,
        default: 'white'
    }
});
</script>