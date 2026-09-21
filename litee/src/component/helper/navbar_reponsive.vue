<script setup lang="ts">
import { ref } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
    {
        label: '',
        icon: 'i-lucide-menu',
        to: '/docs/getting-started',
        children: [
            {
                label: 'Particular',
                to: '/'
            },
            {
                label: 'Entreprises',
                to: '/companies'
            },
            {
                label: 'Tarifs',
                to: '/prices'
            },
        ]
    },
])
</script>

<template>
    <div class="bg-blue-200 flex justify-center items-center">
        <div id="logo" class="bg-red-500"><img src='../../assest/image/icon/ic_logo_litee_with_litee.svg' alt="logo"></div>
        <div class="">
            <UNavigationMenu
            :items="items"
            class="flex justify-center"
            :ui="{
                linkTrailingIcon: 'hidden',
                childList: 'flex flex-col items-center justify-center gap-4',
                childLink: 'justify-center text-center hover:text-[gray]'
            }"
            >
            <template #item-leading="{ item }">
                <img v-if="item.image" :src="item.image" class="size-5" alt="">
            </template>
            </UNavigationMenu>
        </div>
  </div>
</template>
