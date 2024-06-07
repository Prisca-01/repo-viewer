<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'
import { useRoute } from 'vue-router'
import SkeletonLoader2 from '../components/SkeletonLoader2.vue'

const owner = ref(null)
const name = ref(null)
const loading = ref(true)
const error = ref(null)
const repoDetails = ref(null)

onMounted(() => {
  const $route = useRoute()
  owner.value = $route.params.owner
  name.value = $route.params.name
  fetchRepoDetails()
})

const fetchRepoDetails = async () => {
  try {
    const repoData = await api.getRepo(owner.value, name.value)
    repoDetails.value = repoData
  } catch (err) {
    error.value = err.message
    console.error('Error fetching repository:', err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="repo-details">
    <SkeletonLoader2 v-if="loading" />
    <div v-else>
      <h2>Repository Details</h2>
      <p v-if="error" class="error-message">{{ error }}</p>
      <div class="repo-content" v-else>
        <div>
          <h3>Project Name:</h3>
          <p>{{ repoDetails.name }}</p>
        </div>
        <div>
          <h3>Description:</h3>
          <p v-if="repoDetails.description">{{ repoDetails.description }}</p>
          <p v-else>This is a GitHub repo.</p>
        </div>
        <div>
          <h3>Language:</h3>
          <p>{{ repoDetails.language }}</p>
        </div>
        <div>
          <h3>Stars:</h3>
          <p>{{ repoDetails.stargazers_count }}</p>
        </div>
        <div>
          <h3>Watchers:</h3>
          <p>{{ repoDetails.watchers_count }}</p>
        </div>
        <div>
          <h3>Forks:</h3>
          <p>{{ repoDetails.forks_count }}</p>
        </div>
        <div>
          <h3>Open Issues:</h3>
          <p>{{ repoDetails.open_issues_count }}</p>
        </div>
        <div>
          <h3>License:</h3>
          <p>{{ repoDetails.license?.name }}</p>
        </div>
        <div>
          <h3>Date Created:</h3>
          <p>{{ repoDetails.created_at }}</p>
        </div>
        <div>
          <h3>Date Updated:</h3>
          <p>{{ repoDetails.updated_at }}</p>
        </div>
        <div>
          <h3>Default Branch:</h3>
          <p>{{ repoDetails.default_branch }}</p>
        </div>
        <div>
          <a :href="repoDetails.html_url" target="_blank" class="link">View on GitHub</a>
        </div>
      </div>
    </div>
    <router-link to="/repos" class="link"><button class="back">Go Back</button></router-link>
  </section>
</template>

<style scoped>
.repo-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.repo-details h2 {
  color: hsla(160, 100%, 37%, 1);
  margin-bottom: 20px;
  font-size: 2rem;
  text-align: center;
}

.error-message {
  color: #fff;
  font-size: 1.5rem;
  margin-block-start: 2rem;
}

.repo-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  color: rgb(253, 255, 254);
  border: 1px solid hsla(160, 100%, 37%, 0.2);
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
  font-size: 1.1rem;
}

.repo-content div {
  background-color: hsla(160, 37%, 24%, 0.2);
  padding: 10px;
  border-radius: 8px;
}

.repo-content a {
  color: hsla(160, 100%, 37%, 1);
  text-decoration: none;
  font-size: 1.5rem;
}

.repo-content a:hover {
  color: #fff;
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
  width: 8rem;
  height: 2.5rem;
  margin-block-start: 10px;
}

.back:hover {
  background-color: hsla(160, 100%, 37%, 0.5);
}

@media (min-width: 600px) {
  .repo-content {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
