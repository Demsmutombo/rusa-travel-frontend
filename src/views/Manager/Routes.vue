<template>
  <!-- Routes Overview -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Total Routes</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ totalRoutes.toLocaleString() }}</p>
          <p class="text-xs text-green-600 mt-1">+12% ce mois</p>
        </div>
        <div class="p-2 sm:p-3 bg-blue-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Distance Totale</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ totalDistance.toLocaleString() }}</p>
          <p class="text-xs text-gray-500 mt-1">km</p>
        </div>
        <div class="p-2 sm:p-3 bg-green-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Routes Actives</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ activeRoutes.toLocaleString() }}</p>
          <p class="text-xs text-green-600 mt-1">92% du total</p>
        </div>
        <div class="p-2 sm:p-3 bg-purple-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Prix Moyen</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ averagePrice.toLocaleString() }}</p>
          <p class="text-xs text-gray-500 mt-1">FC</p>
        </div>
        <div class="p-2 sm:p-3 bg-orange-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- Routes Table -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-200">
    <div class="p-4 sm:p-6 border-b border-gray-200">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h2 class="text-lg sm:text-xl font-semibold text-gray-900">Gestion des Routes</h2>
        <div class="flex flex-col sm:flex-row gap-3">
          <button
            @click="openAddModal"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Créer une Route
          </button>
          <button
            @click="exportRoutes"
            class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            Exporter
          </button>
        </div>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Route
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Distance
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Prix
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Durée
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Statut
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="route in routes" :key="route.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">{{ route.departureCity }} → {{ route.destinationCity }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ route.distance }} km</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ route.ticketPrice.toLocaleString() }} FC</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ route.estimatedDuration }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span :class="getStatusClass(route.status)" class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full">
                {{ getStatusLabel(route.status) }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <div class="flex gap-2">
                <button
                  @click="editRoute(route)"
                  class="text-blue-600 hover:text-blue-900 text-sm"
                >
                  Modifier
                </button>
                <button
                  @click="deleteRoute(route.id)"
                  class="text-red-600 hover:text-red-900 text-sm"
                >
                  Supprimer
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Route Modal -->
  <teleport to="body">
    <div v-if="showModal" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" @click="closeModal">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full w-full max-w-md mx-4">
          <form @submit.prevent="saveRoute">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
                {{ isEditing ? 'Modifier la Route' : 'Créer une Route' }}
              </h3>

              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Ville de Départ</label>
                  <input
                    v-model="routeForm.departureCity"
                    type="text"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">Ville de Destination</label>
                  <input
                    v-model="routeForm.destinationCity"
                    type="text"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">Distance (km)</label>
                  <input
                    v-model="routeForm.distance"
                    type="number"
                    min="1"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">Prix du Billet (FC)</label>
                  <input
                    v-model="routeForm.ticketPrice"
                    type="number"
                    min="0"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">Durée Estimée</label>
                  <input
                    v-model="routeForm.estimatedDuration"
                    type="text"
                    placeholder="ex: 2h 30min"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">Statut</label>
                  <select
                    v-model="routeForm.status"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                :disabled="isSaving"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
              >
                <span v-if="isSaving">Enregistrement...</span>
                <span v-else>{{ isEditing ? 'Mettre à jour' : 'Créer' }}</span>
              </button>
              <button
                type="button"
                @click="closeModal"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

defineOptions({
  name: 'ManagerRoutes'
})

// Types
interface Route {
  id: number
  departureCity: string
  destinationCity: string
  distance: number
  ticketPrice: number
  estimatedDuration: string
  status: 'active' | 'inactive'
}

// Reactive data
const routes = ref<Route[]>([
  { id: 1, departureCity: 'Kinshasa', destinationCity: 'Lubumbashi', distance: 1650, ticketPrice: 85000, estimatedDuration: '24h', status: 'active' },
  { id: 2, departureCity: 'Kinshasa', destinationCity: 'Matadi', distance: 350, ticketPrice: 15000, estimatedDuration: '6h', status: 'active' },
  { id: 3, departureCity: 'Lubumbashi', destinationCity: 'Kisangani', distance: 1200, ticketPrice: 65000, estimatedDuration: '18h', status: 'active' },
  { id: 4, departureCity: 'Kinshasa', destinationCity: 'Bukavu', distance: 1550, ticketPrice: 75000, estimatedDuration: '20h', status: 'inactive' },
  { id: 5, departureCity: 'Matadi', destinationCity: 'Boma', distance: 150, ticketPrice: 8000, estimatedDuration: '3h', status: 'active' }
])

// Modal state
const showModal = ref(false)
const isEditing = ref(false)
const isSaving = ref(false)
const currentRouteId = ref<number | null>(null)

// Form data
const routeForm = ref({
  departureCity: '',
  destinationCity: '',
  distance: 100,
  ticketPrice: 10000,
  estimatedDuration: '',
  status: 'active' as 'active' | 'inactive'
})

// Computed properties
const totalRoutes = computed(() => routes.value.length)
const activeRoutes = computed(() => routes.value.filter(route => route.status === 'active').length)
const totalDistance = computed(() => routes.value.reduce((sum, route) => sum + route.distance, 0))
const averagePrice = computed(() => {
  if (routes.value.length === 0) return 0
  return Math.round(routes.value.reduce((sum, route) => sum + route.ticketPrice, 0) / routes.value.length)
})

// Methods
const openAddModal = () => {
  isEditing.value = false
  currentRouteId.value = null
  routeForm.value = {
    departureCity: '',
    destinationCity: '',
    distance: 100,
    ticketPrice: 10000,
    estimatedDuration: '',
    status: 'active'
  }
  showModal.value = true
}

const editRoute = (route: Route) => {
  isEditing.value = true
  currentRouteId.value = route.id
  routeForm.value = { ...route }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  isEditing.value = false
  currentRouteId.value = null
}

const saveRoute = async () => {
  isSaving.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (isEditing.value && currentRouteId.value) {
      // Update existing route
      const index = routes.value.findIndex(route => route.id === currentRouteId.value)
      if (index !== -1) {
        routes.value[index] = { ...routeForm.value, id: currentRouteId.value }
      }
    } else {
      // Add new route
      const newRoute: Route = {
        id: Math.max(...routes.value.map(r => r.id)) + 1,
        ...routeForm.value
      }
      routes.value.push(newRoute)
    }
    
    closeModal()
  } finally {
    isSaving.value = false
  }
}

const deleteRoute = async (id: number) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette route ?')) {
    routes.value = routes.value.filter(route => route.id !== id)
  }
}

const exportRoutes = () => {
  const csvContent = [
    ['Départ', 'Destination', 'Distance (km)', 'Prix (FC)', 'Durée', 'Statut'],
    ...routes.value.map(route => [
      route.departureCity,
      route.destinationCity,
      route.distance.toString(),
      route.ticketPrice.toString(),
      route.estimatedDuration,
      getStatusLabel(route.status)
    ])
  ].map(row => row.join(',')).join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `routes_${new Date().toISOString().split('T')[0]}.csv`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const getStatusClass = (status: string) => {
  const classes = {
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-gray-100 text-gray-800'
  }
  return classes[status as keyof typeof classes] || 'bg-gray-100 text-gray-800'
}

const getStatusLabel = (status: string) => {
  const labels = {
    active: 'Active',
    inactive: 'Inactive'
  }
  return labels[status as keyof typeof labels] || status
}
</script>
