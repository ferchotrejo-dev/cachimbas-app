<script setup>
import { updateAthleteInfo } from '@/api/AtletasAPI';
import { useAuth } from '@/helpers/useAuth';
import { useMutation } from '@tanstack/vue-query';
import { reactive, ref } from 'vue'

const athleteInfo = reactive({
    telefono: '',
    direccion: '',
    telefono_emer: '',
    usr_ig: '',
    enfermedad_lesion: '',
    desc_lesion: ''
})

const errors = ref('')
const success = ref('')


const { mutate } = useMutation({
    mutationFn: updateAthleteInfo,
    onError: (error) => {
        errors.value = error.message
    },
    onSuccess: (data) => {
        success.value = data
        athleteInfo.telefono = ''
        athleteInfo.direccion = ''
        athleteInfo.telefono = ''
        athleteInfo.usr_ig = ''
        athleteInfo.enfermedad_lesion = ''
        athleteInfo.desc_lesion = ''
    }
})

const { data } = useAuth()
console.log(data)

const updateInfo = async () => {
    if (Object.values(athleteInfo).includes('')) {
        errors.value = 'Todos los campos son obligatorios';
        return
    }

    const idUsuario = data.value.id

    mutate({ athleteInfo, idUsuario })

}

</script>


<template>

    <div class="grid col-span-11 ">

        <section class="w-full flex justify-center">
            <div class="bg-gray-950 w-full rounded-3xl h-full flex flex-wrap">
                <form @submit.prevent="updateInfo" class="w-full lg:w-1/2 p-16 flex justify-center flex-wrap flex-col">
                    <h1 class="uppercase text-white text-2xl font-semibold my-2">Agregar informacion</h1>

                    <div>
                        <div class="flex flex-wrap my-6">
                            <label for="telefono" class="uppercase text-white font-roboto text-lg">Telefono</label>
                            <input id="telefono" type="number" placeholder="Ingresa tu numero de telefono "
                                class="bg-gray-800 rounded-xl text-center uppercase p-2 w-full font-roboto text-white">
                        </div>

                        <div class="flex flex-wrap my-6">
                            <label for="direccion" class="uppercase text-white font-roboto text-lg">
                                Direccion
                            </label>
                            <input id="direccion" type="text" placeholder="Ingresa tu direccion "
                                class="bg-gray-800 rounded-xl p-7 uppercase text-center w-full font-roboto text-white">
                        </div>

                        <div class="flex flex-wrap my-6">
                            <label for="telefono_emer" class="uppercase text-white font-roboto text-lg">Telefono de
                                emergencia</label>
                            <input id="telefono_emer" type="number" placeholder="Ingresa tu numero de contacto"
                                class="bg-gray-800 rounded-xl text-center uppercase p-2 w-full font-roboto text-white">
                        </div>

                        <div class="flex flex-wrap my-6">
                            <label for="usr_img" class="uppercase text-white font-roboto text-l" g>
                                Usuario de Instagram
                            </label>
                            <input id="usr_img" type="text" placeholder="Ingresa tu usuario"
                                class="bg-gray-800 rounded-xl uppercase text-center p-2 w-full font-roboto text-white">
                        </div>

                        <div class="flex flex-wrap my-6">
                            <label for="enfermedad_lesion" class="uppercase text-white font-roboto text-l" g>
                                enfermedad o lesion
                            </label>
                            <input id="enfermedad_lesion" type="text" placeholder="Ingresa la enfermedad o lesion"
                                class="bg-gray-800 rounded-xl uppercase text-center p-2 w-full font-roboto text-white">
                        </div>

                        <div class="flex flex-wrap my-6">
                            <label for="desc_lesion" class="uppercase text-white font-roboto text-lg">
                                descripcion de la enfermedad
                            </label>
                            <input id="desc_lesion" type="text" placeholder="Ingresa una descripcion"
                                class="bg-gray-800 rounded-xl uppercase text-center p-7 w-full font-roboto text-white">
                        </div>


                    </div>
                    <input type="submit" value="Agregar Informacion"
                        class="w-full border-2 border-blue-600 text-white uppercase rounded-xl p-3  text-xl font-roboto hover:bg-blue-600">
                </form>
                <div class="bg-img-2 bg-cover bg-center  rounded-3xl rounded-l-none w-full lg:w-1/2 border-blue-500">

                </div>
            </div>
        </section>

    </div>

</template>
