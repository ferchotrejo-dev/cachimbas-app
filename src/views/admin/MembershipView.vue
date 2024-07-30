<script setup>
import { getAllMemberships } from '@/api/AdminAPI';
import MembershipCardInfo from '@/components/admin/MembershipCardInfo.vue';
import { useQuery } from '@tanstack/vue-query';

const { data: membresias } = useQuery({
    queryKey: ['memberships'],
    queryFn: getAllMemberships
})

</script>

<template>
    <div class="bg-gray-950 w-full rounded-3xl p-5 h-full flex gap-5 flex-wrap">

        <div class="w-full flex flex-wrap justify-center">
            <h1 class="text-white uppercase text-2xl font-bold mb-7 text-center w-full">Buscar membresía</h1>
            <input type="text" placeholder="Ingresa el nombre del atleta"
                class="uppercase bg-gray-800 rounded-xl text-center p-2 w-full lg:w-3/4 font-bold text-white mb-4" />
        </div>

        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MembershipCardInfo v-for="membresia in membresias" :idMembresia="membresia._id">
                <p v-for="atleta in membresia.atletasAsignados">{{ atleta.id_usuario.nombre }} {{
                    atleta.id_usuario.apellido }}</p>
            </MembershipCardInfo>

        </div>
    </div>
</template>
