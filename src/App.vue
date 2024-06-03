<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
  <nav>
    <RouterLink to="/">PRISCA</RouterLink>
    <RouterLink to="/repos">View my Repos</RouterLink>
  </nav>
</header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  /* background-color: #395464; */
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  /* display: flex; */
  padding: 0 1rem;
  color: #fff;
}
nav a:hover{
  border-color: #fff;
}
nav a:first-of-type {
  border: 0;
  color: hsla(160, 100%, 37%, 1);
  
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: space-between;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    justify-content: space-between;
  }

  nav {
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
