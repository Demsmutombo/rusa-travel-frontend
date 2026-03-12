<template>
  <div class="space-y-6">
    <!-- Search Header -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h1 class="text-2xl font-bold">Résultats Rusa Travel</h1>
          <p class="text-gray-600 mt-1">
            Trajets disponibles sur Rusa Travel: {{ searchParams.from }} → {{ searchParams.to }} • {{ formatDate(searchParams.date) }}
          </p>
        </div>
        <button
          @click="$router.push('/client/search')"
          class="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          Modifier la recherche
        </button>
      </div>
      
      <!-- Filters -->
      <div class="flex flex-wrap gap-4">
        <select v-model="filters.priceRange" class="px-3 py-2 border border-gray-300 rounded-lg">
          <option value="">Prix</option>
          <option value="0-10000">Moins de 10,000 Fb</option>
          <option value="10000-25000">10,000 - 25,000 Fb</option>
          <option value="25000-50000">25,000 - 50,000 Fb</option>
          <option value="50000+">Plus de 50,000 Fb</option>
        </select>
        
        <select v-model="filters.departureTime" class="px-3 py-2 border border-gray-300 rounded-lg">
          <option value="">Heure de départ</option>
          <option value="morning">Matin (6h-12h)</option>
          <option value="afternoon">Après-midi (12h-18h)</option>
          <option value="evening">Soir (18h-24h)</option>
        </select>
        
        <select v-model="filters.busType" class="px-3 py-2 border border-gray-300 rounded-lg">
          <option value="">Type de bus</option>
          <option value="standard">Standard</option>
          <option value="vip">VIP</option>
          <option value="luxury">Luxe</option>
        </select>
      </div>
    </div>

    <!-- Results Count -->
    <div class="flex items-center justify-between">
      <p class="text-gray-600">
        {{ filteredBuses.length }} bus disponibles
      </p>
      <div class="flex items-center space-x-2">
        <button
          @click="sortBy = 'price'"
          :class="{
            'px-3 py-1 rounded-lg text-sm font-medium': true,
            'bg-blue-100 text-blue-700': sortBy === 'price',
            'text-gray-600 hover:text-gray-900': sortBy !== 'price'
          }"
        >
          Prix
        </button>
        <button
          @click="sortBy = 'departure'"
          :class="{
            'px-3 py-1 rounded-lg text-sm font-medium': true,
            'bg-blue-100 text-blue-700': sortBy === 'departure',
            'text-gray-600 hover:text-gray-900': sortBy !== 'departure'
          }"
        >
          Départ
        </button>
        <button
          @click="sortBy = 'duration'"
          :class="{
            'px-3 py-1 rounded-lg text-sm font-medium': true,
            'bg-blue-100 text-blue-700': sortBy === 'duration',
            'text-gray-600 hover:text-gray-900': sortBy !== 'duration'
          }"
        >
          Durée
        </button>
      </div>
    </div>

    <!-- Bus Results -->
    <div class="space-y-4">
      <div
        v-for="bus in sortedBuses"
        :key="bus.id"
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
      >
        <div class="flex items-center justify-between">
          <!-- Bus Info -->
          <div class="flex-1">
            <div class="flex items-center space-x-4 mb-3">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg">{{ bus.agency }}</h3>
                <p class="text-sm text-gray-600">{{ bus.type }} • {{ bus.capacity }} places</p>
              </div>
            </div>
            
            <!-- Route Info -->
            <div class="flex items-center space-x-6 text-sm">
              <div class="flex items-center space-x-2">
                <span class="font-medium">{{ bus.departureTime }}</span>
                <span class="text-gray-500">{{ bus.from }}</span>
              </div>
              
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span class="text-gray-600">{{ bus.duration }}</span>
              </div>
              
              <div class="flex items-center space-x-2">
                <span class="text-gray-500">{{ bus.to }}</span>
                <span class="font-medium">{{ bus.arrivalTime }}</span>
              </div>
            </div>
          </div>
          
          <!-- Price and Actions -->
          <div class="text-right">
            <div class="mb-3">
              <p class="text-2xl font-bold text-blue-600">{{ formatCurrency(bus.price) }}</p>
              <p class="text-sm text-gray-500">par passager</p>
            </div>
            
            <div class="space-y-2">
              <div class="text-sm text-gray-600">
                {{ bus.availableSeats }} places disponibles
              </div>
              <button
                @click="selectBus(bus)"
                class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Choisir ce bus
              </button>
            </div>
          </div>
        </div>
        
        <!-- Amenities -->
        <div class="mt-4 pt-4 border-t border-gray-200">
          <div class="flex flex-wrap gap-4">
            <span v-if="bus.amenities.wifi" class="flex items-center text-sm text-gray-600">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
              WiFi
            </span>
            <span v-if="bus.amenities.ac" class="flex items-center text-sm text-gray-600">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              Climatisation
            </span>
            <span v-if="bus.amenities.power" class="flex items-center text-sm text-gray-600">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Prises électriques
            </span>
            <span v-if="bus.amenities.entertainment" class="flex items-center text-sm text-gray-600">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4" />
              </svg>
              Divertissement
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- No Results -->
    <div v-if="filteredBuses.length === 0" class="text-center py-12">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 class="text-lg font-medium text-gray-900 mb-2">Aucun bus trouvé</h3>
      <p class="text-gray-600 mb-4">Essayez de modifier vos critères de recherche</p>
      <button
        @click="$router.push('/client/search')"
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Nouvelle recherche
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Define component name to satisfy ESLint
defineOptions({
  name: 'ClientResults'
})

const route = useRoute()
const router = useRouter()

const searchParams = ref({
  from: '',
  to: '',
  date: '',
  passengers: '1'
})

const filters = ref({
  priceRange: '',
  departureTime: '',
  busType: ''
})

const sortBy = ref('price')

// Mock bus data
const buses = ref([
  {
    id: 1,
    agency: 'Transco',
    type: 'VIP',
    from: 'Kigali',
    to: 'Bujumbura',
    departureTime: '08:00',
    arrivalTime: '11:30',
    duration: '3h 30min',
    price: 15000,
    capacity: 45,
    availableSeats: 23,
    amenities: {
      wifi: true,
      ac: true,
      power: true,
      entertainment: true
    }
  },
  {
    id: 2,
    agency: 'Rwanda Express',
    type: 'Standard',
    from: 'Kigali',
    to: 'Bujumbura',
    departureTime: '10:30',
    arrivalTime: '14:15',
    duration: '3h 45min',
    price: 12000,
    capacity: 50,
    availableSeats: 8,
    amenities: {
      wifi: false,
      ac: true,
      power: false,
      entertainment: false
    }
  },
  {
    id: 3,
    agency: 'Trans Royaume',
    type: 'Luxe',
    from: 'Kigali',
    to: 'Bujumbura',
    departureTime: '14:00',
    arrivalTime: '17:20',
    duration: '3h 20min',
    price: 20000,
    capacity: 40,
    availableSeats: 31,
    amenities: {
      wifi: true,
      ac: true,
      power: true,
      entertainment: true
    }
  }
])

const filteredBuses = computed(() => {
  return buses.value.filter(bus => {
    if (filters.value.priceRange) {
      const [min, max] = filters.value.priceRange.split('-').map(p => p.replace('+', ''))
      if (max) {
        if (bus.price < parseInt(min) || bus.price > parseInt(max)) return false
      } else {
        if (bus.price < parseInt(min)) return false
      }
    }
    
    if (filters.value.busType && bus.type.toLowerCase() !== filters.value.busType) {
      return false
    }
    
    return true
  })
})

const sortedBuses = computed(() => {
  const sorted = [...filteredBuses.value]
  
  switch (sortBy.value) {
    case 'price':
      return sorted.sort((a, b) => a.price - b.price)
    case 'departure':
      return sorted.sort((a, b) => a.departureTime.localeCompare(b.departureTime))
    case 'duration':
      return sorted.sort((a, b) => {
        const durationA = parseInt(a.duration)
        const durationB = parseInt(b.duration)
        return durationA - durationB
      })
    default:
      return sorted
  }
})

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('fr-RW', {
    style: 'currency',
    currency: 'RWF',
    minimumFractionDigits: 0
  }).format(amount)
}

const selectBus = (bus: any) => {
  // Store selected bus and navigate to seat selection
  localStorage.setItem('selectedBus', JSON.stringify(bus))
  router.push('/client/seat-selection')
}

// Expose variables to template
defineExpose({
  searchParams,
  filters,
  sortBy,
  filteredBuses,
  sortedBuses,
  formatDate,
  formatCurrency,
  selectBus,
  $router: router
})

onMounted(() => {
  // Load search parameters from query
  if (route.query.from) searchParams.value.from = route.query.from as string
  if (route.query.to) searchParams.value.to = route.query.to as string
  if (route.query.date) searchParams.value.date = route.query.date as string
  if (route.query.passengers) searchParams.value.passengers = route.query.passengers as string
})
</script>
