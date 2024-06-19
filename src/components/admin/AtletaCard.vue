
<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="rounded-2xl border-4 border-gray-500 p-3 m-4">

        <p class="uppercase text-white font-medium text-lg text-center">
            <slot name="nombre"></slot>
        </p>
        <p class="uppercase text-white font-light text-md text-center">
            <slot name="categoria"></slot>
        </p>

        <RouterLink
            class="border-2 border-red-600 uppercase text-white text-xl font-bold w-full flex justify-center mt-2 p-2 hover:bg-red-600 rounded-2xl"
            :to=" { name:'user-details' } "
        >
            Ver detalles
        </RouterLink>

    </div>
</template>