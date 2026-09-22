<script setup>
import companies_1 from '../../assest/image/img_card_companie_2.webp'
</script>

<template>
  <div class="card-features-wrapper w-full max-w-7xl mx-auto my-50 px-4 flex flex-col items-center justify-center font-sans select-none overflow-visible">
    <div class="card-features-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center relative w-full">
      
      <div class="feature-orbit md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] aspect-square items-center justify-center pointer-events-none z-0">
        <div class="absolute w-[60%] h-[60%] border-dashed border-2 border-[#FA4A4D0D] rounded-full"></div>
        <div class="absolute w-[40%] h-[40%] border-4 border-dashed border-red-300 rounded-full animate-[spin_100s_linear_infinite]"></div>
      </div>

      <div class="feature-column feature-column-left flex flex-col gap-16 md:gap-24 z-10 text-center md:text-right mr-10">
        <div class="feature-item flex flex-col md:items-end group">
          <div class="flex items-center justify-center md:justify-start gap-3 md:flex-row-reverse mr-15">
            <span class="w-2.5 h-2.5 rounded-full bg-[#FA4A4D] ring-4 ring-red-100 shrink-0"></span>
            <h3 class="text-2xl font-family-[Work Sans] font-semibold text-[#13193B]">Accessible</h3>
          </div>
          <p class="mt-2 text-2xl font-family-[Work Sans] font-light text-[#3E3D53] text-center">
            Depuis votre navigateur<br>application mobile
          </p>
        </div>

        <div class="feature-item flex flex-col md:items-end group pr-10">
          <div class="flex items-center justify-center md:justify-start gap-3 md:flex-row-reverse mr-10">
            <span class="w-2.5 h-2.5 rounded-full bg-[#FA4A4D] ring-4 ring-red-100 shrink-0"></span>
            <h3 class="text-2xl font-family-[Work Sans] font-semibold text-[#13193B]">Sécurisé et Fiable</h3>
          </div>
          <p class="pl-3 mt-2 text-2xl font-family-[Work Sans] font-light text-[#3E3D53] text-center">
            De type bancaire sur toutes vos transactions
          </p>
        </div>
      </div>

      <div class="feature-center flex justify-center justify-self-center z-10 py-6 md:py-0 w-full max-w-70 md:max-w-[320px]">
        <div class="w-full">
          <img 
            :src="companies_1" 
            alt="Carte bancaire Litee" 
            class="scale-130" 
            loading="eager" 
          />
        </div>
      </div>

      <div class="feature-column feature-column-right flex flex-col gap-16 md:gap-24 z-10 text-center md:text-left">
        <div class="feature-item flex flex-col md:items-start group mr-15 mt-15">
          <div class="flex items-center justify-center md:justify-start gap-3">
            <span class="w-2.5 h-2.5 rounded-full bg-[#FA4A4D] ring-4 ring-red-100 shrink-0"></span>
            <h3 class="text-2xl font-family-[Work Sans] font-semibold text-[#13193B]">Pas de frais de maintenance</h3>
          </div>
          <p class="mt-2 text-2xl font-family-[Work Sans] font-light text-[#3E3D53] text-center ml-10">
            Ni d'autres frais cachés
          </p>
        </div>

        <div class="feature-item flex flex-col md:items-start group pl-10 ml-10">
          <div class="flex items-center justify-center md:justify-start gap-3 ml-10">
            <span class="w-2.5 h-2.5 rounded-full bg-[#FA4A4D] ring-4 ring-red-100 shrink-0"></span>
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

<style scoped>
.card-features-wrapper {
  position: relative;
}

@media (max-width: 1410px) {
  .card-features-wrapper {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .card-features-grid {
    gap: 1.5rem;
  }

  .feature-orbit {
    width: 92% !important;
    transform: translate(-50%, -50%) scale(0.9);
  }

  .feature-column {
    gap: 2rem !important;
    margin-right: 0 !important;
  }

  .feature-item {
    align-items: center !important;
  }

  .feature-item h3,
  .feature-item p {
    font-size: clamp(1.1rem, 1.6vw, 1.5rem);
  }

  .feature-center {
    max-width: 260px;
  }

  .feature-center img {
    width: min(100%, 260px);
    display: block;
    margin: 0 auto;
    transform: scale(1);
  }
}

@media (max-width: 1024px) {
  .card-features-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .feature-orbit {
    position: static;
    transform: none;
    width: 100%;
    max-width: 420px;
    aspect-ratio: 1;
    display: none;
  }

  .feature-column,
  .feature-center {
    width: 100%;
    max-width: 100%;
    margin: 0 !important;
    padding: 0 !important;
    text-align: center;
  }

  .feature-item {
    width: 100%;
    align-items: center !important;
  }

  .feature-item h3,
  .feature-item p {
    text-align: center;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .feature-center img {
    max-width: 320px;
    margin: 0 auto;
    display: block;
    transform: scale(1);
  }
}
</style>
