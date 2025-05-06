<script setup>

    import { ref } from 'vue';
    import Alerta from '@/components/Alerta.vue';

    const pr = ref(0);
    const error = ref('');

    const emit = defineEmits(['definir-PR']);

    const definirPR = () => {
        if(pr.value <= 0 || pr.value === ''){
            error.value = 'PR NO VÁLIDO'

            setTimeout(() => {
                error.value = ''
            }, 3000);

            return;
        }

        emit('definir-PR', pr.value);

    }

</script>

<template>
    <form action="" class="w-full" @submit.prevent="definirPR">
      <Alerta v-if="error">
        {{ error }}
      </Alerta>
  
      <div class="grid gap-3">
        <label for="nuevo-pr" class="text-center text-3xl font-bold text-white">
          INgresa tú 100%
        </label>
        <input
          id="nuevo-pr"
          type="number"
          placeholder="Ingresa tu 100%"
          class="p-2 rounded-2xl text-center font-bold bg-gray-900 text-2xl text-white"
          min="0"
          v-model.number="pr"
        />
      </div>
  
      <input
        type="submit"
        value="Calcular"
        class="uppercase rounded-2xl mt-4 p-2 text-xl text-white font-bold w-full border-4 border-orange-600 hover:bg-orange-600 hover:cursor-pointer"
      />
    </form>
  </template>