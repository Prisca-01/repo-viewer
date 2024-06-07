<template>
  <div class="skeleton-title"></div>
  <div class="skeleton-loader">
    <div class="skeleton-grid">
      <div class="skeleton-box" v-for="n in 12" :key="n"></div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-title {
  width: 25%;
  height: 30px;
  margin: 20px 0;
  background: hsla(160, 100%, 37%, 0.4);
  border-radius: 4px;
}

.skeleton-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border: 2px solid hsla(160, 100%, 37%, 1);
  border-radius: 8px;
  background: hsla(160, 100%, 37%, 0.2);
}

.skeleton-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;
}

@media (min-width: 600px) {
  .skeleton-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.skeleton-box {
  width: 100%;
  height: 50px;
  background: hsla(160, 100%, 37%, 0.4);
  border-radius: 8px;
}
</style>
