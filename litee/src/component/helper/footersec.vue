<script setup></script>

<template>
    <div class="newsletter-wrapper bg-[#FFFFFF] flex w-full max-w-[1500px] mx-auto h-auto min-h-[134px] px-6 md:px-12 lg:px-16 pt-10 pb-8 mb-5 gap-8 md:gap-12 lg:gap-20 items-center justify-center">
        <div class="newsletter-title font-family-['Work Sans'] font-weight-400 text-[30px] text-[#3E3D53] leading-[1.2]">
            <p>Toutes les nouveautés<br>dans votre boîte mail</p>
        </div>
        <div class="newsletter-form flex flex-wrap items-center justify-center gap-4 md:gap-8 pt-2 md:pt-10">
            <div class="newsletter-input-wrap">
                <input id="footer" class="pr-4 md:pr-10 pt-5 pb-2 border-b-[1px] border-[#D8D8D8] w-full min-w-[220px] md:min-w-[360px]" type="text" placeholder="Email"></input>
            </div>
            <div class="">
                <button class="cursor-pointer bg-[#FA4A4D] w-[172px] h-[55px] rounded-[27.5px] font-family-['Work Sans'] font-[600] text-[16px] text-[#FFFFFF]" type="submit">S'inscrire</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
input:focus {
    outline: none;
}

@media (max-width: 1410px) {
    .newsletter-wrapper {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .newsletter-title {
        font-size: clamp(24px, 2vw, 30px);
    }

    .newsletter-form {
        width: 100%;
        padding-top: 0;
    }

    .newsletter-input-wrap,
    .newsletter-form > div {
        width: 100%;
    }

    .newsletter-input-wrap input {
        width: 100%;
        min-width: 0;
    }

    .newsletter-form button {
        width: min(100%, 260px);
    }
}
</style>
