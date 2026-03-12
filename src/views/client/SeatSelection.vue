<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-2xl font-bold">Sélection des sièges</h1>
          <p class="text-gray-600 mt-1">
            {{ bookingData?.bus?.agency }} • {{ formatDate(bookingData?.date) }}
          </p>
        </div>
        <button
          @click="$router.go(-1)"
          class="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium"
        >
          Retour
        </button>
      </div>

      <!-- Trip Summary -->
      <div class="bg-blue-50 rounded-lg p-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="font-semibold">{{ bookingData?.bus?.from }} → {{ bookingData?.bus?.to }}</p>
            <p class="text-sm text-gray-600">
              {{ bookingData?.bus?.departureTime }} - {{ bookingData?.bus?.arrivalTime }}
            </p>
          </div>
          <div class="text-right">
            <p class="text-sm text-gray-600">{{ selectedSeats.length }} sièges sélectionnés</p>
            <p class="font-semibold">{{ formatCurrency(bookingData?.bus?.price * selectedSeats.length) }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Seat Selection -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-6">Choisissez vos sièges</h2>
      
      <!-- Bus Layout -->
      <div class="max-w-4xl mx-auto">
        <!-- Driver Area -->
        <div class="text-center mb-8">
          <div class="inline-block bg-gray-300 rounded-lg px-6 py-3 font-medium">
            Chauffeur
          </div>
        </div>

        <!-- Seats Grid -->
        <div class="bg-gray-50 rounded-lg p-6 mb-6">
          <div class="grid grid-cols-12 gap-2 max-w-3xl mx-auto">
            <!-- Row numbers -->
            <div class="col-span-1"></div>
            <div v-for="col in 10" :key="'header-' + col" class="text-center text-xs font-medium text-gray-600">
              {{ col }}
            </div>

            <!-- Seat rows -->
            <template v-for="row in 4" :key="row">
              <div class="flex items-center justify-center text-sm font-medium text-gray-600">
                {{ String.fromCharCode(65 + row - 1) }}
              </div>
              
              <!-- Seats -->
              <template v-for="col in 10" :key="'seat-' + row + '-' + col">
                <button
                  @click="toggleSeat(row, col)"
                  :disabled="isSeatOccupied(row, col)"
                  class="aspect-square rounded-lg border-2 flex items-center justify-center text-xs font-medium transition-all"
                  :class="{
                    'border-green-500 bg-green-100 text-green-700 hover:bg-green-200': isSeatSelected(row, col),
                    'border-gray-300 bg-white hover:bg-gray-50': !isSeatSelected(row, col) && !isSeatOccupied(row, col),
                    'border-red-300 bg-red-50 text-red-400 cursor-not-allowed': isSeatOccupied(row, col)
                  }"
                >
                  {{ String.fromCharCode(65 + row - 1) }}{{ col }}
                </button>
              </template>
            </template>
          </div>
        </div>

        <!-- Legend -->
        <div class="flex justify-center space-x-8 text-sm">
          <div class="flex items-center space-x-2">
            <div class="w-6 h-6 border-2 border-green-500 bg-green-100 rounded-lg"></div>
            <span>Sélectionné</span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="w-6 h-6 border-2 border-gray-300 bg-white rounded-lg"></div>
            <span>Disponible</span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="w-6 h-6 border-2 border-red-300 bg-red-50 rounded-lg"></div>
            <span>Occupé</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Selected Seats -->
    <div v-if="selectedSeats.length > 0" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-4">Sièges sélectionnés</h2>
      <div class="space-y-3">
        <div v-for="(seat, index) in selectedSeats" :key="index" class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center font-medium text-blue-700">
              {{ seat.row }}{{ seat.number }}
            </div>
            <div>
              <p class="font-medium">Siège {{ seat.row }}{{ seat.number }}</p>
              <p class="text-sm text-gray-600">Rangée {{ seat.row }}, Place {{ seat.number }}</p>
            </div>
          </div>
          <div class="text-right">
            <p class="font-medium">{{ formatCurrency(bookingData?.bus?.price) }}</p>
            <button
              @click="removeSeat(index)"
              class="text-red-600 hover:text-red-700 text-sm"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Passenger Information -->
    <div v-if="selectedSeats.length > 0" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-4">Informations passagers</h2>
      <div class="space-y-4">
        <div v-for="(seat, index) in selectedSeats" :key="'passenger-' + index" class="border border-gray-200 rounded-lg p-4">
          <h3 class="font-medium mb-3">Passager {{ index + 1 }} - Siège {{ seat.row }}{{ seat.number }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
              <input
                v-model="passengerInfo[index].name"
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Entrez le nom complet"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
              <input
                v-model="passengerInfo[index].phone"
                type="tel"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+250 7XX XXX XXX"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                v-model="passengerInfo[index].email"
                type="email"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="email@example.com"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Pièce d'identité</label>
              <input
                v-model="passengerInfo[index].idNumber"
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Numéro de pièce d'identité"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div v-if="selectedSeats.length > 0" class="flex items-center justify-between bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div>
        <p class="text-sm text-gray-600">Total à payer</p>
        <p class="text-2xl font-bold">{{ formatCurrency(bookingData?.bus?.price * selectedSeats.length) }}</p>
      </div>
      <div class="space-x-3">
        <button
          @click="clearSelection"
          class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Annuler
        </button>
        <button
          @click="proceedToPayment"
          :disabled="!isFormValid"
          class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Continuer vers le paiement
        </button>
      </div>
    </div>

    <!-- No Seats Selected -->
    <div v-if="selectedSeats.length === 0" class="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      </div>
      <h3 class="text-lg font-medium text-gray-900 mb-2">Aucun siège sélectionné</h3>
      <p class="text-gray-600">Veuillez sélectionner au moins un siège pour continuer</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const bookingData = ref<any>(null) // TypeScript any pour les données de réservation complexes
const selectedSeats = ref<Array<{ row: string; number: number }>>([])
const passengerInfo = ref<Array<{ name: string; phone: string; email: string; idNumber: string }>>([])

// Mock occupied seats
const occupiedSeats = ref(['A1', 'A2', 'B3', 'C5', 'D2', 'D3'])

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

const isSeatOccupied = (row: number, col: number) => {
  const seatId = `${String.fromCharCode(65 + row - 1)}${col}`
  return occupiedSeats.value.includes(seatId)
}

const isSeatSelected = (row: number, col: number) => {
  return selectedSeats.value.some(seat => 
    seat.row === String.fromCharCode(65 + row - 1) && seat.number === col
  )
}

const toggleSeat = (row: number, col: number) => {
  // const seatId = `${String.fromCharCode(65 + row - 1)}${col}` // Variable non utilisée
  
  if (isSeatOccupied(row, col)) return
  
  const seatIndex = selectedSeats.value.findIndex(seat => 
    seat.row === String.fromCharCode(65 + row - 1) && seat.number === col
  )
  
  if (seatIndex > -1) {
    selectedSeats.value.splice(seatIndex, 1)
    passengerInfo.value.splice(seatIndex, 1)
  } else {
    selectedSeats.value.push({
      row: String.fromCharCode(65 + row - 1),
      number: col
    })
    passengerInfo.value.push({
      name: '',
      phone: '',
      email: '',
      idNumber: ''
    })
  }
}

const removeSeat = (index: number) => {
  selectedSeats.value.splice(index, 1)
  passengerInfo.value.splice(index, 1)
}

const clearSelection = () => {
  selectedSeats.value = []
  passengerInfo.value = []
}

const isFormValid = computed(() => {
  return selectedSeats.value.every((_, index) => {
    const info = passengerInfo.value[index]
    return info && info.name && info.phone && info.email && info.idNumber
  })
})

const proceedToPayment = () => {
  if (!isFormValid.value) return
  
  const paymentData = {
    booking: bookingData.value,
    seats: selectedSeats.value,
    passengers: passengerInfo.value,
    totalPrice: bookingData.value.bus.price * selectedSeats.value.length
  }
  
  localStorage.setItem('paymentData', JSON.stringify(paymentData))
  router.push('/client/payment')
}

// Variables directement accessibles dans le template - Vue 3 n'a pas besoin de defineExpose

onMounted(() => {
  const savedBookingData = localStorage.getItem('bookingData')
  if (savedBookingData) {
    bookingData.value = JSON.parse(savedBookingData)
  } else {
    router.push('/client/search')
  }
})
</script>
