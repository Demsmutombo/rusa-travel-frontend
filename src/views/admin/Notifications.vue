<template>
  <DashboardLayout>
    <!-- Action Buttons -->
    <div class="flex justify-end space-x-3 mb-6">
      <button 
        @click="refreshData"
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Actualiser
      </button>
      <button 
        @click="markAllAsRead"
        class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Tout marquer comme lu
      </button>
    </div>

    <!-- Notifications Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Notifications</p>
            <p class="text-2xl font-bold text-gray-900">{{ totalNotifications.toLocaleString() }}</p>
            <p class="text-xs text-gray-500 mt-1">Cette semaine</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 00-2-2h-1a2 2 0 00-2 2v.341M7 20a2 2 0 002 2 0 012-2 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Non Lues</p>
            <p class="text-2xl font-bold text-red-600">{{ unreadNotifications.toLocaleString() }}</p>
            <p class="text-xs text-red-600 mt-1">Nécessitent attention</p>
          </div>
          <div class="p-3 bg-red-100 rounded-full">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Alertes Système</p>
            <p class="text-2xl font-bold text-orange-600">{{ systemAlerts.toLocaleString() }}</p>
            <p class="text-xs text-gray-500 mt-1">Critiques</p>
          </div>
          <div class="p-3 bg-orange-100 rounded-full">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Messages Utilisateurs</p>
            <p class="text-2xl font-bold text-green-600">{{ userMessages.toLocaleString() }}</p>
            <p class="text-xs text-gray-500 mt-1">Support client</p>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Notifications List -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-900">Liste des Notifications</h2>
      </div>
      <div class="p-6">
        <div class="text-center text-gray-500 py-8">
          <svg class="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 00-2-2h-1a2 2 0 00-2 2v.341M7 20a2 2 0 002 2 0 012-2 0z" />
          </svg>
          <p class="text-gray-500">Aucune notification trouvée</p>
          <p class="text-sm text-gray-400 mt-2">Les notifications apparaîtront ici une fois le système opérationnel</p>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DashboardLayout from '@/components/layouts/DashboardLayout.vue'

defineOptions({
  name: 'AdminNotifications'
})

// Mock data
const totalNotifications = ref(234)
const unreadNotifications = ref(18)
const systemAlerts = ref(3)
const userMessages = ref(45)

// Methods
const refreshData = () => {
  console.log('Refreshing notifications data...')
}

const markAllAsRead = () => {
  console.log('Marking all notifications as read...')
  unreadNotifications.value = 0
}
</script>
