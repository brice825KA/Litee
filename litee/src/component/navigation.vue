<script setup></script>

<template>
    <nav id="navbar" class="font-calibri">
        <div id="navdiv" class="flex items-center p-4 pr-30 pl-30 justify-between gap-5">
            <div id="logo" class=""><router-link to="/"><img src="../image/Logo_litee.png" alt="logo"></router-link></div>
            <ul>
                <li class=""><router-link to="/particular">Particuliers</router-link></li>
                <li class=""><router-link to="/companies">Entreprises</router-link></li>
                <li class=""><router-link to="/prices">Tarifs</router-link></li>
                <button class="bg-white border border-red-500 border-2 text-red-500 font-work font-sans text-[18px] font-weight-500 p-2 pl-6 pr-6 rounded-full ml-10"><router-link to="/login">Connexion</router-link></button>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
li {
    display: inline-block;
    margin-right: 20px;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Work Sans', sans-serif;
}

li:hover {
    color: gray;
}
</style>
