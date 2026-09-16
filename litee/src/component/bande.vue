<script setup>
const items = [
    '../image/Group 13.png',
    '../image/Group 16.png',
    '../image/Group 17.png',
    '../image/Group 18.png',
    '../image/Group 19.png',

    '../image/Group 13.png',
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
        <img :src="item" width="145" height="90" top="734" left="148" class="" loading="lazy">
        </UCarousel>
  </div>
</template>

<style scoped>
</style>

