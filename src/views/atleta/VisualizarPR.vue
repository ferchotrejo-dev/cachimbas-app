<script setup>

import PRCard from '@/components/atleta/PRCard.vue';

</script>


<template>
    <div class="bg-gray-950 w-full rounded-3xl p-5 ">

        <div class="w-full flex flex-wrap justify-center">
            <h1 class="text-white uppercase text-3xl font-bold mb-5 text-center w-full">Buscar PR</h1>
            <input type="text" placeholder="Ingresa el nombre del ejercicio"
                class="uppercase bg-gray-800 rounded-xl text-center p-2 w-full lg:w-3/4 font-bold text-white mb-4"
            />
        </div>

        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <PRCard>
                <template v-slot:ejercicio>
                    Squat Clean
                </template>

                <template v-slot:peso>
                    205
                </template>

                <template v-slot:fecha>
                    03/11/2024
                </template>
            </PRCard>
            
        </div>

    </div>
</template>

