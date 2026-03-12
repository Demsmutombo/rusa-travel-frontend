<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span class="text-xl font-bold text-gray-900">Rusa Travel</span>
          </div>
          <router-link
            to="/"
            class="text-blue-600 hover:text-blue-700 font-medium"
          >
            Retour à l'accueil
          </router-link>
        </div>
      </div>
    </header>

    <!-- Search Results -->
    <main class="container mx-auto px-4 py-8">
      <!-- Search Summary -->
      <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 class="text-2xl font-bold text-gray-900 mb-2">Résultats de recherche</h1>
            <p class="text-gray-600">
              Trajets de <span class="font-semibold">{{ searchQuery.departure || 'Kinshasa' }}</span> 
              à <span class="font-semibold">{{ searchQuery.destination || 'Lubumbashi' }}</span>
              le <span class="font-semibold">{{ formatDate(searchQuery.departureDate) }}</span>
            </p>
          </div>
          <button 
            @click="showFilters = !showFilters"
            class="mt-4 md:mt-0 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition"
          >
            <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            Filtres
          </button>
        </div>
      </div>

      <!-- Filters Panel -->
      <div v-show="showFilters" class="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h3 class="text-lg font-semibold mb-4">Filtrer les résultats</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Prix maximum</label>
            <select v-model="filters.maxPrice" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="">Tous les prix</option>
              <option value="30000">30 000 CDF</option>
              <option value="40000">40 000 CDF</option>
              <option value="50000">50 000 CDF</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Heure de départ</label>
            <select v-model="filters.timeRange" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="">Toutes les heures</option>
              <option value="morning">Matin (6h-12h)</option>
              <option value="afternoon">Après-midi (12h-18h)</option>
              <option value="evening">Soir (18h-24h)</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Type de bus</label>
            <select v-model="filters.busType" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="">Tous les types</option>
              <option value="standard">Standard</option>
              <option value="comfort">Confort</option>
              <option value="vip">VIP</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Results Count -->
      <div class="mb-4">
        <p class="text-gray-600">{{ filteredTrips.length }} trajet(s) trouvé(s)</p>
      </div>

      <!-- Trips List -->
      <div class="space-y-4">
        <div v-for="trip in filteredTrips" :key="trip.id" 
             class="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <!-- Trip Info -->
            <div class="flex-1 mb-4 lg:mb-0">
              <div class="flex items-center space-x-4 mb-3">
                <div class="text-center">
                  <p class="text-2xl font-bold text-gray-900">{{ trip.departureTime }}</p>
                  <p class="text-sm text-gray-600">{{ trip.departure }}</p>
                </div>
                <div class="flex-1 flex items-center">
                  <div class="w-full border-t-2 border-gray-300 relative">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <p class="text-2xl font-bold text-gray-900">{{ trip.arrivalTime }}</p>
                  <p class="text-sm text-gray-600">{{ trip.arrival }}</p>
                </div>
              </div>
              
              <div class="flex flex-wrap items-center gap-4 text-sm">
                <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {{ trip.duration }}
                </span>
                <span class="bg-green-100 text-green-700 px-2 py-1 rounded">
                  {{ trip.busType }}
                </span>
                <span class="bg-purple-100 text-purple-700 px-2 py-1 rounded">
                  WiFi & Climatisation
                </span>
                <span class="text-gray-600">
                  {{ trip.availableSeats }} places disponibles
                </span>
              </div>
            </div>

            <!-- Price and Booking -->
            <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
              <div class="text-center lg:text-right mb-4 lg:mb-0">
                <p class="text-3xl font-bold text-blue-600">{{ trip.price.toLocaleString() }} CDF</p>
                <p class="text-sm text-gray-500">par personne</p>
              </div>
              <button 
                @click="selectTrip(trip)"
                class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium transition"
              >
                Réserver
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="filteredTrips.length === 0" class="bg-white rounded-xl shadow-sm p-12 text-center">
        <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Aucun trajet trouvé</h3>
        <p class="text-gray-600 mb-4">Essayez de modifier vos critères de recherche</p>
        <router-link
          to="/"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Nouvelle recherche
        </router-link>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

defineOptions({
  name: 'SearchPage'
})

const router = useRouter()
const route = useRoute()

// État
const showFilters = ref(false)
const searchQuery = ref({
  departure: '',
  destination: '',
  departureDate: '',
  returnDate: ''
})

const filters = ref({
  maxPrice: '',
  timeRange: '',
  busType: ''
})

// Données mock des trajets
const trips = ref([
  {
    id: 1,
    departure: 'Kinshasa',
    arrival: 'Lubumbashi',
    departureTime: '06:00',
    arrivalTime: '18:30',
    duration: '12h 30min',
    price: 45000,
    busType: 'VIP',
    availableSeats: 15,
    date: '2024-12-20'
  },
  {
    id: 2,
    departure: 'Kinshasa',
    arrival: 'Lubumbashi',
    departureTime: '08:00',
    arrivalTime: '20:30',
    duration: '12h 30min',
    price: 35000,
    busType: 'Confort',
    availableSeats: 8,
    date: '2024-12-20'
  },
  {
    id: 3,
    departure: 'Kinshasa',
    arrival: 'Lubumbashi',
    departureTime: '14:00',
    arrivalTime: '02:30',
    duration: '12h 30min',
    price: 25000,
    busType: 'Standard',
    availableSeats: 20,
    date: '2024-12-20'
  },
  {
    id: 4,
    departure: 'Kinshasa',
    arrival: 'Kisangani',
    departureTime: '07:00',
    arrivalTime: '15:00',
    duration: '8h 00min',
    price: 35000,
    busType: 'Confort',
    availableSeats: 12,
    date: '2024-12-20'
  },
  {
    id: 5,
    departure: 'Kinshasa',
    arrival: 'Kisangani',
    departureTime: '10:00',
    arrivalTime: '18:00',
    duration: '8h 00min',
    price: 28000,
    busType: 'Standard',
    availableSeats: 18,
    date: '2024-12-20'
  }
])

// Computed pour filtrer les trajets
const filteredTrips = computed(() => {
  let result = [...trips.value]
  
  // Filtrer par prix
  if (filters.value.maxPrice) {
    result = result.filter(trip => trip.price <= parseInt(filters.value.maxPrice))
  }
  
  // Filtrer par plage horaire
  if (filters.value.timeRange) {
    const hour = parseInt(trips.value[0]?.departureTime.split(':')[0] || '0')
    if (filters.value.timeRange === 'morning') {
      result = result.filter(trip => {
        const tripHour = parseInt(trip.departureTime.split(':')[0])
        return tripHour >= 6 && tripHour < 12
      })
    } else if (filters.value.timeRange === 'afternoon') {
      result = result.filter(trip => {
        const tripHour = parseInt(trip.departureTime.split(':')[0])
        return tripHour >= 12 && tripHour < 18
      })
    } else if (filters.value.timeRange === 'evening') {
      result = result.filter(trip => {
        const tripHour = parseInt(trip.departureTime.split(':')[0])
        return tripHour >= 18
      })
    }
  }
  
  // Filtrer par type de bus
  if (filters.value.busType) {
    result = result.filter(trip => trip.busType.toLowerCase() === filters.value.busType.toLowerCase())
  }
  
  return result
})

// Méthodes
const formatDate = (dateString: string) => {
  if (!dateString) return 'Date à définir'
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const selectTrip = (trip: any) => {
  // Logique de sélection du trajet
  console.log('Trajet sélectionné:', trip)
  // Rediriger vers la page de réservation
  router.push(`/booking/${trip.id}`)
}

// Initialisation
onMounted(() => {
  // Récupérer les paramètres de recherche depuis le localStorage ou les query params
  const savedSearch = localStorage.getItem('searchQuery')
  if (savedSearch) {
    searchQuery.value = JSON.parse(savedSearch)
  } else {
    // Valeurs par défaut
    searchQuery.value = {
      departure: 'Kinshasa',
      destination: 'Lubumbashi',
      departureDate: new Date().toISOString().split('T')[0],
      returnDate: ''
    }
  }
})
</script>

<style scoped>
/* Styles personnalisés si nécessaire */
</style>
