<template>
  <div class="skeleton-loader">
    <div class="user-details">
      <div class="avatar"></div>
      <div class="text shorter"></div>
      <div class="text short"></div>
      <div class="text long"></div>
    </div>
    <div class="heading">
      <div class="text long"></div>
      <div class="second">
        <div class="text shorter"></div>
        <div class="text short"></div>
        <div class="text shorter"></div>
      </div>
    </div>
    <div class="repos">
      <div v-for="n in 6" :key="n" class="repo"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.skeleton-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
  margin: 0 auto;
  padding: 20px;
}
.user-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #fff;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: hsla(160, 100%, 37%, 0.2);
  margin-bottom: 10px;
}

.text {
  width: 100%;
  height: 20px;
  background: hsla(160, 100%, 37%, 0.2);
  margin-bottom: 10px;
  border-radius: 4px;
}

.shorter {
  width: 40%;
}

.short {
  width: 60%;
}
.long {
  width: 80%;
}
.heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  height: 150px;
  border-radius: 8px;
}
.second {
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
}
.repos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: center;
  width: 100%;
  margin-top: 5px;
}

.repo {
  width: calc(100% - 32px);
  max-width: 100%;
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 10px;
  margin: 0;
  height: 170px;
  background: hsla(160, 100%, 37%, 0.2);
}
</style>
