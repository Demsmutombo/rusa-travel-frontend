<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-bold">Rusa Travel - Planification des Trajets</h1>
      <p class="text-gray-600 mt-1">Création et gestion des trajets programmés</p>
    </div>

    <!-- Trip Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Trajets Aujourd'hui</p>
            <p class="text-2xl font-bold text-gray-900">{{ tripStats.todayTrips }}</p>
            <p class="text-xs text-green-600 mt-1">En cours</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Cette Semaine</p>
            <p class="text-2xl font-bold text-gray-900">{{ tripStats.weeklyTrips }}</p>
            <p class="text-xs text-green-600 mt-1">+12 vs semaine dernière</p>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Places Disponibles</p>
            <p class="text-2xl font-bold text-gray-900">{{ tripStats.availableSeats }}</p>
            <p class="text-xs text-gray-600 mt-1">Total</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Taux Occupation</p>
            <p class="text-2xl font-bold text-gray-900">{{ tripStats.occupancyRate }}%</p>
            <p class="text-xs text-green-600 mt-1">+5% ce mois</p>
          </div>
          <div class="p-3 bg-orange-100 rounded-full">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Trip Management -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
      <div class="p-6 border-b border-gray-200">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold">Liste des Trajets</h2>
          <button 
            @click="showAddTripModal = true"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Créer un Trajet
          </button>
        </div>
      </div>

      <!-- Search and Filters -->
      <div class="p-6 border-b border-gray-200">
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="flex-1">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Rechercher un trajet..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select v-model="statusFilter" class="px-4 py-2 border border-gray-300 rounded-lg">
            <option value="">Tous les statuts</option>
            <option value="scheduled">Programmé</option>
            <option value="in_progress">En cours</option>
            <option value="completed">Terminé</option>
            <option value="cancelled">Annulé</option>
          </select>
        </div>
      </div>

      <!-- Trip List -->
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trajet</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bus</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Départ</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Places</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chauffeur</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="trip in filteredTrips" :key="trip.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {{ trip.departure }} → {{ trip.destination }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ trip.busPlate }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ formatDate(trip.departureTime) }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ trip.availableSeats }}/{{ trip.totalSeats }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ trip.driver }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="getStatusClass(trip.status)" class="px-2 py-1 text-xs font-semibold rounded-full">
                  {{ getStatusLabel(trip.status) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button @click="editTrip(trip)" class="text-blue-600 hover:text-blue-900 mr-3">Modifier</button>
                <button @click="deleteTrip(trip.id)" class="text-red-600 hover:text-red-900">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Add/Edit Trip Modal -->
    <div v-if="showAddTripModal || editingTrip" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl p-6 w-full max-w-md">
        <h3 class="text-lg font-semibold mb-4">
          {{ editingTrip ? 'Modifier le Trajet' : 'Créer un Trajet' }}
        </h3>
        <form @submit.prevent="saveTrip">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Route</label>
              <select v-model="tripForm.routeId" required class="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option value="">Sélectionner une route</option>
                <option v-for="route in routes" :key="route.id" :value="route.id">
                  {{ route.departure }} → {{ route.destination }}
                </option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Bus</label>
              <select v-model="tripForm.busId" required class="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option value="">Sélectionner un bus</option>
                <option v-for="bus in availableBuses" :key="bus.id" :value="bus.id">
                  {{ bus.plateNumber }} ({{ bus.capacity }} places)
                </option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Date de Départ</label>
              <input 
                v-model="tripForm.departureDate"
                type="date" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Heure de Départ</label>
              <input 
                v-model="tripForm.departureTime"
                type="time" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Places Disponibles</label>
              <input 
                v-model.number="tripForm.availableSeats"
                type="number" 
                required
                min="1"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Chauffeur</label>
              <input 
                v-model="tripForm.driver"
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div class="flex justify-end space-x-3 mt-6">
            <button 
              type="button"
              @click="closeTripModal"
              class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Annuler
            </button>
            <button 
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {{ editingTrip ? 'Mettre à jour' : 'Créer' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'

defineOptions({
  name: 'TripScheduling'
})

interface Trip {
  id: number
  routeId: number
  busId: number
  departure: string
  destination: string
  busPlate: string
  departureTime: string
  totalSeats: number
  availableSeats: number
  driver: string
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled'
}

interface Route {
  id: number
  departure: string
  destination: string
}

interface Bus {
  id: number
  plateNumber: string
  capacity: number
  status: string
}

// Trip statistics
const tripStats = reactive({
  todayTrips: 12,
  weeklyTrips: 68,
  availableSeats: 285,
  occupancyRate: 72
})

// Mock data
const routes = ref<Route[]>([
  { id: 1, departure: 'Kinshasa', destination: 'Lubumbashi' },
  { id: 2, departure: 'Kinshasa', destination: 'Kisangani' },
  { id: 3, departure: 'Kinshasa', destination: 'Matadi' },
  { id: 4, departure: 'Lubumbashi', destination: 'Kisangani' }
])

const buses = ref<Bus[]>([
  { id: 1, plateNumber: 'CD-123-AB', capacity: 45, status: 'active' },
  { id: 2, plateNumber: 'CD-456-CD', capacity: 50, status: 'active' },
  { id: 3, plateNumber: 'CD-789-EF', capacity: 55, status: 'maintenance' },
  { id: 4, plateNumber: 'CD-012-GH', capacity: 48, status: 'active' }
])

const trips = ref<Trip[]>([
  { 
    id: 1, 
    routeId: 1, 
    busId: 1, 
    departure: 'Kinshasa', 
    destination: 'Lubumbashi', 
    busPlate: 'CD-123-AB', 
    departureTime: '2024-03-15T08:00:00', 
    totalSeats: 45, 
    availableSeats: 12, 
    driver: 'Jean Mutombo', 
    status: 'scheduled' 
  },
  { 
    id: 2, 
    routeId: 2, 
    busId: 2, 
    departure: 'Kinshasa', 
    destination: 'Kisangani', 
    busPlate: 'CD-456-CD', 
    departureTime: '2024-03-15T10:30:00', 
    totalSeats: 50, 
    availableSeats: 25, 
    driver: 'Pierre Lumumba', 
    status: 'in_progress' 
  },
  { 
    id: 3, 
    routeId: 3, 
    busId: 4, 
    departure: 'Kinshasa', 
    destination: 'Matadi', 
    busPlate: 'CD-012-GH', 
    departureTime: '2024-03-14T14:00:00', 
    totalSeats: 48, 
    availableSeats: 0, 
    driver: 'Thomas Tshisekedi', 
    status: 'completed' 
  },
  { 
    id: 4, 
    routeId: 1, 
    busId: 1, 
    departure: 'Kinshasa', 
    destination: 'Lubumbashi', 
    busPlate: 'CD-123-AB', 
    departureTime: '2024-03-16T06:00:00', 
    totalSeats: 45, 
    availableSeats: 30, 
    driver: 'Jean Mutombo', 
    status: 'scheduled' 
  }
])

// Search and filter
const searchQuery = ref('')
const statusFilter = ref('')

// Modal state
const showAddTripModal = ref(false)
const editingTrip = ref<Trip | null>(null)

// Trip form
const tripForm = reactive({
  routeId: 0,
  busId: 0,
  departureDate: '',
  departureTime: '',
  availableSeats: 0,
  driver: ''
})

// Computed properties
const availableBuses = computed(() => {
  return buses.value.filter(bus => bus.status === 'active')
})

const filteredTrips = computed(() => {
  return trips.value.filter(trip => {
    const matchesSearch = !searchQuery.value || 
      trip.departure.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      trip.destination.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      trip.busPlate.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      trip.driver.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesStatus = !statusFilter.value || trip.status === statusFilter.value
    
    return matchesSearch && matchesStatus
  })
})

// Status helpers
const getStatusClass = (status: string) => {
  switch (status) {
    case 'scheduled':
      return 'bg-blue-100 text-blue-800'
    case 'in_progress':
      return 'bg-yellow-100 text-yellow-800'
    case 'completed':
      return 'bg-green-100 text-green-800'
    case 'cancelled':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'scheduled':
      return 'Programmé'
    case 'in_progress':
      return 'En cours'
    case 'completed':
      return 'Terminé'
    case 'cancelled':
      return 'Annulé'
    default:
      return status
  }
}

// Date formatter
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// CRUD operations
const editTrip = (trip: Trip) => {
  editingTrip.value = trip
  const date = new Date(trip.departureTime)
  tripForm.routeId = trip.routeId
  tripForm.busId = trip.busId
  tripForm.departureDate = date.toISOString().split('T')[0]
  tripForm.departureTime = date.toTimeString().slice(0, 5)
  tripForm.availableSeats = trip.availableSeats
  tripForm.driver = trip.driver
}

const deleteTrip = (id: number) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce trajet ?')) {
    trips.value = trips.value.filter(trip => trip.id !== id)
    updateStats()
  }
}

const saveTrip = () => {
  const selectedRoute = routes.value.find(r => r.id === tripForm.routeId)
  const selectedBus = buses.value.find(b => b.id === tripForm.busId)
  
  if (!selectedRoute || !selectedBus) return

  const departureDateTime = `${tripForm.departureDate}T${tripForm.departureTime}:00`

  if (editingTrip.value) {
    // Update existing trip
    const index = trips.value.findIndex(trip => trip.id === editingTrip.value!.id)
    if (index !== -1) {
      trips.value[index] = {
        ...trips.value[index],
        routeId: tripForm.routeId,
        busId: tripForm.busId,
        departure: selectedRoute.departure,
        destination: selectedRoute.destination,
        busPlate: selectedBus.plateNumber,
        departureTime: departureDateTime,
        totalSeats: selectedBus.capacity,
        availableSeats: tripForm.availableSeats,
        driver: tripForm.driver
      }
    }
  } else {
    // Add new trip
    const newTrip: Trip = {
      id: Math.max(...trips.value.map(t => t.id)) + 1,
      routeId: tripForm.routeId,
      busId: tripForm.busId,
      departure: selectedRoute.departure,
      destination: selectedRoute.destination,
      busPlate: selectedBus.plateNumber,
      departureTime: departureDateTime,
      totalSeats: selectedBus.capacity,
      availableSeats: tripForm.availableSeats,
      driver: tripForm.driver,
      status: 'scheduled'
    }
    trips.value.push(newTrip)
  }
  
  updateStats()
  closeTripModal()
}

const closeTripModal = () => {
  showAddTripModal.value = false
  editingTrip.value = null
  
  // Reset form
  tripForm.routeId = 0
  tripForm.busId = 0
  tripForm.departureDate = ''
  tripForm.departureTime = ''
  tripForm.availableSeats = 0
  tripForm.driver = ''
}

const updateStats = () => {
  const today = new Date().toISOString().split('T')[0]
  const todayTrips = trips.value.filter(trip => 
    trip.departureTime.startsWith(today) && trip.status !== 'cancelled'
  )
  
  const weekStart = new Date()
  weekStart.setDate(weekStart.getDate() - weekStart.getDay())
  const weekEnd = new Date(weekStart)
  weekEnd.setDate(weekEnd.getDate() + 6)
  
  const weeklyTrips = trips.value.filter(trip => {
    const tripDate = new Date(trip.departureTime)
    return tripDate >= weekStart && tripDate <= weekEnd && trip.status !== 'cancelled'
  })
  
  tripStats.todayTrips = todayTrips.length
  tripStats.weeklyTrips = weeklyTrips.length
  tripStats.availableSeats = trips.value
    .filter(trip => trip.status === 'scheduled' || trip.status === 'in_progress')
    .reduce((sum, trip) => sum + trip.availableSeats, 0)
  
  const totalSeats = trips.value
    .filter(trip => trip.status !== 'cancelled')
    .reduce((sum, trip) => sum + trip.totalSeats, 0)
  
  const occupiedSeats = totalSeats - tripStats.availableSeats
  tripStats.occupancyRate = totalSeats > 0 ? Math.round((occupiedSeats / totalSeats) * 100) : 0
}
</script>
            <p class="text-xs text-green-600 mt-1">+12% ce mois</p>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Satisfaction Client</p>
            <p class="text-2xl font-bold text-gray-900">{{ performanceStats.customerSatisfaction }}%</p>
            <p class="text-xs text-green-600 mt-1">+5% ce mois</p>
          </div>
          <div class="p-3 bg-yellow-100 rounded-full">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">ROI</p>
            <p class="text-2xl font-bold text-gray-900">{{ performanceStats.roi }}%</p>
            <p class="text-xs text-green-600 mt-1">+15% ce mois</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Performance Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Performance Trend -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Tendance de Performance</h3>
        <div class="h-64">
          <canvas ref="performanceTrendChartCanvas"></canvas>
        </div>
      </div>

      <!-- KPI Comparison -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Comparaison des KPI</h3>
        <div class="h-64">
          <canvas ref="kpiComparisonChartCanvas"></canvas>
        </div>
      </div>
    </div>

    <!-- Department Performance -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-6">Performance par Département</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="dept in departmentPerformance" :key="dept.name" class="text-center">
          <div class="relative inline-flex items-center justify-center">
            <svg class="w-24 h-24 transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="36"
                stroke="currentColor"
                stroke-width="8"
                fill="none"
                class="text-gray-200"
              />
              <circle
                cx="48"
                cy="48"
                r="36"
                stroke="currentColor"
                stroke-width="8"
                fill="none"
                :stroke-dasharray="`${dept.performance * 2.26} 226`"
                class="text-blue-600"
              />
            </svg>
            <div class="absolute">
              <p class="text-2xl font-bold">{{ dept.performance }}%</p>
            </div>
          </div>
          <h3 class="font-medium mt-3">{{ dept.name }}</h3>
          <p class="text-sm text-gray-500">{{ dept.kpi }} KPIs</p>
        </div>
      </div>
    </div>

    <!-- Performance Metrics -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Revenue Performance -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Performance Revenus</h3>
        <div class="space-y-4">
          <div v-for="metric in revenueMetrics" :key="metric.name" class="flex justify-between items-center">
            <div>
              <p class="text-sm font-medium text-gray-900">{{ metric.name }}</p>
              <p class="text-xs text-gray-500">{{ metric.description }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm font-bold">{{ metric.value }}</p>
              <p class="text-xs" :class="metric.trend > 0 ? 'text-green-600' : 'text-red-600'">
                {{ metric.trend > 0 ? '+' : '' }}{{ metric.trend }}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Operational Metrics -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Métriques Opérationnelles</h3>
        <div class="space-y-4">
          <div v-for="metric in operationalMetrics" :key="metric.name" class="flex justify-between items-center">
            <div>
              <p class="text-sm font-medium text-gray-900">{{ metric.name }}</p>
              <p class="text-xs text-gray-500">{{ metric.description }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm font-bold">{{ metric.value }}</p>
              <p class="text-xs" :class="metric.trend > 0 ? 'text-green-600' : 'text-red-600'">
                {{ metric.trend > 0 ? '+' : '' }}{{ metric.trend }}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Customer Metrics -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Métriques Client</h3>
        <div class="space-y-4">
          <div v-for="metric in customerMetrics" :key="metric.name" class="flex justify-between items-center">
            <div>
              <p class="text-sm font-medium text-gray-900">{{ metric.name }}</p>
              <p class="text-xs text-gray-500">{{ metric.description }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm font-bold">{{ metric.value }}</p>
              <p class="text-xs" :class="metric.trend > 0 ? 'text-green-600' : 'text-red-600'">
                {{ metric.trend > 0 ? '+' : '' }}{{ metric.trend }}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Performance Goals -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold">Objectifs de Performance</h2>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Nouvel Objectif
        </button>
      </div>
      
      <div class="space-y-4">
        <div v-for="goal in performanceGoals" :key="goal.id" class="border border-gray-200 rounded-lg p-4">
          <div class="flex justify-between items-start mb-3">
            <div>
              <h3 class="font-medium text-gray-900">{{ goal.title }}</h3>
              <p class="text-sm text-gray-500 mt-1">{{ goal.description }}</p>
            </div>
            <span
              :class="{
                'px-2 py-1 text-xs rounded-full': true,
                'bg-green-100 text-green-800': goal.status === 'achieved',
                'bg-yellow-100 text-yellow-800': goal.status === 'in-progress',
                'bg-red-100 text-red-800': goal.status === 'behind'
              }"
            >
              {{ getGoalStatusText(goal.status) }}
            </span>
          </div>
          <div class="space-y-2">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Progression</span>
              <span class="font-medium">{{ goal.current }} / {{ goal.target }}</span>
            </div>
            <div class="bg-gray-200 rounded-full h-2">
              <div 
                class="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                :style="{ width: (goal.current / goal.target * 100) + '%' }"
              ></div>
            </div>
            <div class="flex justify-between text-xs text-gray-500">
              <span>Date limite: {{ goal.deadline }}</span>
              <span>{{ Math.round(goal.current / goal.target * 100) }}% complété</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Chart from 'chart.js/auto'

defineOptions({
  name: 'ManagerPerformance'
})

// Chart refs
const performanceTrendChartCanvas = ref<HTMLCanvasElement | null>(null)
const kpiComparisonChartCanvas = ref<HTMLCanvasElement | null>(null)

// Performance statistics
const performanceStats = reactive({
  overallScore: 87,
  operationalEfficiency: 92,
  customerSatisfaction: 94,
  roi: 156
})

// Department performance
const departmentPerformance = ref([
  { name: 'Ventes', performance: 94, kpi: 12 },
  { name: 'Support', performance: 88, kpi: 8 },
  { name: 'IT', performance: 85, kpi: 6 },
  { name: 'Marketing', performance: 82, kpi: 10 }
])

// Revenue metrics
const revenueMetrics = ref([
  {
    name: 'Revenus Mensuels',
    description: 'Total des revenus ce mois',
    value: '45.2M Fb',
    trend: 18
  },
  {
    name: 'Croissance Annuelle',
    description: 'Croissance vs année dernière',
    value: '28%',
    trend: 5
  },
  {
    name: 'Marge Bénéficiaire',
    description: 'Marge moyenne',
    value: '22%',
    trend: -3
  },
  {
    name: 'Valeur Client',
    description: 'Valeur moyenne par client',
    value: '125K Fb',
    trend: 12
  }
])

// Operational metrics
const operationalMetrics = ref([
  {
    name: 'Taux Utilisation',
    description: 'Utilisation des ressources',
    value: '87%',
    trend: 8
  },
  {
    name: 'Temps Traitement',
    description: 'Temps moyen de traitement',
    value: '2.4h',
    trend: -15
  },
  {
    name: 'Taux Succès',
    description: 'Taux de réussite des opérations',
    value: '96%',
    trend: 2
  },
  {
    name: 'Productivité',
    description: 'Output par employé',
    value: '142',
    trend: 11
  }
])

// Customer metrics
const customerMetrics = ref([
  {
    name: 'Satisfaction',
    description: 'Score de satisfaction client',
    value: '4.7/5',
    trend: 3
  },
  {
    name: 'Rétention',
    description: 'Taux de rétention client',
    value: '89%',
    trend: 6
  },
  {
    name: 'Acquisition',
    description: 'Nouveaux clients ce mois',
    value: '234',
    trend: 22
  },
  {
    name: 'Support Response',
    description: 'Temps de réponse support',
    value: '1.8h',
    trend: -20
  }
])

// Performance goals
const performanceGoals = ref([
  {
    id: 1,
    title: 'Augmenter les revenus de 20%',
    description: 'Atteindre 54M Fb de revenus mensuels',
    current: 45.2,
    target: 54,
    status: 'in-progress',
    deadline: '31 Mars 2024'
  },
  {
    id: 2,
    title: 'Réduire le temps de réponse',
    description: 'Temps de réponse support sous 1h',
    current: 1.8,
    target: 1,
    status: 'behind',
    deadline: '15 Avril 2024'
  },
  {
    id: 3,
    title: 'Améliorer la satisfaction client',
    description: 'Atteindre 4.8/5 de satisfaction',
    current: 4.7,
    target: 4.8,
    status: 'in-progress',
    deadline: '30 Avril 2024'
  },
  {
    id: 4,
    title: 'Former l\'équipe',
    description: '100% des employés formés aux nouveaux processus',
    current: 87,
    target: 100,
    status: 'in-progress',
    deadline: '31 Mars 2024'
  }
])

const getGoalStatusText = (status: string): string => {
  switch (status) {
    case 'achieved':
      return 'Atteint'
    case 'in-progress':
      return 'En cours'
    case 'behind':
      return 'En retard'
    default:
      return status
  }
}

// Chart initialization
onMounted(() => {
  // Performance Trend Chart
  const performanceTrendCanvas = performanceTrendChartCanvas.value
  if (performanceTrendCanvas) {
    new Chart(performanceTrendCanvas, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [
          {
            label: 'Performance Globale',
            data: [78, 82, 85, 83, 87, 87],
            borderColor: 'rgb(59, 130, 246)',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4
          },
          {
            label: 'Objectif',
            data: [80, 82, 84, 86, 88, 90],
            borderColor: 'rgb(156, 163, 175)',
            borderDash: [5, 5],
            backgroundColor: 'transparent',
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    })
  }

  // KPI Comparison Chart
  const kpiComparisonCanvas = kpiComparisonChartCanvas.value
  if (kpiComparisonCanvas) {
    new Chart(kpiComparisonCanvas, {
      type: 'radar',
      data: {
        labels: ['Revenus', 'Opérationnel', 'Client', 'Qualité', 'Innovation', 'Équipe'],
        datasets: [
          {
            label: 'Actuel',
            data: [87, 92, 94, 88, 75, 85],
            borderColor: 'rgb(59, 130, 246)',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            pointBackgroundColor: 'rgb(59, 130, 246)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(59, 130, 246)'
          },
          {
            label: 'Précédent',
            data: [82, 85, 89, 85, 70, 80],
            borderColor: 'rgb(156, 163, 175)',
            backgroundColor: 'rgba(156, 163, 175, 0.2)',
            pointBackgroundColor: 'rgb(156, 163, 175)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(156, 163, 175)'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    })
  }
})
</script>
