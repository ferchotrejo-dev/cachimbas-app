<script setup>
import { ref, watchEffect, onMounted } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { generarEntrenamiento } from '@/api/EntrenamientoAPI'

// Definición de los objetivos y tipos de ejercicio base
const objetivos = ['Aumento de Pesos', 'Técnica de Movimientos', 'Volumen de Repeticiones']
const ejerciciosBase = ['Complementario', 'Envión', 'Arranque']

// Estado reactivo para los valores seleccionados
const tipoObjetivo = ref(objetivos[0])
const ejercicioBase = ref(ejerciciosBase[0])
const isLoadingCustom = ref(false)

// Plan cargado desde localStorage
const storedPlan = localStorage.getItem('planEntrenamiento')
const planGuardado = ref(storedPlan ? JSON.parse(storedPlan) : null)

// useQuery (solo ejecuta con refetch)
const { data: plan, isPending, isError, refetch } = useQuery({
  queryKey: ['plan', tipoObjetivo, ejercicioBase],
  queryFn: () => generarEntrenamiento({ objetivo: tipoObjetivo.value, ejercicioBase: ejercicioBase.value }),
  enabled: false,
  retry: 3
})

// Ejecutar y guardar resultado
const generarPlan = async () => {
  isLoadingCustom.value = true
  const { data } = await refetch()
  if (data) {
    planGuardado.value = data
    localStorage.setItem('planEntrenamiento', JSON.stringify(data))
  }
  isLoadingCustom.value = false
}

// Si se recarga la página, cargar desde localStorage
onMounted(() => {
  const planJSON = localStorage.getItem('planEntrenamiento')
  if (planJSON) {
    planGuardado.value = JSON.parse(planJSON)
  }
})
</script>

<template>
    <div class="bg-gray-950 w-full rounded-3xl p-10">
      <div class="border-2 border-gray-400 rounded-xl p-6 mb-6">
        <h1 class="text-white uppercase text-2xl font-bold text-center">
          Generar Plan de Entrenamiento
        </h1>
      </div>
  
      <!-- Formulario dinámico -->
      <div class="w-full flex gap-4 flex-wrap lg:flex-nowrap">
        <div class="mb-6 w-full lg:w-1/2">
          <label class="text-white text-xl font-semibold" for="objetivo">Objetivo</label>
          <select v-model="tipoObjetivo" id="objetivo"
                  class="w-full p-2 text-center text-lg mt-2 rounded-lg bg-gray-800 text-white">
            <option v-for="objetivo in objetivos" :key="objetivo" :value="objetivo">
              {{ objetivo }}
            </option>
          </select>
        </div>
  
        <div class="mb-6 w-full lg:w-1/2">
          <label class="text-white text-xl font-semibold" for="ejercicioBase">Ejercicio Base</label>
          <select v-model="ejercicioBase" id="ejercicioBase"
                  class="w-full p-2 text-center text-lg mt-2 rounded-lg bg-gray-800 text-white">
            <option v-for="ejercicio in ejerciciosBase" :key="ejercicio" :value="ejercicio">
              {{ ejercicio }}
            </option>
          </select>
        </div>
      </div>
  
      <!-- Botón -->
      <div class="w-full flex justify-center">
        <button @click="generarPlan"
                class="w-full lg:w-1/3 border-2 border-orange-500 text-white text-lg font-bold p-3 rounded-lg mt-4 hover:bg-orange-500">
          Generar Plan
        </button>
      </div>
  
      <!-- Indicadores -->
      <div v-if="isLoadingCustom" class="text-orange-500 text-center mt-4">Cargando entrenamiento...</div>
      <div v-if="isError" class="text-red-500 text-center mt-4">Error al generar el entrenamiento</div>
  
      <!-- Plan generado -->
      <div v-if="planGuardado" class="mt-6">
        <div class="border-2 border-gray-400 rounded-xl p-6 flex flex-col items-center justify-center">
          <h2 class="text-white font-extrabold text-2xl uppercase mb-2 text-center">
            {{ planGuardado["Variación del Ejercicio"] }}
          </h2>
          <div class="text-center">
            <p class="text-xl font-medium text-white uppercase">
              Series:
              <span class="text-2xl font-extrabold text-orange-500">{{ planGuardado.Series }}</span>
            </p>
            <p class="text-xl font-medium text-white uppercase">
              Reps:
              <span class="text-2xl font-extrabold text-orange-500">{{ planGuardado.Repeticiones }}</span>
            </p>
            <p class="text-xl font-medium text-white uppercase">
              Peso Máximo:
              <span class="text-2xl font-extrabold text-orange-500">{{ planGuardado["Porcentaje de Peso Máximo"] }}</span> %
            </p>
          </div>
        </div>
      </div>
    </div>
</template>
  

