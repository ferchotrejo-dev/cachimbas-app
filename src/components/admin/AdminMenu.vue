<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <div class=" w-24 xl:w-28 p-3">

        <div
            class="w-full md:w-4/5 lg:w-4/5 xl:w-5/5 bg-gray-950 rounded-3xl h-full grid grid-rows-9 justify-items-center hidden md:block">

            <!-- Icon User Add -->
            <RouterLink :to="{ name: 'create-user' }"
                class="my-1 inline-block transition-transform transform-gpu hover:scale-125 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-user-plus md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                    width="70" height="70" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6B7280" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M16 19h6" />
                    <path d="M19 16v6" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                </svg>
            </RouterLink>

            <!-- Icon User Search -->
            <div class="inline-block transition-transform transform-gpu hover:scale-125 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-user-search md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                    width="70" height="70" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6B7280" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h1.5" />
                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M20.2 20.2l1.8 1.8" />
                </svg>
            </div>

            <!-- Icon Card -->
            <div class="inline-block transition-transform transform-gpu hover:scale-125 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-credit-card md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                    width="70" height="70" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6B7280" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                    <path d="M3 10l18 0" />
                    <path d="M7 15l.01 0" />
                    <path d="M11 15l2 0" />
                </svg>
            </div>

            <!-- Icon Add Bell -->
            <div class="inline-block transition-transform transform-gpu hover:scale-125 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-bell-plus md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                    width="70" height="70" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6B7280" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12.5 17h-8.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v1" />
                    <path d="M9 17v1a3 3 0 0 0 3.51 2.957" />
                    <path d="M16 19h6" />
                    <path d="M19 16v6" />
                </svg>
            </div>

            <!-- Icon Dumbell -->
            <div class="inline-block transition-transform transform-gpu hover:scale-125 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-barbell md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                    width="70" height="70" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6B7280" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
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

            <!-- Icon Report -->
            <div class="inline-block transition-transform transform-gpu hover:scale-125 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-report-analytics md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                    width="70" height="70" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6B7280" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                    <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                    <path d="M9 17v-5" />
                    <path d="M12 17v-1" />
                    <path d="M15 17v-3" />
                </svg>
            </div>

            <!-- Icon Logout -->
            <div
                class="row-start-9 inline-block transition-transform transform-gpu mt-32  hover:scale-125 cursor-pointer">
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
