<script setup>
import { ref } from 'vue'
import logo from '../../assest/image/icon/ic_logo_litee_with_litee.svg'

const isMenuOpen = ref(false)

const navItems = [
  { label: 'Particuliers', to: '/' },
  { label: 'Entreprises', to: '/companies' },
  { label: 'Tarifs', to: '/prices' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <div class="nav-wrapper">
    <nav id="navbar" class="font-calibri">
      <div id="navdiv" class="flex items-center justify-center p-4 custom-space gap-190">
        <div id="logo" class="logo-wrap">
          <router-link to="/companies"><img :src="logo" alt="logo" class="scale-180"/></router-link>
        </div>

        <button
          class="burger-button"
          type="button"
          :class="{ active: isMenuOpen }"
          aria-label="Ouvrir le menu"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-links" :class="{ open: isMenuOpen }">
          <li v-for="item in navItems" :key="item.to">
            <router-link :to="item.to" @click="closeMenu">{{ item.label }}</router-link>
          </li>
          <li class="login-item">
            <router-link class="connexion-btn" to="/login" @click="closeMenu">Connexion</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.nav-wrapper {
  width: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
}

#navbar {
  width: 100%;
}

#navdiv {
  width: 100%;
  min-height: 70px;
  position: relative;
}

.logo-wrap {
  flex-shrink: 0;
}

.logo-wrap img {
  display: block;
  width: 70px;
  height: auto;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  display: inline-block;
  margin-right: 0;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Work Sans', sans-serif;
}

li:hover {
  color: gray;
}

.nav-links a {
  text-decoration: none;
  color: inherit;
}

.login-item {
  margin-left: 0.5rem;
}

.connexion-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 2px solid #ef4444;
  color: #ef4444;
  font-family: 'Work Sans', sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  cursor: pointer;
}

.burger-button {
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(17, 24, 39, 0.15);
  border-radius: 12px;
  background: transparent;
  padding: 8px 10px;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
}

.burger-button span {
  display: block;
  width: 100%;
  height: 2px;
  background: #1f2937;
  border-radius: 999px;
  transition: 0.25s ease;
}

.burger-button.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.burger-button.active span:nth-child(2) {
  opacity: 0;
}

.burger-button.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 1410px) {
  .nav-wrapper {
    padding: 0 1rem;
  }

  #navdiv {
    min-height: 60px;
    padding: 0.75rem 0.5rem;
  }

  .logo-wrap img {
    width: 60px;
  }

  .nav-links {
    gap: 0.75rem;
    flex-wrap: nowrap;
  }

  li {
    font-size: 14px;
  }

  .connexion-btn {
    padding: 0.45rem 1.1rem;
    font-size: 15px;
  }
}

@media (max-width: 1024px) {
  .burger-button {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 1.15rem;
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid rgba(17, 24, 39, 0.08);
    border-radius: 16px;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
    min-width: 220px;
    z-index: 50;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links li,
  .login-item {
    display: block;
    width: 100%;
    margin: 0;
  }

  .nav-links a,
  .connexion-btn {
    display: block;
    width: 100%;
    text-align: left;
  }

  .connexion-btn {
    margin-left: 0;
  }
}
</style>
