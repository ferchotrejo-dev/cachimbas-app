<script setup>
import { ref } from 'vue';
import { useMutation } from '@tanstack/vue-query';
import { PinInputRoot, PinInputInput } from 'radix-vue';
import { validateToken } from '@/api/AuthAPI';
import Alerta from '@/components/Alerta.vue';

const verificationCode = ref([]);
const errors = ref('');

const emit = defineEmits(['token-validated']);

const { mutate } = useMutation({
    mutationFn: validateToken,
    onError: (error) => {
        errors.value = error.message;
    },
    onSuccess: (data) => {
        setTimeout(() => {
            errors.value = data;
        }, 3000);
        const tokenValue = verificationCode._rawValue.join('');
        emit('token-validated', true, tokenValue);
    }
});

const handleComplete = () => {
    const raw = verificationCode._rawValue;
    const token = raw.join('');
    mutate({ token });
};
</script>

<template>
    <div>
        <Alerta v-if="errors">
            {{ errors }}
        </Alerta>

        <form class="space-y-8 mt-8">
            <label class="font-bold text-2xl md:text-3xl text-center text-white block uppercase">Código de 6
                dígitos</label>
            <div class="flex justify-center gap-5">
                <PinInputRoot id="pin-input" v-model="verificationCode" type="number"
                    class="flex gap-2 items-center mt-1" @complete="handleComplete">
                    <PinInputInput v-for="(id, index) in 6" :key="id" :index="index"
                        class="w-10 h-10 md:w-14 md:h-14 text-3xl font-bold bg-white rounded text-center shadow-lg " />
                </PinInputRoot>
            </div>
        </form>
    </div>
</template>
