<script setup>
import { reactive, ref, computed } from 'vue';
import ModalMembresia from '@/components/admin/ModalMembresia.vue';
import MembershipCard from '@/components/admin/MembershipCard.vue';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { createMembership, getCatMemb } from '@/api/AdminAPI';
import Success from '@/components/Success.vue';
import Alerta from '@/components/Alerta.vue';

const modalOpen = ref(false);

const errors = ref('');
const success = ref('');
const selectedUsers = ref([])

const newMembership = reactive({
  fecha_inicio: '',
  fecha_fin: '',
  precio: 0,
  status: '',
  catMemb: '',
  atletasAsignados: []
});

// Funciones para abrir y cerrar los modales
const openModal = () => {
  modalOpen.value = true;
};

const closeModal = () => {
  modalOpen.value = false;
};

const { data: catMembData } = useQuery({
  queryKey: ['catMemb'],
  queryFn: getCatMemb
});

const { mutate } = useMutation({
  mutationFn: createMembership,
  onError: (error) => {
    errors.value = error;
  },
  onSuccess: (data) => {
    success.value = data;
  }
});

const crearMembresia = async () => {
  if (Object.values(newMembership).includes('')) {
    errors.value = 'Todos los campos son obligatorios';
    return;
  }

  if (newMembership.atletasAsignados.length < 1) {
    errors.value = 'La membresía debe tener por lo menos un atleta';
    return;
  }

  mutate(newMembership);
};

const agregarAtleta = (atletas) => {
  selectedUsers.value = atletas
  newMembership.atletasAsignados = selectedUsers
}


</script>

<template>
  <div class="bg-gray-950 w-full rounded-3xl p-5 h-full flex gap-5 flex-wrap lg:flex-nowrap">
    <!-- Formulario de membresía -->
    <section class="lg:w-1/2 flex justify-center flex-wrap">
      <h1 class="text-white uppercase text-2xl font-bold mb-7 text-center w-full">Agregar membresía</h1>
      <Alerta v-if="errors">
        {{ errors }}
      </Alerta>

      <Success v-if="success">
        {{ success }}
      </Success>
      <form @submit.prevent="crearMembresia">
        <!-- Fecha Inicio -->
        <div class="flex flex-wrap my-6">
          <label class="uppercase text-white font-bold text-xl my-2">Fecha Inicio</label>
          <input type="date" placeholder="INGRESA EL INICIO DE LA MEMBRESÍA" id="fecha_inicio"
            v-model="newMembership.fecha_inicio"
            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white">
        </div>

        <!-- Fecha Fin -->
        <div class="flex flex-wrap my-6">
          <label class="uppercase text-white font-bold text-xl my-2">Fecha Fin</label>
          <input type="date" placeholder="INGRESA EL FIN DE LA MEMBRESÍA" id="fecha_fin"
            v-model="newMembership.fecha_fin"
            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white">
        </div>

        <!-- Costo -->
        <div class="flex flex-wrap my-6">
          <label class="uppercase text-white font-bold text-xl my-2">Precio total de la membresía</label>
          <input type="number" placeholder="INGRESA EL COSTO DE LA MEMBRESÍA" id="precio" v-model="newMembership.precio"
            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white">
        </div>

        <!-- Estado -->
        <div class="flex flex-wrap my-6">
          <label class="uppercase text-white font-bold text-xl my-2">Estado de la membresía</label>
          <select v-model="newMembership.status" name="status" id="status"
            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase">
            <option value="" class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase"
              disabled selected>
              -- selecciona el estado de la membresía --
            </option>
            <option value="true" class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase">
              -- activo --
            </option>
            <option value="false" class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase">
              -- inactivo --
            </option>
          </select>
        </div>

        <!-- Tipo -->
        <div class="flex flex-wrap my-6">
          <label class="uppercase text-white font-bold text-xl my-2">Tipo de membresía</label>
          <select v-model="newMembership.catMemb" name="catMemb" id="catMemb"
            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase">
            <option value="" class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase"
              disabled selected>
              -- selecciona el tipo de membresía --
            </option>
            <option v-for="categoria in catMembData" :value="categoria._id" :key="categoria._id"
              class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase">
              {{ categoria.tipo_membresia }}
            </option>
          </select>
        </div>

        <!-- Botón para crear membresía -->
        <div>
          <input type="submit" value="Crear Membresía"
            class="uppercase border-4 border-blue-600 rounded-2xl text-white text-lg font-bold py-2 w-full hover:bg-blue-600 mt-4">
        </div>
      </form>
    </section>

    <!-- Sección de Usuarios -->
    <section class="lg:w-1/2 w-full ">
      <h1 class="text-white uppercase text-2xl font-bold mb-7 text-center mt-8 lg:mt-0">Usuarios en la membresía</h1>
      <!-- Usuarios seleccionados -->
      <div class="w-full flex justify-center flex-wrap gap-4" v-for="atleta in selectedUsers" :key="atleta._id">
        <MembershipCard>
          {{ atleta.id_usuario.nombre }} {{ atleta.id_usuario.apellido }}
        </MembershipCard>
      </div>

      <!-- Botón para agregar usuario -->
      <div>
        <button type="button" @click="openModal"
          class="uppercase border-4 border-blue-600 rounded-2xl text-white text-lg font-bold py-2 w-full hover:bg-blue-600 mt-4">
          Agregar Usuario
        </button>
      </div>
    </section>

    <!-- Modal de búsqueda de usuarios -->
    <ModalMembresia :isOpen="modalOpen" :closeModal="closeModal" @agregarAtleta="agregarAtleta" />
  </div>
</template>
