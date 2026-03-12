<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Simple Header -->
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <img 
              src="/images/logo/auth-logo.svg" 
              alt="Rusa Travel" 
              class="h-8 w-auto mr-3"
            />
            <h1 class="text-xl font-bold text-gray-900">{{ title }}</h1>
          </div>
          <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-600">{{ authStore.currentUser?.name }}</span>
            <button 
              @click="handleLogout"
              class="text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

defineOptions({
  name: 'SimpleLayout'
})

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

const title = computed(() => {
  if (route.path.startsWith('/admin')) return 'Admin Dashboard'
  if (route.path.startsWith('/manager')) return 'Manager Dashboard'
  if (route.path.startsWith('/carrier')) return 'Carrier Dashboard'
  if (route.path.startsWith('/client')) return 'Client Dashboard'
  return 'Rusa Travel'
})

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>
