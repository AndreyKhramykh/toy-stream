<template>
  <nav>
    <router-link class="some" to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/games">Games</router-link>
    <router-link to="/career">Career</router-link>
    <router-link to="/news">News</router-link>
    <router-link to="/contacts">Contacts</router-link>
  </nav>
</template>

<style lang="scss" scoped>
nav * {
  text-decoration: none;
  color: inherit;

  &:hover {
    color: var(--redButtonHover);
  }
}
</style>
