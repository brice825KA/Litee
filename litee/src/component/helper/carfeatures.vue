<script setup>
import companies_1 from '../../assest/image/img_card_companie_2.webp'
</script>

<template>
  <div class="w-full max-w-7xl mx-auto my-50 px-4 flex flex-col items-center justify-center font-sans select-none overflow-visible">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center relative w-full">
      
      <!-- Conteneur des cercles concentriques d'arrière-plan -->
      <div class="md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] aspect-square items-center justify-center pointer-events-none z-0">
        <!-- Grand cercle extérieur -->
        <div class="absolute w-[60%] h-[60%] border border-dashed border-[2px] border-[#FA4A4D0D] rounded-full"></div>
        
        <!-- Premier cercle intérieur -->
        <div class="absolute w-[40%] h-[40%] border-[4px] border-dashed border-red-300 rounded-full animate-[spin_100s_linear_infinite]"></div>
      </div>

      <!-- Colonne Gauche-->
      <div class="flex flex-col gap-16 md:gap-24 z-10 text-center md:text-right mr-10">
        <!-- Bloc -->
        <div class="flex flex-col md:items-end group">
          <div class="flex items-center justify-center md:justify-start gap-3 md:flex-row-reverse mr-15">
            <span class="w-2.5 h-2.5 rounded-full bg-[#FA4A4D] ring-4 ring-red-100 flex-shrink-0"></span>
            <h3 class="text-2xl font-family-[Work Sans] font-semibold text-[#13193B]">Accessible</h3>
          </div>
          <p class="mt-2 text-2xl font-family-[Work Sans] font-light text-[#3E3D53] text-center">
            Depuis votre navigateur<br>application mobile
          </p>
        </div>

        <!-- Bloc : Sécurisé et Fiable -->
        <div class="flex flex-col md:items-end group  pr-10">
          <div class="flex items-center justify-center md:justify-start gap-3 md:flex-row-reverse mr-10">
            <span class="w-2.5 h-2.5 rounded-full bg-[#FA4A4D] ring-4 ring-red-100 flex-shrink-0"></span>
            <h3 class="text-2xl font-family-[Work Sans] font-semibold text-[#13193B]">Sécurisé et Fiable</h3>
          </div>
          <p class="pl-3 mt-2 text-2xl font-family-[Work Sans] font-light text-[#3E3D53] text-center">
            De type bancaire sur toutes vos transactions
          </p>
        </div>
      </div>

      <!-- Colonne Centrale-->
      <div class="flex justify-center justify-self-center z-10 py-6 md:py-0 w-full max-w-[280px] md:max-w-[320px]">
        <div class="w-full">
          <img 
            :src="companies_1" 
            alt="Carte bancaire Litee" 
            class="scale-130" 
            loading="eager" 
          />
        </div>
      </div>

      <!-- Colonne Droite -->
      <div class="flex flex-col gap-16 md:gap-24 z-10 text-center md:text-left">
        <!-- Bloc -->
        <div class="flex flex-col md:items-start group mr-15 mt-15">
          <div class="flex items-center justify-center md:justify-start gap-3">
            <span class="w-2.5 h-2.5 rounded-full bg-[#FA4A4D] ring-4 ring-red-100 flex-shrink-0"></span>
            <h3 class="text-2xl font-family-[Work Sans] font-semibold text-[#13193B]">Pas de frais de maintenance</h3>
          </div>
          <p class="mt-2 text-2xl font-family-[Work Sans] font-light text-[#3E3D53] text-center ml-10">
            Ni d'autres frais cachés
          </p>
        </div>

        <!-- Bloc -->
        <div class="flex flex-col md:items-start group  pl-10 ml-10">
          <div class="flex items-center justify-center md:justify-start gap-3 ml-10">
            <span class="w-2.5 h-2.5 rounded-full bg-[#FA4A4D] ring-4 ring-red-100 flex-shrink-0"></span>
            <h3 class="text-2xl font-family-[Work Sans] font-semibold text-[#13193B]">Contrôle total</h3>
          </div>
          <p class="mt-2 text-2xl font-family-[Work Sans] font-light text-[#3E3D53] text-center">
            Désactiver votre carte quand<br>vous ne l'utilisez pas
          </p>
        </div>
      </div>

    </div>
  </div>
</template>
