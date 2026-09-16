<script setup lang="ts">
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

    '../image/Group 13.png',
    '../image/Group 16.png',
    '../image/Group 17.png',
    '../image/Group 18.png',
    'https://picsum.photos/640/320?random=6'
]
</script>

<template>
    <div class="bg-[#F2F5F7">
        <UCarousel
        v-slot="{ item }"
        loop
        dots
        auto-scroll
        :items="items"
        :ui="{ item: 'basis-1/10' }"
        >
        <img :src="item" width="176" height="90" top="734" left="148" class="" loading="lazy">
        </UCarousel>
  </div>
</template>

<style scoped>
</style>