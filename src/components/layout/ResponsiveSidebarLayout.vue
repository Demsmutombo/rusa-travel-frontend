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
              {{ menuTitle }}
            </h3>
            <ul class="space-y-1">
              <li v-for="item in menuItems" :key="item.path">
                <router-link
                  :to="item.path"
                  @click="closeMobileMenu"
                  class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                  :class="isActive(item.path) 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'"
                >
                  <component :is="item.icon" class="w-5 h-5 mr-3" />
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </div>
        </nav>

        <!-- User Info -->
        <div class="border-t p-4">
          <div class="flex items-center">
            <div 
              class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3"
              :class="userAvatarColor"
            >
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
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

interface Props {
  menuTitle: string
  menuItems: Array<{
    path: string
    label: string
    icon: any
  }>
  userAvatarColor: string
}

const props = defineProps<Props>()

defineOptions({
  name: 'ResponsiveSidebarLayout'
})

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const isMobileMenuOpen = ref(false)

const pageTitle = computed(() => {
  const currentItem = props.menuItems.find(item => isActive(item.path))
  return currentItem?.label || props.menuTitle
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
