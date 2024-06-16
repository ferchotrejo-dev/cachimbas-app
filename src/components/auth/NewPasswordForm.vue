<script setup>
import { updatePasswordWithToken } from '@/api/AuthAPI';
import Alerta from '@/components/Alerta.vue';
import { useMutation } from '@tanstack/vue-query';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const newPassword = reactive({
    password: '',
    password_confirmation: ''
});

const props = defineProps({
    token: String
});

const errors = ref('');

const router = useRouter()

const { mutate } = useMutation({
    mutationFn: ({ newPassword, token }) => updatePasswordWithToken(newPassword, token),
    onError: (error) => {
        errors.value = error.message;
    },
    onSuccess: (data) => {
        errors.value = data;
        setTimeout(() => {
            router.push('/login')
        }, 3000)
    }
});

const handleSubmit = () => {
    if (Object.values(newPassword).includes('')) {
        errors.value = 'Todos los campos son obligatorios';
        return;
    }

    mutate({ newPassword, token: props.token });
};
</script>

<template>
    <form @submit.prevent="handleSubmit" class="w-full lg:w-1/2 p-4 flex justify-center flex-wrap flex-col">
        <Alerta v-if="errors">
            {{ errors }}
        </Alerta>
        <div>
            <div class="flex flex-wrap my-6">
                <label for="password" class="uppercase text-white font-bold text-xl">Nueva Contraseña</label>
                <input id="password" type="text" placeholder="Ingresa tu contraseña"
                    class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
                    v-model="newPassword.password">
            </div>
            <div class="flex flex-wrap my-6">
                <label for="password_confirmation" class="uppercase text-white font-bold text-xl">Repite tu
                    Contraseña</label>
                <input id="password_confirmation" type="text" placeholder="Repite tu contraseña"
                    class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
                    v-model="newPassword.password_confirmation">
            </div>
        </div>
        <input type="submit" value="Enviar código"
            class="w-full border-2 border-blue-600 text-white uppercase rounded-xl p-3 text-xl font-bold hover:bg-blue-600">
    </form>
</template>
