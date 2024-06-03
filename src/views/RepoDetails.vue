<!-- <script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const repo = ref(null)
const loading = ref(true)
const username = 'prisca-01'
const error = ref(null) // Define error state

onMounted(async () => {
  try {
    const repoData = await api.getRepo(username)
    console.log('Repo:', repoData)
    repo.value = repoData
  } catch (err) {
    console.error('Error fetching data:', err)
    error.value = err.message // Set error message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section v-if="repo">
    <h2>Repository Details</h2>
    <p v-if="error">{{ error }}</p>
    <div v-else>
      <h3>{{ repo.name }}</h3>
      <p>{{ repo.description }}</p>
      <p>Language: {{ repo.language }}</p>
      <p>Stars: {{ repo.stargazers_count }}</p>
      <p>Watchers: {{ repo.watchers_count }}</p>
      <p>Forks: {{ repo.forks_count }}</p>
      <p>Open Issues: {{ repo.open_issues_count }}</p>
      <p>License: {{ repo.license?.name }}</p>
      <p>Created At: {{ repo.created_at }}</p>
      <p>Updated At: {{ repo.updated_at }}</p>
      <p>Default Branch: {{ repo.default_branch }}</p>
      <p>Clone URL: {{ repo.clone_url }}</p>
    </div>
  </section>
</template>

<style scoped></style> -->

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'
import { useRoute } from 'vue-router'

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
  <section class="repo-details" v-if="repoDetails">
    <h2>Repository Details</h2>
    <p v-if="error">{{ error }}</p>
    <div class="repo-content" v-else>
      <h3>{{ repoDetails.name }}</h3>
      <p>{{ repoDetails.description }}</p>
      <p>Language: {{ repoDetails.language }}</p>
      <p>Stars: {{ repoDetails.stargazers_count }}</p>
      <p>Watchers: {{ repoDetails.watchers_count }}</p>
      <p>Forks: {{ repoDetails.forks_count }}</p>
      <p>Open Issues: {{ repoDetails.open_issues_count }}</p>
      <p>License: {{ repoDetails.license?.name }}</p>
      <p>Created At: {{ repoDetails.created_at }}</p>
      <p>Updated At: {{ repoDetails.updated_at }}</p>
      <p>Default Branch: {{ repoDetails.default_branch }}</p>
      <p>Clone URL: {{ repoDetails.clone_url }}</p>
      <a :href="repoDetails.html_url" target="_blank">View on GitHub</a>
    </div>
  </section>
</template>

<style scoped>
.repo-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  /* text-align: center; */
}

.repo-details h2 {
  color: hsla(160, 100%, 37%, 1);
  margin-bottom: 20px;
  font-size: 2rem;
}

.repo-content {
  color: rgb(253, 255, 254);
  border: 2px solid hsla(160, 100%, 37%, 1);
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
  font-size: 1.1rem;
}

.repo-content p,
.repo-content a {
  margin: 10px 0;
}

.repo-content a {
  color: hsla(160, 100%, 37%, 1);
  text-decoration: none;
  }
  .repo-content a:hover {
color: #fff;
  }
</style>