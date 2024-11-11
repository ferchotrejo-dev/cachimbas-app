<script setup>
import { getAthlete, getUser, getWheightliftings } from '@/api/AtletasAPI';
import PRCard from '@/components/atleta/PRCard.vue';
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

const { data: weightliftings } = useQuery({
    queryKey: ['weightliftings', atleta],
    queryFn: () => getWheightliftings(atleta)
})


</script>


<template>
    <div class="bg-gray-950 w-full rounded-3xl p-5 ">

        <div class="w-full flex flex-wrap justify-center">
            <h1 class="text-white uppercase text-3xl font-bold mb-5 text-center w-full">Buscar PR</h1>
            <input type="text" placeholder="Ingresa el nombre del ejercicio"
                class="uppercase bg-gray-800 rounded-xl text-center p-2 w-full lg:w-3/4 font-bold text-white mb-4" />
        </div>

        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
            <PRCard v-for="pr in weightliftings">
                <template v-slot:ejercicio>
                    {{ pr.id_ejercicio.ejercicio }}
                </template>

                <template v-slot:peso>
                    {{ pr.peso }}
                </template>

                <template v-slot:fecha>
                    {{ pr.fecha }}
                </template>
            </PRCard>

        </div>

    </div>
</template>
