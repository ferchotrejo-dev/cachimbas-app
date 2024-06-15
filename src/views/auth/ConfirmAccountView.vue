<script setup>
import { PinInputRoot, PinInputInput } from 'radix-vue'
import { ref } from 'vue'
import { useMutation } from 'tant'

const verificationCode = ref([])

const { mutate } = useMutation({

})

const handleComplete = () => {
    const token = verificationCode._rawValue
    const tokenConcatenado = Number(token.join(''))
}

</script>

<template>
    <div class="text-center">
        <h1 class="text-5xl font-black text-white">Confirma tu cuenta</h1>
        <p className="text-3xl font-light text-white mt-5">
            Ingresa el código que recibiste
            <span className=" text-red-600 font-bold text-3xl"> por e-mail</span>
        </p>

        <form className="space-y-8 p-10 mt-10">
            <label className="font-bold text-4xl text-center text-white block">Código de 6 dígitos</label>
            <div className="flex justify-center gap-5">
                <PinInputRoot id="pin-input" v-model="verificationCode" type="number"
                    class="flex gap-2 items-center mt-1" @complete="handleComplete">
                    <PinInputInput v-for="(id, index) in 6" :key="id" :index="index"
                        class="w-10 h-10 bg-white rounded text-center shadow-lg text-green10 placeholder:text-mauve8 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white" />
                </PinInputRoot>
            </div>

        </form>
    </div>
</template>
