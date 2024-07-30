<script setup>
import { useRouter } from 'vue-router';


const props = defineProps({
    idMembresia: String
})

const router = useRouter()

const verDetalles = () => {
    router.push(`/admin/viewDetails-membership/${props.idMembresia}`)
}

</script>

<template>
    <div
        class=" border-4 border-gray-500 mt-3 md:mt-4 rounded-2xl p-4 w-auto flex gap-3 justify-center items-center flex-wrap">

        <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="100" height="100"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8fafc" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
        </div>
        <div class="">
            <p class=" text-xl font-bold text-white uppercase text-center"> Miembros: </p>

            <p class=" text-lg font-light text-white uppercase text-center">
                <slot></slot>
            </p>
        </div>

        <div class="flex lg:flex-nowrap flex-wrap w-full mt-1 gap-2">
            <button
                class="uppercase text-white font-bold text-sm text-center p-1 rounded-xl w-full lg:w-1/2 border-2 border-yellow-600 hover:bg-yellow-600">
                editar
            </button>
            <button
                class="uppercase text-white font-bold text-sm text-center p-1 rounded-xl w-full lg:w-1/2 border-2 border-blue-600 hover:bg-blue-600"
                @click="verDetalles">
                ver detalles
            </button>
        </div>

    </div>
</template>