<script setup>

import { getAthlete, getBenchmarks, getUser } from '@/api/AtletasAPI';
import ScoreCard from '@/components/atleta/ScoreCard.vue';
import { useQuery } from '@tanstack/vue-query';

const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    retry: 5
});

const { data: atleta } = useQuery({
    queryKey: ['atleta', user],
    queryFn: () => getAthlete(user),
    retry: 5
});

const { data: benchmarks } = useQuery({
    queryKey: ['benchmarks', atleta],
    queryFn: () => getBenchmarks(atleta)
})
</script>


<template>
    <div class="bg-gray-950 w-full rounded-3xl p-5 ">

        <div class="w-full flex flex-wrap justify-center">
            <h1 class="text-white uppercase text-3xl font-bold mb-5 text-center w-full">Buscar Score</h1>
            <input type="text" placeholder="Ingresa el nombre del WOD o marca"
                class="uppercase bg-gray-800 rounded-xl text-center p-2 w-full lg:w-3/4 font-bold text-white mb-4" />
        </div>

        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
            <ScoreCard v-for="score in benchmarks">
                <template v-slot:ejercicio>
                    {{ score.id_ejercicio.ejercicio }}
                </template>

                <template v-slot:marca>
                    {{ score.score }}
                </template>

                <template v-slot:fecha>
                    {{ score.fecha }}
                </template>
            </ScoreCard>

        </div>

    </div>
</template>
