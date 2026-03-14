<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
    <div class="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
      <div class="text-center mb-8">
        <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-gray-900">Rusa Travel</h1>
        <p class="text-gray-600 mt-2">Connexion Admin</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            v-model="loginForm.email"
            type="email"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="admin@rusatravel.com"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
          <input
            v-model="loginForm.password"
            type="password"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Rôle</label>
          <select
            v-model="loginForm.role"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Sélectionner un rôle...</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="carrier">Transporteur</option>
            <option value="client">Client</option>
            <option value="staff">Staff</option>
          </select>
        </div>

        <button
          type="submit"
          :disabled="isLoading"
          class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50"
        >
          <span v-if="isLoading">Connexion...</span>
          <span v-else>Se connecter</span>
        </button>
      </form>

      <div class="mt-6 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm text-gray-600 font-medium mb-2">Comptes de test :</p>
        <div class="space-y-1 text-xs text-gray-500">
          <p>• Admin: admin@rusatravel.com / admin123</p>
          <p>• Manager: manager@rusatravel.com / manager123</p>
          <p>• Transporteur: carrier@rusatravel.com / carrier123</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

defineOptions({
  name: 'SimpleLogin'
})

const router = useRouter()
const authStore = useAuthStore()

const isLoading = ref(false)
const loginForm = ref({
  email: 'admin@rusatravel.com',
  password: 'admin123',
  role: 'admin'
})

const handleLogin = async () => {
  isLoading.value = true
  
  try {
    // Simuler une authentification
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Vérifier les identifiants de test
    const validCredentials = {
      admin: { email: 'admin@rusatravel.com', password: 'admin123' },
      manager: { email: 'manager@rusatravel.com', password: 'manager123' },
      carrier: { email: 'carrier@rusatravel.com', password: 'carrier123' },
      client: { email: 'client@rusatravel.com', password: 'client123' },
      staff: { email: 'staff@rusatravel.com', password: 'staff123' }
    }
    
    const role = loginForm.value.role
    const expectedCredentials = validCredentials[role as keyof typeof validCredentials]
    
    if (expectedCredentials && 
        loginForm.value.email === expectedCredentials.email && 
        loginForm.value.password === expectedCredentials.password) {
      
      // Authentification réussie
      const userData = {
        id: 1,
        email: loginForm.value.email,
        name: role.charAt(0).toUpperCase() + role.slice(1) + ' User',
        role: role as any
      }
      
      authStore.login(userData, 'mock-token-' + Date.now())
      
      // Rediriger vers le dashboard approprié
      router.push(`/${role}/dashboard`)
    } else {
      alert('Identifiants incorrects!')
    }
  } catch (error) {
    console.error('Erreur de connexion:', error)
    alert('Erreur de connexion!')
  } finally {
    isLoading.value = false
  }
}
</script>
