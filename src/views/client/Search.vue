<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Search Header -->
    <div class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-2xl font-bold mb-4">Recherche de trajets - Rusa Travel</h1>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Départ</label>
            <select v-model="search.from" class="w-full p-2 border rounded-lg">
              <option value="kinshasa">Kinshasa</option>
              <option value="lubumbashi">Lubumbashi</option>
              <option value="goma">Goma</option>
              <option value="kisangani">Kisangani</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Arrivée</label>
            <select v-model="search.to" class="w-full p-2 border rounded-lg">
              <option value="lubumbashi">Lubumbashi</option>
              <option value="kinshasa">Kinshasa</option>
              <option value="goma">Goma</option>
              <option value="kisangani">Kisangani</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input v-model="search.date" type="date" class="w-full p-2 border rounded-lg">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Passagers</label>
            <select v-model="search.passengers" class="w-full p-2 border rounded-lg">
              <option value="1">1 passager</option>
              <option value="2">2 passagers</option>
              <option value="3">3 passagers</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Search Results -->
    <div class="container mx-auto px-4 py-8">
      <div class="mb-6">
        <h2 class="text-2xl font-bold">{{ search.from.charAt(0).toUpperCase() + search.from.slice(1) }} → {{ search.to.charAt(0).toUpperCase() + search.to.slice(1) }}</h2>
        <p class="text-gray-600">{{ searchResults.length }} voyages disponibles le {{ formatDate(search.date) }}</p>
      </div>

      <!-- Filters -->
      <div class="bg-white rounded-lg shadow p-4 mb-6">
        <div class="flex flex-wrap gap-4">
          <select v-model="filters.company" class="px-4 py-2 border rounded-lg">
            <option value="">Toutes les compagnies</option>
            <option value="TRANSCO">TRANSCO</option>
            <option value="Trans Royaume">Trans Royaume</option>
            <option value="City Express">City Express</option>
            <option value="Congo Travel">Congo Travel Bus</option>
          </select>
          
          <select v-model="filters.type" class="px-4 py-2 border rounded-lg">
            <option value="">Tous les types</option>
            <option value="standard">Standard</option>
            <option value="vip">VIP</option>
          </select>
          
          <select v-model="filters.sort" class="px-4 py-2 border rounded-lg">
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="time-asc">Départ plus tôt</option>
            <option value="time-desc">Départ plus tard</option>
          </select>
        </div>
      </div>

      <!-- Bus List -->
      <div class="space-y-4">
        <div v-for="bus in filteredResults" :key="bus.id" class="bg-white rounded-lg shadow p-6">
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-blue-600 font-bold text-sm">{{ bus.company }}</span>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">{{ bus.company }}</h3>
                  <p class="text-gray-600">{{ bus.type }} • {{ bus.capacity }} places</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-6 text-sm">
                <div>
                  <p class="font-semibold text-lg">{{ bus.departureTime }}</p>
                  <p class="text-gray-600">{{ bus.from }}</p>
                </div>
                
                <div class="flex-1 text-center">
                  <p class="text-gray-500">{{ bus.duration }}</p>
                  <div class="relative">
                    <div class="h-1 bg-gray-300 rounded"></div>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                
                <div class="text-right">
                  <p class="font-semibold text-lg">{{ bus.arrivalTime }}</p>
                  <p class="text-gray-600">{{ bus.to }}</p>
                </div>
              </div>
              
              <div class="flex items-center mt-4 space-x-4">
                <span class="text-sm text-gray-600">{{ bus.availableSeats }} places disponibles</span>
                <div class="flex space-x-2">
                  <span v-if="bus.features.wifi" class="text-xs bg-gray-100 px-2 py-1 rounded">WiFi</span>
                  <span v-if="bus.features.ac" class="text-xs bg-gray-100 px-2 py-1 rounded">Climatisation</span>
                  <span v-if="bus.features.power" class="text-xs bg-gray-100 px-2 py-1 rounded">Prises</span>
                  <span v-if="bus.features.entertainment" class="text-xs bg-gray-100 px-2 py-1 rounded">Divertissement</span>
                </div>
              </div>
            </div>
            
            <div class="text-right ml-8">
              <p class="text-2xl font-bold text-blue-600">{{ bus.price.toLocaleString() }} FC</p>
              <p class="text-sm text-gray-500 mb-4">par passager</p>
              <button @click="selectBus(bus)" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Choisir
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="filteredResults.length === 0" class="bg-white rounded-lg shadow p-8 text-center">
        <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-lg font-semibold mb-2">Aucun voyage trouvé</h3>
        <p class="text-gray-600">Essayez de modifier vos critères de recherche</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Define component name to satisfy ESLint
defineOptions({
  name: 'ClientSearch'
})

const search = ref({
  from: 'kinshasa',
  to: 'lubumbashi',
  date: new Date().toISOString().split('T')[0],
  passengers: '1'
})

const filters = ref({
  company: '',
  type: '',
  sort: 'price-asc'
})

const searchResults = ref([
  {
    id: 1,
    company: 'TRANSCO',
    type: 'VIP',
    from: 'Kinshasa',
    to: 'Lubumbashi',
    departureTime: '06:00',
    arrivalTime: '18:00',
    duration: '12h',
    price: 45000,
    capacity: 50,
    availableSeats: 23,
    features: { wifi: true, ac: true, power: true, entertainment: true }
  },
  {
    id: 2,
    company: 'Trans Royaume',
    type: 'Standard',
    from: 'Kinshasa',
    to: 'Lubumbashi',
    departureTime: '08:00',
    arrivalTime: '20:30',
    duration: '12h 30min',
    price: 35000,
    capacity: 60,
    availableSeats: 15,
    features: { wifi: false, ac: true, power: false, entertainment: false }
  },
  {
    id: 3,
    company: 'City Express',
    type: 'VIP',
    from: 'Kinshasa',
    to: 'Lubumbashi',
    departureTime: '10:00',
    arrivalTime: '22:00',
    duration: '12h',
    price: 48000,
    capacity: 45,
    availableSeats: 8,
    features: { wifi: true, ac: true, power: true, entertainment: true }
  },
  {
    id: 4,
    company: 'Congo Travel Bus',
    type: 'Standard',
    from: 'Kinshasa',
    to: 'Lubumbashi',
    departureTime: '14:00',
    arrivalTime: '02:30+1',
    duration: '12h 30min',
    price: 32000,
    capacity: 55,
    availableSeats: 31,
    features: { wifi: false, ac: false, power: false, entertainment: false }
  }
])

const filteredResults = computed(() => {
  let results = [...searchResults.value]
  
  // Filter by company
  if (filters.value.company) {
    results = results.filter(bus => bus.company === filters.value.company)
  }
  
  // Filter by type
  if (filters.value.type) {
    results = results.filter(bus => bus.type.toLowerCase() === filters.value.type)
  }
  
  // Sort
  switch (filters.value.sort) {
    case 'price-asc':
      results.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      results.sort((a, b) => b.price - a.price)
      break
    case 'time-asc':
      results.sort((a, b) => a.departureTime.localeCompare(b.departureTime))
      break
    case 'time-desc':
      results.sort((a, b) => b.departureTime.localeCompare(a.departureTime))
      break
  }
  
  return results
})

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

const selectBus = (bus: { id: number; company: string; type: string; from: string; to: string; departureTime: string; arrivalTime: string; duration: string; price: number; capacity: number; availableSeats: number; features: { wifi: boolean; ac: boolean; power: boolean; entertainment: boolean } }) => {
  localStorage.setItem('selectedBus', JSON.stringify(bus))
  localStorage.setItem('searchData', JSON.stringify(search.value))
  router.push({ name: 'ClientBusDetails', params: { id: String(bus.id) }})
}

// Toutes les variables sont directement accessibles dans le template - Vue 3 n'a pas besoin de defineExpose
// Les variables ref et computed sont automatiquement exposées au template

onMounted(() => {
  // Load search data from localStorage if available
  const savedSearch = localStorage.getItem('lastSearch')
  if (savedSearch) {
    const searchData = JSON.parse(savedSearch)
    search.value = { ...search.value, ...searchData }
  }
})
</script>
