<template>
  <div class="min-h-screen bg-white flex items-center justify-center px-4">
    <div class="max-w-md w-full">
      <!-- Logo -->
      <div class="text-center mb-8">
        <img
          src="/images/logo/auth-logo (2).png"
          alt="Rusa Travel"
          class="mx-auto h-24 w-auto mb-6"
        />
        <h2 class="text-3xl font-bold text-gray-900">Connexion</h2>
        <p class="mt-2 text-sm text-gray-600">
          Accédez à votre espace Rusa Travel
        </p>
      </div>

      <!-- Login Form -->
      <div class="bg-white py-8 px-6 shadow-lg rounded-lg border border-gray-200">
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="votre@email.com"
            />
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <input
              id="password"
              v-model="formData.password"
              type="password"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          <!-- Remember Me -->
          <div class="flex items-center">
            <input
              id="remember"
              v-model="formData.remember"
              type="checkbox"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label for="remember" class="ml-2 block text-sm text-gray-700">
              Se souvenir de moi
            </label>
          </div>

          <!-- Error Message -->
          <div v-if="errorMessage" class="text-red-600 text-sm text-center">
            {{ errorMessage }}
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            <span v-if="isLoading">Connexion en cours...</span>
            <span v-else>Se connecter</span>
          </button>
        </form>

        <!-- Documentation Button -->
        <div class="mt-6 text-center">
          <button
            @click="showDocumentation"
            class="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center mx-auto"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Voir la Documentation
          </button>
        </div>
      </div>

      <!-- Back to Home -->
      <div class="text-center mt-6">
        <router-link
          to="/"
          class="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          ← Retour à l'accueil
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import type { UserRole } from '@/stores/auth'

defineOptions({
  name: 'LoginPage'
})

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const formData = ref({
  email: '',
  password: '',
  remember: false
})

const isLoading = ref(false)
const errorMessage = ref('')

const showDocumentation = () => {
  // Rediriger vers la page de documentation complète
  router.push('/login')
}

const determineRole = (email: string): UserRole => {
  const emailLower = email.toLowerCase()
  
  if (emailLower.includes('admin') || emailLower.includes('adm')) {
    return 'admin'
  } else if (emailLower.includes('staff')) {
    return 'staff'
  } else if (emailLower.includes('manager') || emailLower.includes('mgr')) {
    return 'manager'
  } else if (emailLower.includes('carrier') || emailLower.includes('transport')) {
    return 'carrier'
  } else {
    return 'client'
  }
}

const handleLogin = async () => {
  if (!formData.value.email || !formData.value.password) {
    errorMessage.value = 'Veuillez remplir tous les champs'
    return
  }

  errorMessage.value = ''
  isLoading.value = true

  try {
    await new Promise(resolve => setTimeout(resolve, 1000))

    const role = determineRole(formData.value.email)
    
    const userData = {
      id: Date.now(),
      email: formData.value.email,
      name: formData.value.email.split('@')[0],
      role: role
    }

    const token = `rusa-${btoa(JSON.stringify(userData))}-${Date.now()}`

    authStore.login(userData, token)

    if (formData.value.remember) {
      localStorage.setItem('rusa-remember-email', formData.value.email)
    } else {
      localStorage.removeItem('rusa-remember-email')
    }

    const redirect = (route.query.redirect as string) || undefined
    if (redirect && redirect.startsWith('/')) {
      router.replace(redirect)
      return
    }

    router.push(`/${role}/dashboard`)
  } catch (error) {
    console.error('Login error:', error)
    errorMessage.value = 'Erreur de connexion'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  const savedEmail = localStorage.getItem('rusa-remember-email')
  if (savedEmail) {
    formData.value.email = savedEmail
    formData.value.remember = true
  }
})
</script>
