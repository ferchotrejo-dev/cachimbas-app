<script setup>

    import Logo from '../components/Logo.vue';
    import HomeCard from '../components/HomeCard.vue';

</script>

<template>
    
    <section class="bg-hero h-screen bg-cover bg-center ">
        <!-- Header -->
        <div class="p-4 w-full flex md:justify-between flex-wrap ">
            <Logo/>
            <p class="uppercase text-white font-bold text-2xl my-2 md:m-3 sm:text-xl ">Atletas</p>
        </div>
        <!-- MAIN -->
        <div class="flex flex-col items-center justify-center min-h-screen space-y-4">
            <h1 class="uppercase text-blue-600 font-black text-4xl mdtext-6xl">cross<span class="text-red-600">training</span></h1>
            <h2 class="uppercase text-white font-extrabold text-2xl md:text-4xl text-center p-3">Transforma tu cuerpo y desafia tus limites</h2>
            <div class="border-4 border-red-600 py-2 rounded-lg w-60 text-center hover:bg-red-600">
                <p class="uppercase text-white text-2xl font-bold">Contacto</p>
            </div>
        </div>
    </section>

    <section class="flex flex-wrap">
        <!-- Image -->
        <div class=" bg-cover bg-top bg-img-4  md:h-screen  md:w-full lg:w-1/2 ">

        </div>
        <!-- Content -->
        <div class="lg:w-1/2 my-10 md:my-2 lg:h-screen flex flex-col items-center justify-evenly" >
            <div class="flex flex-col items-center lg:w-full ">
                <h2 class="text-white uppercase font-bold text-3xl mx-3 text-center md:text-4xl">Qué es cross<span class="text-red-600">training</span>?</h2>
                <HomeCard>
                    CrossFit es un sistema de acondicionamiento físico que combina una variedad de ejercicios y disciplinas, incluyendo levantamiento de pesas, entrenamiento de fuerza, ejercicios cardiovasculares, gimnasia y entrenamiento funcional. Los entrenamientos de CrossFit suelen ser intensos y variados, con un énfasis en el movimiento funcional y la alta intensidad. 
                    <br> <br>
                    Los ejercicios de CrossFit se realizan en grupos o clases guiadas por un entrenador certificado, y pueden adaptarse para personas de todos los niveles de condición física.
                </HomeCard>
            </div>

            <div class="flex flex-col items-center lg:w-full">
                <h2 class="text-white uppercase font-bold text-3xl mx-3 text-center md:text-4xl ">cross<span class="text-blue-600">training</span> para <span class="text-red-600">Todos</span></h2>
                <HomeCard>
                    Cualquier persona puede entrenar CrossFit, independientemente de su edad, género o nivel de condición física.
                    <br> <br>
                    Los entrenamientos de CrossFit se pueden adaptar para satisfacer las necesidades y capacidades individuales, lo que los hace accesibles para una amplia variedad de personas. Desde atletas de élite hasta principiantes en el fitness
                </HomeCard>
            </div>

        </div>
    </section>

    <section class="bg-img-7 h-screen bg-cover bg-center w-full">
        <!-- MAIN -->
        <div class="flex flex-col items-center justify-center min-h-screen space-y-8 mx-4">
            <div class="md:w-1/2 text-center">

                <Logo class="text-2xl  p-2"/>
                <h2 class="uppercase text-white font-medium text-xl md:text-3xl text-center p-3">
                    La comunidad de <span class="text-blue-600">cachimbas</span><span class="text-red-600">box</span> es más que un grupo de personas, es un equipo
                    que se apoya, se motiva y celebra cada logro, creando vínculos que trascienden el gimnasio y
                    se convierten en <span class="text-blue-600">familia</span>
                </h2>
            </div>
        </div>
    </section>

</template>
