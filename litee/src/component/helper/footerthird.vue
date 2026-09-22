<script setup>
import facebook from '../../assest/image/img_f.webp'
import linkedin from '../../assest/image/img_in.webp'
</script>

<template>
    <div id="column" class="bg-[#3E3D53] px-6 md:px-10 lg:px-16">
        <div class="footer-grid flex pl-0 md:pl-8 lg:pl-16 gap-10 md:gap-20 lg:gap-32 py-10">
            <div id="firstcol" class="footer-col">
                <div class="pb-2"><span><p>2018, LITEE</p></span></div>
                <p>A, propos<br>Carrière</p>
            </div>
            <div id="secondcol" class="footer-col">
                <div class="pb-2"><span><p>Nous contacter</p></span></div>
                <p>Confidentialité<br>Cookies<br>Sécurité<br>Conditions d'utilisation</p>
            </div>
            <div id="thirdcol" class="footer-col">
                <div class="pb-2"><span><p>Nous contacter</p></span></div>
                <p>contact@getlitee.com</p>
                <div class="footer-phone pt-1 text-[20px]">00229 66 43 47 66</div>
                <div class="flex space-x-4 mt-2">
                    <img :src="facebook" alt="Facebook">
                    <img :src="linkedin" alt="LinkedIn">
                </div>
            </div>
        </div>
        <div id="bottom" class="pb-10 pt-5 border-t border-[#FFFFFF] mx-4 md:mx-8 lg:mx-12">
            <p>Une startup de 41Devs, LLC</p>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 20px;
    height: 20px;
}

span p {
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    font-family: 'Work Sans', sans-serif;
    color: #FFFFFF;
}

p {
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    font-family: 'Work Sans', sans-serif;
    color: #FFFFFF80;
}

.footer-phone {
    color: rgba(255, 255, 255, 0.5);
    font-family: 'Work Sans', sans-serif;
    line-height: 1.5;
}

.footer-grid {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
}

.footer-col {
    min-width: 220px;
}

@media (max-width: 1410px) {
    .footer-grid {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1.5rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    .footer-col {
        min-width: 0;
        width: 100%;
    }

    span p,
    p,
    .footer-phone {
        font-size: clamp(18px, 2vw, 24px);
        line-height: 1.5;
    }

    #bottom {
        margin-left: 1rem;
        margin-right: 1rem;
        text-align: center;
    }
}
</style>
