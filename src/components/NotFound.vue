<template>
    <div class="not-found">
        <h1>404 - Page Not Found</h1>
        <p>Opps! Seems you lost your way.</p>
        <router-link to="/repos" class="link"><button class="back">Back</button></router-link>
    </div>
</template>

<style scoped>
.not-found {
    text-align: center;
    margin-top: 100px;
    min-height: 100vh;
}

h1 {
    font-size: 36px;
    color: #5f5f5f;
}

p {
    font-size: 18px;
    color: #616060;
}
.link {
  background: none;
}
.back {
  color: #fff;
  font-size: 1.2rem;
  border: none;
  background-color: hsla(160, 100%, 37%, 1);
  border-radius: 1rem;
  width: 10rem;
  height: 2.5rem;
  margin-bottom: 20px;
}
.back:hover {
  background-color: hsla(160, 100%, 37%, 0.5);
}
</style>