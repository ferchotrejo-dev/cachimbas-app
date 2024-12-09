<script setup>
import { reactive, ref, watch, computed } from 'vue';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { createSkill, getAthlete, getExercises, getUser } from '@/api/AtletasAPI';
import Success from '@/components/Success.vue';
import Alerta from '@/components/Alerta.vue';

const errors = ref('');
const success = ref('');

// Objeto reactivo para el formulario
const newSkill = reactive({
    id_atleta: '',
    fecha: '',
    id_ejercicio: ''
});

// Consultas de datos
const { data } = useQuery({
    queryKey: ['ejercicios'],
    queryFn: getExercises
});

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

console.log(atleta.value)

// Observa el cambio en atleta y asigna id_atleta solo cuando hay un valor
watch(
    () => atleta.value,
    (newAtleta) => {
        if (newAtleta) {
            newSkill.id_atleta = newAtleta._id;
        }
    },
    { immediate: true }
);

// Validación para verificar si todos los campos están completos
const isFormComplete = computed(() => {
    return Object.values(newSkill).every(value => value !== '');
});

// Mutación para crear el PR
const { mutate } = useMutation({
    mutationFn: createSkill,
    onError: (error) => {
        errors.value = error;
    },
    onSuccess: (data) => {
        success.value = data;
        errors.value = ''
        newSkill.id_ejercicio = '';
        newSkill.fecha = '';
    }
});

// Función para manejar la creación del PR
const crearSkill = async () => {
    if (!isFormComplete.value) {
        errors.value = 'Todos los campos son obligatorios'
        return
    }
    newSkill.id_atleta = atleta.value

    mutate(newSkill)
};
</script>


<template>

    <!-- Container -->
    <div class="w-full bg-gray-950 rounded-3xl flex">

        <!-- Form -->
        <div class="w-full lg:w-1/2 p-5">
            <h1 class="text-white text-3xl uppercase font-bold text-center">Agregar nuevo Skill</h1>

            <form @submit.prevent="crearSkill">

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
                        <select id="ejercicio" v-model="newSkill.id_ejercicio"
                            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white">
                            <option class="uppercase" value="">-- SELECCIONA UNA OPCIÓN --</option>
                            <option class="uppercase" v-for="ejercicio in data" :key="ejercicio._id"
                                :value="ejercicio._id.toString()">
                                {{ ejercicio.ejercicio }}
                            </option>

                        </select>
                    </div>


                    <!-- Fecha -->
                    <div class="flex flex-wrap my-6">
                        <label for="fecha" class="uppercase text-white font-bold text-xl">Fecha</label>
                        <input id="fecha" type="date" placeholder="TOTAL DE PESO LB"
                            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase"
                            v-model="newSkill.fecha">
                    </div>

                    <input type="submit" value="agregar skill"
                        class="w-full my-2 border-2 border-blue-600 text-white uppercase rounded-xl p-2  text-md font-bold hover:bg-blue-600">

                </div>

            </form>

            <RouterLink
                class="text-white text-md uppercase font-bold w-full block mt-2 border-2 border-red-600 rounded-xl p-2 text-center hover:bg-red-600"
                :to="{ name: 'visualizar-skill' }">
                Visualizar Skill
            </RouterLink>

        </div>

        <!-- IMG -->
        <div class="bg-img-3 bg-cover bg-center w-full lg:w-1/2 rounded-3xl rounded-l-none hidden lg:block">

        </div>

    </div>
</template>
