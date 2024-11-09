
<script setup>

</script>


<template>

    <!-- Container -->
    <div class="w-full bg-gray-950 rounded-3xl flex">
        
        <!-- Form -->
        <div class="w-full lg:w-1/2 p-5">
            <h1 class="text-white text-3xl uppercase font-bold text-center">Agregar nuevo Skill</h1>

            <form action="">

                <div class="w-full">

                    <!--  -->
                    <div class="flex flex-wrap my-6">
                        <label 
                            for="ejercicio" 
                            class="uppercase text-white font-bold text-xl"
                        >
                            ejercicio
                        </label>
                        <select 
                            id="ejercicio" 
                            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white"
                        >
                            <option class="uppercase" value="">-- SELECCIONA UNA OPCIÓN --</option>
                            <option 
                                class="uppercase"
                            >
                                BackSquat
                            </option>

                            </select>
                    </div>


                    <!-- Fecha -->
                    <div class="flex flex-wrap my-6">
                        <label for="fecha" class="uppercase text-white font-bold text-xl">Fecha</label>
                        <input 
                            id="fecha" 
                            type="date" 
                            placeholder="TOTAL DE PESO LB"
                            class="bg-gray-800 rounded-xl text-center p-2 w-full font-bold text-white uppercase"
                        >
                    </div>

                    <input 
                        type="submit" 
                        value="agregar skill"
                        class="w-full my-2 border-2 border-blue-600 text-white uppercase rounded-xl p-2  text-md font-bold hover:bg-blue-600"
                    >

                </div>

            </form>

            <RouterLink 
                class="text-white text-md uppercase font-bold w-full block mt-2 border-2 border-red-600 rounded-xl p-2 text-center hover:bg-red-600"
                :to="{ name: 'visualizar-skill' }"
            >
                Visualizar Skill
            </RouterLink>

        </div>

        <!-- IMG -->
        <div class="bg-img-3 bg-cover bg-center w-full lg:w-1/2 rounded-3xl rounded-l-none hidden lg:block" >

        </div>

    </div>
</template>



