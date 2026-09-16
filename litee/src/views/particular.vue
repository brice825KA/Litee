<script setup>
import bande from '../component/bande.vue'
</script>

<template>
    <div class="flex justify-center items-center bg-[#F7FAFB00] pl-30 pr-15">
        <div class="w-[596px] h-[572px] t-[119px] l-[821px] pt-45">
            <div class="">
                <div class="w-[675px] h-[143px] t-[211px] l-[190px]">
                    <p class="font-family-[Work Sans] font-weight-700 text-[25px] line-height-100% text-[#3E3D53]">
                        Organiser les paiements de<br>
                        votre equipe au meme<br>
                        endroit
                    </p>
                </div>
                <div class="w-[610px] h-[85px] t-[382px] l-[190px]">
                    <p class="font-family-[Work Sans] font-weight-400 text-[18px] line-height-100% text-[#3E3D53]">
                        Donnez plus d'autonomie a vos collaborateurs<br>
                        et Ameliorez votre productivite
                    </p>
                </div>
            </div>
            <div class="flex gap-5">
                <div><input class="pl-5 w-[275px] h-[55px] t-[542px] l-[190px] rounded-[27.5px] border-[1px] border-[#D1D5DB] placeholder:text-[#9CA3AF] placeholder:font-family-[Work Sans] placeholder:font-weight-400 placeholder:text-[16px] placeholder:line-height-100%" type="text" placeholder="Email pro"></div>
                <div><button class="w-[172px] h-[55px] t-[542px] l-[475px] rounded-[27.5px] bg-[#FA4A4D] font-family-[Work Sans] font-weight-600 text-[18px] line-height-100% text-[#FFFFFF]">Inscription</button></div>
            </div>
        </div>
        <div class="w-[596px] h-[572px] t-[119px] l-[821px]">
            <img class="w-[596px] h-[572px] t-[119px] l-[821px]" src="../image/Group 21.png" alt="dash">
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
    <div class="flex justify-center items-center gap-40">
        <div id="card1" class="justify-center items-center py-5">
            <div class="flex items-center justify-center py-11"><img src="../image/meeting.png" alt=""></div>
            <div class="flex-wrap justify-center items-center text-center space-y-2">
                <div class="text-[#3E3D53] font-family-[Work Sans] font-[500] text-[24px] leading-[100%]"><p>Compte Entreprise</p></div>
                <div class="text-[#3E3D53] font-family-[Work Sans] font-[300] text-[24px] leading-[100%]"><p>Creer un compte entreprise<br>et inviter les membres de<br>votre equipe</p></div>
            </div>
        </div>
        <div id="card1" class="justify-center items-center py-5">
            <div class="flex items-center justify-center py-5"><img src="../image/Group 2122.png" alt=""></div>
            <div class="flex-wrap justify-center items-center text-center space-y-2">
                <div class="text-[#3E3D53] font-family-[Work Sans] font-[500] text-[24px] leading-[100%]"><p>Carte plafonnée</p></div>
                <div class="text-[#3E3D53] font-family-[Work Sans] font-[300] text-[24px] leading-[100%]"><p>Decidez qui peut depenser<br>combien et qui doit valider<br>quelles demandes d'achat.</p></div>
            </div>
        </div>
        <div id="card1" class="justify-center items-center py-5">
            <div class="flex items-center justify-center py-11"><img src="../image/tax.png" alt=""></div>
            <div class="flex-wrap justify-center items-center text-center space-y-2">
                <div class="text-[#3E3D53] font-family-[Work Sans] font-[500] text-[24px] leading-[100%]"><p>Suivi centralisé</p></div>
                <div class="text-[#3E3D53] font-family-[Work Sans] font-[300] text-[24px] leading-[100%]"><p>Visualisez en temps reel<br>l'ensemble des dépenses de<br>votre entreprise depuis le<br>tableau de bord Litee</p></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
button {
    cursor: pointer;

}

input:focus {
    outline: none;
}

</style>
