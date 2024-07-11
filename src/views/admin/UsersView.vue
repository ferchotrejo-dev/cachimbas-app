<script setup>
import { getAthletes } from '@/api/AtletasAPI';
import AtletaCard from '@/components/admin/AtletaCard.vue'
import { useQuery } from '@tanstack/vue-query';

const { data } = useQuery({
    queryKey: ['athletes'],
    queryFn: getAthletes
})

console.log(data)

</script>

<template>
    <div class="">

        <section class="bg-gray-950 w-full rounded-3xl p-5">
            <h2 class="uppercase text-white font-bold text-xl">Buscar atleta</h2>

            <div>
                <form action="" class="flex gap-4 my-2">
                    <input type="text" placeholder="ingresa el nombre del atleta"
                        class="bg-gray-900 text-white text-md uppercase p-3 rounded-2xl w-full xl:w-1/3 text-center">

                    <input type="button" value="Buscar"
                        class="uppercase border-2 border-blue-600 py-1 px-6 text-white font-bold text-xl rounded-2xl hover:bg-blue-600">
                </form>
            </div>
        </section>

        <!-- Mostrar Atletas -->
        <section class="bg-gray-950 w-full rounded-3xl p-5 mt-10">
            <h2 class="uppercase text-white font-bold text-xl border-b-2 border-gray-500">Atletas</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
                <AtletaCard v-for="atleta in data" :key="atleta._id">
                    <template v-slot:nombre>{{ atleta.id_usuario.nombre }}</template>
                    <template v-slot:categoria>{{ atleta.id_usuario.apellido }}</template>
                </AtletaCard>
            </div>
        </section>

    </div>
</template>