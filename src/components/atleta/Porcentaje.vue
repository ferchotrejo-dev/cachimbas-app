
<script setup>

    const props = defineProps({
        porcentaje:{
            typeof:Object,
            required: true
        }
    });

</script>

<template>

    <div class=" border-4 border-red-600 mt-3 md:mt-4 rounded-2xl p-3 w-auto flex gap-3 justify-center items-center">

        <div>
            <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="#6b7280"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  
                class="icon icon-tabler icons-tabler-outline icon-tabler-barbell w-32 h-32">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 12h1" /><path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" /><path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" /><path d="M9 12h6" /><path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" /><path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" /><path d="M22 12h-1" />
            </svg>
        </div>
        <div class="">
            <p class=" text-xl font-bold text-white uppercase"> Porcentaje = {{ porcentaje.porcentaje }} % </p>
            <p class=" text-xl font-bold text-white uppercase">Total = {{ porcentaje.total }} LB</p>
            <p class=" text-xl font-bold text-white uppercase">Por lado = {{ porcentaje.lado }} LB</p>
        </div>
        
    </div>

</template>

