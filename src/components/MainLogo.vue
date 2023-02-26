<template>
  <router-link class="mainLogo" to="/">
    <svg id="mainLogoImg" height="30" width="103">
      <use xlink:href="@/assets/style/svg/svgSprites.svg#mainLogoImg"></use>
    </svg>
    <svg id="mainLogoTxt" height="19" width="124">
      <use xlink:href="@/assets/style/svg/svgSprites.svg#mainLogoTxt"></use>
    </svg>
  </router-link>
</template>
<style lang="scss" scoped>
.mainLogo {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  gap: 10px;

  &:hover {
    filter: brightness(150%);
    cursor: pointer;
  }
}
</style>
