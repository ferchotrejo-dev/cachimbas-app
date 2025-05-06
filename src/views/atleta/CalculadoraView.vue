
<script setup>
    import { ref, reactive } from "vue";
    
    import PR from '@/components/atleta/PR.vue'
    import CalculadoraModal from '@/components/atleta/CalculadoraModal.vue';
    import Porcentaje from '@/components/atleta/Porcentaje.vue';
    import { generarId, pesoTotal, pesoLado } from '@/helpers/CalculadoraHelpers.js'

    const pr = ref(0);

    const valores = reactive ({
        porcentaje: '',
        barra: '',
        id: null,
        total: null,
        lado: null
    });

    const porcentajes = ref([]);

    const modal = reactive({
            mostrar:false,
            animar:false
        });

    const definirPR = (cantidad) => {
        pr.value = cantidad;
    }

    const resetear = () => {
        pr.value = 0;
        porcentajes.value = [];
    }

    const mostrarModal = () => {
            modal.mostrar = true;
            setTimeout(() => {
            modal.animar = true;
            }, 300);
            
        }

    const ocultarModal = () => {
            modal.animar = false;
            setTimeout(() => {
            modal.mostrar = false;
            }, 300);
    }

    const guardarPorcentaje = () => {
        porcentajes.value.push({
        ...valores,
        id: generarId(),
        total: pesoTotal(pr.value, valores.porcentaje),
        lado: pesoLado(pesoTotal(pr.value, valores.porcentaje), valores.barra)
        });

        ocultarModal();

        //Reiniciar el formulario del Modal
        Object.assign(valores, {
        porcentaje: '',
        barra: '',
        id: null,
        total: null,
        lado: null
        });
    }
</script>

<template>
    <div class="bg-gray-950 rounded-3xl w-full">
      <div class="flex justify-center">
        <PR
          class="m-6 md:w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/3 uppercase"
          v-if="pr === 0"
          @definir-PR="definirPR"
        />
  
        <div v-else class="m-6 md:w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/3">
          <h1 class="text-4xl md:text-5xl font-semibold text-center text-white w-full">
            100% = <span class="text-5xl md:text-6xl font-bold text-orange-500">{{ pr }}</span> LB
          </h1>
  
          <button
            class="uppercase border-4 border-blue-500 rounded-2xl text-white text-xl font-bold my-3 p-2 mb-4 mt-6 w-full hover:bg-blue-500"
            v-on:click="mostrarModal"
          >
            Calcular Porcentaje %
          </button>
  
          <button
            class="uppercase border-4 border-orange-500 rounded-2xl text-white text-xl font-bold p-2 w-full hover:bg-orange-500"
            v-on:click="resetear"
          >
            Resetear 100%
          </button>
        </div>
  
        <div v-if="pr > 0">
          <CalculadoraModal
            v-if="modal.mostrar"
            @ocultar-modal="ocultarModal"
            @guardar-porcentaje="guardarPorcentaje"
            :modal="modal"
            v-model:porcentaje="valores.porcentaje"
            v-model:barra="valores.barra"
          />
        </div>
      </div>
  
      <!-- MAin Porcentajes -->
      <div class="mb-36 px-14 pb-14 lg:mx-32">
        <h2 class="uppercase text-center text-white font-bold text-3xl md:text-3xl py-3">
          {{ porcentajes.length > 0 ? 'Porcentajes %' : '' }}
        </h2>
  
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Porcentaje
            v-for="porcentaje in porcentajes"
            :key="porcentaje.id"
            :porcentaje="porcentaje"
          />
        </div>
      </div>
    </div>
  </template>
  


