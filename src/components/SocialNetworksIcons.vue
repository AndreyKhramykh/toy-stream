<template>
  <div>
    <svg id="pinterestIcon" height="23" width="23">
      <use xlink:href="@/assets/style/svg/svgSprites.svg#pinterestIcon"></use>
    </svg>
    <svg id="behanceIcon" height="25" width="26">
      <use xlink:href="@/assets/style/svg/svgSprites.svg#behanceIcon"></use>
    </svg>
    <svg id="dribbleIcon" height="23" width="23">
      <use xlink:href="@/assets/style/svg/svgSprites.svg#dribbleIcon"></use>
    </svg>
    <svg id="snapchatIcon" height="22" width="21">
      <use xlink:href="@/assets/style/svg/svgSprites.svg#snapchatIcon"></use>
    </svg>
    <svg id="linkedInIcon" height="21" width="22">
      <use xlink:href="@/assets/style/svg/svgSprites.svg#linkedInIcon"></use>
    </svg>
    <svg id="facebookIcon" height="21" width="22">
      <use xlink:href="@/assets/style/svg/svgSprites.svg#facebookIcon"></use>
    </svg>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
div > svg {
  fill: var(--socialNetIcon);
}

div * {
  &:hover {
    cursor: pointer;
    fill: var(--socialNetIconHover);
  }
}
</style>
