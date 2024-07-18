<template>
    <div class="bg-gray-950 w-full rounded-3xl p-5 h-full flex gap-5">
      <!-- Formulario de membresía -->
      <section class="w-1/2">
        <h1 class="text-white uppercase text-2xl font-bold mb-7 text-center">Agregar membresia</h1>
  
        <form action="">
          <!-- Fecha Inicio -->
          <div class="flex flex-wrap my-6">
            <label class="uppercase text-white font-bold text-xl my-2">Fecha Inicio</label>
            <input
              type="date"
              placeholder="INGRESA EL INICIO DE LA MEBRESIA"
              class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
            >
          </div>
  
          <!-- Fecha Fin -->
          <div class="flex flex-wrap my-6">
            <label class="uppercase text-white font-bold text-xl my-2">Fecha Fin</label>
            <input
              type="date"
              placeholder="INGRESA EL FIN DE LA MEBRESIA"
              class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
            >
          </div>
  
          <!-- Costo -->
          <div class="flex flex-wrap my-6">
            <label class="uppercase text-white font-bold text-xl my-2">Costo total de la membresia</label>
            <input
              type="number"
              placeholder="INGRESA EL COSTO DE LA MEBRESIA"
              class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
            >
          </div>
  
          <!-- Estado -->
          <div class="flex flex-wrap my-6">
            <label class="uppercase text-white font-bold text-xl my-2">Estado de la membresia</label>
            <select
              name=""
              id=""
              class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase"
            >
              <option value="" class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase" disabled selected>
                -- selecciona el estado de la membresia --
              </option>
              <option value="" class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase">-- activo --</option>
              <option value="" class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase">-- inactivo --</option>
            </select>
          </div>
  
          <!-- Tipo -->
          <div class="flex flex-wrap my-6">
            <label class="uppercase text-white font-bold text-xl my-2">Tipo de membresia</label>
            <select
              name=""
              id=""
              class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase"
            >
              <option value="" class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase" disabled selected>
                -- selecciona el tipo de membresia --
              </option>
              <option value="" class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase">-- individual --</option>
              <option value="" class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase">-- pareja --</option>
              <option value="" class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase">-- familiar +3 --</option>
            </select>
          </div>
  
          <!-- Botón para agregar usuario -->
          <div>
            <button
              type="button"
              @click="openModal"
              class="uppercase border-4 border-blue-600 rounded-2xl text-white text-lg font-bold py-2 w-full hover:bg-blue-600"
            >
              Agregar Usuario
            </button>
          </div>
        </form>
      </section>
  
      <!-- Sección de Usuarios -->
      <section class="w-1/2">
        <h1 class="text-white uppercase text-2xl font-bold mb-7 text-center">Usuarios en la membresia</h1>
        <!-- Aquí puedes mostrar los usuarios seleccionados -->
        <div>
          <!-- Implementa la lógica de mostrar usuarios aquí -->
        </div>
      </section>
  
      <!-- Modal de búsqueda de usuarios -->
      <ModalMembresia :isOpen="modalOpen" :closeModal="closeModal" />
      <!-- Modal de confirmación -->
      <ConfirmacionModal :isOpen="confirmacionOpen" :closeModal="closeConfirmacionModal" :selectedUsers="selectedUsers" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ModalMembresia from '@/components/admin/ModalMembresia.vue';
  import ConfirmacionModal from '@/components/admin/ConfirmacionModal.vue';
  
  const modalOpen = ref(false);
  const confirmacionOpen = ref(false);
  const selectedUsers = ref([]);
  
  // Funciones para abrir y cerrar los modales
  const openModal = () => {
    modalOpen.value = true;
  };
  
  const closeModal = () => {
    modalOpen.value = false;
  };
  
  const openConfirmacionModal = () => {
    confirmacionOpen.value = true;
  };
  
  const closeConfirmacionModal = () => {
    confirmacionOpen.value = false;
  };
  
  // Función para manejar el cierre del modal de confirmación y finalizar la asignación
  const finalizarAsignacion = () => {
    console.log('Usuarios seleccionados:', selectedUsers.value);
    closeConfirmacionModal();
    // Mostrar mensaje de membresía asignada correctamente
  };
  </script>
  