<script setup>
  import { ref } from 'vue';
  
  const isMenuOpen = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
</script>

<template>

<div class="relative">
    <h1 class="text-5xl md:text-6xl font-bold uppercase text-white flex items-center letrasp">
      <div class="inline-block transition-transform transform-gpu hover:scale-125 cursor-pointer w-10 h-10 mr-4" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2 md:hidden mr-2 "
             width="50" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none"
             stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </div>
      Cachimbas<span class="text-red-600 letrasp">Box</span>
    </h1>

    <div v-if="isMenuOpen" class="absolute inset-0 mt-2 bg-gray-900 shadow-lg rounded-lg py-2 right-0">

        <RouterLink
            to="" 
            class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 transition-colors duration-200"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus mr-2"
                width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M16 19h6" />
                <path d="M19 16v6" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
            </svg>
            Agregar Usuario
        </RouterLink>

        <RouterLink
            to="" 
            class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 transition-colors duration-200"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-search mr-2"
                width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h1.5" />
            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M20.2 20.2l1.8 1.8" />
            </svg>
            Buscar Usuario
        </RouterLink>

        <RouterLink
            to="" 
            class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 transition-colors duration-200"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card mr-2"
                width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
              <path d="M3 10l18 0" />
              <path d="M7 15l.01 0" />
              <path d="M11 15l2 0" />
            </svg>
            Membresias
        </RouterLink>

        <RouterLink
            to="" 
            class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 transition-colors duration-200"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell-plus" width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12.5 17h-8.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v1" />
              <path d="M9 17v1a3 3 0 0 0 3.51 2.957" />
              <path d="M16 19h6" />
              <path d="M19 16v6" />
            </svg>
            Crear Aviso
        </RouterLink>

        <RouterLink
            to="" 
            class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-barbell mr-2"
              width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M2 12h1" />
              <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
              <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
              <path d="M9 12h6" />
              <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
              <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" />
              <path d="M22 12h-1" />
          </svg>
          Ejercicios      
        </RouterLink>

        <RouterLink
            to="" 
            class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 transition-colors duration-200"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-report-analytics mr-2"
                width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
              <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
              <path d="M9 17v-5" />
              <path d="M12 17v-1" />
              <path d="M15 17v-3" />
            </svg>
            Reportes 
        </RouterLink>

        <RouterLink
            to="" 
            class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 transition-colors duration-200"
        >
           <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout mr-2"
                width="35" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M9 12h12l-3 -3" />
              <path d="M18 15l3 -3" />
            </svg>
            Cerrar Sesión
        </RouterLink>

    </div>
  </div>

</template>
  
<style scoped>
  
  .absolute {
    position: absolute;
    top: 100%; 
    left: 0;
    right: 0;
    z-index: 10;
  }
  
  
  a {
    text-decoration: none;
    color: azure;
    font-size: large;
    display: flex;
    align-items: center;
    background-color: rgb(1, 4, 20);
  }
  
  a:hover {
    background-color: #778899;
  }
  
  
  .icon {
    margin-right: 8px; 
  }
  
  
  
  @media (max-width: 767px) {
  .letrasp {
    font-size: 38px;
    margin-right: 10px;
  }
  }
  
  
</style>
  
  