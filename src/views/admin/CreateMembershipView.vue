<script setup>
    import { ref, reactive } from "vue";

</script>

<template>
    <div class="bg-gray-950 w-full rounded-3xl p-5 h-full flex gap-5">

        <!-- Form -->
        <section class="w-1/2">
            <h1 class="text-white uppercase text-2xl font-bold mb-7 text-center">Agregar membresia</h1>

            <form action="">

                <!-- Fecha Inicio -->
                <div class="flex flex-wrap my-6">
                    <label 
                        for=""
                        class="uppercase text-white font-bold text-xl my-2"
                    >
                        Fecha Inicio
                    </label>
                    <input 
                        type="date"
                        placeholder="INGRESA EL INICIO DE LA MEBRESIA"
                        class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
                    >
                </div>

                <!-- Fecha Fin -->
                <div class="flex flex-wrap my-6">
                    <label 
                        for=""
                        class="uppercase text-white font-bold text-xl my-2"
                    >
                        Fecha Fin
                    </label>
                    <input 
                        type="date"
                        placeholder="INGRESA EL FIn DE LA MEBRESIA"
                        class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
                    >
                </div>

                <!-- Costo -->
                <div class="flex flex-wrap my-6">
                    <label 
                        for=""
                        class="uppercase text-white font-bold text-xl my-2"
                    >
                        Costo total de la membresia
                    </label>
                    <input 
                        type="number"
                        placeholder="INGRESA EL COSTO DE LA MEBRESIA"
                        class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
                    >
                </div>

                <!-- Estado -->
                <div class="flex flex-wrap my-6">
                    <label 
                        for=""
                        class="uppercase text-white font-bold text-xl my-2"
                    >
                        Estado de la membresia
                    </label>
                    <select 
                        name="" 
                        id=""
                        class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase"
                    >
                        <option 
                            value=""
                            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase"
                            disabled
                            selected
                        >
                            -- selecciona el estado de la membresia --
                        </option>

                        <option 
                            value=""
                            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase"
                        >
                            -- activo --
                        </option>

                        <option 
                            value=""
                            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase"
                        >
                            -- inactivo --
                        </option>
                    </select>
                </div>

                <!-- Tipo -->
                <div class="flex flex-wrap my-6">
                    <label 
                        for=""
                        class="uppercase text-white font-bold text-xl my-2"
                    >
                        tipo de membresia
                    </label>
                    <select 
                        name="" 
                        id=""
                        class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase"
                    >
                        <option 
                            value=""
                            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase"
                            disabled
                            selected
                        >
                            -- selecciona el tipo de membresia --
                        </option>

                        <option 
                            value=""
                            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase"
                        >
                            -- individual --
                        </option>

                        <option 
                            value=""
                            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase"
                        >
                            -- pareja --
                        </option>

                        <option 
                            value=""
                            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase"
                        >
                            -- familiar +3 --
                        </option>
                    </select>
                </div>

                <!-- Agregar Usuario -->
                <div>
                    <button 
                        class="uppercase border-4 border-blue-600 rounded-2xl text-white text-lg font-bold py-2 w-full hover:bg-blue-600"

                    >
                        Agregar Usuario
                    </button>
                </div>
            </form>
        </section>

        <!-- Usuarios -->
        <section class="w-1/2">
            <h1 class="text-white uppercase text-2xl font-bold mb-7 text-center">usuarios en la membresia</h1>

            <!-- Card -->
            <div>

            </div>
            
        </section>
        
    </div>
</template>