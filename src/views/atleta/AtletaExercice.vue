
<script setup>

</script>

<template >

    <!-- Container -->
    <div class="w-full grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 justify-around ">

        <!-- PR -->
        <div class="bg-gray-950 w-full rounded-3xl p-5 flex justify-center flex-wrap flex-col">
            <div class="flex justify-center flex-col items-center">
                <h1 class="text-white text-3xl uppercase font-bold text-center">Personal Record</h1>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-barbell">
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
            </div>
            <div class="my-3 gap-1 w-full flex flex-wrap">
                <RouterLink 
                    class="text-white text-md uppercase font-bold w-full m-2 border-2 border-blue-600 rounded-xl p-3 text-center hover:bg-blue-600"
                    :to="{ name: 'agregar-pr' }"
                >
                    Agregar PR
                </RouterLink>
                <RouterLink 
                    class="text-white text-md uppercase font-bold w-full m-2 border-2 border-red-600 rounded-xl p-3 text-center hover:bg-red-600"
                    :to="{ name: 'visualizar-pr' }"
                >
                    Visualizar PR
                </RouterLink>
            </div>
        </div>

        <!-- Skill -->
        <div class="bg-gray-950 w-full rounded-3xl p-5 flex justify-center flex-wrap flex-col">
            <div class="flex justify-center flex-col items-center">
                <h1 class="text-white text-3xl uppercase font-bold">Skill</h1>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-stars">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M17.8 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                        <path d="M6.2 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                        <path d="M12 9.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                    </svg>
                </div>
            </div>
            <div class="my-3 gap-1 w-full flex flex-wrap">
                <RouterLink 
                    class="text-white text-md uppercase font-bold w-full m-2 border-2 border-blue-600 rounded-xl p-3 text-center hover:bg-blue-600"
                    :to="{ name: 'agregar-skill' }"
                >
                    Agregar skill
                </RouterLink>
                <RouterLink 
                    class="text-white text-md uppercase font-bold w-full m-2 border-2 border-red-600 rounded-xl p-3 text-center hover:bg-red-600"
                    :to="{ name: 'visualizar-skill' }"
                >
                    Visualizar skill
                </RouterLink>
            </div>
        </div>

        <!-- Benchmark -->
        <div class="bg-gray-950 w-full rounded-3xl p-5 flex justify-center flex-wrap flex-col">
            <div class="flex justify-center flex-col items-center">
                <h1 class="text-white text-3xl uppercase font-bold">Benchmark</h1>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-medal-2">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 3h6l3 7l-6 2l-6 -2z" />
                        <path d="M12 12l-3 -9" />
                        <path d="M15 11l-3 -8" />
                        <path d="M12 19.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
                    </svg>
                </div>
            </div>
            <div class="my-3 gap-1 w-full flex flex-wrap">
                <a class="text-white text-md uppercase font-bold w-full m-2 border-2 border-blue-600 rounded-xl p-3 text-center hover:bg-blue-600">Agregar Benchmark</a>
                <a class="text-white text-md uppercase font-bold w-full m-2 border-2 border-red-600 rounded-xl p-3 text-center hover:bg-red-600">Visualizar Benchmark</a>
            </div>
        </div>

        <!-- Score -->
        <div class="bg-gray-950 w-full rounded-3xl p-5 flex justify-center flex-wrap flex-col">
            <div class="flex justify-center flex-col items-center">
                <h1 class="text-white text-3xl uppercase font-bold">Score</h1>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-award">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
                        <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
                        <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
                    </svg>
                </div>
            </div>
            <div class="my-3 gap-1 w-full flex flex-wrap">
                <a class="text-white text-md uppercase font-bold w-full m-2 border-2 border-blue-600 rounded-xl p-3 text-center hover:bg-blue-600">Agregar score</a>
                <a class="text-white text-md uppercase font-bold w-full m-2 border-2 border-red-600 rounded-xl p-3 text-center hover:bg-red-600">Visualizar score</a>
            </div>
        </div>
    </div>


    
    

</template>


