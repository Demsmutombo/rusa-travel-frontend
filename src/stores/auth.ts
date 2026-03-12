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
        const { user: u, token: t } = JSON.parse(stored)
        if (u && t) {
          user.value = u
          token.value = t
        }
      }
    } catch {
      logout()
    }
  }

  function login(userData: User, authToken: string) {
    user.value = userData
    token.value = authToken
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ user: userData, token: authToken }))
  }

  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem(AUTH_STORAGE_KEY)
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
    hasRole,
    canAccessRoute,
  }
})
