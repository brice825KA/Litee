<script setup>
const items = [
    '../../assets/image/ima_tax.webp',
    '../../assets/image/icon/ic_bande_2.svg',
    '../../assets/image/icon/ic_bande_3.svg',
    '../../assets/image/icon/ic_bande_4.svg',
    '../../assets/image/icon/ic_bande_5.svg',

    'https://picsum.photos/468/468?random=1',
    '../image/Group 16.png',
    '../image/Group 17.png',
    '../image/Group 18.png',
    '../image/Group 19.png',

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
        :ui="{ item: 'basis-1/8' }"
        class=""
        >
        <img :src="item" width="145" height="45" top="734" left="148" class="" loading="eager">
        </UCarousel>
  </div>
</template>

<style scoped>
</style>

