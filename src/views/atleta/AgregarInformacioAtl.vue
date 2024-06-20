
<template>
    
    <div class="grid col-span-11 ">

        <section class="w-full flex justify-center">
            <div class="bg-gray-950 w-full rounded-3xl h-full flex flex-wrap">
                <form @submit.prevent="" class="w-full lg:w-1/2 p-16 flex justify-center flex-wrap flex-col">
                    <h1 class="uppercase text-white text-2xl font-semibold my-2">Agregar informacion</h1>

                    <div>
                        <div class="flex flex-wrap my-6">
                            <label for="telefono" class="uppercase text-white font-roboto text-lg">Telefono</label>
                            <input 
                                id="telefono" 
                                type="number" 
                                placeholder="Ingresa tu numero de telefono "
                                class="bg-gray-800 rounded-xl text-center uppercase p-2 w-full font-roboto text-white">
                        </div>

                        <div class="flex flex-wrap my-6">
                            <label 
                                for="direccion" 
                                class="uppercase text-white font-roboto text-lg">
                            direccion
                            </label>
                            <input 
                                id="direccion" 
                                type="text" 
                                placeholder="Ingresa tu direccion "
                                class="bg-gray-800 rounded-xl p-7 uppercase text-center w-full font-roboto text-white">
                        </div>

                        <div class="flex flex-wrap my-6">
                            <label for="telefono-emer" class="uppercase text-white font-roboto text-lg">Telefono de emergencia</label>
                            <input 
                                id="telefono-emer" 
                                type="number" 
                                placeholder="Ingresa tu numero de contacto"
                                class="bg-gray-800 rounded-xl text-center uppercase p-2 w-full font-roboto text-white">
                        </div>

                        <div class="flex flex-wrap my-6">
                            <label 
                                for="usr-ig" 
                                class="uppercase text-white font-roboto text-l"g>
                            Usuario de Instagram
                            </label>
                            <input 
                                id="usr-ig" 
                                type="text" 
                                placeholder="Ingresa tu usuario"
                                class="bg-gray-800 rounded-xl uppercase text-center p-2 w-full font-roboto text-white">
                        </div>

                        <div class="flex flex-wrap my-6">
                            <label 
                                for="enfermedad-lesion" 
                                class="uppercase text-white font-roboto text-l"g>
                            enfermedad o lesion
                            </label>
                            <input 
                                id="enfermedad-lesion" 
                                type="text" 
                                placeholder="Ingresa la enfermedad o lesion"
                                class="bg-gray-800 rounded-xl uppercase text-center p-2 w-full font-roboto text-white">
                        </div>

                        <div class="flex flex-wrap my-6">
                            <label 
                                for="desc-lesion" 
                                class="uppercase text-white font-roboto text-lg">
                            descripcion de la enfermedad
                            </label>
                            <input 
                                id="enfermedad-lesion" 
                                type="text" 
                                placeholder="Ingresa una descripcion"
                                class="bg-gray-800 rounded-xl uppercase text-center p-7 w-full font-roboto text-white">
                        </div>

                       
                    </div>
                    <input 
                        type="submit" 
                        value="Agregar Informacion"
                        class="w-full border-2 border-blue-600 text-white uppercase rounded-xl p-3  text-xl font-roboto hover:bg-blue-600"
                    >
                </form>
                <div class="bg-img-2 bg-cover bg-center  rounded-3xl rounded-l-none w-full lg:w-1/2 border-blue-500">

                </div>
            </div>
        </section>

    </div>

</template>
