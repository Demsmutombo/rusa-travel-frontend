<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 sm:p-8 text-white">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 class="text-2xl sm:text-3xl font-bold mb-2">Rechercher un trajet</h1>
          <p class="text-blue-100">Trouvez votre prochaine destination</p>
        </div>
        <div class="mt-4 sm:mt-0">
          <div class="flex items-center space-x-3">
            <div class="text-center">
              <p class="text-2xl font-bold">{{ stats.totalRoutes }}</p>
              <p class="text-xs text-blue-100">Routes</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold">{{ stats.availableBuses }}</p>
              <p class="text-xs text-blue-100">Bus</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Stats -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <p class="text-xs sm:text-sm font-medium text-gray-600">Destinations Populaires</p>
            <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ stats.popularDestinations }}</p>
            <p class="text-xs text-green-600 mt-1">Cette semaine</p>
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
            <p class="text-xs sm:text-sm font-medium text-gray-600">Tarifs Moyens</p>
            <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ stats.averagePrice }} FC</p>
            <p class="text-xs text-gray-500 mt-1">Par trajet</p>
          </div>
          <div class="p-2 sm:p-3 bg-green-100 rounded-full ml-2 sm:ml-0">
            <svg class="w-4 h-4 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 0 3 1.343 3 0 3-1.657 0 3-1.343m0 6a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <p class="text-xs sm:text-sm font-medium text-gray-600">Voyages Aujourd'hui</p>
            <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ stats.todayTrips }}</p>
            <p class="text-xs text-blue-600 mt-1">Disponibles</p>
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
            <p class="text-xs sm:text-sm font-medium text-gray-600">Places Disponibles</p>
            <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ stats.availableSeats }}</p>
            <p class="text-xs text-orange-600 mt-1">Total</p>
          </div>
          <div class="p-2 sm:p-3 bg-orange-100 rounded-full ml-2 sm:ml-0">
            <svg class="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Search Form -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-lg sm:text-xl font-semibold text-gray-900">Rechercher un trajet</h2>
        <div class="flex items-center space-x-2 text-sm text-gray-500">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Remplissez les champs pour rechercher</span>
        </div>
      </div>
      
      <form @submit.prevent="searchTrips" class="space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Ville de départ
            </label>
            <select
              v-model="searchForm.departureCity"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            >
              <option value="">Sélectionner...</option>
              <option value="Kinshasa">Kinshasa</option>
              <option value="Lubumbashi">Lubumbashi</option>
              <option value="Matadi">Matadi</option>
              <option value="Bukavu">Bukavu</option>
              <option value="Goma">Goma</option>
              <option value="Kisangani">Kisangani</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Ville de destination
            </label>
            <select
              v-model="searchForm.destinationCity"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            >
              <option value="">Sélectionner...</option>
              <option value="Kinshasa">Kinshasa</option>
              <option value="Lubumbashi">Lubumbashi</option>
              <option value="Matadi">Matadi</option>
              <option value="Bukavu">Bukavu</option>
              <option value="Goma">Goma</option>
              <option value="Kisangani">Kisangani</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Date de voyage
            </label>
            <input
              v-model="searchForm.travelDate"
              type="date"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Nombre de passagers
            </label>
            <input
              v-model.number="searchForm.passengers"
              type="number"
              min="1"
              max="10"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            >
          </div>
        </div>

        <div class="flex justify-end">
          <button
            type="submit"
            class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Rechercher</span>
          </button>
        </div>
      </form>
    </div>

    <!-- Filters -->
    <div v-if="trips.length > 0" class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Filtres</h3>
      
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Prix maximum</label>
          <input
            v-model.number="filters.maxPrice"
            type="number"
            placeholder="Ex: 20000"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Heure de départ</label>
          <select
            v-model="filters.timeRange"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Toutes</option>
            <option value="morning">Matin (6h-12h)</option>
            <option value="afternoon">Après-midi (12h-18h)</option>
            <option value="evening">Soir (18h-00h)</option>
            <option value="night">Nuit (00h-6h)</option>
          </select>
        </div>

        <div class="flex items-end">
          <button
            @click="applyFilters"
            class="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Appliquer les filtres
          </button>
        </div>
      </div>
    </div>

    <!-- Search Results -->
    <div v-if="trips.length > 0" class="space-y-4">
      <h3 class="text-lg font-semibold text-gray-900">Trajets disponibles ({{ filteredTrips.length }})</h3>
      
      <div class="space-y-4">
        <div
          v-for="trip in filteredTrips"
          :key="trip.id"
          class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow"
        >
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div class="flex-1">
              <div class="flex items-center space-x-4 mb-4">
                <div class="text-center">
                  <p class="text-lg font-bold text-gray-900">{{ trip.departureTime }}</p>
                  <p class="text-sm text-gray-500">{{ trip.departureCity }}</p>
                </div>
                
                <div class="flex-1 flex items-center justify-center">
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div class="flex-1 h-0.5 bg-gray-300"></div>
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div class="flex-1 h-0.5 bg-gray-300"></div>
                    <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <p class="text-xs text-gray-500 mt-1">{{ trip.duration }}</p>
                </div>
                
                <div class="text-center">
                  <p class="text-lg font-bold text-gray-900">{{ trip.arrivalTime }}</p>
                  <p class="text-sm text-gray-500">{{ trip.destinationCity }}</p>
                </div>
              </div>
              
              <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span class="flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v12a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                  {{ trip.busType }}
                </span>
                <span class="flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {{ trip.availableSeats }} places
                </span>
                <span class="flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ trip.frequency }}
                </span>
              </div>
            </div>
            
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 lg:mt-0">
              <div class="text-right">
                <p class="text-2xl font-bold text-gray-900">{{ trip.price }} FC</p>
                <p class="text-sm text-gray-500">par passager</p>
              </div>
              
              <button
                @click="openBookingModal(trip)"
                class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Réserver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- No Results -->
    <div v-else-if="searched" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
      <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <h3 class="text-lg font-medium text-gray-900 mb-2">Aucun trajet trouvé</h3>
      <p class="text-gray-500">Essayez de modifier vos critères de recherche</p>
    </div>

    <!-- Booking Modal -->
    <div v-if="showBookingModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Confirmer la réservation</h3>
        
        <div v-if="selectedTrip" class="space-y-4">
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="font-medium text-gray-900">{{ selectedTrip.departureCity }} → {{ selectedTrip.destinationCity }}</p>
            <p class="text-sm text-gray-600">{{ selectedTrip.departureTime }} - {{ selectedTrip.arrivalTime }}</p>
            <p class="text-sm text-gray-600">{{ searchForm.travelDate }}</p>
            <p class="text-lg font-bold text-gray-900 mt-2">{{ selectedTrip.price }} FC × {{ searchForm.passengers }} passager(s)</p>
            <p class="text-xl font-bold text-blue-600">Total: {{ selectedTrip.price * searchForm.passengers }} FC</p>
          </div>

          <div class="space-y-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Nom du passager</label>
              <input
                v-model="bookingForm.passengerName"
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
              <input
                v-model="bookingForm.phoneNumber"
                type="tel"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Méthode de paiement</label>
              <select
                v-model="bookingForm.paymentMethod"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Sélectionner...</option>
                <option value="mobile_money">Mobile Money</option>
                <option value="card">Carte bancaire</option>
                <option value="cash">Espèces</option>
              </select>
            </div>
          </div>

          <div class="flex justify-end space-x-3 pt-4">
            <button
              @click="closeBookingModal"
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              @click="confirmBooking"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Confirmer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Données de statistiques
const stats = ref({
  totalRoutes: 12,
  availableBuses: 45,
  popularDestinations: 8,
  averagePrice: 12500,
  todayTrips: 23,
  availableSeats: 156
})

// Formulaire de recherche
const searchForm = ref({
  departureCity: '',
  destinationCity: '',
  travelDate: '',
  passengers: 1
})

// Filtres
const filters = ref({
  maxPrice: null,
  timeRange: ''
})

// Formulaire de réservation
const bookingForm = ref({
  passengerName: '',
  phoneNumber: '',
  paymentMethod: ''
})

// États
const searched = ref(false)
const showBookingModal = ref(false)
const selectedTrip = ref(null)

// Données mockées
const trips = ref([
  {
    id: 1,
    departureCity: 'Kinshasa',
    destinationCity: 'Lubumbashi',
    departureTime: '08:00',
    arrivalTime: '14:30',
    duration: '6h 30min',
    price: 15000,
    busType: 'VIP',
    availableSeats: 12,
    frequency: 'Quotidien'
  },
  {
    id: 2,
    departureCity: 'Kinshasa',
    destinationCity: 'Lubumbashi',
    departureTime: '14:00',
    arrivalTime: '20:30',
    duration: '6h 30min',
    price: 12000,
    busType: 'Standard',
    availableSeats: 8,
    frequency: 'Quotidien'
  },
  {
    id: 3,
    departureCity: 'Kinshasa',
    destinationCity: 'Matadi',
    departureTime: '06:30',
    arrivalTime: '10:45',
    duration: '4h 15min',
    price: 8500,
    busType: 'Standard',
    availableSeats: 15,
    frequency: 'Quotidien'
  }
])

// Trips filtrés
const filteredTrips = computed(() => {
  let result = [...trips.value]
  
  // Filtre par prix
  if (filters.value.maxPrice) {
    result = result.filter(trip => trip.price <= filters.value.maxPrice)
  }
  
  // Filtre par heure
  if (filters.value.timeRange) {
    result = result.filter(trip => {
      const hour = parseInt(trip.departureTime.split(':')[0])
      switch (filters.value.timeRange) {
        case 'morning': return hour >= 6 && hour < 12
        case 'afternoon': return hour >= 12 && hour < 18
        case 'evening': return hour >= 18 && hour < 24
        case 'night': return hour >= 0 && hour < 6
        default: return true
      }
    })
  }
  
  return result
})

// Méthodes
const searchTrips = () => {
  searched.value = true
  // Ici, vous feriez un appel API pour rechercher les trajets
  console.log('Recherche:', searchForm.value)
}

const applyFilters = () => {
  console.log('Filtres appliqués:', filters.value)
}

const openBookingModal = (trip) => {
  selectedTrip.value = trip
  showBookingModal.value = true
}

const closeBookingModal = () => {
  showBookingModal.value = false
  selectedTrip.value = null
  bookingForm.value = {
    passengerName: '',
    phoneNumber: '',
    paymentMethod: ''
  }
}

const confirmBooking = () => {
  // Simuler la confirmation de réservation
  console.log('Réservation confirmée:', {
    trip: selectedTrip.value,
    search: searchForm.value,
    booking: bookingForm.value
  })
  
  alert('Réservation confirmée avec succès!')
  closeBookingModal()
  router.push('/client/my-bookings')
}
</script>
