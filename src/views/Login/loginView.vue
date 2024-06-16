<script setup>

import { reactive, ref } from 'vue';
import { authenticateUser } from '/src/api/AuthAPI.js'
import { useMutation } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'

import Logo from '/src/components/Logo.vue';
import Alerta from '/src/components/Alerta.vue';


const errors = ref('');

const dataLogin = reactive({
    correo: '',
    password: ''
});

const router = useRouter()

const { mutate } = useMutation({
    mutationFn: authenticateUser,
    onError: (error) => {
        errors.value = error.message
    },
    onSuccess: () => {
        router.push('/')
    }
})

const login = async () => {
    if (Object.values(dataLogin).includes('')) {
        errors.value = 'Todos los campos son obligatorios';
        return
    }

    mutate(dataLogin)

}

</script>

<template>

    <section class="w-full flex justify-center p-2 my-3 md:my-6">
        <div class="bg-gray-950 w-full md:w-3/4  p-2 md:p-4 rounded-3xl flex justify-center">
            <Logo />
        </div>
    </section>

    <section class="w-full p-2 flex justify-center">

        <div class="bg-gray-950 w-full md:w-3/4 rounded-3xl h-full flex flex-wrap">
            <div class="bg-img-3 bg-cover bg-center  rounded-3xl rounded-r-none w-full lg:w-1/2 border-blue-500">

            </div>

            <!-- Form -->
            <form @submit.prevent="login" class="w-full lg:w-1/2 p-16 flex justify-center flex-wrap flex-col">

                <h1 class="uppercase text-white text-3xl font-extrabold text-center my-4">Ingresa tus Datos</h1>

                <Alerta v-if="errors">
                    {{ errors }}
                </Alerta>

                <!-- Campo Usuario-->
                <div class="flex flex-wrap my-6">
                    <h3 class="uppercase text-white font-bold text-xl">Usuario</h3>
                    <input type="text" placeholder="INGRESA TÚ USUARIO"
                        class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
                        v-model="dataLogin.correo">
                </div>
                <!-- Campo Contraseña-->
                <div class="flex flex-wrap my-6">
                    <h3 class="uppercase text-white font-bold text-xl">Contraseña</h3>
                    <input type="password" placeholder="INGRESA TÚ CONTRASEÑA"
                        class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
                        v-model="dataLogin.password">
                </div>
                <!-- Botones -->
                <div class="flex justify-center items-center flex-col my-3 gap-6 mb-20">
                    <input type="submit" value="iniciar sesión"
                        class="w-full xl:w-1/2 border-2 border-blue-600 text-white uppercase rounded-xl p-3  text-xl font-bold hover:bg-blue-600">

                    <RouterLink
                        class="uppercase text-white font-normal hover:font-bold text-lg lg:m-3 border-b-2 border-red-600 w-full xl:w-1/2 text-center"
                        to="/auth/forgot-password">
                        Recuperar contraseña
                    </RouterLink>
                </div>
            </form>
        </div>

    </section>

</template>