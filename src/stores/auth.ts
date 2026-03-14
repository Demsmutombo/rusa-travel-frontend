/**
 * RUSA TRAVEL - Store d'authentification
 * Gestion sécurisée de l'état utilisateur et contrôle d'accès par rôle
 */

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type UserRole = 'admin' | 'staff' | 'manager' | 'carrier' | 'client'

export interface User {
  id: number
  email: string
  name: string
  role: UserRole
  token?: string
}

const AUTH_STORAGE_KEY = 'rusa-travel-auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)

  const isAuthenticated = computed(() => !!user.value && !!token.value)
  const currentRole = computed(() => user.value?.role ?? null)
  const currentUser = computed(() => user.value)

  function initFromStorage() {
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY)
      if (stored) {
        const data = JSON.parse(stored)
        // Vérifier que les données sont valides
        if (data && data.user && data.token) {
          const { user: u, token: t } = data
          // Validation basique des données
          if (u && typeof u === 'object' && u.email && u.name && u.role && t && typeof t === 'string') {
            user.value = u
            token.value = t
            console.log('Auth store restauré depuis localStorage:', u.email, u.role)
            return
          }
        }
      }
      // Si les données sont invalides, nettoyer le localStorage
      localStorage.removeItem(AUTH_STORAGE_KEY)
    } catch (error) {
      console.error('Erreur lors de la restauration de l\'auth depuis localStorage:', error)
      logout()
    }
  }

  function login(userData: User, authToken: string) {
    user.value = userData
    token.value = authToken
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ user: userData, token: authToken }))
    console.log('Utilisateur connecté:', userData.email, userData.role)
  }

  function logout() {
    const currentUserEmail = user.value?.email
    user.value = null
    token.value = null
    localStorage.removeItem(AUTH_STORAGE_KEY)
    if (currentUserEmail) {
      console.log('Utilisateur déconnecté:', currentUserEmail)
    }
  }

  function checkAuthState() {
    // Vérifier que l'état est cohérent
    if (!user.value && token.value) {
      user.value = null
      token.value = null
      localStorage.removeItem(AUTH_STORAGE_KEY)
    }
    if (user.value && !token.value) {
      user.value = null
      localStorage.removeItem(AUTH_STORAGE_KEY)
    }
    return isAuthenticated.value
  }

  function hasRole(role: UserRole): boolean {
    return user.value?.role === role
  }

  function canAccessRoute(requiredRole?: UserRole): boolean {
    if (!isAuthenticated.value) return false
    if (!requiredRole) return true
    return hasRole(requiredRole)
  }

  return {
    user,
    token,
    isAuthenticated,
    currentRole,
    currentUser,
    initFromStorage,
    login,
    logout,
    checkAuthState,
    hasRole,
    canAccessRoute,
  }
})
