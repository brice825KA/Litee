<script setup>
import Myfooter from '../../../component/helper/footer.vue'
import man from '../../../assest/image/img_man_tarifs.webp'
import factory from '../../../assest/image/img_factory_tarifs.webp'
</script>

<template>
    <div class="pricing-header space-y-5 items-center justify-center bg-[#F7FAFB00] pl-70 pr-15 pt-20">
        <div class="">
            <p class="font-family-[Work Sans] font-semibold text-[36px] leading-[100%] text-[#000000]">Nos tarifs</p>
        </div>
        <div class="">
            <p class="font-family-[Work Sans] font-light text-[24px] leading-[152%] text-[#000000]">Facturation claire et simple. Dites adieu aux<br>
                frais bancaires que vous ne comprenez pas.
            </p>
        </div>
        <div class="h-px w-277.25  bg-[#F2F5F7]"></div>
    </div>
    <!--Middle two part-->
    <div class="pricing-cards flex justify-center items-center gap-80 py-5">
        <div class="pricing-card-block">
            <div class="font-family-[Work Sans] font-thin text-[36px] leading-[235%] text-[#000000]"><p>Particuliers</p></div>
            <div class="w-128.5 h-203.25 t-[541px] l-[195px] shadow-md pb-10">
                <div class="flex justify-center items-center "><img :src="man"></div>
                <p class="font-family-[Work Sans] font-thin text-[144px] leading-[235%] text-[#000000] text-center">03%</p>
                <div class="justify-center items-center ">
                    <p class="font-family-[Work Sans] font-light text-[24px] leading-[152%] text-[#000000] text-center">
                        au rechargement de votre compte<br>
                        <div class="w-24.25 h-0.75 t-[1029px] l-[395px] bg-[#FA4A4D1A] ml-50 mt-5 justify-center items-center"></div><br>
                        <p class="font-family-[Work Sans] font-light text-[24px] leading-[152%] text-[#000000] text-center">$03 par catrte additionnlle generee</p><br><br>
                        <p class="font-family-[Work Sans] font-light text-[24px] leading-[152%] text-[#000000] text-center">0.5% de frais d transfert</p><br><br>
                    </p>
                    <div class="flex justify-center items-center "><button class="w-43 h-13.75 t-[1233px] l-[377px] rounded-[27.5px] bg-[#FA4A4D] font-family-[Work Sans] font-light text-[18px] leading-[100%] text-[#FFFFFF]">Inscription</button></div>
                </div>
            </div>
        </div>
        <div class="pricing-card-block">
            <div class="font-family-[Work Sans] font-thin text-[36px] leading-[235%] text-[#000000]"><p>Entreprises</p></div>
            <div class="w-128.5 h-203.25 t-[541px] l-[195px] shadow-md pb-10">
                <div class="flex justify-center items-center "><img :src="factory"></div>
                <p class="font-family-[Work Sans] font-thin text-[144px] leading-[235%] text-[#000000] text-center">03%</p>
                <div class="">
                    <p class="font-family-[Work Sans] font-light text-[24px] leading-[152%] text-[#000000] text-center">
                        au rechargement de votre compte<br>
                        <div class="w-24.25 h-0.75 t-[1029px] l-[395px]  bg-[#FA4A4D1A] ml-50 mt-5 justify-center items-center"></div><br>
                        <p class="font-family-[Work Sans] font-light text-[24px] leading-[152%] text-[#000000] text-center">$03 par catrte additionnlle generee</p><br><br>
                        <p class="font-family-[Work Sans] font-light text-[24px] leading-[152%] text-[#000000] text-center">$02 / mois par membre d'equipe</p><br><br>
                    </p>
                    <div class="flex justify-center items-center "><button class="w-43 h-13.75 t-[1233px] l-[377px] rounded-[27.5px] bg-[#FA4A4D] font-family-[Work Sans] font-light text-[18px] leading-[100%] text-[#FFFFFF]">Inscription</button></div>
                </div>
            </div>
        </div>
    </div>
    <Myfooter/>
</template>

<style scoped>
button {
    cursor: pointer;
}

@media (max-width: 1410px) {
    .pricing-header {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .pricing-header p {
        font-size: clamp(24px, 2.2vw, 36px);
        line-height: 1.2;
    }

    .pricing-cards {
        flex-direction: column;
        gap: 2rem;
    }

    .pricing-card-block {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .pricing-card-block > div:last-child {
        width: min(100%, 514px);
        height: auto;
    }
}
</style>
