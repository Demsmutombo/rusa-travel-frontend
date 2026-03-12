<template>
  <div class="space-y-6">
    <!-- Bus Header -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-2xl font-bold">{{ bus?.agency }} - {{ bus?.type }}</h1>
          <p class="text-gray-600 mt-1">
            {{ bus?.from }} → {{ bus?.to }} • {{ formatDate(searchParams.date) }}
          </p>
        </div>
        <button
          @click="$router.go(-1)"
          class="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium"
        >
          Retour
        </button>
      </div>

      <!-- Bus Info -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="md:col-span-2">
          <div class="flex items-center space-x-4 mb-4">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-xl">{{ bus?.agency }}</h3>
              <p class="text-gray-600">{{ bus?.type }} • {{ bus?.capacity }} places</p>
            </div>
          </div>

          <!-- Route Details -->
          <div class="bg-gray-50 rounded-lg p-4">
            <div class="flex items-center justify-between mb-4">
              <div>
                <p class="text-sm text-gray-600">Départ</p>
                <p class="font-semibold">{{ bus?.departureTime }}</p>
                <p class="text-gray-900">{{ bus?.from }}</p>
              </div>
              
              <div class="flex-1 mx-8">
                <div class="text-center">
                  <p class="text-sm text-gray-600 mb-2">{{ bus?.duration }}</p>
                  <div class="relative">
                    <div class="h-1 bg-gray-300 rounded"></div>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div class="text-right">
                <p class="text-sm text-gray-600">Arrivée</p>
                <p class="font-semibold">{{ bus?.arrivalTime }}</p>
                <p class="text-gray-900">{{ bus?.to }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Price and Booking -->
        <div class="text-center">
          <div class="bg-blue-50 rounded-lg p-6">
            <p class="text-sm text-gray-600 mb-2">Prix par passager</p>
            <p class="text-3xl font-bold text-blue-600 mb-4">{{ formatCurrency(bus?.price || 0) }}</p>
            
            <div class="space-y-3">
              <div class="text-sm text-gray-600">
                {{ bus?.availableSeats }} places disponibles
              </div>
              
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700">Nombre de passagers</label>
                <select v-model="passengers" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
                  <option value="1">1 passager</option>
                  <option value="2">2 passagers</option>
                  <option value="3">3 passagers</option>
                  <option value="4">4 passagers</option>
                  <option value="5">5 passagers</option>
                </select>
              </div>
              
              <div class="text-lg font-semibold">
                Total: {{ formatCurrency((bus?.price || 0) * parseInt(passengers)) }}
              </div>
              
              <button
                @click="proceedToBooking"
                :disabled="!bus || bus.availableSeats < parseInt(passengers)"
                class="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {{ bus && bus.availableSeats >= parseInt(passengers) ? 'Continuer' : 'Places insuffisantes' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Amenities -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-4">Équipements et services</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-if="bus?.amenities.wifi" class="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
          <span class="text-sm font-medium">WiFi Gratuit</span>
        </div>
        
        <div v-if="bus?.amenities.ac" class="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
          <span class="text-sm font-medium">Climatisation</span>
        </div>
        
        <div v-if="bus?.amenities.power" class="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span class="text-sm font-medium">Prises électriques</span>
        </div>
        
        <div v-if="bus?.amenities.entertainment" class="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4" />
          </svg>
          <span class="text-sm font-medium">Divertissement</span>
        </div>
      </div>
    </div>

    <!-- Seat Layout Preview -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-4">Disposition des sièges</h2>
      <div class="bg-gray-50 rounded-lg p-6">
        <div class="max-w-md mx-auto">
          <!-- Driver area -->
          <div class="text-center mb-4">
            <div class="inline-block bg-gray-300 rounded px-4 py-2 text-sm font-medium">
              Chauffeur
            </div>
          </div>
          
          <!-- Seats grid -->
          <div class="grid grid-cols-4 gap-2 mb-4">
            <div
              v-for="seat in 40"
              :key="seat"
              class="aspect-square rounded border-2 flex items-center justify-center text-xs font-medium"
              :class="{
                'border-green-500 bg-green-50 text-green-700': Math.random() > 0.3,
                'border-gray-300 bg-gray-100 text-gray-400': Math.random() <= 0.3
              }"
            >
              {{ seat }}
            </div>
          </div>
          
          <!-- Legend -->
          <div class="flex justify-center space-x-6 text-sm">
            <div class="flex items-center space-x-2">
              <div class="w-4 h-4 border-2 border-green-500 bg-green-50 rounded"></div>
              <span>Disponible</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-4 h-4 border-2 border-gray-300 bg-gray-100 rounded"></div>
              <span>Occupé</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Agency Info -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-4">À propos de {{ bus?.agency }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="font-medium mb-2">Informations générales</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <p>• Agence de transport certifiée</p>
            <p>• Plus de 10 ans d'expérience</p>
            <p>• Flotte moderne et entretenue</p>
            <p>• Chauffeurs professionnels</p>
          </div>
        </div>
        
        <div>
          <h3 class="font-medium mb-2">Politique de l'agence</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <p>• Annulation gratuite jusqu'à 24h avant</p>
            <p>• Remboursement 50% jusqu'à 12h avant</p>
            <p>• Pas de remboursement après</p>
            <p>• Changement de date possible (frais appliqués)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const bus = ref<any>(null)
const passengers = ref('1')
const searchParams = ref({
  from: '',
  to: '',
  date: '',
  passengers: '1'
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

const proceedToBooking = () => {
  if (!bus.value) return
  
  const bookingData = {
    bus: bus.value,
    passengers: parseInt(passengers.value),
    date: searchParams.value.date,
    totalPrice: bus.value.price * parseInt(passengers.value)
  }
  
  localStorage.setItem('bookingData', JSON.stringify(bookingData))
  router.push('/client/seat-selection')
}

onMounted(() => {
  // Load bus details from params or localStorage
  const busId = route.params.id as string
  
  // Mock bus data - in real app, this would come from API
  const mockBus = {
    id: parseInt(busId),
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
  }
  
  bus.value = mockBus
  
  // Load search parameters
  if (route.query.from) searchParams.value.from = route.query.from as string
  if (route.query.to) searchParams.value.to = route.query.to as string
  if (route.query.date) searchParams.value.date = route.query.date as string
  if (route.query.passengers) {
    searchParams.value.passengers = route.query.passengers as string
    passengers.value = route.query.passengers as string
  }
})
</script>
