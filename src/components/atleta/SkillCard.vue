<script setup>
import { deletePr, deleteSkill } from '@/api/AtletasAPI';
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { useRouter } from 'vue-router';


const { id } = defineProps(['id'])

const router = useRouter()
const queryClient = useQueryClient()


const { mutate } = useMutation({
    mutationFn: deleteSkill,
    onError: (error) => {
        console.log(error)
    },
    onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['skills'] })
        console.log(data)
    }
})

const actualizarSkill = () => {
    router.push(`actualizar-skill/${id}`)
}

const eliminarSkill = () => {
    if (confirm('¿Seguro que quieres eliminar?')) {
        mutate(id); // Asegúrate de que `id` esté definido o disponible en este contexto
    }
};
</script>

<template>
    <div
        class=" border-4 border-gray-800 mt-3 md:mt-4 rounded-2xl p-4 w-auto flex gap-3 justify-center items-center flex-wrap">


        <div class="">
            <p class=" text-4xl font-bold text-white uppercase text-center">
                <slot name="ejercicio"></slot>
            </p>
            <p class=" text-lg font-extralight text-white uppercase text-center">
                <slot name="fecha"></slot>
            </p>

        </div>


        <div class="flex flex-wrap w-full mt-1 gap-2">
            <button
                class="uppercase text-white font-bold text-md text-center p-1 rounded-lg w-full border-2 border-yellow-600 hover:bg-yellow-600"
                @click="actualizarSkill">
                editar
            </button>
            <button
                class="uppercase text-white font-bold text-md text-center p-1 rounded-lg w-full border-2 border-red-600 hover:bg-red-600"
                @click="eliminarSkill">
                eliminar
            </button>
        </div>


    </div>
</template>