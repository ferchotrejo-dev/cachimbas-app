<script setup>

</script>

<template>
    <div class="bg-gray-950 w-full rounded-3xl p-5 h-full flex gap-5 flex-wrap justify-center">
        <div>
            <h1 class="text-white text-3xl uppercase font-bold text-center">Detalles de la membresia</h1>
            <!-- Body -->
            <div class="grid grid-cols-2 w-full gap-2 lg:gap-6 mt-5">
                <!-- card Fecha -->
                <div
                    class="col-span-2 md:col-span-1 border-4 border-gray-500 rounded-2xl p-1 flex flex-nowrap justify-center items-center w-full gap-1 lg:gap-6">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-month"
                            width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8fafc" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                            <path d="M16 3v4" />
                            <path d="M8 3v4" />
                            <path d="M4 11h16" />
                            <path d="M7 14h.013" />
                            <path d="M10.01 14h.005" />
                            <path d="M13.01 14h.005" />
                            <path d="M16.015 14h.005" />
                            <path d="M13.015 17h.005" />
                            <path d="M7.01 17h.005" />
                            <path d="M10.01 17h.005" />
                        </svg>
                    </div>
                    <div>
                        <p class="text-white font-bold text-xl lg:text-2xl uppercase">Fecha Inicio</p>
                        <p class="text-white font-light text-xl lg:text-2xl uppercase">09/11/2024</p>
                    </div>
                </div>

                <!-- card Fecha Fin -->
                <div
                    class="col-span-2 md:col-span-1 border-4 border-gray-500 rounded-2xl p-1 flex flex-nowrap justify-center items-center w-full gap-1 md:gap-3 lg:gap-6">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-off"
                            width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8fafc" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M9 5h9a2 2 0 0 1 2 2v9m-.184 3.839a2 2 0 0 1 -1.816 1.161h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.158 -1.815" />
                            <path d="M16 3v4" />
                            <path d="M8 3v1" />
                            <path d="M4 11h7m4 0h5" />
                            <path d="M3 3l18 18" />
                        </svg>
                    </div>
                    <div>
                        <p class="text-white font-bold text-xl lg:text-2xl uppercase">Fecha fin</p>
                        <p class="text-white font-light text-xl lg:text-2xl uppercase">09/12/2024</p>
                    </div>
                </div>

                <!-- card Tipo -->
                <div
                    class="col-span-2 md:col-span-1 border-4 border-gray-500 rounded-2xl p-1 flex flex-nowrap justify-center items-center w-full gap-1 lg:gap-6">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card"
                            width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8fafc" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                            <path d="M3 10l18 0" />
                            <path d="M7 15l.01 0" />
                            <path d="M11 15l2 0" />
                        </svg>
                    </div>
                    <div>
                        <p class="text-white font-bold text-xl lg:text-2xl uppercase">Tipo </p>
                        <p class="text-white font-light text-xl lg:text-2xl uppercase">Individual</p>
                    </div>
                </div>

                <!-- card Precio -->
                <div
                    class="col-span-2 md:col-span-1 border-4 border-gray-500 rounded-2xl p-1 flex flex-nowrap justify-center items-center w-full gap-1 md:gap-3 lg:gap-6">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-coin" width="80"
                            height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8fafc" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                            <path d="M12 7v10" />
                        </svg>
                    </div>
                    <div>
                        <p class="text-white font-bold text-xl lg:text-2xl uppercase">Costo</p>
                        <p class="text-white font-light text-xl lg:text-2xl uppercase">$800</p>
                    </div>
                </div>

                <!-- card Usuarios -->
                <div class="p-1 flex flex-wrap justify-center items-center w-full gap-1 md:gap-3 lg:gap-6 col-span-2">
                    <h1 class="text-white uppercase text-2xl font-medium mb-2 mt-4 text-center w-full">Usuarios en la
                        membresía</h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                        <!-- card User 1-->
                        <div
                            class="border-4 border-gray-500 rounded-2xl p-1 flex flex-nowrap justify-center items-center w-full gap-1 md:gap-3 lg:gap-6">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle"
                                    width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8fafc"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                                </svg>
                            </div>
                            <div>
                                <p class="text-white font-bold text-xl lg:text-2xl uppercase">nombre</p>
                                <p class="text-white font-light text-xl lg:text-2xl uppercase">Luis Fernando Bernal Trejo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>