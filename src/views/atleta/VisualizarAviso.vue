<template>
    <div>
      <!-- Contenedor de búsqueda de avisos -->
      <div class="bg-gray-950 w-full rounded-xl p-7 text-xl font-roboto uppercase text-white mb-8">
        <label class="text-xl font-roboto uppercase text-white block mb-4">
          Buscar avisos por fecha
        </label>
        <div class="flex flex-col md:flex-row md:justify-between items-center">
          <input type="date" id="fecha-inicial" name="fecha-inicial" class="w-full md:w-auto xl:w-1/3 text-white bg-gray-900 rounded-lg border-2 border-blue-700 p-2 mb-3 md:mb-0 md:mr-1 xl:mr-0" placeholder="Fecha inicial">
          <input type="date" id="fecha-final" name="fecha-final" class="w-full md:w-auto xl:w-1/3 text-white bg-gray-900 rounded-lg border-2 border-blue-700 p-2 mb-3 md:mb-0 md:mr-1 xl:ml-0" placeholder="Fecha final">
          <button class="uppercase bg-gray-900 hover:bg-blue-700 text-white font-roboto py-2 px-5 border-2 border-blue-700 rounded-lg">
            Buscar
          </button>
        </div>
      </div>
  
      <!-- Contenedor de lista de avisos con scroll -->
      <div class="bg-gray-950 rounded-lg shadow-lg mt-8 p-5 relative">
        <label class="text-xl font-roboto text-white uppercase m-4">Avisos</label>
        <!-- Linea Blanca -->
        <div class="w-full h-1 bg-white my-4"></div>
        <!-- Contenedor de los avisos con scroll -->
        <div class="max-h-96 overflow-y-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="i in 5" :key="i" class="border-2 border-white mr-4 rounded-xl text-white text-center p-2 bg-gray-950 mt-4 shadow-sm h-44">
              Aviso {{ i }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ScrollableComponent',
  }
  </script>
  
