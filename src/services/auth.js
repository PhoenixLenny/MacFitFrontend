import { ref, computed } from 'vue'
import api from './api'

const user = ref(JSON.parse(localStorage.getItem('user') || 'null'))
const loading = ref(false)
const error = ref(null)
const isAdmin = ref(localStorage.getItem('isAdmin') === 'true')

export function useAuth() {
  const isAuthenticated = computed(() => !!user.value)
  const isLoggedIn = computed(() => {
    return localStorage.getItem('isLoggedIn') === 'true' || !!localStorage.getItem('authToken')
  })

  const initials = computed(() => {
    const fallbackUser = JSON.parse(localStorage.getItem('userDetails') || 'null')
    const currentUser = user.value || fallbackUser
    const name = currentUser?.name || `${currentUser?.firstname || ''} ${currentUser?.lastname || ''}`.trim()
    if (!name) return 'MF'
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(part => part[0]?.toUpperCase())
      .join('')
  })

  async function login(credentials) {
    loading.value = true
    error.value = null

    try {
      if (!credentials.email || !credentials.password) {
        throw new Error('Email and password are required')
      }

      const response = await api.post('login', credentials)
      const { token, user: userData } = response.data

      if (!token || !userData) {
        throw new Error('Invalid response format from server')
      }

      user.value = userData
      isAdmin.value = user.value?.role === 1

      localStorage.setItem('authToken', token)
      localStorage.setItem('user', JSON.stringify(user.value))
      localStorage.setItem('isAdmin', JSON.stringify(isAdmin.value))
      localStorage.setItem('isLoggedIn', 'true')

      return response
    } catch (err) {
      error.value = err.response?.data?.message || err.message || 'Login failed'
      throw err
    } finally {
      loading.value = false
    }
  }

  async function register(formData) {
    loading.value = true
    error.value = null

    try {
      const response = await api.post('register', formData)
      const { token, user: userData } = response.data

      if (!token || !userData) {
        throw new Error('Invalid response format from server')
      }

      user.value = userData
      isAdmin.value = user.value?.role === 1

      localStorage.setItem('authToken', token)
      localStorage.setItem('user', JSON.stringify(user.value))
      localStorage.setItem('isAdmin', JSON.stringify(isAdmin.value))
      localStorage.setItem('isLoggedIn', 'true')

      return response
    } catch (err) {
      error.value = err.response?.data?.message || err.message || 'Registration failed'
      throw err
    } finally {
      loading.value = false
    }
  }

  function logout() {
    user.value = null
    isAdmin.value = false
    localStorage.removeItem('authToken')
    localStorage.removeItem('user')
    localStorage.removeItem('isAdmin')
    localStorage.setItem('isLoggedIn', 'false')
  }

  return {
    user,
    loading,
    error,
    isAuthenticated,
    isLoggedIn,
    isAdmin,
    initials,
    login,
    register,
    logout,
  }
}
