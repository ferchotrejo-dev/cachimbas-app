<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-gray-900 rounded-xl p-5 w-3/4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-white text-xl font-bold uppercase">Buscar Usuarios</h2>
        <button @click="closeModalAndReturn" class="text-white text-xl font-bold">&times;</button>
      </div>

      <!-- Barra de búsqueda -->
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Buscar usuario..."
        class="uppercase bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white mb-4"
      />

      <!-- Lista de usuarios -->
      <div class="overflow-y-auto max-h-60 mb-4">
        <div v-if="filteredUsers.length === 0" class="uppercase text-white text-center py-4">
          No se encontraron usuarios.
        </div>
        <div v-for="(user, index) in filteredUsers" :key="index" class="flex items-center justify-between mb-2">
          <label class="flex items-center text-white">
            <input type="checkbox" v-model="selectedUsers" :value="user.id" class="form-checkbox h-4 w-4 text-blue-600 rounded">
            <span class="ml-2 uppercase">{{ user.name }}</span>
          </label>
          <span class="text-gray-400 uppercase">{{ user.email }}</span>
        </div>
      </div>

      <!-- Botones -->
      <div class="flex justify-end">
        <button @click="closeModalAndReturn" class=" uppercase bg-gray-600 text-white px-4 py-2 rounded-lg mr-2 hover:bg-gray-700">
          Regresar
        </button>
        <button @click="confirmarAsignacionMembresia" class=" uppercase bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Finalizar
        </button>
      </div>

      <!-- Modal de confirmación -->
      <ConfirmacionModal :isOpen="confirmacionModalOpen" :closeModal="cerrarConfirmacionModal" :selectedUsers="selectedUsers" :users="users" @confirm="finalizarAsignacion" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue';
import ConfirmacionModal from '@/components/admin/ConfirmacionModal.vue';

const props = defineProps({
  isOpen: Boolean,
  closeModal: Function
});

const users = ref([
  { id: 1, name: 'Luis Fernando Bernal Trejo', email: 'fercho@gmail.com' },
  { id: 2, name: 'Juan Carlos Comstantino Cardenas', email: 'juan@gmail.com' },
  { id: 3, name: 'Erick Sebastian Vargas Garcia', email: 'sebas@gmail.com' },
  { id: 4, name: 'Jenny Rivera Martinez', email: 'jenny@gmail.com' },
]);

const selectedUsers = ref([]);
const searchQuery = ref('');
const confirmacionModalOpen = ref(false);


const filteredUsers = computed(() => {
  return users.value.filter(user => user.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

const closeModalAndReturn = () => {
  props.closeModal();
};

const confirmarAsignacionMembresia = () => {
  confirmacionModalOpen.value = true;
};

const cerrarConfirmacionModal = () => {
  confirmacionModalOpen.value = false;
};

const finalizarAsignacion = () => {
  console.log('Asignación finalizada para los usuarios:', selectedUsers.value);
  closeModalAndReturn();
};

</script>

<style scoped>
.max-h-60 {
  max-height: 15rem; 
}

.form-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 2px solid #4A5568;
  border-radius: 4px;
  height: 1.5rem;
  width: 1.5rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  cursor: pointer;
}

.form-checkbox:checked {
  background-color: #2fc52a;
  border-color: #2fc52a;
}
</style>
