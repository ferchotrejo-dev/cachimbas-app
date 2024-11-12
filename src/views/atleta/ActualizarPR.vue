<script setup>
import { computed, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Alerta from '@/components/Alerta.vue';
import Success from '@/components/Success.vue';
import { getExercises, getWheightliftingById, updatePr } from '@/api/AtletasAPI';
import { useMutation, useQuery } from '@tanstack/vue-query';

const router = useRoute()
const prId = router.params.id

const errors = ref('');
const success = ref('');

const { data: pr } = useQuery({
    queryKey: ['PR', prId],
    queryFn: () => getWheightliftingById(prId),
    enabled: !!prId // Ejecuta la consulta solo si `prId` tiene un valor válido
});

const newPr = reactive({
    fecha: '',
    id_ejercicio: '',
    peso: 0,
});

// Observa cuando `pr.value` tenga datos y actualiza `newPr`
watch(pr, (newPrData) => {
    if (newPrData) {
        newPr.fecha = newPrData.fecha;
        newPr.id_ejercicio = newPrData.id_ejercicio;
        newPr.peso = newPrData.peso;
    }
});

const { data } = useQuery({
    queryKey: ['ejercicios'],
    queryFn: getExercises
});

const { mutate } = useMutation({
    mutationFn: updatePr,
    onError: (error) => {
        errors.value = error
    },
    onSuccess: (data) => {
        success.value = data

    }
})

const isFormComplete = computed(() => {
    return Object.values(newPr).every(value => value !== '');
});

const actualizarPr = () => {
    if (!isFormComplete.value) {
        errors.value = 'Todos los campos son obligatorios';
        return;
    }

    mutate({ id: prId, formData: newPr })
}

</script>

<template>

    <!-- Container -->
    <div class="w-full bg-gray-950 rounded-3xl flex">

        <!-- Form -->
        <div class="w-full lg:w-1/2 p-5">
            <h1 class="text-white text-3xl uppercase font-bold text-center">Actualizar PR</h1>

            <form @submit.prevent="actualizarPr">

                <div class="w-full">

                    <!--  -->
                    <Alerta v-if="errors">
                        {{ errors }}
                    </Alerta>

                    <Success v-if="success">
                        {{ success }}
                    </Success>

                    <div class="flex flex-wrap my-6">
                        <label for="ejercicio" class="uppercase text-white font-bold text-xl">
                            ejercicio
                        </label>
                        <select id="ejercicio"
                            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
                            v-model="newPr.id_ejercicio">
                            <option class="uppercase" value="">-- SELECCIONA UNA OPCIÓN --</option>
                            <option v-for="ejercicio in data" :key="ejercicio._id" :value="ejercicio._id.toString()">{{
                                ejercicio.ejercicio }}</option>

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

                    <input type="submit" value="Actualizar pr"
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
