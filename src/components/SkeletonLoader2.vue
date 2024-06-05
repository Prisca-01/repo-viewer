<template>
  <div class="skeleton-loader">
    <div class="skeleton-title"></div>
    <div class="skeleton-line" v-for="n in 10" :key="n"></div>
  </div>
</template>

<style scoped>
.skeleton-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border-radius: 8px;
  background: #333;
}

.skeleton-title {
  width: 80%;
  height: 24px;
  margin: 10px 0;
  background: #444;
  border-radius: 4px;
}

.skeleton-line {
  width: 100%;
  height: 16px;
  margin: 10px 0;
  background: #444;
  border-radius: 4px;
}
</style>
