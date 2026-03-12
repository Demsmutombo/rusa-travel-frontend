<template>
  <div>
    <!-- Admin Content -->
    <div v-if="authStore.currentUser?.role === 'admin'" class="space-y-6">
      <slot name="admin"></slot>
    </div>

    <!-- Manager Content -->
    <div v-else-if="authStore.currentUser?.role === 'manager'" class="space-y-6">
      <slot name="manager"></slot>
    </div>

    <!-- Carrier Content -->
    <div v-else-if="authStore.currentUser?.role === 'carrier'" class="space-y-6">
      <slot name="carrier"></slot>
    </div>

    <!-- Client Content -->
    <div v-else-if="authStore.currentUser?.role === 'client'" class="space-y-6">
      <slot name="client"></slot>
    </div>

    <!-- Staff Content -->
    <div v-else-if="authStore.currentUser?.role === 'staff'" class="space-y-6">
      <slot name="staff"></slot>
    </div>

    <!-- Unauthorized Access -->
    <div v-else class="flex flex-col items-center justify-center py-20">
      <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
        <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-2">Accès non autorisé</h3>
      <p class="text-gray-600 text-center max-w-md mb-6">
        Vous n'avez pas les permissions nécessaires pour accéder à ce contenu. Veuillez vous connecter avec un compte approprié.
      </p>
      <router-link
        to="/login"
        class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition"
      >
        Se connecter
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

defineOptions({
  name: 'RoleBasedContent'
})

const authStore = useAuthStore()
</script>
