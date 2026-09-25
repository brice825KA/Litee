<script setup>
import facebook from '../../assest/image/img_f.webp'
import linkedin from '../../assest/image/img_in.webp'
</script>

<template>
    <div id="column" class="bg-[#3E3D53] px-6 md:px-10 lg:px-16">
        <div class="footer-grid-wrapper">
            <div class="footer-grid py-10">
                <div id="firstcol" class="footer-col">
                    <div class="pb-2"><span><p>2018, LITEE</p></span></div>
                    <p class="">A, propos<br>Carrière</p>
                </div>
                <div id="secondcol" class="footer-col">
                    <div class="pb-2"><span><p>Nous contacter</p></span></div>
                    <p class="">Confidentialité<br>Cookies<br>Sécurité<br>Conditions d'utilisation</p>
                </div>
                <div id="thirdcol" class="footer-col">
                    <div class="pb-2"><span><p>Nous contacter</p></span></div>
                    <p>contact@getlitee.com</p>
                    <div class="footer-phone pt-1 text-[20px]">00229 66 43 47 66</div>
                    <div class="flex space-x-4 mt-2 justify-center md:justify-start">
                        <img :src="facebook" alt="Facebook">
                        <img :src="linkedin" alt="LinkedIn">
                    </div>
                </div>
            </div>
        </div>
        <div id="bottom" class="pb-10 pt-5 border-t border-[#FFFFFF] text-left">
            <p>Une startup de 41Devs, LLC</p>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 42px;
    height: 42px;
}

span p {
    font-weight: 500;
    font-size: 20px;
    line-height: 152%;
    font-family: 'Work Sans', sans-serif;
    color: #FFFFFF;
}

p {
    font-weight: 400;
    font-size: 24px;
    line-height: 152%;
    font-family: 'Work Sans', sans-serif;
    color: #FFFFFF80;
}

.footer-phone {
    color: rgba(255, 255, 255, 0.5);
    font-family: 'Work Sans', sans-serif;
    line-height: 1.5;
}

.footer-grid-wrapper {
    width: 100%;
    max-width: 1115px;
    margin: 0 auto;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: flex-start;
    width: 100%;
    margin: 0 auto;
}

.footer-col {
    text-align: left;
}

#bottom {
    width: 100%;
    max-width: 1115px;
    margin: 0 auto;
}

@media (max-width: 1410px) {
    .footer-grid {
        flex-direction: column;
        display: flex;
        align-items: center;
        text-align: center;
        gap: 1.5rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    .footer-col {
        min-width: 0;
        width: 100%;
        text-align: center;
    }

    span p,
    p,
    .footer-phone {
        font-size: clamp(18px, 2vw, 24px);
        line-height: 1.5;
    }

    #bottom {
        width: auto;
        margin-left: 1rem;
        margin-right: 1rem;
        text-align: center;
    }
}
</style>
