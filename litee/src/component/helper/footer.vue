<script setup> 
import footerfirst from './footerfirst.vue' 
import footersecond from './footersec.vue' 
import footerthird from './footerthird.vue' 

const carouselItems = [1, 2, 3]
</script> 

<template> 
  <div class="w-full bg-[#F2F5F7] pb-5">
    <UCarousel
      v-slot="{ item }"
      loop 
      dots
      :autoplay="{ delay: 8000 }" 
      :items="carouselItems" 
      :ui="{
        item: 'basis-full',
        dots: 'absolute inset-x-0 bottom-2 flex flex-wrap items-center justify-center gap-3',
        dot: 'bg-[#C4C4C4] data-[state=active]:bg-red-500'
      }"
      class="w-full bg-[#F2F5F7]"
      >
      <footerfirst /> 
    </UCarousel> 
  </div>
  <footersecond /> 
  <footerthird /> 
</template> 

<style scoped></style>
