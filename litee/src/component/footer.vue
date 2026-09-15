<script setup> 
import footerfirst from './footerfirst.vue' 
import footersecond from './footersec.vue' 
import footerthird from './footerthird.vue' 

const carouselItems = [1, 2, 3]
</script> 

<template> 
  <div class="w-full">
    <UCarousel
      v-slot="{ item }"
      loop 
      arrows 
      dots 
      :autoplay="{ delay: 2000 }" 
      :items="carouselItems" 
      :ui="{ item: 'basis-full' }"
      class="w-full"
    >
      <footerfirst class="w-full" /> 
    </UCarousel> 
  </div>

  <footersecond /> 
  <footerthird /> 
</template> 

<style scoped></style>
