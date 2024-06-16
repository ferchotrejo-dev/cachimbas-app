<script setup>
import { requestConfirmationCode } from '@/api/AuthAPI';
import Alerta from '@/components/Alerta.vue';
import { useMutation } from '@tanstack/vue-query';
import { reactive, ref } from 'vue';

const correo = reactive({
    correo: ''
})
const errors = ref('')

const { mutate } = useMutation({
    mutationFn: requestConfirmationCode,
    onError: (error) => {
        errors.value = error.message
    },
    onSuccess: (data) => {
        errors.value = data
    }
})

const handleSubmit = () => {
    if (Object.values(correo).includes('')) {
        errors.value = 'El correo es obligatorio'
        return
    }

    mutate(correo)
}

</script>

<template>
    <div class="text-center p-16 bg-gray-950 w-full rounded-3xl flex flex-col justify-center items-center">
        <h1 class="text-4xl font-black text-white uppercase">Confirma tu cuenta</h1>
        <p className="text-xl lg:text-2xl font-light text-white mt-5 uppercase">
            Ingresa tu e-mail y enviaremos un nuevo
            <span className=" text-red-600 font-bold"> codigo de confirmacion</span>
        </p>



        <form @submit.prevent="handleSubmit" class="w-full lg:w-1/2 p-4 flex justify-center flex-wrap flex-col">
            <Alerta v-if="errors">
                {{ errors }}
            </Alerta>
            <div>
                <div class="flex flex-wrap my-6">
                    <label for="correo" class="uppercase text-white font-bold text-xl">E-Mail</label>
                    <input id="correo" type="text" placeholder="Ingresa tu e-mail"
                        class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
                        v-model="correo.correo">
                </div>
            </div>
            <input type="submit" value="Enviar codigo"
                class="w-full border-2 border-blue-600 text-white uppercase rounded-xl p-3  text-xl font-bold hover:bg-blue-600">
        </form>
    </div>
</template>
