<template>
  <div class="button">
    <p>Learn More</p>
    <svg id="arrowToRight" height="16" width="91">
      <use xlink:href="@/assets/style/svg/svgSprites.svg#arrowToRight"></use>
    </svg>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.button {
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  padding: 20px 20px;
  background-color: var(--red);
  width: var(--redButtonWidth);
  height: 120px;
  font-weight: 800;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    background-color: var(--redButtonHover);
  }
}

#arrowToRight {
  fill: var(--white);
}
</style>
