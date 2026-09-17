<script setup>
const items = [
  new URL('../../assets/image/ima_bande_1.webp', import.meta.url).href,
  new URL('../../assets/image/icon/ic_bande_2.svg', import.meta.url).href,
  new URL('../../assets/image/icon/ic_bande_3.svg', import.meta.url).href,
  new URL('../../assets/image/icon/ic_bande_4.svg', import.meta.url).href,
  new URL('../../assets/image/icon/ic_bande_5.svg', import.meta.url).href,

  new URL('../../assets/image/ima_bande_1.webp', import.meta.url).href,
  new URL('../../assets/image/icon/ic_bande_2.svg', import.meta.url).href,
  new URL('../../assets/image/icon/ic_bande_3.svg', import.meta.url).href,
  new URL('../../assets/image/icon/ic_bande_4.svg', import.meta.url).href,
  new URL('../../assets/image/icon/ic_bande_5.svg', import.meta.url).href,

  new URL('../../assets/image/ima_bande_1.webp', import.meta.url).href,
  new URL('../../assets/image/icon/ic_bande_2.svg', import.meta.url).href,
  new URL('../../assets/image/icon/ic_bande_3.svg', import.meta.url).href,
  new URL('../../assets/image/icon/ic_bande_4.svg', import.meta.url).href,
  new URL('../../assets/image/icon/ic_bande_5.svg', import.meta.url).href,
]
</script>

<template>
    <div class="bg-[#F2F5F7] pt-15 flex items-center justify-center">
        <UCarousel
        v-slot="{ item }"
        loop
        dots
        :auto-scroll="{speed: 0.5, stopOnMouseEnter: false, stopOnInteraction: false }"
        :items="items"
        :ui="{ item: 'basis-1/10' }"
        class=""
        >
        <img :src="item" width="145" height="45" class="" loading="lazy">
        </UCarousel>
  </div>
</template>

<style scoped>
</style>

