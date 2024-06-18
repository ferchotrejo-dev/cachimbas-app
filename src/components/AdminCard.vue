
<script setup>

</script>

<template>
    <div>
        <div class="border-2 border-gray-500 rounded-3xl p-2 xl:p-3 flex w-full xl:w-3/4 items-center justify-center">
            <div>
                <slot name="icono"></slot>
            </div>

            <div>
                <h1 class="text-white font-bold text-2xl md:text-5xl lg:text-6xl xl:text-7xl">
                    <slot name="numero"></slot>
                </h1>
            </div>
        </div>
        <div class=" w-full xl:w-3/4">
            <h3 class="text-white font-light uppercase text-md xl:text-xl text-center">
                <slot name="texto"></slot>
            </h3>
        </div>
    </div>
</template>