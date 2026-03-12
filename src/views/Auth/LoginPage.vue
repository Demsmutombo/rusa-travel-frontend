<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINGg0djBIMHYyaDR2NGgydi00aDR2LTJINHpNNCA0VjBINGg0SDAwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvZz48L3N2Zz4='); background-size: 60px 60px;"></div>
    </div>

    <!-- Login Container -->
    <div class="relative z-10 w-full max-w-md mx-4">
      <!-- Title Section -->
      <div class="text-center mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
          Rusa Travel
        </h1>
        <p class="text-blue-100 text-lg">
          Connectez-vous à votre espace
        </p>
      </div>

      <!-- Login Form -->
      <div class="bg-white rounded-2xl shadow-2xl p-8">
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <input
                id="email"
                v-model="loginForm.email"
                type="email"
                required
                class="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <!-- Password Field -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                id="password"
                v-model="loginForm.password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="pl-10 pr-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="••••••••"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg v-if="showPassword" class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
                <svg v-else class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input
                v-model="loginForm.remember"
                type="checkbox"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span class="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
            </label>
            <a href="#" class="text-sm text-blue-600 hover:text-blue-500 transition-colors">
              Mot de passe oublié?
            </a>
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ isLoading ? 'Connexion...' : 'Se connecter' }}
          </button>

          <!-- Register Link -->
          <div class="text-center">
            <p class="text-sm text-gray-600">
              Pas encore de compte?
              <router-link to="/register" class="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                S'inscrire
              </router-link>
            </p>
          </div>
        </form>

        <!-- Demo Accounts -->
        <div class="mt-6 pt-6 border-t border-gray-200">
          <p class="text-xs text-gray-500 text-center mb-3">Comptes de démonstration</p>
          <div class="space-y-2">
            <button
              @click="fillDemoAccount('admin')"
              class="w-full text-left px-3 py-2 text-xs bg-gray-50 hover:bg-gray-100 rounded transition-colors"
            >
              <span class="font-medium">Admin:</span> admin@rusatravel.cd
            </button>
            <button
              @click="fillDemoAccount('manager')"
              class="w-full text-left px-3 py-2 text-xs bg-gray-50 hover:bg-gray-100 rounded transition-colors"
            >
              <span class="font-medium">Manager:</span> manager@rusatravel.cd
            </button>
            <button
              @click="fillDemoAccount('client')"
              class="w-full text-left px-3 py-2 text-xs bg-gray-50 hover:bg-gray-100 rounded transition-colors"
            >
              <span class="font-medium">Client:</span> client@rusatravel.cd
            </button>
          </div>
        </div>
      </div>

      <!-- Back to Home -->
      <div class="text-center mt-6">
        <router-link
          to="/"
          class="text-blue-100 hover:text-white transition-colors inline-flex items-center space-x-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Retour à l'accueil</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

defineOptions({
  name: 'LoginPage'
})

const router = useRouter()
const authStore = useAuthStore()

const isLoading = ref(false)
const showPassword = ref(false)

const loginForm = ref({
  email: '',
  password: '',
  remember: false
})

const demoAccounts = {
  admin: { email: 'admin@rusatravel.cd', password: 'admin123', role: 'admin' },
  manager: { email: 'manager@rusatravel.cd', password: 'manager123', role: 'manager' },
  client: { email: 'client@rusatravel.cd', password: 'client123', role: 'client' }
}

const handleLogin = async () => {
  isLoading.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Check demo accounts
    const demoAccount = Object.values(demoAccounts).find(
      account => account.email === loginForm.value.email && account.password === loginForm.value.password
    )
    
    if (demoAccount) {
      // Set user in auth store using login method
      authStore.login({
        id: 1,
        name: demoAccount.email.split('@')[0],
        email: demoAccount.email,
        role: demoAccount.role,
        token: 'demo-token-' + demoAccount.role
      }, 'demo-token-' + demoAccount.role)
      
      // Redirect to dashboard
      router.push(`/${demoAccount.role}/dashboard`)
    } else {
      // Show error message
      alert('Email ou mot de passe incorrect')
    }
  } catch (error) {
    console.error('Login error:', error)
    alert('Erreur de connexion')
  } finally {
    isLoading.value = false
  }
}

const fillDemoAccount = (role: keyof typeof demoAccounts) => {
  const account = demoAccounts[role]
  loginForm.value.email = account.email
  loginForm.value.password = account.password
}
</script>
