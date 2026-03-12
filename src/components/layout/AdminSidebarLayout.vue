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
              Administration
            </h3>
            <ul class="space-y-1">
              <li>
                <router-link
                  to="/admin/dashboard"
                  @click="closeMobileMenu"
                  class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                  :class="isActive('/admin/dashboard') 
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
                  to="/admin/users"
                  @click="closeMobileMenu"
                  class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                  :class="isActive('/admin/users') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'"
                >
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Utilisateurs
                </router-link>
              </li>
              <li>
                <router-link
                  to="/admin/orders"
                  @click="closeMobileMenu"
                  class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                  :class="isActive('/admin/orders') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'"
                >
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M4 15h8a2 2 0 002 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 012-2z" />
                  </svg>
                  Commandes
                </router-link>
              </li>
              <li>
                <router-link
                  to="/admin/bookings"
                  @click="closeMobileMenu"
                  class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                  :class="isActive('/admin/bookings') 
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
                  to="/admin/products"
                  @click="closeMobileMenu"
                  class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                  :class="isActive('/admin/products') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'"
                >
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4M2 17l8 4 8-4m-8-4v10a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2H2a2 2 0 00-2 2v10z" />
                  </svg>
                  Produits
                </router-link>
              </li>
              <li>
                <router-link
                  to="/admin/settings"
                  @click="closeMobileMenu"
                  class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                  :class="isActive('/admin/settings') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'"
                >
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-2.572-1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31.826-2.37 2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Paramètres
                </router-link>
              </li>
            </ul>
          </div>
        </nav>

        <!-- User Info -->
        <div class="border-t p-4">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
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
  name: 'AdminSidebarLayout'
})

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const isMobileMenuOpen = ref(false)

const pageTitle = computed(() => {
  if (route.path === '/admin/dashboard') return 'Dashboard'
  if (route.path === '/admin/users') return 'Utilisateurs'
  if (route.path === '/admin/orders') return 'Commandes'
  if (route.path === '/admin/bookings') return 'Réservations'
  if (route.path === '/admin/products') return 'Produits'
  if (route.path === '/admin/settings') return 'Paramètres'
  return 'Admin'
})

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
</script>
