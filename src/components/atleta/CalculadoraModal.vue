<script setup>

    import { ref } from "vue";
    import Alerta from '@/components/Alerta.vue';

    const error = ref('');

    const emit = defineEmits(['ocultar-modal', 'guardar-porcentaje' , 'update:porcentaje', 'update:barra']);

    const props = defineProps({
        modal:{
           type: Object,
           required: true 
        },
        porcentaje:{
            type: [String, Number],
            required: true 
        },
        barra:{
            type: [String, Number],
            required: true 
        }
    });

    const agregarPorcentaje = () => {
        //Validar campos vacios
        const {porcentaje, barra} = props;

        if([porcentaje, barra].includes('')){
            error.value = 'Todos los campos son obligatorios'

            setTimeout(() => {
                error.value = ''
            }, 3000);

            return;
        }

        //Validar el porcentaje
        if(porcentaje <= 0){
            error.value = 'Porcentaje no Válido'

            setTimeout(() => {
                error.value = ''
            }, 3000);

            return;
        }    

        //Emitir al padre
        emit('guardar-porcentaje');
    }

</script>

<template>
    <div class="modal">
      <div dir="rtl" class="absolute h-14 w-14 top-0 start-0">
        <button
          class="text-white font-extrabold text-3xl m-10 hover:text-red-600"
          v-on:click="$emit('ocultar-modal')"
        >
          X
        </button>
      </div>
  
      <div class="contenedor-formulario" :class="modal.animar ? 'animar' : 'cerrar'">
        <form
          class="px-3 md:px-10 py-10 md:w-3/4 xl:w-1/3 md:mt-12 md:mb-0 md:mr-auto md:ml-auto"
          @submit.prevent="agregarPorcentaje"
        >
          <Alerta v-if="error" class="mt-14 md:mt-0">
            {{ error }}
          </Alerta>
  
          <legend class="uppercase text-orange-500 font-bold text-3xl md:text-5xl text-center my-8">
            Añadir Porcentaje
          </legend>
  
          <div class="grid gap-4">
            <label for="porcentaje" class="text-center text-3xl font-bold text-white uppercase">
              Porcentaje %
            </label>
            <input
              id="porcentaje"
              type="number"
              placeholder="Ingresa el porcentaje %"
              class="p-2 rounded-2xl text-center font-bold bg-gray-900 text-xl text-white uppercase placeholder:font-medium"
              :value="porcentaje"
              @input="$emit('update:porcentaje', +$event.target.value)"
            />
          </div>
  
          <div class="grid gap-4">
            <label for="barra" class="text-center text-3xl font-bold text-white mt-4 uppercase">
              Barra LB
            </label>
            <select
              id="barra"
              :value="barra"
              @input="$emit('update:barra', +$event.target.value)"
              class="p-2 rounded-2xl text-center font-bold bg-gray-900 text-lg text-white uppercase"
            >
              <option value="45" disabled selected>-- Selecciona el peso de tú barra --</option>
              <option value="45">45 LB</option>
              <option value="35">35 LB</option>
            </select>
          </div>
  
          <input
            type="submit"
            value="Agregar"
            class="uppercase rounded-2xl mt-4 p-2 w-full border-4 border-blue-600 text-xl text-white font-bold hover:bg-blue-600 hover:cursor-pointer"
          />
        </form>
      </div>
    </div>
  </template>

<style scoped>

    .modal{
        position: absolute;
        background-color: rgb(0 0 0 / 0.95);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
    }

    .contenedor-formulario{
        transition-property: all;
        transition-duration: 300ms;
        transition-timing-function: ease-in;
        opacity: 0;
    }

    .contenedor-formulario.animar{
        opacity: 1;
    }
    .contenedor-formulario.cerrar{
        opacity: 0;
    }

</style>


