// src/services/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api', 
  // ↑ CHANGE THIS to your actual backend URL
  // Example: http://localhost:5000/api   or   https://your-macfit-backend.onrender.com/api
  headers: {
    'Content-Type': 'application/json',
  },
})

// 🔥 Automatically add auth token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Optional: auto logout on 401 (expired token)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear() // clears everything safely
      window.location.href = '/login' // or '/'
    }
    return Promise.reject(error)
  }
)

export default api