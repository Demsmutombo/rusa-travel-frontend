<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center px-4">
    <div class="text-center max-w-md">
      <img
        src="/images/logo/auth-logo.svg"
        alt="Rusa Travel"
        class="mx-auto h-24 w-auto mb-8"
      />
      <h1 class="text-3xl font-bold text-gray-900 mb-2">
        Rusa Travel
      </h1>
      <p class="text-gray-600 mb-10">
        Plateforme de transport interurbain en RDC
      </p>
      <router-link
        to="/auth/signin"
        class="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
        Connexion
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

defineOptions({ name: 'LandingPage' })

const router = useRouter()
const authStore = useAuthStore()

onMounted(() => {
  if (authStore.isAuthenticated && authStore.currentRole) {
    switch (authStore.currentRole) {
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
        break
    }
  }
})
</script>
