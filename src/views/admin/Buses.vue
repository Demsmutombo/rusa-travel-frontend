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
        @click="addBus"
        class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Ajouter un Bus
      </button>
    </div>

    <!-- Buses Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Bus</p>
            <p class="text-2xl font-bold text-gray-900">{{ totalBuses.toLocaleString() }}</p>
            <p class="text-xs text-green-600 mt-1">+12% ce mois</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4 4m0 0l4-4m-12 0h12a2 2 0 002 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Bus Actifs</p>
            <p class="text-2xl font-bold text-green-600">{{ activeBuses.toLocaleString() }}</p>
            <p class="text-xs text-green-600 mt-1">En service</p>
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
            <p class="text-sm font-medium text-gray-600">Bus en Maintenance</p>
            <p class="text-2xl font-bold text-orange-600">{{ maintenanceBuses.toLocaleString() }}</p>
            <p class="text-xs text-gray-500 mt-1">Hors service</p>
          </div>
          <div class="p-3 bg-orange-100 rounded-full">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-2.572-1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31.826-2.37 2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Capacité Totale</p>
            <p class="text-2xl font-bold text-purple-600">{{ totalCapacity.toLocaleString() }}</p>
            <p class="text-xs text-gray-500 mt-1">Places assises</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Buses Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-900">Liste des Bus</h2>
      </div>
      <div class="p-6">
        <div class="text-center text-gray-500 py-8">
          <svg class="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4 4m0 0l4-4m-12 0h12a2 2 0 002 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2z" />
          </svg>
          <p class="text-gray-500">Aucun bus trouvé</p>
          <p class="text-sm text-gray-400 mt-2">Les bus apparaîtront ici une fois le système opérationnel</p>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DashboardLayout from '@/components/layouts/DashboardLayout.vue'

defineOptions({
  name: 'AdminBuses'
})

// Mock data
const totalBuses = ref(156)
const activeBuses = ref(134)
const maintenanceBuses = ref(22)
const totalCapacity = ref(7850)

// Methods
const refreshData = () => {
  console.log('Refreshing buses data...')
}

const addBus = () => {
  console.log('Adding new bus...')
}
</script>
