
<script setup>

    import AdminCard from '@/components/admin/AdminCard.vue';

</script>

<template>
    <div class="bg-gray-950 w-full rounded-3xl p-5 ">
        <h1 class="text-white uppercase font-bold text-xl md:text-3xl">Información atletas</h1>

        <div class="my-3 flex justify-between flex-wrap xl:flex-nowrap w-full">

            <!-- Card Total Usuarios -->
            <AdminCard class="w-full lg:w-1/4 xl:1/5 flex justify-center flex-wrap">
                <template v-slot:icono>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users w-16 h-16 xl:w-20 xl:h-20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2563eb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                </template>
                <template v-slot:numero>
                    125
                </template>
                <template v-slot:texto>
                    Total Usuarios
                </template>
            </AdminCard>

            <!-- Card Usuarios Activos -->
            <AdminCard class="w-full lg:w-1/4 xl:1/5 flex justify-center flex-wrap">
                <template v-slot:icono>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-check w-16 h-16 xl:w-20 xl:h-20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#16a34a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                        <path d="M15 19l2 2l4 -4" />
                    </svg>
                </template>
                <template v-slot:numero>
                    100
                </template>
                <template v-slot:texto>
                    Usuarios Activos
                </template>
            </AdminCard>

            <!-- Card Total Usuarios Pendientes -->
            <AdminCard class="w-full lg:w-1/4 xl:1/5 flex justify-center flex-wrap">
                <template v-slot:icono>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-exclamation w-16 h-16 xl:w-20 xl:h-20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ca8a04" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4c.348 0 .686 .045 1.008 .128" />
                        <path d="M19 16v3" />
                        <path d="M19 22v.01" />
                    </svg>
                </template>
                <template v-slot:numero>
                    12
                </template>
                <template v-slot:texto>
                    Usuarios Pendientes
                </template>
            </AdminCard>

            <!-- Card Total Usuarios Inactivos -->
            <AdminCard class="w-full lg:w-1/4 xl:1/5 flex justify-center flex-wrap">
                <template v-slot:icono>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-cancel w-16 h-16 xl:w-20 xl:h-20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#dc2626" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
                        <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M17 21l4 -4" />
                    </svg>
                </template>
                <template v-slot:numero>
                    15
                </template>
                <template v-slot:texto>
                    Usuarios Inactivos
                </template>
            </AdminCard>

        </div>
    </div>

    <!-- Membresias -->
    <div class="bg-gray-950 w-full rounded-3xl p-5 my-10">
        <h1 class="text-white uppercase font-bold text-xl md:text-3xl">Información membresias</h1>

        <div class="my-3 flex justify-center flex-wrap xl:flex-nowrap w-full ">

            <!-- Card Total Usuarios -->
            <AdminCard class="w-full lg:w-1/4 xl:1/5 flex justify-center flex-wrap">
                <template v-slot:icono>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card w-16 h-16 xl:w-20 xl:h-20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2563eb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                        <path d="M3 10l18 0" />
                        <path d="M7 15l.01 0" />
                        <path d="M11 15l2 0" />
                    </svg>
                </template>
                <template v-slot:numero>
                    125
                </template>
                <template v-slot:texto>
                    Total Usuarios
                </template>
            </AdminCard>

            <!-- Card Usuarios Activos -->
            <AdminCard class="w-full lg:w-1/4 xl:1/5 flex justify-center flex-wrap">
                <template v-slot:icono>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card w-16 h-16 xl:w-20 xl:h-20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#16a34a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                        <path d="M3 10l18 0" />
                        <path d="M7 15l.01 0" />
                        <path d="M11 15l2 0" />
                    </svg>
                </template>
                <template v-slot:numero>
                    100
                </template>
                <template v-slot:texto>
                    Usuarios Activos
                </template>
            </AdminCard>

            <!-- Card Total Usuarios Pendientes -->
            <AdminCard class="w-full lg:w-1/4 xl:1/5 flex justify-center flex-wrap">
                <template v-slot:icono>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card-off w-16 h-16 xl:w-20 xl:h-20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ca8a04" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 3l18 18" />
                        <path d="M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.128 .87" />
                        <path d="M18.87 18.872a3 3 0 0 1 -.87 .128h-12a3 3 0 0 1 -3 -3v-8c0 -1.352 .894 -2.495 2.124 -2.87" />
                        <path d="M3 11l8 0" />
                        <path d="M15 11l6 0" />
                        <path d="M7 15l.01 0" />
                        <path d="M11 15l2 0" />
                    </svg>
                </template>
                <template v-slot:numero>
                    12
                </template>
                <template v-slot:texto>
                    Usuarios Pendientes
                </template>
            </AdminCard>

            <!-- Card Total Usuarios Inactivos -->
            <AdminCard class="w-full lg:w-1/4 xl:1/5 flex justify-center flex-wrap">
                <template v-slot:icono>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-x w-16 h-16 xl:w-20 xl:h-20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#dc2626" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
                        <path d="M22 22l-5 -5" />
                        <path d="M17 22l5 -5" />
                    </svg>
                </template>
                <template v-slot:numero>
                    15
                </template>
                <template v-slot:texto>
                    Usuarios Inactivos
                </template>
            </AdminCard>

        </div>
    </div>

</template>
