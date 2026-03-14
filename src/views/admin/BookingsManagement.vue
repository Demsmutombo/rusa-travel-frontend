<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold">Rusa Travel - Gestion des Réservations</h1>
          <p class="text-gray-600 mt-1">{{ filteredBookings.length }} réservations trouvées</p>
        </div>
        <div class="flex space-x-2">
          <button 
            @click="refreshBookings"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Actualiser
          </button>
          <button 
            @click="exportBookings"
            class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Exporter
          </button>
        </div>
      </div>
    </div>

    <!-- Search and Filters -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Recherche</label>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="ID réservation, client, route..."
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Date</label>
          <input
            v-model="dateFilter"
            type="date"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Statut</label>
          <select
            v-model="statusFilter"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Tous les statuts</option>
            <option value="confirmed">Confirmée</option>
            <option value="pending">En attente</option>
            <option value="cancelled">Annulée</option>
            <option value="completed">Terminée</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Agence</label>
          <select
            v-model="agencyFilter"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Toutes les agences</option>
            <option v-for="agency in agencies" :key="agency.id" :value="agency.name">
              {{ agency.name }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Bookings List -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="space-y-4">
        <div
          v-for="booking in paginatedBookings"
          :key="booking.id"
          class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
        >
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                  {{ booking.id }}
                </div>
                <div>
                  <h3 class="font-semibold">Réservation #{{ booking.id }}</h3>
                  <p class="text-gray-600">{{ booking.route }}</p>
                  <p class="text-sm text-gray-500">
                    Client: {{ booking.clientName }} • 
                    Date: {{ formatDate(booking.date) }} • 
                    Passagers: {{ booking.passengers }}
                  </p>
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <div class="text-right">
                <span :class="getStatusClass(booking.status)" class="px-2 py-1 text-sm rounded-full">
                  {{ getStatusLabel(booking.status) }}
                </span>
                <p class="font-semibold mt-2">{{ formatCurrency(booking.amount) }}</p>
                <p class="text-sm text-gray-500">{{ booking.agency }}</p>
              </div>
              <div class="flex space-x-2">
                <button
                  @click="viewBookingDetails(booking)"
                  class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Voir détails"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                <button
                  v-if="booking.status === 'pending'"
                  @click="confirmBooking(booking)"
                  class="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                  title="Confirmer"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <button
                  v-if="booking.status === 'confirmed'"
                  @click="cancelBooking(booking)"
                  class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Annuler"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-between items-center mt-6">
        <div class="text-sm text-gray-600">
          Affichage de {{ startIndex + 1 }} à {{ Math.min(endIndex, filteredBookings.length) }} sur {{ filteredBookings.length }}
        </div>
        <div class="flex space-x-2">
          <button
            @click="previousPage"
            :disabled="currentPage === 1"
            class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Précédent
          </button>
          <span class="px-3 py-1">{{ currentPage }} / {{ totalPages }}</span>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>

    <!-- Booking Details Modal -->
    <div
      v-if="showBookingModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="closeBookingModal"
    >
      <div
        class="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold">Détails de la réservation</h3>
          <button
            @click="closeBookingModal"
            class="text-gray-400 hover:text-gray-600"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div v-if="selectedBooking" class="space-y-6">
          <!-- Booking Info -->
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
              {{ selectedBooking.id }}
            </div>
            <div>
              <h4 class="font-semibold text-xl">Réservation #{{ selectedBooking.id }}</h4>
              <p class="text-gray-600">{{ selectedBooking.route }}</p>
              <span :class="getStatusClass(selectedBooking.status)" class="px-2 py-1 text-sm rounded-full mt-1 inline-block">
                {{ getStatusLabel(selectedBooking.status) }}
              </span>
            </div>
          </div>
          
          <!-- Details Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-gray-50 rounded-lg p-4">
              <p class="text-sm text-gray-500">Client</p>
              <p class="font-medium">{{ selectedBooking.clientName }}</p>
              <p class="text-sm text-gray-600">{{ selectedBooking.clientEmail }}</p>
              <p class="text-sm text-gray-600">{{ selectedBooking.clientPhone }}</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <p class="text-sm text-gray-500">Voyage</p>
              <p class="font-medium">{{ selectedBooking.route }}</p>
              <p class="text-sm text-gray-600">{{ formatDate(selectedBooking.date) }}</p>
              <p class="text-sm text-gray-600">{{ selectedBooking.departureTime }}</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <p class="text-sm text-gray-500">Passagers</p>
              <p class="font-medium">{{ selectedBooking.passengers }} passagers</p>
              <p class="text-sm text-gray-600">Places: {{ selectedBooking.seats }}</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <p class="text-sm text-gray-500">Paiement</p>
              <p class="font-medium">{{ formatCurrency(selectedBooking.amount) }}</p>
              <p class="text-sm text-gray-600">{{ selectedBooking.paymentMethod }}</p>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex justify-end space-x-3">
            <button
              v-if="selectedBooking.status === 'pending'"
              @click="confirmBooking(selectedBooking)"
              class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Confirmer la réservation
            </button>
            <button
              v-if="selectedBooking.status === 'confirmed'"
              @click="cancelBooking(selectedBooking)"
              class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Annuler la réservation
            </button>
            <button
              @click="printBooking(selectedBooking)"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Imprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

defineOptions({
  name: 'BookingsManagement'
})

// Types
interface Booking {
  id: number
  route: string
  date: string
  departureTime: string
  clientName: string
  clientEmail: string
  clientPhone: string
  passengers: number
  seats: string
  amount: number
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed'
  agency: string
  paymentMethod: string
  createdAt: string
}

// Reactive data
const bookings = ref<Booking[]>([
  {
    id: 1001,
    route: 'Kinshasa - Lubumbashi',
    date: '2024-06-13',
    departureTime: '08:00',
    clientName: 'Jean Mugisha',
    clientEmail: 'jean@example.com',
    clientPhone: '+243 123 456 789',
    passengers: 2,
    seats: '12A, 12B',
    amount: 170000,
    status: 'confirmed',
    agency: 'Trans Congo Express',
    paymentMethod: 'Mobile Money',
    createdAt: '2024-06-10T10:30:00Z'
  },
  {
    id: 1002,
    route: 'Kinshasa - Goma',
    date: '2024-06-14',
    departureTime: '06:30',
    clientName: 'Marie Kabila',
    clientEmail: 'marie@example.com',
    clientPhone: '+243 234 567 890',
    passengers: 1,
    seats: '5C',
    amount: 65000,
    status: 'pending',
    agency: 'Express Line',
    paymentMethod: 'Carte Bancaire',
    createdAt: '2024-06-11T14:20:00Z'
  },
  {
    id: 1003,
    route: 'Lubumbashi - Kolwezi',
    date: '2024-06-12',
    departureTime: '10:00',
    clientName: 'Pierre Ntumba',
    clientEmail: 'pierre@example.com',
    clientPhone: '+243 345 678 901',
    passengers: 3,
    seats: '8A, 8B, 8C',
    amount: 135000,
    status: 'completed',
    agency: 'City Bus RDC',
    paymentMethod: 'Orange Money',
    createdAt: '2024-06-09T09:15:00Z'
  },
  {
    id: 1004,
    route: 'Kinshasa - Kisangani',
    date: '2024-06-15',
    departureTime: '07:00',
    clientName: 'Sophie Mbuyi',
    clientEmail: 'sophie@example.com',
    clientPhone: '+243 456 789 012',
    passengers: 1,
    seats: '15D',
    amount: 75000,
    status: 'confirmed',
    agency: 'Trans Congo Express',
    paymentMethod: 'M-Pesa',
    createdAt: '2024-06-12T16:45:00Z'
  },
  {
    id: 1005,
    route: 'Goma - Bukavu',
    date: '2024-06-11',
    departureTime: '09:30',
    clientName: 'Antoine Tshimanga',
    clientEmail: 'antoine@example.com',
    clientPhone: '+243 567 890 123',
    passengers: 2,
    seats: '3A, 3B',
    amount: 70000,
    status: 'cancelled',
    agency: 'Express Line',
    paymentMethod: 'Mobile Money',
    createdAt: '2024-06-08T11:30:00Z'
  }
])

const agencies = ref([
  { id: 1, name: 'Trans Congo Express' },
  { id: 2, name: 'Express Line' },
  { id: 3, name: 'City Bus RDC' },
  { id: 4, name: 'Royaume Bus' },
  { id: 5, name: 'Congo Travel' }
])

// Filters
const searchQuery = ref('')
const dateFilter = ref('')
const statusFilter = ref('')
const agencyFilter = ref('')

// Pagination
const currentPage = ref(1)
const itemsPerPage = 10

// Modal
const showBookingModal = ref(false)
const selectedBooking = ref<Booking | null>(null)

// Computed properties
const filteredBookings = computed(() => {
  return bookings.value.filter(booking => {
    const matchesSearch = !searchQuery.value || 
      booking.id.toString().includes(searchQuery.value) ||
      booking.clientName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      booking.route.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesDate = !dateFilter.value || booking.date === dateFilter.value
    const matchesStatus = !statusFilter.value || booking.status === statusFilter.value
    const matchesAgency = !agencyFilter.value || booking.agency === agencyFilter.value
    
    return matchesSearch && matchesDate && matchesStatus && matchesAgency
  })
})

const totalPages = computed(() => {
  return Math.ceil(filteredBookings.value.length / itemsPerPage)
})

const startIndex = computed(() => {
  return (currentPage.value - 1) * itemsPerPage
})

const endIndex = computed(() => {
  return startIndex.value + itemsPerPage
})

const paginatedBookings = computed(() => {
  return filteredBookings.value.slice(startIndex.value, endIndex.value)
})

// Methods
const getStatusLabel = (status: string) => {
  const labels = {
    confirmed: 'Confirmée',
    pending: 'En attente',
    cancelled: 'Annulée',
    completed: 'Terminée'
  }
  return labels[status as keyof typeof labels] || status
}

const getStatusClass = (status: string) => {
  const classes = {
    confirmed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    cancelled: 'bg-red-100 text-red-800',
    completed: 'bg-blue-100 text-blue-800'
  }
  return classes[status as keyof typeof classes] || ''
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XAF',
    minimumFractionDigits: 0
  }).format(amount).replace('XAF', 'FC')
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

const viewBookingDetails = (booking: Booking) => {
  selectedBooking.value = booking
  showBookingModal.value = true
}

const closeBookingModal = () => {
  showBookingModal.value = false
  selectedBooking.value = null
}

const confirmBooking = async (booking: Booking) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const bookingIndex = bookings.value.findIndex(b => b.id === booking.id)
  if (bookingIndex !== -1) {
    bookings.value[bookingIndex].status = 'confirmed'
  }
  
  console.log(`Booking ${booking.id} confirmed`)
  closeBookingModal()
}

const cancelBooking = async (booking: Booking) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const bookingIndex = bookings.value.findIndex(b => b.id === booking.id)
  if (bookingIndex !== -1) {
    bookings.value[bookingIndex].status = 'cancelled'
  }
  
  console.log(`Booking ${booking.id} cancelled`)
  closeBookingModal()
}

const printBooking = (booking: Booking) => {
  console.log(`Printing booking ${booking.id}`)
  // Simulate print functionality
  window.print()
}

const refreshBookings = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Add random booking to simulate refresh
  const newBooking: Booking = {
    id: bookings.value.length + 1000,
    route: 'Kinshasa - Bukavu',
    date: new Date().toISOString().split('T')[0],
    departureTime: '08:30',
    clientName: `Client ${bookings.value.length + 1}`,
    clientEmail: `client${bookings.value.length + 1}@example.com`,
    clientPhone: `+243 ${Math.floor(Math.random() * 900000000) + 100000000}`,
    passengers: Math.floor(Math.random() * 3) + 1,
    seats: `${Math.floor(Math.random() * 20) + 1}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
    amount: Math.floor(Math.random() * 100000) + 50000,
    status: 'pending',
    agency: agencies.value[Math.floor(Math.random() * agencies.value.length)].name,
    paymentMethod: ['Mobile Money', 'Carte Bancaire', 'M-Pesa', 'Orange Money'][Math.floor(Math.random() * 4)],
    createdAt: new Date().toISOString()
  }
  
  bookings.value.unshift(newBooking)
  console.log('Bookings list refreshed')
}

const exportBookings = () => {
  console.log('Exporting bookings data...')
  // Simulate export functionality
  const csvContent = bookings.value.map(b => 
    `${b.id},${b.route},${b.date},${b.clientName},${b.amount},${b.status}`
  ).join('\n')
  
  const blob = new Blob([csvContent], { type: 'text/csv' })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'bookings.csv'
  a.click()
  window.URL.revokeObjectURL(url)
}

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

// Reset pagination when filters change
const resetPagination = () => {
  currentPage.value = 1
}

// Watch for filter changes
const { searchQuery: sq, dateFilter: df, statusFilter: sf, agencyFilter: af } = { searchQuery, dateFilter, statusFilter, agencyFilter }
[sq, df, sf, af].forEach(() => {
  resetPagination()
})

onMounted(() => {
  console.log('Bookings management loaded')
})
</script>
