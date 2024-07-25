<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  closeModal: Function,
  selectedUsers: Array
});

const emit = defineEmits(['confirm'])

const handleConfirm = () => {
  emit('confirm', props.selectedUsers)
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-gray-900 rounded-xl p-5 w-3/4">
      <h2 class="text-white text-xl font-bold mb-4 uppercase">Confirmar asignación de membresía</h2>

      <!-- Lista de usuarios seleccionados -->
      <ul class="text-white mb-4 uppercase">
        <li v-for="atleta in selectedUsers" :key="atleta._id">{{ atleta.id_usuario.nombre }} {{
          atleta.id_usuario.apellido }}</li>
      </ul>

      <div class="flex justify-end">
        <button @click="handleConfirm" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 mr-2">
          CONFIRMAR
        </button>
        <button @click="closeModal" class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
          CANCELAR
        </button>
      </div>
    </div>
  </div>
</template>