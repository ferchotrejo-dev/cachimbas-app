<script setup>
import { ref } from 'vue'
import { useMutation } from '@tanstack/vue-query';
import { PinInputRoot, PinInputInput } from 'radix-vue'
import { confirmAccount } from '@/api/AuthAPI';
import Alerta from '@/components/Alerta.vue';


const verificationCode = ref([])
const errors = ref('')

const { mutate } = useMutation({
    mutationFn: confirmAccount,
    onError: (error) => {
        errors.value = error
    },
    onSuccess: (data) => {
        errors.value = data
    }
})

const handleComplete = () => {
    const raw = verificationCode._rawValue
    const token = raw.join('')
    mutate({token})
}

</script>

<template>
    <div class="text-center p-16">
        <h1 class="text-5xl font-black text-white">Confirma tu cuenta</h1>
        <p className="text-3xl font-light text-white mt-5">
            Ingresa el código que recibiste
            <span className=" text-red-600 font-bold text-3xl"> por e-mail</span>
        </p>

        <Alerta v-if="errors">
            {{ errors }}
        </Alerta>

        <form className="space-y-8 p-10 mt-10">
            <label className="font-bold text-4xl text-center text-white block">Código de 6 dígitos</label>
            <div className="flex justify-center gap-5">
                <PinInputRoot id="pin-input" v-model="verificationCode" type="number"
                    class="flex gap-2 items-center mt-1" @complete="handleComplete">
                    <PinInputInput v-for="(id, index) in 6" :key="id" :index="index"
                        class="w-20 h-20 text-3xl bg-white rounded text-center shadow-lg " />
                </PinInputRoot>
            </div>

        </form>
    </div>
</template>
