
<script setup>

</script>

<template>
    <div>
        <div class="border-2 border-gray-500 rounded-3xl p-1 xl:p-2 flex w-full items-center justify-center">
            <div>
                <slot name="icono"></slot>
            </div>

            <div>
                <h1 class="text-white font-bold text-2xl md:text-5xl lg:text-6xl xl:text-7xl">
                    <slot name="numero"></slot>
                </h1>
            </div>
        </div>
        <div class=" w-full">
            <h3 class="text-white font-light uppercase text-md 2xl:text-xl text-center">
                <slot name="texto"></slot>
            </h3>
        </div>
    </div>
</template>