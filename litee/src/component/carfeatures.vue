<script setup>
</script>

<template>
  <div class="w-full max-w-5xl mx-auto mt-50 mb-50 px-4 py-16 flex flex-col items-center justify-center font-sans select-none">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center relative w-full">
      <div class="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square border-2 border-dashed border-red-200 rounded-full pointer-events-none z-0"></div>
      <div class="flex flex-col gap-12 md:gap-24 z-10 md:text-right">
        <div class="flex flex-col md:items-end group">
          <div class="flex items-center gap-3 md:flex-row-reverse">
            <h3 class="text-lg font-bold text-slate-800">Accessible</h3>
            <span class="w-2.5 h-2.5 rounded-full bg-red-500 ring-4 ring-red-100"></span>
          </div>
          <p class="mt-2 text-sm text-slate-500 max-w-xs">
            Depuis votre navigateur et application mobile
          </p>
        </div>
        <div class="flex flex-col md:items-end group">
          <div class="flex items-center gap-3 md:flex-row-reverse">
            <h3 class="text-lg font-bold text-slate-800">Sécurisé et Fiable</h3>
            <span class="w-2.5 h-2.5 rounded-full bg-red-500 ring-4 ring-red-100"></span>
          </div>
          <p class="mt-2 text-sm text-slate-500 max-w-xs">
            De type bancaire sur toutes vos transactions
          </p>
        </div>
      </div>
      <div class="flex justify-center justify-self-center z-10 py-6 md:py-0 w-full max-w-[340px]">
        <div class="w-full transition-transform duration-300 hover:scale-105">
          <img 
            src="../image/Group 7.1litee-cart-sample.png" 
            alt="Carte bancaire Litee" 
            class="w-full h-auto rounded-2xl shadow-2xl shadow-slate-900/20 object-contain"
            loading="eager"
          />
        </div>
      </div>
      <div class="flex flex-col gap-12 md:gap-24 z-10">
        <div class="flex flex-col group">
          <div class="flex items-center gap-3">
            <span class="w-2.5 h-2.5 rounded-full bg-red-500 ring-4 ring-red-100"></span>
            <h3 class="text-lg font-bold text-slate-800">Pas de frais de maintenance</h3>
          </div>
          <p class="mt-2 text-sm text-slate-500 max-w-xs">
            Ni d'autres frais cachés
          </p>
        </div>
        <div class="flex flex-col group">
          <div class="flex items-center gap-3">
            <span class="w-2.5 h-2.5 rounded-full bg-red-500 ring-4 ring-red-100"></span>
            <h3 class="text-lg font-bold text-slate-800">Contrôle total</h3>
          </div>
          <p class="mt-2 text-sm text-slate-500 max-w-xs">
            Désactiver votre carte quand vous ne l'utilisez pas
          </p>
        </div>
      </div>

    </div>
  </div>
</template>
