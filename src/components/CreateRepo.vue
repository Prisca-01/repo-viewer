<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const name = ref('')
const description = ref('')
const visibility = ref('public')
const error = ref(null)
const router = useRouter()
const loading = ref(false)

const createRepo = async () => {
  if (!name.value || !description.value) {
    error.value = 'Name and description are required'
    return
  }

  const repoData = {
    name: name.value,
    description: description.value,
    private: visibility.value === 'private'
  }

  loading.value = true

  try {
    await api.createRepo(repoData)
    router.push('/repos')
  } catch (err) {
    error.value = 'Failed to create repository'
    console.error(err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section>
    <h2>Create New Repository</h2>
    <form @submit.prevent="createRepo" class="form">
      <div class="form-group">
        <label for="name">Repository Name</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" v-model="description" required></textarea>
      </div>
      <div class="form-group">
        <label for="visibility">Visibility</label>
        <select id="visibility" v-model="visibility">
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </div>
      <p v-if="error" class="error">{{ error }}</p>
      <button type="submit" :disabled="loading">
        {{ loading ? 'Creating Repo...' : 'Create Repository' }}
      </button>
    </form>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  min-height: 100vh;
}

h2 {
  color: hsla(160, 100%, 37%, 1);
  font-size: 2rem;
  margin-bottom: 1rem;
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  font-size: 1.2rem;
  color: rgb(139, 141, 140);
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea,
select {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  outline: none;
}

.error {
  color: red;
  margin-bottom: 1rem;
}

button {
  color: #fff;
  font-size: 1.2rem;
  border: none;
  background-color: hsla(160, 100%, 37%, 1);
  border-radius: 1rem;
  padding: 0.75rem;
  cursor: pointer;
}

button:disabled {
  background-color: hsla(160, 100%, 37%, 0.8);
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: hsla(160, 100%, 37%, 0.5);
}
</style>
