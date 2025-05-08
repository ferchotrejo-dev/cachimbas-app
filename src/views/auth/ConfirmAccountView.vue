<script setup>
import { ref } from 'vue'
import { useMutation } from '@tanstack/vue-query';
import { PinInputRoot, PinInputInput } from 'radix-vue'
import { confirmAccount } from '@/api/AuthAPI';
import Alerta from '@/components/Alerta.vue';
import { RouterLink, useRouter } from 'vue-router';


const verificationCode = ref([])
const errors = ref('')

const router = useRouter()
const { mutate } = useMutation({
    mutationFn: confirmAccount,
    onError: (error) => {
        errors.value = error
        setTimeout(() => {
            errors.value = ''
        }, 3000);
    },
    onSuccess: (data) => {
        errors.value = data
        setTimeout(() => {
            router.push('/login')
        }, 3000)
    }
})

const handleComplete = () => {
    const raw = verificationCode._rawValue
    const token = raw.join('')
    mutate({ token })
}

</script>

<template>
    <div class="text-center p-16 bg-gray-950 w-full rounded-3xl flex flex-col justify-center items-center">
        <h1 class="text-4xl font-black text-white uppercase">Confirma tu cuenta</h1>
        <p className="text-xl lg:text-2xl font-light text-white mt-5 uppercase">
            Ingresa el código que recibiste por
            <span className=" text-orange-500 font-bold"> e-mail</span>
        </p>

        <Alerta v-if="errors">
            {{ errors }}
        </Alerta>

        <form className="space-y-8 mt-8">
            <label className="font-bold text-2xl md:text-3xl text-center text-white block uppercase">Código de 6
                dígitos</label>
            <div className="flex justify-center gap-5">
                <PinInputRoot id="pin-input" v-model="verificationCode" type="number"
                    class="flex gap-2 items-center mt-1" @complete="handleComplete">
                    <PinInputInput v-for="(id, index) in 6" :key="id" :index="index"
                        class="w-10 h-10 md:w-14 md:h-14 text-3xl font-bold bg-white rounded text-center shadow-lg " />
                </PinInputRoot>
            </div>

        </form>

        <RouterLink
            class="uppercase text-white font-normal hover:font-bold text-sm lg:m-3 border-b-2 border-red-600 w-full xl:w-1/2 text-center p-3"
            to="/auth/request-code">
            Solicitar Nuevo Codigo
        </RouterLink>
    </div>
</template>
