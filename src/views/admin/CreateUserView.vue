<script setup>
import { createAccount, getRols } from '@/api/AuthAPI';
import Alerta from '@/components/Alerta.vue';
import Success from '@/components/Success.vue'
import { useMutation, useQuery } from '@tanstack/vue-query';
import { reactive, ref } from 'vue';


const newUserData = reactive({
    nombre: '',
    apellido: '',
    correo: '',
    rol: ''
})

const errors = ref('')
const success = ref('')

const { data } = useQuery({
    queryKey: ['rols'],
    queryFn: getRols
})

const { mutate } = useMutation({
    mutationFn: createAccount,
    onError: (error) => {
        errors.value = error
    },
    onSuccess: (data) => {
        success.value = data
        newUserData.nombre = ''
        newUserData.apellido = ''
        newUserData.correo = ''
        newUserData.rol = ''
    }
})



const createUser = async () => {
    if (Object.values(newUserData).includes('')) {
        errors.value = 'Todos los campos son obligatorios';
        return
    }

    mutate(newUserData)
}

</script>

<template>
    
    <div class="grid col-span-11 ">

        <section class="w-full flex justify-center">
            <div class="bg-gray-950 w-full rounded-3xl h-full flex flex-wrap">
                <form @submit.prevent="createUser" class="w-full lg:w-1/2 p-16 flex justify-center flex-wrap flex-col">
                    <h1 class="uppercase text-white text-3xl font-extrabold text-center my-4">Nuevo Usuario</h1>

                    <Alerta v-if="errors">
                        {{ errors }}
                    </Alerta>

                    <Success v-if="success">
                        {{ success }}
                    </Success>

                    <div>
                        <div class="flex flex-wrap my-6">
                            <label for="nombre" class="uppercase text-white font-bold text-xl">Nombre del Usuario</label>
                            <input 
                                id="nombre" 
                                type="text" 
                                placeholder="NOMBRE USUARIO"
                                class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
                                v-model="newUserData.nombre"
                            >
                        </div>

                        <div class="flex flex-wrap my-6">
                            <label 
                                for="apellido" 
                                class="uppercase text-white font-bold text-xl"
                            >Apellido del Usuario
                            </label>
                            <input 
                                id="apellido" 
                                type="text" 
                                placeholder="APELLIDO USUARIO"
                                class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
                                v-model="newUserData.apellido">
                        </div>

                        <div class="flex flex-wrap my-6">
                            <label 
                                for="correo" 
                                class="uppercase text-white font-bold text-xl"
                            >
                                Correo del Usuario
                            </label>
                            <input 
                                id="correo" 
                                type="text" 
                                placeholder="CORREO USUARIO"
                                class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
                                v-model="newUserData.correo">
                        </div>

                        <div class="flex flex-wrap my-6">
                            <label 
                                for="password_confirmation" 
                                class="uppercase text-white font-bold text-xl"
                            >
                                Rol
                            </label>
                            <select 
                                id="rol" 
                                class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
                                v-model="newUserData.rol">
                                <option value="">-- Selecciona una Opcion --</option>
                                <option 
                                    v-for="rol in data" :key="rol._id" :value="rol._id.toString()"
                                >
                                    {{ rol.nombre_rol }}
                                </option>

                            </select>
                        </div>
                    </div>
                    <input 
                        type="submit" 
                        value="Crear Usuario"
                        class="w-full border-2 border-blue-600 text-white uppercase rounded-xl p-3  text-xl font-bold hover:bg-blue-600"
                    >
                </form>
                <div class="bg-img-4 bg-cover bg-center  rounded-3xl rounded-l-none w-full lg:w-1/2 border-blue-500">

                </div>
            </div>
        </section>

    </div>

</template>
