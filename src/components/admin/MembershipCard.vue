
<script setup>

</script>

<template>
    <div class=" border-4 border-gray-500 mt-3 md:mt-4 rounded-2xl p-4 w-auto flex gap-3 justify-center items-center flex-wrap">

        <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-shield" width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8fafc" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h2" />
                <path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            </svg>
        </div>
        <div class="">
            <p class=" text-xl font-bold text-white uppercase text-center"> <slot></slot> </p>

            <div class="flex flex-wrap w-full mt-1">
                <button
                    class="uppercase text-white font-bold text-sm text-center p-1 rounded-xl w-full border-2 border-red-600 hover:bg-red-600"
                >
                    eliminar
                </button>
            </div>
        </div>
        

    </div>
</template>