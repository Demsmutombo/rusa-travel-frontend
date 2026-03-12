<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Mobile Menu Overlay -->
    <div 
      v-show="isMobileMenuOpen" 
      @click="toggleMobileMenu"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
    ></div>
    
    <!-- Sidebar -->
    <aside 
      :class="[
        'fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out',
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      ]"
    >
      <div class="flex flex-col h-full">
        <!-- Logo -->
        <div class="flex items-center justify-center h-16 border-b">
          <img 
            src="/images/logo/auth-logo.svg" 
            alt="Rusa Travel" 
            class="h-8 w-auto"
          />
        </div>

        <!-- Navigation -->
        <nav class="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <div>
            <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Transporteur
            </h3>
            <ul class="space-y-1">
              <li>
                <router-link
                  to="/carrier/dashboard"
                  @click="closeMobileMenu"
                  class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                  :class="isActive('/carrier/dashboard') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'"
                >
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1z" />
                  </svg>
                  Dashboard
                </router-link>
              </li>
              <li>
                <router-link
                  to="/carrier/buses"
                  @click="closeMobileMenu"
                  class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                  :class="isActive('/carrier/buses') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'"
                >
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6a2 2 0 002-2V8a2 2 0 00-2-2h-2a2 2 0 00-2 2H8z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-6 4h12a2 2 0 002-2v-4a2 2 0 00-2-2H2a2 2 0 00-2 2v4a2 2 0 002 2z" />
                  </svg>
                  Bus
                </router-link>
              </li>
              <li>
                <router-link
                  to="/carrier/routes"
                  @click="closeMobileMenu"
                  class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                  :class="isActive('/carrier/routes') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'"
                >
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7z" />
                  </svg>
                  Trajets
                </router-link>
              </li>
              <li>
                <router-link
                  to="/carrier/bookings"
                  @click="closeMobileMenu"
                  class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                  :class="isActive('/carrier/bookings') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'"
                >
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5z" />
                  </svg>
                  Réservations
                </router-link>
              </li>
              <li>
                <router-link
                  to="/carrier/statistics"
                  @click="closeMobileMenu"
                  class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                  :class="isActive('/carrier/statistics') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'"
                >
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Statistiques
                </router-link>
              </li>
            </ul>
          </div>
        </nav>

        <!-- User Info -->
        <div class="border-t p-4">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
              {{ authStore.currentUser?.name?.charAt(0)?.toUpperCase() }}
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900">{{ authStore.currentUser?.name }}</p>
              <p class="text-xs text-gray-500">{{ authStore.currentUser?.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <header class="bg-white shadow-sm border-b">
        <div class="px-6 py-4">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <!-- Mobile Menu Toggle -->
              <button
                @click="toggleMobileMenu"
                class="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h2 class="text-lg font-semibold text-gray-900">
                {{ pageTitle }}
              </h2>
            </div>
            <div class="flex items-center space-x-4">
              <button class="p-2 text-gray-500 hover:text-gray-700 transition">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.447-1.447A2 2 0 0018.382V7.618a2 2 0 00-.553-.894L15 4m0 13l6-3m-6 3V4m0 0L9 7z" />
                </svg>
              </button>
              <button 
                @click="handleLogout"
                class="p-2 text-red-600 hover:text-red-700 transition"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4 4m4-4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3m0 0l-4 4m4-4v3a2 2 0 01-2 2h6a2 2 0 012-2v-3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Content -->
      <main class="flex-1 p-6">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter, useRoute } from 'vue-router'
import { computed, ref } from 'vue'

defineOptions({
  name: 'CarrierSidebarLayout'
})

// Déclarer toutes les variables réactives au début
const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const isMobileMenuOpen = ref(false)

// Déclarer toutes les fonctions
const isActive = (path: string) => route.path === path

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}

// Déclarer les computed properties
const pageTitle = computed(() => {
  if (route.path === '/carrier/dashboard') return 'Dashboard'
  if (route.path === '/carrier/buses') return 'Bus'
  if (route.path === '/carrier/routes') return 'Trajets'
  if (route.path === '/carrier/bookings') return 'Réservations'
  if (route.path === '/carrier/statistics') return 'Statistiques'
  return 'Transporteur'
})
</script>
