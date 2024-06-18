
<script setup>

    import Logo from '@/components/Logo.vue';
    import AdminMenu from '@/components/AdminMenu.vue';
    import CreateUserView from './CreateUserView.vue';
</script>

<template>

    <section class="grid grid-cols-12 m-2 mt-8">
        <div class="bg-gray-950 p-4  md:p-4 rounded-3xl flex justify-center  col-span-12  xl:col-span-10 col-start-1 md:col-start-2 xl:col-start-2 sm:col-span-12">
            <Logo />
        </div>
    </section>

    <div class="grid grid-cols-12 gap-4  ">
        
        <AdminMenu class="hidden md:block">
            
        </AdminMenu>

        <div class="col-span-12 xl:col-span-10 p-3 md:col-start-2 m-0">
            <main class=" w-full">
                <RouterView></RouterView>
                <CreateUserView/>
            </main>
        </div>
        

    </div>

</template>
