<script setup>
import Myfooter from '../../../component/helper/footer.vue'
import card from '../../helper/carfeatures.vue'
import bande from '../../helper/bande.vue'
import icon_one from '../../../assest/image/img_follow_central.webp'
import icon_two from '../../../assest/image/img_card.webp'
import icon_three from '../../../assest/image/img_wallet.webp'
import dash_litee from '../../../assest/image/img_dash_litee_companies_1.webp'
import companies_2 from '../../../assest/image/img_telephone_companies_3.webp'
import companies_3 from '../../../assest/image/img_cart_lat_transactions_companies_4.webp'
import companies_4 from '../../../assest/image/img_transfer_card_companies_5.webp'
</script>

<template>
    <div class="companies-hero flex justify-center items-center bg-[#F7FAFB00] pl-30 pr-15 mb-15 pt-10 gap-10">
        <div class="hero-copy w-149 h-143 t-[119px] l-[821px] pt-20">
            <div class="">
                <div class="title-block w-168.75 h-35.75 t-[211px] l-[190px] mb-15">
                    <p class="font-family-[Work Sans] font-bold text-[40px] line-height-100% text-[#3E3D53]">
                        Cartes de paiements intelligentes<br>
                        pour vos transactions partout<br>
                        dans le monde
                    </p>
                </div>
                <div class="subtitle-block w-152.5 h-21.25 t-[382px] l-[190px] mb-10">
                    <p class="font-family-[Work Sans] font-light text-[24px] line-height-100% text-[#3E3D53]">
                        Plus de flexibilite et transparance pour vous<br>
                        permettre de reprendre le controle de vos depenses
                    </p>
                </div>
            </div>
            <div class="flex gap-5 hero-form">
                <div><input class="pl-5 w-68.75 h-13.75 t-[542px] l-[190px] rounded-[27.5px] border border-[#D1D5DB] placeholder:text-[#9CA3AF] placeholder:font-family-[Work Sans] placeholder:font-weight-400 placeholder:text-[16px] placeholder:line-height-100%" type="text" placeholder="Email"></div>
                <div><button class="w-43 h-13.75 t-[542px] l-[475px] rounded-[27.5px] bg-[#FA4A4D] font-family-[Work Sans] font-weight-600 text-[18px] line-height-100% text-[#FFFFFF]">Demande bêta</button></div>
            </div>
        </div>
        <div class="hero-image w-149 h-143 t-[119px] l-[821px]">
            <img class="w-149 h-143 t-[119px] l-[821px]" :src="dash_litee" alt="dash">
        </div>
    </div>
    <!--Ban-->
     <bande />
    <!-- Simple Sentences -->
    <div class="flex justify-center items-center bg-[#F7FAFB00] pl-30 pr-15 border-b py-10 border-[#F2F5F7]">
        <p class="font-family-[Work Sans] font-weight-700 text-[36px] font-bold line-height-100% text-[#3E3D53] text-center">
            Comment ca marche
        </p>
    </div>
    <!-- trio cards -->
    <div class="company-steps flex justify-center items-center gap-40">
        <div id="card1" class="company-step-card justify-center items-center py-5">
            <div class="flex items-center justify-center py-8"><img :src="icon_one" alt=""></div>
            <div class="flex-wrap justify-center items-center text-center space-y-2">
                <div class="text-[#3E3D53] font-family-[Work Sans] font-medium text-[24px] leading-[100%]"><p>Creer votre compte</p></div>
                <div class="text-[#3E3D53] font-family-[Work Sans] font-light text-[24px] leading-[100%]"><p>Remplissez le formulaire<br>avec vos informations<br>de base pour<br>commencer. Votre<br>compte Litee est pret<br>en quelques minutes.</p></div>
            </div>
        </div>
        <div id="card1" class="company-step-card justify-center items-center py-5">
            <div class="flex items-center justify-center py-5"><img :src="icon_two" alt=""></div>
            <div class="flex-wrap justify-center items-center text-center space-y-2">
                <div class="text-[#3E3D53] font-family-[Work Sans] font-meduim text-[24px] leading-[100%]"><p>Generez votre carte</p></div>
                <div class="text-[#3E3D53] font-family-[Work Sans] font-light text-[24px] leading-[100%]"><p>En un clic, generez une carte<br>virtuelle acceptee partout<br>dans le monde. Nous vous<br>delivrons les cartes physiques<br>au besoin dans les 48h.</p></div>
            </div>
        </div>
        <div id="card1" class="company-step-card justify-center items-center py-5">
            <div class="flex items-center justify-center py-5"><img :src="icon_three" alt=""></div>
            <div class="flex-wrap justify-center items-center text-center space-y-2">
                <div class="text-[#3E3D53] font-family-[Work Sans] font-medium text-[24px] leading-[100%]"><p>Alimenter votre carte</p></div>
                <div class="text-[#3E3D53] font-family-[Work Sans] font-light text-[24px] leading-[100%]"><p>Choissisez le moyen de<br>rechargement qui vous<br>convient et recharger votre<br>carte pour commencer par<br>effectuer des paiements</p></div>
            </div>
        </div>
    </div>
    <card />
    <!-- Foot -->
     <div class="feature-pair feature-pair-reverse flex justify-center items-center bg-[#F7FAFB00] pl-60 gap-0 pb-15">
        <div class="feature-image-wrap w-74.5 h-[508.35px] t-[2265px] l-[259px] mr-25">
            <img class="w-300 h-143 t-[119px] l-[821px]" :src="companies_2" alt="dash">
        </div>
        <div class="feature-copy w-149 h-143 t-[119px] l-[821px] pt-45 ml-50">
            <div class="text-block">
                <div class="feature-title w-168.75 h-35.75 t-[211px] l-[190px]">
                    <p class="font-family-[Work Sans] font-bold text-[30px] leading-[100%] text-[#3E3D53]">
                        Rechargement par mobile<br>
                        money et compte bancaire<br>
                    </p>
                </div>
                <div class="feature-text w-152.5 h-21.25 t-[382px] l-[190px]">
                    <p class="font-family-[Work Sans] font-light text-[24px] leading-[152%] text-[#3E3D53]">
                        Nous vous offrons la possibilites d'utiliser<br>
                        votre compte mobile money disponibles<br>
                        dans votre pays ou encore votre compte<br>
                        bancaire.
                    </p>
                </div>
            </div>
            <div class="flex gap-5 mt-20">
                <div class="w-13.5 h-1.25 t-[2645px] l-[758px] bg-[#FA4A4D] mt-3"></div>
                <div class="">
                    <p class="font-family-[Work Sans] font-meduim text-[18px] leading-[152%] text-[#3E3D53]">Voir les banques et GSM couverts</p>
                </div>
            </div>
        </div>
    </div>
         <div class="feature-pair flex justify-center items-center bg-[#F7FAFB00] gap-0 pb-15">
        <div class="feature-copy w-149 h-143 t-[119px] l-[821px] pt-45 ml-5">
            <div class="text-block">
                <div class="feature-title w-168.75 h-35.75 t-[211px] l-[190px]">
                    <p class="font-family-[Work Sans] font-bold text-[30px] leading-[100%] text-[#3E3D53]">
                        Aperçu des dépenses en<br>temps réel<br>
                    </p>
                </div>
                <div class="feature-text w-152.5 h-21.25 t-[382px] l-[190px]">
                    <p class="font-family-[Work Sans] font-light text-[24px] leading-[152%] text-[#3E3D53]">
                        Nous gardons une traçabilité de vos<br>
                        transactions et vous savez où va votre argent.<br>
                        Vous recevez des notifications en temps réel<br>
                        des transactions opérées sur votre carte.<br>
                        Si vous ne reconnaissez pas une transaction,<br>
                        signalez-le aussitôt.
                    </p>
                </div>
            </div>
        </div>
        <div class="feature-image-wrap">
            <img class="w-100 h-117.5 t-[119px] l-[821px]" :src="companies_3" alt="dash">
        </div>
    </div>
     <div class="feature-pair feature-pair-reverse flex justify-center items-center bg-[#F7FAFB00] gap-50 pb-15 pl-60">
        <div class="feature-image-wrap items-center justify-center">
            <img class="w-100 h-117.5 t-[119px] l-[821px]" :src="companies_4" alt="dash">
        </div>
        <div class="feature-copy w-149 h-143 t-[119px] l-[821px] pt-45 items-center justify-center">
            <div class="text-block">
                <div class="feature-title w-168.75 h-37.75 t-[211px] l-[190px]">
                    <p class="font-family-[Work Sans] font-bold text-[30px] leading-[100%] text-[#3E3D53]">
                        Transfert d'argent de<br>
                        carte a carte
                    </p>
                </div>
                <div class="feature-text w-152.5 h-21.25 t-[382px] l-[190px]">
                    <p class="font-family-[Work Sans] font-light text-[24px] leading-[152%] text-[#3E3D53]">
                        Plue aucune frontiere pour envoyer de<br>
                        l'argent et a moindre cout. Recharger votre<br>
                        cartes et faites balader les fonds partout dans<br>
                        le monde.
                    </p>
                </div>
            </div>
            <div class="flex gap-5 mt-20">
                <div class="w-13.5 h-1.25 t-[2645px] l-[758px] bg-[#FA4A4D] mt-3"></div>
                <div class="">
                    <p class="font-family-[Work Sans] font-medium text-[18px] leading-[152%] text-[#3E3D53]">Voir les tarifs</p>
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

input:focus {
    outline: none;
}

@media (max-width: 1410px) {
    .companies-hero {
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

    .company-steps {
        flex-direction: column;
        gap: 2rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .company-step-card {
        width: 100%;
        max-width: 640px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .company-step-card img {
        width: min(100%, 180px);
        height: auto;
        display: block;
        margin: 0 auto;
    }

    .company-step-card p {
        font-size: clamp(18px, 2vw, 24px);
        line-height: 1.4;
    }

    .feature-pair {
        flex-direction: column !important;
        align-items: center !important;
        padding-left: 1rem !important;
        padding-right: 1rem !important;
        gap: 1.5rem !important;
    }

    .feature-pair-reverse {
        padding-left: 1rem !important;
        padding-right: 1rem !important;
    }

    .feature-image-wrap,
    .feature-copy,
    .text-block,
    .feature-title,
    .feature-text {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
        margin: 0 !important;
        padding: 0 !important;
        text-align: center !important;
    }

    .feature-image-wrap img {
        display: block;
        width: min(100%, 420px) !important;
        height: auto !important;
        margin: 0 auto;
    }

    .feature-title p,
    .feature-text p,
    .feature-copy p {
        font-size: clamp(18px, 2vw, 30px) !important;
        line-height: 1.3 !important;
        white-space: normal !important;
    }

    .feature-copy {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 1024px) {
    .company-step-card img {
        width: min(100%, 150px);
    }

    .company-step-card p {
        font-size: clamp(16px, 3.5vw, 20px);
    }

    .feature-image-wrap img {
        width: min(100%, 300px) !important;
    }
}
</style>
