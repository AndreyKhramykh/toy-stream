/* eslint-disable */
<template>
  <MobileMenu />
  <div class="home__wrapper">
    <div class="home__container">
      <div class="home__header">
        <MainLogo />
        <NavigationMenu class="home__nav" />
      </div>
      <h1 class="home__h1">We create mobile games that you play</h1>
      <div class="home__text">
        <ButtonRed />
        <p class="home__p">
          “Original ideas, quality implementation of game mechanics and
          attention to detail interface - our basic principles.
        </p>
      </div>
      <img class="home__img" src="@/assets/images/unicorn.png" alt="" />
      <SocialNetworksIcons class="home__socNetIcons" />
    </div>
    <FooterMenu />
  </div>
</template>

<script setup>
import NavigationMenu from "@/components/NavigationMenu.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import MainLogo from "@/components/MainLogo.vue";
import FooterMenu from "@/components/FooterMenu.vue";
import SocialNetworksIcons from "@/components/SocialNetworksIcons.vue";
import ButtonRed from "@/components/ButtonRed.vue";
</script>

<style lang="scss" scoped>
.home {
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--white);
    gap: 5vh;
    min-height: 100vh;
  }
  &__container {
    position: relative;
    background: linear-gradient(
      to right,
      var(--white) 0% 14%,
      var(--yellow) 14% 100%
    );
    padding: 40px 60px 0px 60px;
    min-height: 1000px;
  }
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &__nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
    font-size: 20px;
    font-weight: 600;
  }
  &__text {
    width: 40%;
    bottom: 100px;
    left: calc(14% - var(--halfRedButtonWidth));
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  &__socNetIcons {
    position: absolute;
    left: 4%;
    bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__unicornLogo {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  &__h1 {
    position: absolute;
    left: 4%;
    top: 40%;
    width: 50%;
    font-family: Header;
    font-size: 72px;
    font-weight: 700;
  }
  &__img {
    width: 650px;
    height: 650px;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  &__p {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
  }
}

@media screen and (max-width: 1920px) {
}
@media screen and (max-width: 1440px) {
  .home__container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .home__h1 {
    display: block;
    position: static;
    width: 100%;
  }
  .home__text {
    position: static;
    align-self: flex-end;
    width: 80%;
  }
  .home__img {
    align-self: end;
    position: static;
    margin: 20px;
  }
  .home__p {
    text-align: left;
  }
  .home__socNetIcons {
    bottom: 20%;
  }
  .home__nav {
    width: 60%;
  }
}
@media screen and (max-width: 1026px) {
  .home__text {
    align-self: flex-start;
  }
  .home__nav {
    display: none;
  }
  .home__header {
    justify-content: center;
  }
  .home__img {
    width: 440px;
    height: 440px;
  }
  .home__socNetIcons {
    display: none;
  }
  .home__container {
    padding: 10px;
  }
}
@media screen and (max-width: 768px) {
  .home__h1 {
    order: 1;
    font-size: 32px;
  }
  .home__img {
    order: 2;
    width: 90%;
    height: 90%;
  }
  .home__text {
    order: 3;
    flex-direction: column;
    align-items: start;
  }
  .home__p {
    font-size: 16px;
  }
}
@media screen and (max-width: 425px) {
}
@media screen and (max-width: 375px) {
}
@media screen and (max-width: 320px) {
}
</style>
