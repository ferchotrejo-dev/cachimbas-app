
<script setup>
    import { ref } from 'vue';
    
    import PR from '@/components/atleta/PR.vue'

    const pr = ref(0);

</script>

<template>
    <div class="bg-gray-950 rounded-3xl w-full">

        <div class="flex justify-center">

            <PR 
                class=" md:px-10 py-10 px-10  shadow-lg md:my-10 md:mx-10 mx-6 md:w-3/4 xl:w-1/3"
                v-if="pr === 0"
                @definir-PR = "definirPR"
            />

        </div>

        <div class="bg-img-3 h-full">

        </div>

    </div>
</template>


