<script setup>
import Logo from "../components/Logo.vue";
import HomeCard from "../components/HomeCard.vue";
</script>

<template>
  <div class="bg-black">
    <section class="bg-hero h-screen bg-cover bg-center">
      <!-- Header -->
      <div class="p-4 w-full flex justify-between flex-wrap">
        <Logo />
        <RouterLink
          class="uppercase text-white font-bold text-2xl my-3 md:m-3 hover:text-orange-500"
          :to="{ name: 'login' }"
        >
          Atletas
        </RouterLink>
      </div>
      <!-- MAIN -->
      <div
        class="flex flex-col items-center justify-center min-h-screen space-y-4"
      >
        <h1 class="uppercase text-orange-500 font-black text-4xl md:text-6xl">
          áthlos trainig
        </h1>
        <h2
          class="uppercase text-white font-semibold text-2xl md:text-4xl text-center p-3"
        >
          Transforma tu cuerpo y desafia tus limites
        </h2>
        <div
          class="border-4 border-orange-500 py-2 rounded-lg w-60 text-center hover:bg-orange-500"
        >
          <p class="uppercase text-white text-2xl font-bold cursor-pointer">
            Conocer más
          </p>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section class="flex flex-wrap">
      <!-- Image -->
      <div class="bg-cover bg-top bg-img-4 lg:w-1/2"></div>
      <!-- Content -->
      <div class="w-full lg:w-1/2 lg:h-screen text-center pt-8 mb-0">
        <div class="md:p-4 my-4 lg:p-2 lg:my-2">
          <h2 class="text-white uppercase font-bold text-3xl 2xl:text-4xl">
            Qué es cross<span class="text-orange-500">training</span>?
          </h2>
          <HomeCard>
            CrossFit es un sistema de acondicionamiento físico que combina una
            variedad de ejercicios y disciplinas, incluyendo levantamiento de
            pesas, entrenamiento de fuerza, ejercicios cardiovasculares,
            gimnasia y entrenamiento funcional. Los entrenamientos de CrossFit
            suelen ser intensos y variados, con un énfasis en el movimiento
            funcional y la alta intensidad.
            <br />
            <br />
            Los ejercicios de CrossFit se realizan en grupos o clases guiadas
            por un entrenador certificado, y pueden adaptarse para personas de
            todos los niveles de condición física.
          </HomeCard>
        </div>

        <div class="md:p-4 my-4 lg:p-2 lg:my-2">
          <h2 class="text-white uppercase font-bold text-3xl 2xl:text-4xl">
            cross<span class="text-orange-500">training</span> para
            <span class="text-orange-500">todos</span>
          </h2>
          <HomeCard>
            Cualquier persona puede entrenar CrossFit, independientemente de su
            edad, género o nivel de condición física.
            <br />
            <br />
            Los entrenamientos de CrossFit se pueden adaptar para satisfacer las
            necesidades y capacidades individuales, lo que los hace accesibles
            para una amplia variedad de personas. Desde atletas de élite hasta
            principiantes en el fitness.
          </HomeCard>
        </div>
      </div>
    </section>

    <!-- Section 3 -->
    <section class="bg-img-7 h-screen bg-cover w-full">
      <!-- MAIN -->
      <div
        class="flex flex-col items-center justify-center min-h-screen space-y-8 mx-4"
      >
        <div class="md:w-2/3 text-center">
          <Logo class="text-2xl p-2" />
          <h2
            class="uppercase text-white font-medium text-xl md:text-2xl text-center p-3"
          >
            La comunidad de <span class="font-semibold">Fitness</span
            > de <span class="text-orange-500">Áthlos</span> es más que un grupo de
            personas, es un equipo que se apoya, se motiva y celebra cada logro,
            creando vínculos que trascienden el gimnasio y se convierten en
            <span class="text-orange-500">comunidad</span>
          </h2>
        </div>
      </div>
    </section>

    <!-- Seccion 4 renovada -->
    <section class="flex flex-wrap">
      <!-- Content -->
      <div class="w-full lg:w-1/2 lg:h-screen text-center pt-8 mb-0">
        <div class="md:p-4 my-4 lg:p-2 lg:my-2">
          <h2 class="text-white uppercase font-bold text-3xl 2xl:text-4xl">
            Competencias de <span class="text-orange-500">crossfit</span>
          </h2>
          <HomeCard>
            Una competencia de CrossFit breve es un evento organizado donde los
            atletas compiten en una serie de ejercicios o desafíos diseñados
            para poner a prueba su fuerza, resistencia y habilidades físicas.
            <br />
            <br />
            Los atletas compiten en diferentes categorías basadas en su género,
            edad y nivel de habilidad.
          </HomeCard>
        </div>

        <div class="md:p-4 my-4 lg:p-2 lg:my-2">
          <h2 class="text-white uppercase font-bold text-3xl 2xl:text-4xl">
            Porqué competir en <span class="text-orange-500">crossfit</span>
          </h2>
          <HomeCard>
            Competir en CrossFit puede ser una opción para cualquier persona que
            tenga experiencia en la disciplina y esté interesada en desafiar sus
            límites personales, probar su habilidad contra otros atletas y
            sumergirse en la comunidad de CrossFit.
            <br />
            <br />
            Para aquellos que tienen metas competitivas específicas, como
            participar en torneos locales, regionales o incluso llegar a los
            CrossFit Games.
          </HomeCard>
        </div>
      </div>

      <!-- Image -->
      <div class="bg-cover bg-top bg-img-6 lg:w-1/2"></div>
    </section>



    <secction
      class="w-full h-60 flex flex-wrap flex-col items-center justify-center p-4 bg-gray-900"
    >
      <Logo />
      <h1 class="text-white font-bold text-3xl text-center">
        Todos los derechos reservados ©2025
      </h1>
    </secction>
  </div>
</template>
