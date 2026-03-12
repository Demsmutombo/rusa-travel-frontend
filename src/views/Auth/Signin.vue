<template>
  <div class="min-h-screen bg-white">
    <div class="relative flex flex-col justify-center w-full h-screen lg:flex-row">
      <div class="flex flex-col flex-1 w-full lg:w-1/2">
        <div class="w-full max-w-md pt-10 mx-auto">
          <router-link
            to="/"
            class="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700"
          >
            <svg
              class="stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.7083 5L7.5 10.2083L12.7083 15.4167"
                stroke=""
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Retour à l'accueil
          </router-link>
        </div>
        <div class="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
          <div class="text-center mb-8">
            <img
              src="/images/logo/auth-logo.svg"
              alt="Rusa Travel"
              class="mx-auto h-16 w-auto mb-6"
            />
            <h1 class="mb-2 font-semibold text-gray-800 text-2xl sm:text-3xl">
              Connexion Rusa Travel
            </h1>
            <p class="text-sm text-gray-500 mb-6">
              Sélectionnez votre plateforme et connectez-vous
            </p>

            <!-- Sélecteur de rôle : Transporteur | Admin -->
            <div class="flex items-center justify-center gap-0 mb-6 rounded-lg border border-gray-200 bg-gray-50 p-1">
              <button
                type="button"
                :class="[
                  'flex-1 px-6 py-2.5 text-sm font-medium rounded-md transition-colors',
                  selectedRole === 'carrier'
                    ? 'bg-white text-blue-600 shadow-sm border border-gray-200'
                    : 'text-gray-600 hover:text-gray-900'
                ]"
                @click="selectedRole = 'carrier'"
              >
                Transporteur
              </button>
              <div class="w-px h-6 bg-gray-200" />
              <button
                type="button"
                :class="[
                  'flex-1 px-6 py-2.5 text-sm font-medium rounded-md transition-colors',
                  selectedRole === 'admin'
                    ? 'bg-white text-blue-600 shadow-sm border border-gray-200'
                    : 'text-gray-600 hover:text-gray-900'
                ]"
                @click="selectedRole = 'admin'"
              >
                Admin
              </button>
            </div>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label class="block text-sm font-medium text-gray-700">Email</label>
              <div class="mt-1">
                <input
                  v-model="formData.email"
                  type="email"
                  required
                  class="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Mot de passe</label>
              <div class="mt-1">
                <input
                  v-model="formData.password"
                  type="password"
                  required
                  class="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  v-model="formData.rememberMe"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label for="remember-me" class="ml-2 block text-sm text-gray-700">
                  Se souvenir de moi
                </label>
              </div>
            </div>

            <div v-if="errorMessage" class="p-3 text-sm text-red-600 bg-red-50 rounded-lg">
              {{ errorMessage }}
            </div>

            <div>
              <button
                type="submit"
                :disabled="isLoading"
                class="group relative flex w-full justify-center rounded-lg border border-transparent bg-blue-600 py-2.5 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isLoading">Se connecter</span>
                <span v-else>Connexion...</span>
              </button>
            </div>
          </form>

          <p class="mt-6 text-xs text-center text-gray-500">
            Démo : utilisez n'importe quel email et mot de passe pour vous connecter.
          </p>
        </div>
      </div>

      <div class="relative flex-1 hidden lg:block">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600">
          <div class="flex h-full items-center justify-center">
            <div class="max-w-md text-center text-white px-6">
              <img
                src="/images/logo/auth-logo.svg"
                alt="Rusa Travel"
                class="mx-auto h-32 w-auto mb-8 opacity-90"
              />
              <h2 class="text-3xl font-bold mb-4">
                Bienvenue sur Rusa Travel
              </h2>
              <p class="text-lg text-blue-100">
                {{ selectedRole === 'carrier' ? 'Accédez à votre tableau de bord transporteur pour gérer vos bus, trajets et réservations.' : 'Accédez à l\'administration de la plateforme pour gérer les agences, les utilisateurs et les transactions.' }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import type { UserRole } from '@/stores/auth'

defineOptions({ name: 'AuthSignin' })

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const selectedRole = ref<UserRole>('carrier')
const formData = ref({
  email: '',
  password: '',
  rememberMe: false
})

const isLoading = ref(false)
const errorMessage = ref('')

const handleSubmit = async () => {
  if (!formData.value.email || !formData.value.password) {
    errorMessage.value = 'Veuillez remplir tous les champs'
    return
  }

  errorMessage.value = ''
  isLoading.value = true

  try {
    await new Promise((resolve) => setTimeout(resolve, 800))

    const userData = {
      id: Date.now(),
      email: formData.value.email,
      name: formData.value.email.split('@')[0],
      role: selectedRole.value
    }

    const token = `rusa-${btoa(JSON.stringify(userData))}-${Date.now()}`

    authStore.login(userData, token)

    if (formData.value.rememberMe) {
      localStorage.setItem('rusa-remember-email', formData.value.email)
    } else {
      localStorage.removeItem('rusa-remember-email')
    }

    const redirect = (route.query.redirect as string) || undefined

    if (redirect && (redirect.startsWith('/carrier') || redirect.startsWith('/admin') || redirect.startsWith('/client'))) {
      const allowed = (selectedRole.value === 'carrier' && redirect.startsWith('/carrier')) ||
        (selectedRole.value === 'admin' && redirect.startsWith('/admin')) ||
        (selectedRole.value === 'client' && redirect.startsWith('/client'))
      if (allowed) {
        router.replace(redirect)
        return
      }
    }

    switch (selectedRole.value) {
      case 'admin':
        router.replace('/admin/dashboard')
        break
      case 'carrier':
        router.replace('/carrier/dashboard')
        break
      case 'client':
        router.replace('/client')
        break
      default:
        router.replace('/')
    }
  } catch (error) {
    console.error('Login error:', error)
    errorMessage.value = 'Erreur de connexion. Veuillez réessayer.'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  const savedEmail = localStorage.getItem('rusa-remember-email')
  if (savedEmail) {
    formData.value.email = savedEmail
    formData.value.rememberMe = true
  }
})
</script>
