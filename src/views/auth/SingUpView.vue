<script setup>
import { reactive, ref, watch } from 'vue'
import { useMutation } from '@tanstack/vue-query'
import { createAccount } from '@/api/AuthAPI'

import Alerta from '@/components/Alerta.vue'
import Success from '@/components/Success.vue'

const newUserData = reactive({
  nombre: '',
  apellido: '',
  correo: '',
  password: '',
  password_confirmation: '',
  edad: '',
  sexo: '',
  rol: 'atleta' // Rol fijo, no visible
})

const errors = ref('')
const success = ref('')

// ⏳ Desaparecer alertas automáticamente después de 3 segundos
watch(errors, (val) => {
  if (val) {
    setTimeout(() => {
      errors.value = ''
    }, 3000)
  }
})

watch(success, (val) => {
  if (val) {
    setTimeout(() => {
      success.value = ''
    }, 3000)
  }
})

const { mutate } = useMutation({
  mutationFn: createAccount,
  onError: (error) => {
    errors.value = error
  },
  onSuccess: (data) => {
    success.value = data
    Object.assign(newUserData, {
      nombre: '',
      apellido: '',
      correo: '',
      password: '',
      password_confirmation: '',
      edad: '',
      sexo: '',
      rol: 'atleta'
    })
  }
})

const createUser = async () => {
  if (Object.values(newUserData).some(val => val === '')) {
    errors.value = 'Todos los campos son obligatorios'
    return
  }

  if (newUserData.password !== newUserData.password_confirmation) {
    errors.value = 'Las contraseñas no coinciden'
    return
  }

  mutate(newUserData)
}
</script>



<template>
  <section class="w-full p-2 flex justify-center">
    <div class="bg-gray-950 w-full rounded-3xl h-full flex flex-wrap">
      <div
        class="bg-[url('/img/12.jpg')] bg-cover bg-center rounded-3xl rounded-r-none w-full lg:w-1/2 border-blue-500">
      </div>

      <form @submit.prevent="createUser" class="w-full lg:w-1/2 p-16 flex justify-center flex-wrap flex-col">
        <h1 class="uppercase text-white text-3xl font-extrabold text-center my-4">Nuevo Usuario</h1>

        <Alerta v-if="errors">{{ errors }}</Alerta>
        <Success v-if="success">{{ success }}</Success>

        <div>
          <div class="flex flex-wrap my-6">
            <label for="nombre" class="uppercase text-white font-bold text-xl">Nombre del Usuario</label>
            <input id="nombre" type="text" placeholder="NOMBRE USUARIO"
              class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white" v-model="newUserData.nombre">
          </div>

          <div class="flex flex-wrap my-6">
            <label for="apellido" class="uppercase text-white font-bold text-xl">Apellido del Usuario</label>
            <input id="apellido" type="text" placeholder="APELLIDO USUARIO"
              class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white" v-model="newUserData.apellido">
          </div>

          <div class="flex flex-wrap my-6">
            <label for="correo" class="uppercase text-white font-bold text-xl">Correo del Usuario</label>
            <input id="correo" type="email" placeholder="CORREO USUARIO"
              class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white" v-model="newUserData.correo">
          </div>

          <div class="flex flex-wrap my-6">
            <label for="password" class="uppercase text-white font-bold text-xl">Contraseña</label>
            <input id="password" type="password" placeholder="CONTRASEÑA"
              class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white" v-model="newUserData.password">
          </div>

          <div class="flex flex-wrap my-6">
            <label for="password_confirmation" class="uppercase text-white font-bold text-xl">Confirmar
              Contraseña</label>
            <input id="password_confirmation" type="password" placeholder="CONFIRMAR CONTRASEÑA"
              class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
              v-model="newUserData.password_confirmation">
          </div>

          <div class="flex flex-wrap my-6">
            <label for="edad" class="uppercase text-white font-bold text-xl">Edad</label>
            <input id="edad" type="number" placeholder="EDAD"
              class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white" v-model="newUserData.edad">
          </div>

          <div class="flex flex-wrap my-6">
            <label for="sexo" class="uppercase text-white font-bold text-xl">Sexo</label>
            <select id="sexo" class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
              v-model="newUserData.sexo">
              <option value="">-- Selecciona una opción --</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>

        </div>

        <input type="submit" value="Crear Usuario"
          class="w-full border-2 border-blue-600 text-white uppercase rounded-xl p-3 text-xl font-bold hover:bg-blue-600">

        <RouterLink
          class="w-full border-2 border-orange-500 text-white uppercase rounded-xl p-3 text-xl font-bold hover:bg-orange-500 mt-4 text-center"
          :to="{ name: 'login' }">
          Iniciar Sesión
        </RouterLink>

      </form>
    </div>
  </section>
</template>