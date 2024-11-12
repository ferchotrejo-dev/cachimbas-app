<script setup>
import { computed, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Alerta from '@/components/Alerta.vue';
import Success from '@/components/Success.vue';
import { getExercises, getSkillById, getWheightliftingById, updatePr, updateSkill } from '@/api/AtletasAPI';
import { useMutation, useQuery } from '@tanstack/vue-query';

const router = useRoute()
const skillId = router.params.id

const errors = ref('');
const success = ref('');

const { data: skill } = useQuery({
    queryKey: ['skill', skillId],
    queryFn: () => getSkillById(skillId),
    enabled: !!skillId // Ejecuta la consulta solo si `prId` tiene un valor válido
});

const newSkill = reactive({
    fecha: '',
    id_ejercicio: '',
});

// Observa cuando `pr.value` tenga datos y actualiza `newPr`
watch(skill, (newSkillData) => {
    if (newSkillData) {
        newSkill.fecha = newSkillData.fecha;
        newSkill.id_ejercicio = newSkillData.id_ejercicio;
    }
});

const { data } = useQuery({
    queryKey: ['ejercicios'],
    queryFn: getExercises
});

const { mutate } = useMutation({
    mutationFn: updateSkill,
    onError: (error) => {
        errors.value = error
    },
    onSuccess: (data) => {
        success.value = data

    }
})

const isFormComplete = computed(() => {
    return Object.values(newSkill).every(value => value !== '');
});

const actualizarSkill = () => {
    if (!isFormComplete.value) {
        errors.value = 'Todos los campos son obligatorios';
        return;
    }

    mutate({ id: skillId, formData: newSkill })
}
</script>


<template>

    <!-- Container -->
    <div class="w-full bg-gray-950 rounded-3xl flex">

        <!-- Form -->
        <div class="w-full lg:w-1/2 p-5">
            <h1 class="text-white text-3xl uppercase font-bold text-center">Agregar nuevo Skill</h1>

            <form @submit.prevent="actualizarSkill">

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

                    <input type="submit" value="Actualizar skill"
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
