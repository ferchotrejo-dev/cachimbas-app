<script setup>
import { ref } from 'vue';
import NewPasswordToken from '../../components/auth/NewPasswordToken.vue';
import NewPasswordForm from '../../components/auth/NewPasswordForm.vue';

const isValidToken = ref(false);
const token = ref('');

const handleTokenValidation = (valid, tokenValue) => {
    isValidToken.value = valid;
    token.value = tokenValue;
};
</script>

<template>
    <div class="text-center p-16 bg-gray-950 w-full rounded-3xl flex flex-col justify-center items-center">
        <h1 class="text-4xl font-black text-white uppercase">Reestablece tu contraseña</h1>
        <p class="text-xl lg:text-2xl font-light text-white mt-5 uppercase">
            Ingresa tu nueva
            <span class="text-orange-500 font-bold"> contraseña</span>
        </p>

        <NewPasswordToken v-if="!isValidToken" @token-validated="handleTokenValidation" />
        <NewPasswordForm v-if="isValidToken" :token="token" />
    </div>
</template>
