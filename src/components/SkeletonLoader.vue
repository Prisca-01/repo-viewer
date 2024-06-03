<template>
  <div class="skeleton-loader">
    <div class="skeleton-avatar"></div>
    <div class="skeleton-text"></div>
    <div class="skeleton-text short"></div>
    <div class="skeleton-repos">
      <div v-for="n in 6" :key="n" class="skeleton-repo">
        <div class="skeleton-repo-name"></div>
        <div class="skeleton-repo-desc"></div>
        <div class="skeleton-repo-meta"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.skeleton-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.skeleton-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: hsla(160, 100%, 37%, 0.2);
  margin-bottom: 20px;
}

.skeleton-text {
  width: 100%;
  height: 20px;
  background: hsla(160, 100%, 37%, 0.2);
  margin-bottom: 10px;
  border-radius: 4px;
}

.skeleton-text.short {
  width: 60%;
}

.skeleton-repos {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}

.skeleton-repo {
  width: 100%;
  max-width: 550px;
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 10px;
  margin: 16px 0;
  background: hsla(160, 100%, 37%, 0.2);
}

.skeleton-repo-name,
.skeleton-repo-desc,
.skeleton-repo-meta {
  height: 20px;
  background: hsla(160, 100%, 37%, 0.2);
  margin-bottom: 10px;
  border-radius: 4px;
}

.skeleton-repo-desc {
  height: 40px;
}

.skeleton-repo-meta {
  width: 50%;
}
</style>
