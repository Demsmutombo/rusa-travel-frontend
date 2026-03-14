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
        @click="addRoute"
        class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Ajouter une Route
      </button>
    </div>

    <!-- Routes Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Routes</p>
            <p class="text-2xl font-bold text-gray-900">{{ totalRoutes.toLocaleString() }}</p>
            <p class="text-xs text-green-600 mt-1">+8% ce mois</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Routes Actives</p>
            <p class="text-2xl font-bold text-green-600">{{ activeRoutes.toLocaleString() }}</p>
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
            <p class="text-sm font-medium text-gray-600">Villes Desservies</p>
            <p class="text-2xl font-bold text-purple-600">{{ citiesServed.toLocaleString() }}</p>
            <p class="text-xs text-gray-500 mt-1">Sur le réseau</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Distance Totale</p>
            <p class="text-2xl font-bold text-orange-600">{{ totalDistance.toLocaleString() }} km</p>
            <p class="text-xs text-gray-500 mt-1">Par jour</p>
          </div>
          <div class="p-3 bg-orange-100 rounded-full">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Routes Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-900">Liste des Routes</h2>
      </div>
      <div class="p-6">
        <div class="text-center text-gray-500 py-8">
          <svg class="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0z" />
          </svg>
          <p class="text-gray-500">Aucune route trouvée</p>
          <p class="text-sm text-gray-400 mt-2">Les routes apparaîtront ici une fois le système opérationnel</p>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DashboardLayout from '@/components/layouts/DashboardLayout.vue'

defineOptions({
  name: 'AdminRoutes'
})

// Mock data
const totalRoutes = ref(89)
const activeRoutes = ref(76)
const citiesServed = ref(45)
const totalDistance = ref(12500)

// Methods
const refreshData = () => {
  console.log('Refreshing routes data...')
}

const addRoute = () => {
  console.log('Adding new route...')
}
</script>
