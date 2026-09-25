<script setup>
import bande_1 from '../../assest/image/icon/ic_bande_1.svg'
import bande_2 from '../../assest/image/icon/ic_bande_2.svg'
import bande_3 from '../../assest/image/icon/ic_bande_3.svg'
import bande_4 from '../../assest/image/icon/ic_bande_4.svg'
import bande_5 from '../../assest/image/icon/ic_bande_5.svg'
const items = [
    bande_1,
    //bande_2,
    bande_3,
    bande_4,
    bande_5,

    bande_1,
    //bande_2,
    bande_3,
    bande_4,
    bande_5,

    bande_1,
    //bande_2,
    bande_3,
    bande_4,
    bande_5,
]
</script>

<template>
    <div class="bg-[#F2F5F7] flex items-center justify-center">
        <UCarousel
        v-slot="{ item }"
        loop
        dots
        :auto-scroll="{speed: 0.5, stopOnMouseEnter: false, stopOnInteraction: false }"
        :items="items"
        :ui="{ item: 'basis-1/8' }"
        class="items-center justify-center"
        >
        <img :src="item" class="items-center justify-center size-30" loading="lazy">
        </UCarousel>
  </div>
</template>

<style scoped>
</style>

