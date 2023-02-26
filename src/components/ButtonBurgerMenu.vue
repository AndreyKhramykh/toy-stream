// На клик - кнопка лишь меняется сама, но не открывает меню. Как это реализовать в одном 
компоненте через пропс/еммит //

<template>
  <div 
    @click="openMenu"
    :class="['burgerBtn', {open: isButtonOpen}]"
    >
        <span></span>
        <span></span>
        <span></span>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const isButtonOpen = ref(false);


const openMenu = () => {
    isButtonOpen.value = !isButtonOpen.value;
}
</script>

<style>
.burgerBtn {
  width: 60px;
  height: 45px;
  position: absolute;
  top: 20px;
  left: 20px;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
}

.burgerBtn span {
  display: block;
  position: absolute;
  height: 9px;
  width: 100%;
  background: black;
  border-radius: 9px;
  left: 0;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
}

.burgerBtn span:nth-child(1) {
  top: 0px;
  transform-origin: left center;
}

.burgerBtn span:nth-child(2) {
  top: 18px;
  transform-origin: left center;
}

.burgerBtn span:nth-child(3) {
  top: 36px;
  transform-origin: left center;
}

.burgerBtn.open span:nth-child(1) {
  transform: rotate(45deg);
  top: -3px;
  left: 8px;
}

.burgerBtn.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

.burgerBtn.open span:nth-child(3) {
  transform: rotate(-45deg);
  top: 39px;
  left: 8px;
}
</style>
