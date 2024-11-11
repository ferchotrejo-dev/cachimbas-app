<script setup>
import { reactive, ref } from 'vue';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { createPr, getExercises } from '@/api/AtletasAPI';

const errors = ref('')
const success = ref('')

const newPr = reactive({
    ejercicio: '',
    peso: '',
    fecha: '',
})

const { data } = useQuery({
    queryKey: ['ejercicios'],
    queryFn: getExercises
})

const { mutate } = useMutation({
    mutationFn: createPr(newPr),
    onError: (error) => {
        errors.value = error
    },
    onSuccess: (data) => {
        success.value = data,
            newPr.ejercicio = '',
            newPr.peso = '',
            newPr.fecha = ''
    }

})


</script>


<template>

    <!-- Container -->
    <div class="w-full bg-gray-950 rounded-3xl flex">

        <!-- Form -->
        <div class="w-full lg:w-1/2 p-5">
            <h1 class="text-white text-3xl uppercase font-bold text-center">Agregar nuevo PR</h1>

            <form action="">

                <div class="w-full">

                    <!--  -->
                    <div class="flex flex-wrap my-6">
                        <label for="ejercicio" class="uppercase text-white font-bold text-xl">
                            ejercicio
                        </label>
                        <select id="ejercicio"
                            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
                            v-model="newPr.ejercicio">
                            <option class="uppercase" value="">-- SELECCIONA UNA OPCIÓN --</option>
                            <option v-for="ejercicio in data" :key="ejercicio._id" :value="ejercicio._id.toString()">{{
                                ejercicio.ejercicio }}</option>

                            <option class="uppercase">
                                BackSquat
                            </option>

                        </select>
                    </div>

                    <!-- PESO -->
                    <div class="flex flex-wrap my-6">
                        <label for="peso" class="uppercase text-white font-bold text-xl">peso</label>
                        <input id="peso" type="number" placeholder="TOTAL DE PESO LB"
                            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
                            v-model="newPr.peso">
                    </div>

                    <!-- Fecha -->
                    <div class="flex flex-wrap my-6">
                        <label for="fecha" class="uppercase text-white font-bold text-xl">Fecha</label>

                        <input id="fecha" type="date" placeholder="FECHA"
                            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase"
                            v-model="newPr.fecha">
                    </div>

                    <input type="submit" value="agregar pr"
                        class="w-full my-2 border-2 border-blue-600 text-white uppercase rounded-xl p-2  text-md font-bold hover:bg-blue-600">

                </div>

            </form>

            <RouterLink
                class="text-white text-md uppercase font-bold w-full block mt-2 border-2 border-red-600 rounded-xl p-2 text-center hover:bg-red-600"
                :to="{ name: 'visualizar-pr' }">
                Visualizar PR
            </RouterLink>

        </div>

        <!-- IMG -->
        <div class="bg-img-9 bg-cover bg-center w-full lg:w-1/2 rounded-3xl rounded-l-none hidden lg:block">

        </div>

    </div>
</template>
