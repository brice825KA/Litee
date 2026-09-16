<script setup lang="ts">
const items = [
    'https://github.com/brice825KA/Litee/blob/main/litee/src/image/Group%2013.png',
    'https://github.com/brice825KA/Litee/blob/main/litee/src/image/Group%2016.png',
    'https://github.com/brice825KA/Litee/blob/main/litee/src/image/Group%2017.png',
    'https://github.com/brice825KA/Litee/blob/main/litee/src/image/Group%2018.png',
    'https://github.com/brice825KA/Litee/blob/main/litee/src/image/Group%2019.png',

    'https://github.com/brice825KA/Litee/blob/main/litee/src/image/Group%2013.png',
    'https://github.com/brice825KA/Litee/blob/main/litee/src/image/Group%2016.png',
    'https://github.com/brice825KA/Litee/blob/main/litee/src/image/Group%2017.png',
    'https://github.com/brice825KA/Litee/blob/main/litee/src/image/Group%2018.png',
]
</script>

<template>
    <div class="bg-[#F2F5F7] flex items-center justify-center">
        <UCarousel
        v-slot="{ item }"
        loop
        dots
        auto-scroll
        :items="items"
        :ui="{ item: 'basis-1/6' }"
        class=""
        >
        <img :src="item" width="176" height="90" top="734" left="148" class="" loading="lazy">
        </UCarousel>
  </div>
</template>

<style scoped>
</style>