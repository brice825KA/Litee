<script setup>
import ellipse from '../../assest/image/img_bottom_reuse.webp'
</script>

<template>
    <div class="quote-section bg-[#F2F5F7] py-15">
        <div class="text-center">
            <div class="items-center justify-center flex pb-5">
                <img :src="ellipse" alt="ellipse" loading="lazy">
            </div>
            <p>Fini les tracasseries a la banque. Si vous<br>
                essayez Litee, vous en tomberez amoureux.<br>
                Vraiment cool cette solution.
            </p>
        </div>
    </div>
</template>

<style scoped>
.quote-section {
    width: 100%;
}

p {
    font-family: 'Work Sans' sans-serif;
    font-weight: 300;
    font-size: 24px;
    color: #3E3D53;
}

@media (max-width: 1410px) {
    .quote-section {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .quote-section img {
        max-width: 120px;
        height: auto;
    }

    p {
        font-size: clamp(18px, 2vw, 24px);
        line-height: 1.5;
    }
}
</style>
