<script setup>

import LogoMenu from '@/components/atleta/LogoMenu.vue';
import AtletaMenu from '@/components/atleta/AtletaMenu.vue';
import { useAuth } from '@/helpers/useAuth';
import { useRouter } from 'vue-router';
import { useQuery, useMutation } from '@tanstack/vue-query'

const { data, isError } = useAuth();
const router = useRouter();

if (!isError && data.value && data.value.rol && data.value.rol.toString() === '666100f1f4a96985bdc6983e') {
    router.push('/login');
}



</script>

<template>

    <section class="grid grid-cols-12 m-2 mt-8">
        <RouterLink
            class="bg-gray-950 p-4  md:p-4 rounded-3xl flex justify-center  col-span-12  xl:col-span-10 col-start-1 md:col-start-2 xl:col-start-2 sm:col-span-12"
            :to="{ name: 'atleta-dashboard' }"
        >
            <LogoMenu />
        </RouterLink>
    </section>

    <div class="grid grid-cols-12 gap-4  ">

        <AtletaMenu class="hidden md:block h-fit">

        </AtletaMenu>

        <div class="col-span-12 xl:col-span-10 p-3 md:col-start-2 m-0">
            <main class=" w-full">
                <RouterView></RouterView>
            </main>
        </div>


    </div>

</template>