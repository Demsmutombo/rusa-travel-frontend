<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Mobile Menu Overlay -->
    <div 
      v-show="isMobileMenuOpen" 
      @click="closeMobileMenu"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
    ></div>
    
    <!-- Sidebar -->
    <AppSidebar 
      :is-mobile-menu-open="isMobileMenuOpen"
      @close-mobile-menu="closeMobileMenu"
    />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <AppHeader 
        :is-mobile-menu-open="isMobileMenuOpen"
        @toggle-mobile-menu="toggleMobileMenu"
        @handle-logout="handleLogout"
      />

      <!-- Content -->
      <main class="flex-1 p-6">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import AppSidebar from '@/components/common/AppSidebar.vue'
import AppHeader from '@/components/common/AppHeader.vue'

defineOptions({
  name: 'DashboardLayout'
})

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleLogout = () => {
  authStore.logout()
  router.push('/')
  isMobileMenuOpen.value = false
}
</script>
