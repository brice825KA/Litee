<script setup>
import ellipse from '../../assest/image/img_bottom_reuse.webp'
</script>

<template>
    <div class="bg-[#F2F5F7] py-15">
        <div class="text-center">
        <div class="items-center justify-center flex pb-5"><img :src="ellipse" alt="ellipse" loading="lazy"></div>
        <p>Fini les tracasseries a la banque. Si vous<br>
            essayez Litee, vous en tomberez amoureux.<br>
            Vraiment cool cette solution.
        </p>
        </div>
    </div>
</template>

<style scoped>
p {
    font-family: 'Work Sans' sans-serif;
    font-weight: 300;
    font-size: 24px;
    color: #3E3D53;
}
</style>
