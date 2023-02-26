<template>
  <div class="mobileMenu__wrapper">
    <div class="mobileMenu__container">
      <ButtonBurgerMenu @click="openMenu" class="mobileMenu__button" />
      <div :class="['mobileMenu', { mobileMenu_open: isMenuOpen }]">
        <div class="mobileMenu__logo">
          <MainLogo />
        </div>
        <div class="mobileMenu__content">
          <NavigationMenu class="mobileMenu__items" />
          <SocialNetworksIcons class="mobileMenu__icons" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MainLogo from "@/components/MainLogo.vue";
import ButtonBurgerMenu from "@/components/ButtonBurgerMenu.vue";
import NavigationMenu from "@/components/NavigationMenu.vue";
import SocialNetworksIcons from "@/components/SocialNetworksIcons.vue";
import { ref } from "vue";

const isMenuOpen = ref(false);

const openMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped lang="scss">
.mobileMenu {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: rgb(255, 255, 255, 0.8);
  transform: translateX(-100%);
  transition-duration: 1.5s;
  font-size: 32px;
  font-weight: 800;
  font-family: Header;

  &__container {
    position: relative;
    z-index: 99;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 80%;
  }

  &__items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5vh;
    margin-left: 40px;
  }

  &__icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 40px;
  }
  &__button {
    z-index: 2;
  }
  &__wrapper {
    display: none;
    position: absolute;
    width: 100%;
  }
  &_open {
    transform: translateX(0);
  }
  &__logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 20px;
    min-height: 20%;
  }
}

@media screen and (max-width: 1026px) {
  .mobileMenu__wrapper {
    display: block;
  }
}
</style>
