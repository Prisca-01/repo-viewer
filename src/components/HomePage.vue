<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="main">
    <div class="head">
      <h1>TOOK CONTROL OF MY GITHUB REPOSITORIES WITH MY REPO VIEWER APP</h1>
      <p>
        Welcome to my GitHub repo viewer app, designed specifically for managing my personal
        repositories on GitHub. With my user-friendly interface and powerful features, organizing
        and tracking my projects has never been easier.
      </p>
      <RouterLink to="/repos" class="link"><button>View my Repos</button></RouterLink>
    </div>
  </section>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}
.head {
  color: #fff;
  margin-block-start: 7rem;
  width: 100%;
  max-width: 900px;
  text-align: center;
}

.head > h1 {
  font-size: 3rem;
  margin-block-end: 1rem;
}
.head > p {
  font-size: 1rem;
  margin-block-end: 1rem;
}
button {
  color: #fff;
  font-size: 1.2rem;
  border: none;
  background-color: hsla(160, 100%, 37%, 1);
  border-radius: 1rem;
  width: 10rem;
  height: 2.5rem;
}
button:hover {
  background-color: hsla(160, 100%, 37%, 0.5);
}

.link:hover {
  background: none;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .head {
    margin-block-start: 3rem;
    padding: 20px;
  }
  .head > h1 {
    font-size: 2rem;
  }
  .head > p {
    font-size: 0.875rem;
  }
  button {
    font-size: 1rem;
    width: 8rem;
    height: 2rem;
  }
}
</style>
