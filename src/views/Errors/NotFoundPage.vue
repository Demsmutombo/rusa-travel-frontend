<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div class="text-center">
      <!-- Logo -->
      <div class="mb-8">
        <RusaLogo size="3xl" :animated="true" />
      </div>
      
      <!-- 404 Content -->
      <div class="max-w-md mx-auto">
        <h1 class="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Page non trouvée</h2>
        <p class="text-gray-600 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        
        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/"
            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            <span class="flex items-center justify-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1z" />
              </svg>
              <span>Retour à l'accueil</span>
            </span>
          </router-link>
          
          <button
            @click="goBack"
            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
          >
            <span class="flex items-center justify-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Page précédente</span>
            </span>
          </button>
        </div>
      </div>
      
      <!-- Help Section -->
      <div class="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-md mx-auto">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Besoin d'aide ?</h3>
        <div class="space-y-3">
          <router-link
            to="/search"
            class="block text-blue-600 hover:text-blue-700 font-medium"
          >
            → Rechercher un trajet
          </router-link>
          <router-link
            to="/login"
            class="block text-blue-600 hover:text-blue-700 font-medium"
          >
            → Se connecter
          </router-link>
          <a
            href="mailto:support@rusatravel.cd"
            class="block text-blue-600 hover:text-blue-700 font-medium"
          >
            → Contacter le support
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import RusaLogo from '@/components/common/RusaLogo.vue'

defineOptions({
  name: 'NotFoundPage'
})

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>
