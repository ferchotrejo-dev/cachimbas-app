<script setup>

import BenchmarkCard from '@/components/atleta/BenchmarkCard.vue';

</script>


<template>
    <div class="bg-gray-950 w-full rounded-3xl p-5 ">

        <div class="w-full flex flex-wrap justify-center">
            <h1 class="text-white uppercase text-3xl font-bold mb-5 text-center w-full">Buscar Benchmark</h1>
            <input type="text" placeholder="Ingresa el nombre del ejercicio"
                class="uppercase bg-gray-800 rounded-xl text-center p-2 w-full lg:w-3/4 font-bold text-white mb-4"
            />
        </div>

        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <BenchmarkCard>
                <template v-slot:ejercicio>
                    Fran
                </template>

                <template v-slot:marca>
                    42
                </template>

                <template v-slot:fecha>
                    04/11/2024
                </template>
            </BenchmarkCard>
            
        </div>

    </div>
</template>
