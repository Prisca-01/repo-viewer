import axios from 'axios'

// const token = import.meta.env.VITE_GITHUB_TOKEN

const api = axios.create({
  baseURL: 'https://api.github.com'
  // headers: {
  //   'X-Github-Api-Version': '2022-11-28',
  //   Accept: 'application/vnd.github+json',
  //   Authorization: `Bearer ${token}`
  // }
})

export default {
  async getUser(name) {
    try {
      if (!name) throw new Error('User name is required')
      const response = await api.get(`/users/${name}`)
      return response.data
    } catch (error) {
      console.error(`Error fetching user: ${error.message}`)
      throw error
    }
  },

  async getRepos(name) {
    try {
      if (!name) throw new Error('User name is required')
      const response = await api.get(`/users/${name}/repos`)
      return response.data
    } catch (error) {
      console.error(`Error fetching repositories: ${error}`)
      throw error
    }
  },

  async getRepo(name, repo) {
    try {
      if (!name || !repo) throw new Error('User name and repo name are required')
      const response = await api.get(`/repos/${name}/${repo}`)
      return response.data
    } catch (error) {
      console.error(`Error fetching repository: ${error}`)
      throw error
    }
  },

  async createRepo(repoData) {
    try {
      const response = await api.post('/user/repos', repoData)
      return response.data
    } catch (error) {
      console.error(`Error creating repository: ${error}`)
      throw error
    }
  }
}
