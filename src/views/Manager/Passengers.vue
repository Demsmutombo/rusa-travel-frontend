<template>
  <!-- Passengers Overview -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Total Passagers</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ totalPassengers.toLocaleString() }}</p>
          <p class="text-xs text-green-600 mt-1">+22% ce mois</p>
        </div>
        <div class="p-2 sm:p-3 bg-blue-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Passagers Actifs</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ activePassengers.toLocaleString() }}</p>
          <p class="text-xs text-green-600 mt-1">85% du total</p>
        </div>
        <div class="p-2 sm:p-3 bg-green-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Nouveaux ce Mois</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ newPassengers.toLocaleString() }}</p>
          <p class="text-xs text-green-600 mt-1">+15% vs mois dernier</p>
        </div>
        <div class="p-2 sm:p-3 bg-purple-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Voyages Moyens</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ averageTrips }}</p>
          <p class="text-xs text-gray-500 mt-1">Par passager</p>
        </div>
        <div class="p-2 sm:p-3 bg-orange-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- Passengers Table -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-200">
    <div class="p-4 sm:p-6 border-b border-gray-200">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h2 class="text-lg sm:text-xl font-semibold text-gray-900">Gestion des Passagers</h2>
        <div class="flex flex-col sm:flex-row gap-3">
          <button
            @click="exportPassengers"
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
              Passager
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date d'inscription
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Voyages
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
          <tr v-for="passenger in passengers" :key="passenger.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <div class="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span class="text-sm font-medium text-gray-600">{{ passenger.name.charAt(0) }}</span>
                  </div>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">{{ passenger.name }}</div>
                  <div class="text-xs text-gray-500">#{{ passenger.id.toString().padStart(6, '0') }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ passenger.email }}</div>
              <div class="text-xs text-gray-500">{{ passenger.phone }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ formatDate(passenger.registrationDate) }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ passenger.totalTrips }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span :class="getStatusClass(passenger.status)" class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full">
                {{ getStatusLabel(passenger.status) }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <div class="flex gap-2">
                <button
                  @click="viewDetails(passenger)"
                  class="text-blue-600 hover:text-blue-900 text-sm"
                >
                  Détails
                </button>
                <button
                  @click="togglePassengerStatus(passenger)"
                  :class="passenger.status === 'active' ? 'text-orange-600 hover:text-orange-900' : 'text-green-600 hover:text-green-900'"
                  class="text-sm"
                >
                  {{ passenger.status === 'active' ? 'Désactiver' : 'Activer' }}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Passenger Details Modal -->
  <teleport to="body">
    <div v-if="showDetailsModal" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" @click="closeDetailsModal">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full w-full max-w-md mx-4 sm:max-w-none">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">Détails du Passager #{{ selectedPassenger?.id.toString().padStart(6, '0') }}</h3>
            
            <div v-if="selectedPassenger" class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-3">
                <div>
                  <p class="text-sm font-medium text-gray-500">Informations Personnelles</p>
                  <p class="text-sm text-gray-900">{{ selectedPassenger.name }}</p>
                  <p class="text-xs text-gray-500">{{ selectedPassenger.email }}</p>
                  <p class="text-xs text-gray-500">{{ selectedPassenger.phone }}</p>
                </div>
                
                <div>
                  <p class="text-sm font-medium text-gray-500">Date d'inscription</p>
                  <p class="text-sm text-gray-900">{{ formatDate(selectedPassenger.registrationDate) }}</p>
                </div>
                
                <div>
                  <p class="text-sm font-medium text-gray-500">Statut</p>
                  <span :class="getStatusClass(selectedPassenger.status)" class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full">
                    {{ getStatusLabel(selectedPassenger.status) }}
                  </span>
                </div>
              </div>
              
              <div class="space-y-3">
                <div>
                  <p class="text-sm font-medium text-gray-500">Statistiques de Voyage</p>
                  <p class="text-sm text-gray-900">Total voyages: {{ selectedPassenger.totalTrips }}</p>
                  <p class="text-sm text-gray-900">Dernier voyage: {{ formatDate(selectedPassenger.lastTripDate) }}</p>
                  <p class="text-sm text-gray-900">Total dépensé: {{ selectedPassenger.totalSpent.toLocaleString() }} FC</p>
                </div>
                
                <div>
                  <p class="text-sm font-medium text-gray-500">Préférences</p>
                  <p class="text-sm text-gray-900">Type de bus: {{ selectedPassenger.preferredBusType }}</p>
                  <p class="text-sm text-gray-900">Route préférée: {{ selectedPassenger.preferredRoute }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              @click="closeDetailsModal"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

defineOptions({
  name: 'ManagerPassengers'
})

// Types
interface Passenger {
  id: number
  name: string
  email: string
  phone: string
  registrationDate: string
  totalTrips: number
  lastTripDate: string
  totalSpent: number
  status: 'active' | 'inactive'
  preferredBusType: string
  preferredRoute: string
}

// Reactive data
const passengers = ref<Passenger[]>([
  {
    id: 1001,
    name: 'Jean Mukendi',
    email: 'jean.mukendi@email.com',
    phone: '+243 812 345 678',
    registrationDate: '2024-01-15',
    totalTrips: 12,
    lastTripDate: '2024-03-10',
    totalSpent: 450000,
    status: 'active',
    preferredBusType: 'VIP',
    preferredRoute: 'Kinshasa → Lubumbashi'
  },
  {
    id: 1002,
    name: 'Marie Kabila',
    email: 'marie.kabila@email.com',
    phone: '+243 823 456 789',
    registrationDate: '2024-02-01',
    totalTrips: 8,
    lastTripDate: '2024-03-08',
    totalSpent: 280000,
    status: 'active',
    preferredBusType: 'Standard',
    preferredRoute: 'Kinshasa → Matadi'
  },
  {
    id: 1003,
    name: 'Pierre Tshisekedi',
    email: 'pierre.tshisekedi@email.com',
    phone: '+243 834 567 890',
    registrationDate: '2023-12-10',
    totalTrips: 25,
    lastTripDate: '2024-03-12',
    totalSpent: 890000,
    status: 'active',
    preferredBusType: 'VIP',
    preferredRoute: 'Lubumbashi → Kisangani'
  },
  {
    id: 1004,
    name: 'Anne Ntumba',
    email: 'anne.ntumba@email.com',
    phone: '+243 845 678 901',
    registrationDate: '2024-01-20',
    totalTrips: 3,
    lastTripDate: '2024-02-15',
    totalSpent: 75000,
    status: 'inactive',
    preferredBusType: 'Economique',
    preferredRoute: 'Kinshasa → Bukavu'
  },
  {
    id: 1005,
    name: 'Joseph Mobutu',
    email: 'joseph.mobutu@email.com',
    phone: '+243 856 789 012',
    registrationDate: '2023-11-05',
    totalTrips: 18,
    lastTripDate: '2024-03-11',
    totalSpent: 620000,
    status: 'active',
    preferredBusType: 'Standard',
    preferredRoute: 'Matadi → Boma'
  }
])

// Modal state
const showDetailsModal = ref(false)
const selectedPassenger = ref<Passenger | null>(null)

// Computed properties
const totalPassengers = computed(() => passengers.value.length)
const activePassengers = computed(() => passengers.value.filter(p => p.status === 'active').length)
const newPassengers = computed(() => passengers.value.filter(p => {
  const registrationDate = new Date(p.registrationDate)
  const currentMonth = new Date().getMonth()
  return registrationDate.getMonth() === currentMonth
}).length)
const totalTrips = computed(() => passengers.value.reduce((sum, p) => sum + p.totalTrips, 0))

// Methods
const viewDetails = (passenger: Passenger) => {
  selectedPassenger.value = passenger
  showDetailsModal.value = true
}

const closeDetailsModal = () => {
  showDetailsModal.value = false
  selectedPassenger.value = null
}

const togglePassengerStatus = (passenger: Passenger) => {
  passenger.status = passenger.status === 'active' ? 'inactive' : 'active'
}

const exportPassengers = () => {
  const csvContent = [
    ['ID', 'Nom', 'Email', 'Téléphone', 'Date d\'inscription', 'Total voyages', 'Dernier voyage', 'Total dépensé', 'Statut'],
    ...passengers.value.map(passenger => [
      `#${passenger.id.toString().padStart(6, '0')}`,
      passenger.name,
      passenger.email,
      passenger.phone,
      passenger.registrationDate,
      passenger.totalTrips.toString(),
      passenger.lastTripDate,
      passenger.totalSpent.toString(),
      getStatusLabel(passenger.status)
    ])
  ].map(row => row.join(',')).join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `passengers_${new Date().toISOString().split('T')[0]}.csv`
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
    active: 'Actif',
    inactive: 'Inactif'
  }
  return labels[status as keyof typeof labels] || status
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric' 
  })
}
</script>
