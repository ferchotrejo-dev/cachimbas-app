
<script setup>

    const props = defineProps({
        porcentaje:{
            typeof:Object,
            required: true
        }
    });

</script>

<template>
    <div
      class="border-4 border-orange-500 mt-3 md:mt-4 rounded-2xl p-3 w-auto flex gap-3 justify-center items-center flex-wrap"
    >
      <div class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2b7fff"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-barbell w-32 h-32"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M2 12h1" />
          <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
          <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
          <path d="M9 12h6" />
          <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
          <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" />
          <path d="M22 12h-1" />
        </svg>
      </div>
      <div class="">
        <p class="text-xl font-bold text-white uppercase">
          Porcentaje =
          <span class="text-2xl font-extrabold text-orange-500">{{ porcentaje.porcentaje }}</span> %
        </p>
        <p class="text-xl font-bold text-white uppercase">
          Total =
          <span class="text-2xl font-extrabold text-orange-500">{{ porcentaje.total }}</span> LB
        </p>
        <p class="text-xl font-bold text-white uppercase">
          Por lado =
          <span class="text-2xl font-extrabold text-orange-500">{{ porcentaje.lado }}</span> LB
        </p>
      </div>
    </div>
  </template>

