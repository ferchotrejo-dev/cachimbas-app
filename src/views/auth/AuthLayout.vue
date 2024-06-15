<script setup>

import Logo from '@/components/Logo.vue';

</script>

<template>

    <section class="grid grid-cols-12 m-2 mt-8">
        <div
            class="bg-gray-950 w-full p-2 md:p-4 rounded-3xl flex justify-center  col-span-11  xl:col-span-10 col-start-2 xl:col-start-2">
            <Logo />
        </div>
    </section>

    <main class="mt-10 bg-gray-950 w-full">
        <RouterView></RouterView>
    </main>


</template>