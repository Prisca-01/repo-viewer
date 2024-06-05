<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'
import SkeletonLoader from '../components/SkeletonLoader.vue'
import NotFound from '../components/NotFound.vue'

const user = ref(null)
const repos = ref([])
const loading = ref(true)
const error = ref(null)
const searchQuery = ref('')
const visibilityFilter = ref('')
const currentPage = ref(1)
const reposPerPage = 6

const username = 'prisca-01'

onMounted(async () => {
  try {
    const [userData, repoData] = await Promise.all([api.getUser(username), api.getRepos(username)])
    user.value = userData
    repos.value = repoData
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})

const totalPages = computed(() => Math.ceil(repos.value.length / reposPerPage))

const filteredRepos = computed(() => {
  return repos.value.filter((repo) => {
    // Apply visibility filter
    if (visibilityFilter.value && repo.visibility !== visibilityFilter.value) {
      return false
    }
    // Apply search filter
    if (searchQuery.value && !repo.name.toLowerCase().includes(searchQuery.value.toLowerCase())) {
      return false
    }
    return true
  })
})

const paginatedRepos = computed(() => {
  const start = (currentPage.value - 1) * reposPerPage
  const end = start + reposPerPage
  return filteredRepos.value.slice(start, end)
})

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const router = useRouter()

const searchRepo = () => {
  if (filteredRepos.value.length === 0) {
    router.push('/404')
  }
}
</script>

<template>
  <section>
    <SkeletonLoader v-if="loading" />
    <p v-if="!loading && error">Error: {{ error }}</p>
    <p v-if="!user && !repos && !loading">Loading...</p>

    <div v-if="user && !loading" class="user-details">
      <img :src="user.avatar_url" alt="User avatar" />
      <h3>{{ user.login }}</h3>
      <p>{{ user.name }}</p>
      <p>{{ user.bio }}</p>
    </div>

    <div v-if="repos.length > 0 && !loading">
      <h2 class="heading">My GitHub Repositories</h2>
      <div class="action-bar">
        <router-link to="/repos/new" class="link"
          ><button class="new">New Repo</button></router-link
        >
        <div v-if="repos.length > 0 && !loading" class="filters-container">
          <div class="filter search-input-container">
            <input
              type="text"
              v-model="searchQuery"
              @keyup.enter="searchRepo"
              placeholder="Search by repository name"
              class="search-input"
            />
            <span class="material-icons search-icon">search</span>
          </div>
          <div class="filter">
            <select v-model="visibilityFilter" class="visibility-filter">
              <option value="">All</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="repos">
      <div v-for="repo in paginatedRepos" :key="repo.id" class="repo-card">
        <router-link :to="{ path: `/repo/${username}/${repo.name}` }">
          <h2>{{ repo.name }}</h2>
          <p v-if="repo.description">{{ repo.description }}</p>
          <p v-else>This is a GitHub repo.</p>
          <p>{{ repo.visibility }}</p>
        </router-link>
      </div>
    </div>
    <div class="pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>

    <!-- NotFound component -->
    <NotFound v-if="!loading && !user && !repos" />
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.user-details {
  border: 1px solid #fff;
  width: 100%;
  max-width: 900px;
  color: hsla(160, 100%, 37%, 1);
  font-size: 1.5rem;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  box-sizing: border-box;
}
.heading {
  color: hsla(160, 100%, 37%, 1);
  font-size: 2rem;
  margin-block-start: 2rem;
  text-align: center;
}
.repos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.action-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
}
.filters-container {
  display: flex;
  gap: 1rem;
}
.link {
  background: none;
}
.new {
  color: #fff;
  font-size: 1.2rem;
  border: none;
  background-color: hsla(160, 100%, 37%, 1);
  border-radius: 1rem;
  width: 10rem;
  height: 2.5rem;
  margin-bottom: 20px;
}
.new:hover {
  background-color: hsla(160, 100%, 37%, 0.5);
}
.search-input-container {
  position: relative;
}
.search-input {
  padding: 8px;
  padding-right: 30px; /* Extra padding for the icon */
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 250px;
}
.search-icon {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #999;
}
.visibility-filter {
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.repo-card {
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 10px;
  margin: 16px;
  width: calc(100% - 32px);
  max-width: 550px;
  box-sizing: border-box;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.pagination button {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin: 0 5px;
  border-radius: 5px;
}
.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  color: hsla(160, 100%, 37%, 1);
}
.pagination span {
  margin: 0 10px;
}
@media (max-width: 768px) {
  .user-details {
    padding: 10px;
    font-size: 1rem;
  }
  .heading {
    font-size: 1.5rem;
  }
  .repo-card {
    width: calc(100% - 32px);
  }
  .pagination button {
    padding: 8px;
    margin: 0 3px;
  }
}
</style>
