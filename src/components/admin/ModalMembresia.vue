<script setup>
import { defineProps, ref, computed, watch } from 'vue';
import ConfirmacionModal from '@/components/admin/ConfirmacionModal.vue';
import { getAllAthletes } from '@/api/AdminAPI';
import { useQuery } from '@tanstack/vue-query';

const props = defineProps({
  isOpen: Boolean,
  closeModal: Function
});

const emit = defineEmits(['agregarAtleta']);
const searchQuery = ref('');
const confirmacionModalOpen = ref(false);
const selectedUsers = ref([])

const { data: atletasData } = useQuery({
  queryKey: ['atletas'],
  queryFn: getAllAthletes
});


const filteredUsers = computed(() => {
  return atletasData.value.filter(user =>
    user.id_usuario.nombre.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.id_usuario.apellido.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const closeModalAndReturn = () => {
  props.closeModal();
  confirmacionModalOpen.value = false;
};

const confirmarAsignacionMembresia = () => {
  confirmacionModalOpen.value = true;
};

const cerrarConfirmacionModal = () => {
  confirmacionModalOpen.value = false;
};

const finalizarAsignacion = (usuariosSeleccionados) => {
  emit('agregarAtleta', usuariosSeleccionados)
  closeModalAndReturn();
};

</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
    <div class="bg-gray-950 rounded-xl p-5 w-3/4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-white text-xl font-bold uppercase">Buscar Usuarios</h2>
        <button @click="closeModalAndReturn" class="text-white text-xl font-bold hover:text-red-600">&times;</button>
      </div>

      <!-- Barra de búsqueda -->
      <input type="text" v-model="searchQuery" placeholder="Buscar usuario..."
        class="uppercase bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white mb-4" />

      <!-- Lista de usuarios -->
      <div class="overflow-y-auto max-h-60 mb-4">
        <div v-if="filteredUsers.length === 0" class="uppercase text-white text-center py-4">
          No se encontraron usuarios.
        </div>
        <div v-for="athlete in filteredUsers" :key="athlete._id" class="flex mb-2 w-full overscroll-auto max-h-max">
          <label class="flex text-white m-1">
            <input type="checkbox" v-model="selectedUsers" :value="athlete"
              class="form-checkbox h-4 w-4 text-blue-600 rounded">
            <span class="ml-2 uppercase">{{ athlete.id_usuario.nombre }} {{ athlete.id_usuario.apellido }}</span>
          </label>
        </div>
      </div>

      <!-- Botones -->
      <div class="flex justify-end">
        <button @click="closeModalAndReturn"
          class="uppercase border-2 border-gray-500 text-white px-4 py-2 rounded-xl mr-2 hover:bg-gray-500">
          Regresar
        </button>
        <button @click="confirmarAsignacionMembresia"
          class="uppercase border-2 border-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-600">
          Finalizar
        </button>
      </div>

      <!-- Modal de confirmación -->
      <ConfirmacionModal :isOpen="confirmacionModalOpen" :closeModal="cerrarConfirmacionModal"
        :selectedUsers="selectedUsers" @confirm="finalizarAsignacion" />
    </div>
  </div>
</template>

<style scoped>
.max-h-60 {
  max-height: 15rem;
}

.form-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 2px solid #6b7280;
  border-radius: 4px;
  height: 1.5rem;
  width: 1.5rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  cursor: pointer;
}

.form-checkbox:checked {
  background-color: #16a34a;
  border-color: #16a34a;
}
</style>
