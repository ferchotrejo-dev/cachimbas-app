<script setup>

</script>

<template>
    <div class=" w-24 xl:w-28 p-3">

        <div
            class="py-3 w-full md:w-4/5 lg:w-4/5 xl:w-5/5 bg-gray-950 rounded-3xl h-full grid grid-rows-9 justify-items-center hidden md:block">

            <!-- Icon Barbell -->
            <RouterLink 
                class="my-1 transition-transform transform-gpu hover:scale-125 cursor-pointer flex justify-center"
                :to="{ name: 'record' }"
            >
                <svg  xmlns="http://www.w3.org/2000/svg" width="60"  height="60" viewBox="0 0 24 24"  fill="none"  stroke="#6b7280"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  
                    class="icon icon-tabler icons-tabler-outline icon-tabler-barbell"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 12h1" /><path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" /><path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" /><path d="M9 12h6" /><path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" /><path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" /><path d="M22 12h-1" />
                </svg>
            </RouterLink>

            <!-- Icon Calculator -->
            <RouterLink 
                class="flex justify-center transition-transform transform-gpu hover:scale-125 cursor-pointer"
                :to="{ name: 'calculadora-inicio' }"
            >
                <svg  xmlns="http://www.w3.org/2000/svg" width="60"  height="60"  viewBox="0 0 24 24"  fill="none"  stroke="#6b7280"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  
                    class="icon icon-tabler icons-tabler-outline icon-tabler-calculator "
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" /><path d="M8 14l0 .01" /><path d="M12 14l0 .01" /><path d="M16 14l0 .01" /><path d="M8 17l0 .01" /><path d="M12 17l0 .01" /><path d="M16 17l0 .01" />
                </svg>
            </RouterLink>

            <!-- Icon User Circle -->
            <RouterLink 
                class="flex justify-center transition-transform transform-gpu hover:scale-125 cursor-pointer"
                :to="{ name: 'info-atleta' }"
            >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="60"  height="60"  viewBox="0 0 24 24"  fill="none"  stroke="#6b7280"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
            </RouterLink>

            <!-- Icon Card -->
            <RouterLink 
                class="flex justify-center transition-transform transform-gpu hover:scale-125 cursor-pointer"
                :to="{ name: 'viewAtleta-membership' }"
            >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="60"  height="60"  viewBox="0 0 24 24"  fill="none"  stroke="#6b7280"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-credit-card"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M3 10l18 0" /><path d="M7 15l.01 0" /><path d="M11 15l2 0" /></svg>
            </RouterLink>

            <!-- Icon User Password -->
            <RouterLink 
                class="flex justify-center transition-transform transform-gpu hover:scale-125 cursor-pointer"
                :to="{ name: 'forgot-password' }"
            >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="60"  height="60"  viewBox="0 0 24 24"  fill="none"  stroke="#6b7280"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-password-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17v4" /><path d="M10 20l4 -2" /><path d="M10 18l4 2" /><path d="M5 17v4" /><path d="M3 20l4 -2" /><path d="M3 18l4 2" /><path d="M19 17v4" /><path d="M17 20l4 -2" /><path d="M17 18l4 2" /><path d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M7 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2" /></svg>
            </RouterLink>

            <!-- Icon Bell -->
            <RouterLink 
                class="flex justify-center transition-transform transform-gpu hover:scale-125 cursor-pointer"
                :to="{ name: 'view-reminder' }"
            >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="60"  height="60"  viewBox="0 0 24 24"  fill="none"  stroke="#6b7280"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bell-exclamation"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 17h-11a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v1.5" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /><path d="M19 16v3" /><path d="M19 22v.01" /></svg>
            </RouterLink>

            <!-- Icon Logout -->
            <div
                class="flex justify-center row-start-9 transition-transform transform-gpu mt-32  hover:scale-125 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-logout md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                    width="70" height="70" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6B7280" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                    <path d="M9 12h12l-3 -3" />
                    <path d="M18 15l3 -3" />
                </svg>
            </div>

        </div>

    </div>
</template>
