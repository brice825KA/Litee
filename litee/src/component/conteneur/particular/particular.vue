<script setup>
import Myfooter from '../../../component/helper/footer.vue'
import bande from '../../helper/bande.vue'
import first_pic from '../../../assest/image/img_first_particular_page.webp'
import icon_one from '../../../assest/image/img_entreprise.webp'
import icon_two from '../../../assest/image/img_card.webp'
import icon_three from '../../../assest/image/ima_tax.webp'
</script>

<template>
    <div class="page-hero flex justify-center items-center bg-[#F7FAFB00] pl-30 pr-15">
        <div class="hero-copy w-[596px] h-[572px] t-[119px] l-[821px] pt-20">
            <div class="">
                <div class="title-block w-[675px] h-[143px] t-[211px] l-[190px] mb-15">
                    <p class="font-family-[Work Sans] font-bold text-[40px] line-height-100% text-[#3E3D53]">
                        Organiser les paiements de<br>
                        votre equipe au meme<br>
                        endroit
                    </p>
                </div>
                <div class="subtitle-block w-[610px] h-[85px] t-[382px] l-[190px] mb-10">
                    <p class="font-family-[Work Sans] font-[300] text-[24px] line-height-100% text-[#3E3D53]">
                        Donnez plus d'autonomie a vos collaborateurs<br>
                        et Ameliorez votre productivite
                    </p>
                </div>
            </div>
            <div class="hero-form flex gap-5">
                <div><input id="particular" class="pl-5 w-[275px] h-[55px] t-[542px] l-[190px] rounded-[27.5px] border-[1px] border-[#D1D5DB] placeholder:text-[#9CA3AF] placeholder:font-family-[Work Sans] placeholder:font-weight-400 placeholder:text-[16px] placeholder:line-height-100%" type="text" placeholder="Email pro"></div>
                <div><button class="w-[172px] h-[55px] t-[542px] l-[475px] rounded-[27.5px] bg-[#FA4A4D] font-family-[Work Sans] font-weight-600 text-[18px] line-height-100% text-[#FFFFFF]">Inscription</button></div>
            </div>
        </div>
        <div class="hero-image w-[596px] h-[572px] t-[119px] l-[821px] mt-15">
            <img class="w-[596px] h-[572px] t-[119px] l-[821px]" :src="first_pic" alt="dash">
        </div>
    </div>
    <!-- Bande -->
     <bande/>
    <!-- Simple Sentences -->
    <div class="flex justify-center items-center bg-[#F7FAFB00] pl-30 pr-15 border-b-[1px] border-[#F2F5F7] py-10 border-b-[1px] border-[#F2F5F7]">
        <p class="font-family-[Work Sans] font-weight-700 text-[36px] font-bold line-height-100% text-[#3E3D53] text-center">
            En plus des fonctionnalités du<br>
            compte particulier...
        </p>
    </div>
    <!-- trio cards -->
    <div class="feature-showcase flex justify-center items-center gap-40 py-10">
        <div id="card1" class="feature-card justify-center items-center py-5">
            <div class="flex items-center justify-center py-5"><img :src="icon_one" alt=""></div>
            <div class="flex-wrap justify-center items-center text-center space-y-2">
                <div class="text-[#3E3D53] font-family-[Work Sans] font-[500] text-[24px] leading-[100%]"><p>Compte Entreprise</p></div>
                <div class="text-[#3E3D53] font-family-[Work Sans] font-[300] text-[24px] leading-[100%]"><p>Creer un compte entreprise<br>et inviter les membres de<br>votre equipe</p></div>
            </div>
        </div>
        <div id="card1" class="feature-card justify-center items-center py-5">
            <div class="flex items-center justify-center py-5"><img :src="icon_two" alt=""></div>
            <div class="flex-wrap justify-center items-center text-center space-y-2">
                <div class="text-[#3E3D53] font-family-[Work Sans] font-[500] text-[24px] leading-[100%]"><p>Carte plafonnée</p></div>
                <div class="text-[#3E3D53] font-family-[Work Sans] font-[300] text-[24px] leading-[100%]"><p>Decidez qui peut depenser<br>combien et qui doit valider<br>quelles demandes d'achat.</p></div>
            </div>
        </div>
        <div id="card1" class="feature-card justify-center items-center py-5">
            <div class="flex items-center justify-center py-5"><img :src="icon_three" alt=""></div>
            <div class="flex-wrap justify-center items-center text-center space-y-2">
                <div class="text-[#3E3D53] font-family-[Work Sans] font-[500] text-[24px] leading-[100%]"><p>Suivi centralisé</p></div>
                <div class="text-[#3E3D53] font-family-[Work Sans] font-[300] text-[24px] leading-[100%]"><p>Visualisez en temps reel<br>l'ensemble des dépenses de<br>votre entreprise depuis le<br>tableau de bord Litee</p></div>
            </div>
        </div>
    </div>
    <Myfooter/>
</template>

<style scoped>
button {
    cursor: pointer;
}

input:focus {
    outline: none;
}

@media (max-width: 1410px) {
    .page-hero {
        flex-direction: column;
        padding-left: 1rem;
        padding-right: 1rem;
        gap: 1.5rem;
    }

    .hero-copy,
    .hero-image {
        width: 100% !important;
        max-width: 100%;
        height: auto !important;
        padding-top: 0 !important;
        text-align: center;
    }

    .title-block,
    .subtitle-block {
        width: 100% !important;
        max-width: 100%;
        height: auto !important;
        margin-bottom: 1rem;
    }

    .hero-copy p {
        font-size: clamp(28px, 3vw, 40px);
        line-height: 1.1;
    }

    .subtitle-block p {
        font-size: clamp(18px, 2vw, 24px);
    }

    .hero-form {
        justify-content: center;
        flex-wrap: wrap;
    }

    .hero-image img {
        width: min(100%, 600px);
        height: auto;
        display: block;
        margin: 0 auto;
    }

    .feature-showcase {
        flex-direction: column;
        gap: 2rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .feature-card {
        width: 100%;
        max-width: 640px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .feature-card img {
        width: min(100%, 180px);
        height: auto;
        display: block;
        margin: 0 auto;
    }

    .feature-card p {
        font-size: clamp(18px, 2vw, 24px);
        line-height: 1.4;
    }
}

@media (max-width: 1024px) {
    .feature-showcase {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
    }

    .feature-card {
        max-width: 100%;
    }

    .feature-card img {
        width: min(100%, 150px);
    }

    .feature-card p {
        font-size: clamp(16px, 3.5vw, 20px);
    }
}
</style>
