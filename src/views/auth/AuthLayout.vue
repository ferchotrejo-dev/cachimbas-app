<script setup>

import Logo from '@/components/Logo.vue';

</script>

<template>

    <section class="grid grid-cols-12 m-3 mt-8">
        <div
            class="bg-gray-950 w-full p-2 md:p-4 rounded-3xl flex justify-center  col-span-12  md:col-span-10 md:col-start-2 xl:col-start-2">
            <Logo />
        </div>
    </section>

    <section class="grid grid-cols-12 m-3 mt-8">
        <main class="mt-10 col-span-12 md:col-span-10 md:col-start-2 xl:col-start-2">
            <RouterView></RouterView>
        </main>
    </section>
    


</template>