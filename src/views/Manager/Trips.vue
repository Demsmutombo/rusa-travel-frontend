<template>
  <!-- Trips Overview -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Total Trajets</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ totalTrips.toLocaleString() }}</p>
          <p class="text-xs text-green-600 mt-1">+15% ce mois</p>
        </div>
        <div class="p-2 sm:p-3 bg-blue-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Trajets Aujourd'hui</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ todayTrips.toLocaleString() }}</p>
          <p class="text-xs text-green-600 mt-1">En cours</p>
        </div>
        <div class="p-2 sm:p-3 bg-green-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Places Disponibles</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ availableSeats.toLocaleString() }}</p>
          <p class="text-xs text-gray-500 mt-1">Sur tous les trajets</p>
        </div>
        <div class="p-2 sm:p-3 bg-purple-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Revenus Estimés</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ estimatedRevenue.toLocaleString() }}</p>
          <p class="text-xs text-gray-500 mt-1">FC</p>
        </div>
        <div class="p-2 sm:p-3 bg-orange-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 0 3 1.343 3 0 3-1.657 0 3-1.343m0 6a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- Trips Table -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-200">
    <div class="p-4 sm:p-6 border-b border-gray-200">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h2 class="text-lg sm:text-xl font-semibold text-gray-900">Gestion des Trajets</h2>
        <div class="flex flex-col sm:flex-row gap-3">
          <button
            @click="openAddModal"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Créer un Trajet
          </button>
          <button
            @click="exportTrips"
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
              Bus
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Départ
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Arrivée
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Places
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Prix
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="trip in trips" :key="trip.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">{{ getRouteName(trip.routeId) }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ getBusName(trip.busId) }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ formatDateTime(trip.departureTime) }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ formatDateTime(trip.arrivalTime) }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ trip.availableSeats }}/{{ trip.totalSeats }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ trip.price.toLocaleString() }} FC</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <div class="flex gap-2">
                <button
                  @click="editTrip(trip)"
                  class="text-blue-600 hover:text-blue-900 text-sm"
                >
                  Modifier
                </button>
                <button
                  @click="deleteTrip(trip.id)"
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

  <!-- Trip Modal -->
  <teleport to="body">
    <div v-if="showModal" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" @click="closeModal">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full w-full max-w-md mx-4">
          <form @submit.prevent="saveTrip">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
                {{ isEditing ? 'Modifier le Trajet' : 'Créer un Trajet' }}
              </h3>

              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Route</label>
                  <select
                    v-model="tripForm.routeId"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Sélectionner une route...</option>
                    <option v-for="route in availableRoutes" :key="route.id" :value="route.id">
                      {{ route.departureCity }} → {{ route.destinationCity }}
                    </option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">Bus</label>
                  <select
                    v-model="tripForm.busId"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Sélectionner un bus...</option>
                    <option v-for="bus in availableBuses" :key="bus.id" :value="bus.id">
                      {{ bus.name }} ({{ bus.capacity }} places)
                    </option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">Heure de Départ</label>
                  <input
                    v-model="tripForm.departureTime"
                    type="datetime-local"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">Heure d'Arrivée</label>
                  <input
                    v-model="tripForm.arrivalTime"
                    type="datetime-local"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">Places Disponibles</label>
                  <input
                    v-model="tripForm.availableSeats"
                    type="number"
                    min="0"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">Prix (FC)</label>
                  <input
                    v-model="tripForm.price"
                    type="number"
                    min="0"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
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
  name: 'ManagerTrips'
})

// Types
interface Trip {
  id: number
  routeId: number
  busId: number
  departureTime: string
  arrivalTime: string
  totalSeats: number
  availableSeats: number
  price: number
}

interface Route {
  id: number
  departureCity: string
  destinationCity: string
}

interface Bus {
  id: number
  name: string
  capacity: number
}

// Reactive data
const trips = ref<Trip[]>([
  { id: 1, routeId: 1, busId: 1, departureTime: '2024-03-15T06:00', arrivalTime: '2024-03-16T06:00', totalSeats: 45, availableSeats: 12, price: 85000 },
  { id: 2, routeId: 2, busId: 2, departureTime: '2024-03-15T08:00', arrivalTime: '2024-03-15T14:00', totalSeats: 60, availableSeats: 25, price: 15000 },
  { id: 3, routeId: 3, busId: 3, departureTime: '2024-03-15T10:00', arrivalTime: '2024-03-16T04:00', totalSeats: 80, availableSeats: 45, price: 65000 },
  { id: 4, routeId: 1, busId: 4, departureTime: '2024-03-15T14:00', arrivalTime: '2024-03-16T14:00', totalSeats: 25, availableSeats: 8, price: 90000 },
  { id: 5, routeId: 5, busId: 5, departureTime: '2024-03-15T16:00', arrivalTime: '2024-03-15T19:00', totalSeats: 40, availableSeats: 30, price: 8000 }
])

const availableRoutes = ref<Route[]>([
  { id: 1, departureCity: 'Kinshasa', destinationCity: 'Lubumbashi' },
  { id: 2, departureCity: 'Kinshasa', destinationCity: 'Matadi' },
  { id: 3, departureCity: 'Lubumbashi', destinationCity: 'Kisangani' },
  { id: 4, departureCity: 'Kinshasa', destinationCity: 'Bukavu' },
  { id: 5, departureCity: 'Matadi', destinationCity: 'Boma' }
])

const availableBuses = ref<Bus[]>([
  { id: 1, name: 'Express Line 1', capacity: 45 },
  { id: 2, name: 'City Bus 5', capacity: 60 },
  { id: 3, name: 'Rapid Transit 2', capacity: 80 },
  { id: 4, name: 'Mini Express 3', capacity: 25 },
  { id: 5, name: 'Luxury Coach 1', capacity: 40 }
])

// Modal state
const showModal = ref(false)
const isEditing = ref(false)
const isSaving = ref(false)
const currentTripId = ref<number | null>(null)

// Form data
const tripForm = ref({
  routeId: 0,
  busId: 0,
  departureTime: '',
  arrivalTime: '',
  availableSeats: 0,
  price: 0
})

// Computed properties
const totalTrips = computed(() => trips.value.length)
const todayTrips = computed(() => {
  const today = new Date().toISOString().split('T')[0]
  return trips.value.filter(trip => trip.departureTime.startsWith(today)).length
})
const availableSeats = computed(() => trips.value.reduce((sum, trip) => sum + trip.availableSeats, 0))
const estimatedRevenue = computed(() => trips.value.reduce((sum, trip) => sum + (trip.price * (trip.totalSeats - trip.availableSeats)), 0))

// Methods
const openAddModal = () => {
  isEditing.value = false
  currentTripId.value = null
  tripForm.value = {
    routeId: 0,
    busId: 0,
    departureTime: '',
    arrivalTime: '',
    availableSeats: 0,
    price: 0
  }
  showModal.value = true
}

const editTrip = (trip: Trip) => {
  isEditing.value = true
  currentTripId.value = trip.id
  tripForm.value = { ...trip }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  isEditing.value = false
  currentTripId.value = null
}

const saveTrip = async () => {
  isSaving.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (isEditing.value && currentTripId.value) {
      // Update existing trip
      const index = trips.value.findIndex(trip => trip.id === currentTripId.value)
      if (index !== -1) {
        const bus = availableBuses.value.find(b => b.id === tripForm.value.busId)
        trips.value[index] = { 
          ...tripForm.value, 
          id: currentTripId.value,
          totalSeats: bus?.capacity || 0
        }
      }
    } else {
      // Add new trip
      const bus = availableBuses.value.find(b => b.id === tripForm.value.busId)
      const newTrip: Trip = {
        id: Math.max(...trips.value.map(t => t.id)) + 1,
        ...tripForm.value,
        totalSeats: bus?.capacity || 0
      }
      trips.value.push(newTrip)
    }
    
    closeModal()
  } finally {
    isSaving.value = false
  }
}

const deleteTrip = async (id: number) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce trajet ?')) {
    trips.value = trips.value.filter(trip => trip.id !== id)
  }
}

const exportTrips = () => {
  const csvContent = [
    ['Route', 'Bus', 'Départ', 'Arrivée', 'Places Disponibles', 'Total Places', 'Prix'],
    ...trips.value.map(trip => [
      getRouteName(trip.routeId),
      getBusName(trip.busId),
      formatDateTime(trip.departureTime),
      formatDateTime(trip.arrivalTime),
      trip.availableSeats.toString(),
      trip.totalSeats.toString(),
      trip.price.toString()
    ])
  ].map(row => row.join(',')).join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `trips_${new Date().toISOString().split('T')[0]}.csv`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const getRouteName = (routeId: number) => {
  const route = availableRoutes.value.find(r => r.id === routeId)
  return route ? `${route.departureCity} → ${route.destinationCity}` : 'Route inconnue'
}

const getBusName = (busId: number) => {
  const bus = availableBuses.value.find(b => b.id === busId)
  return bus ? bus.name : 'Bus inconnu'
}

const formatDateTime = (dateTime: string) => {
  const date = new Date(dateTime)
  return date.toLocaleString('fr-FR', { 
    day: '2-digit', 
    month: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit' 
  })
}
</script>
