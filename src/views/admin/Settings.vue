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
        @click="saveSettings"
        class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Sauvegarder
      </button>
    </div>

    <!-- Settings Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Configuration Active</p>
            <p class="text-2xl font-bold text-green-600">{{ activeConfigs.toLocaleString() }}</p>
            <p class="text-xs text-gray-500 mt-1">Paramètres actifs</p>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Commission</p>
            <p class="text-2xl font-bold text-blue-600">{{ commission }}%</p>
            <p class="text-xs text-gray-500 mt-1">Par transaction</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 0 3 1.343 3 0 3 1.657 0 3-1.343m0 6a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Utilisateurs Actifs</p>
            <p class="text-2xl font-bold text-purple-600">{{ activeUsers.toLocaleString() }}</p>
            <p class="text-xs text-gray-500 mt-1">Sur la plateforme</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Dernière Sauvegarde</p>
            <p class="text-2xl font-bold text-orange-600">{{ lastBackup }}</p>
            <p class="text-xs text-gray-500 mt-1">Heure locale</p>
          </div>
          <div class="p-3 bg-orange-100 rounded-full">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V2" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Settings Configuration -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-900">Configuration de la Plateforme</h2>
      </div>
      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- General Settings -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900">Paramètres Généraux</h3>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Nom de la plateforme</label>
              <input 
                v-model="settings.platformName"
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email de support</label>
              <input 
                v-model="settings.supportEmail"
                type="email" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone de support</label>
              <input 
                v-model="settings.supportPhone"
                type="tel" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
          </div>

          <!-- Financial Settings -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900">Paramètres Financiers</h3>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Commission par transaction (%)</label>
              <input 
                v-model.number="settings.commission"
                type="number" 
                step="0.1"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Montant minimum de transaction</label>
              <input 
                v-model.number="settings.minTransaction"
                type="number" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Montant maximum de transaction</label>
              <input 
                v-model.number="settings.maxTransaction"
                type="number" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
          </div>
        </div>

        <!-- System Settings -->
        <div class="mt-8 space-y-4">
          <h3 class="text-lg font-medium text-gray-900">Paramètres Système</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <p class="font-medium text-gray-900">Maintenance Mode</p>
                <p class="text-sm text-gray-500">Désactiver temporairement le site</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="settings.maintenanceMode" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <p class="font-medium text-gray-900">Notifications Email</p>
                <p class="text-sm text-gray-500">Envoyer des alertes par email</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="settings.emailNotifications" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <p class="font-medium text-gray-900">Debug Mode</p>
                <p class="text-sm text-gray-500">Activer les logs détaillés</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="settings.debugMode" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DashboardLayout from '@/components/layouts/DashboardLayout.vue'

defineOptions({
  name: 'AdminSettings'
})

// Mock data
const activeConfigs = ref(12)
const commission = ref(10)
const activeUsers = ref(1234)
const lastBackup = ref('14:30')

// Settings data
const settings = ref({
  platformName: 'Rusa Travel',
  supportEmail: 'support@rusatravel.com',
  supportPhone: '+243 123 456 789',
  commission: 10,
  minTransaction: 100,
  maxTransaction: 50000,
  maintenanceMode: false,
  emailNotifications: true,
  debugMode: false
})

// Methods
const refreshData = () => {
  console.log('Refreshing settings data...')
}

const saveSettings = () => {
  console.log('Saving settings...', settings.value)
  // Show success message
}
</script>
