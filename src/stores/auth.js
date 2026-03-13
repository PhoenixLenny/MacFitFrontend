import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false)
  const isAdmin = ref(false)
  const user = ref(null)

  const restoreSession = () => {
    const storedLogin = localStorage.getItem('isLoggedIn')
    const storedUser = localStorage.getItem('userDetails')

    isLoggedIn.value = storedLogin === 'true'

    if (storedUser) {
      try {
        user.value = JSON.parse(storedUser)
        isAdmin.value = !!user.value?.isAdmin
      } catch (error) {
        user.value = null
        isAdmin.value = false
      }
    } else {
      user.value = null
      isAdmin.value = false
    }
  }

  const login = (userData) => {
    isLoggedIn.value = true
    isAdmin.value = !!userData?.isAdmin
    user.value = userData || null

    localStorage.setItem('isLoggedIn', 'true')
    if (userData) {
      localStorage.setItem('userDetails', JSON.stringify(userData))
    }
  }

  const logout = () => {
    isLoggedIn.value = false
    isAdmin.value = false
    user.value = null

    localStorage.removeItem('isLoggedIn')
  }

  const initials = computed(() => {
    const rawName = user.value?.name || user.value?.email || ''
    return rawName.trim().charAt(0).toUpperCase() || 'U'
  })

  restoreSession()

  return { isLoggedIn, isAdmin, user, initials, restoreSession, login, logout }
})
