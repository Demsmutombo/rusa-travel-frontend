<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <AppHeader />

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex-1 min-w-0">
            <h1 class="text-xl sm:text-2xl font-bold">Mes Réservations</h1>
            <p class="text-sm sm:text-base text-gray-600 mt-1">Historique et gestion de vos réservations</p>
          </div>
          <div class="flex flex-col sm:flex-row sm:items-center space-x-4">
            <div class="text-right">
              <p class="text-xs sm:text-sm text-gray-600">Total réservations</p>
              <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ bookings.length }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-6">
        <div class="flex flex-col lg:flex-row gap-4">
          <div class="flex-1 min-w-0 lg:w-1/3">
            <label class="block text-sm font-medium text-gray-700 mb-1">Rechercher</label>
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Rechercher par destination, ID réservation..."
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Statut</label>
            <select v-model="statusFilter" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="">Tous</option>
              <option value="confirmed">Confirmé</option>
              <option value="pending">En attente</option>
              <option value="cancelled">Annulé</option>
              <option value="completed">Terminé</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Période</label>
            <select v-model="periodFilter" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="">Toutes</option>
              <option value="upcoming">À venir</option>
              <option value="past">Passées</option>
              <option value="thisMonth">Ce mois</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Bookings List -->
      <div class="space-y-4">
        <div 
          v-for="booking in filteredBookings" 
          :key="booking.id"
          class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
        >
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <!-- Booking Info -->
            <div class="flex-1 mb-4 lg:mb-0">
              <div class="flex items-center space-x-4 mb-3">
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">{{ booking.route }}</h3>
                  <p class="text-sm text-gray-600">Réservation #{{ booking.id }}</p>
                </div>
                <span :class="getStatusClass(booking.status)" class="px-3 py-1 text-xs font-semibold rounded-full">
                  {{ getStatusLabel(booking.status) }}
                </span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                  <p class="text-gray-500">Date</p>
                  <p class="font-medium">{{ formatDate(booking.date) }}</p>
                </div>
                <div>
                  <p class="text-gray-500">Heure</p>
                  <p class="font-medium">{{ booking.time }}</p>
                </div>
                <div>
                  <p class="text-gray-500">Sièges</p>
                  <p class="font-medium">{{ booking.seats.join(', ') }}</p>
                </div>
                <div>
                  <p class="text-gray-500">Compagnie</p>
                  <p class="font-medium">{{ booking.company }}</p>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex flex-col lg:items-end space-y-3">
              <div class="text-right">
                <p class="text-2xl font-bold text-blue-600">{{ formatCurrency(booking.price) }}</p>
                <p class="text-sm text-gray-500">{{ booking.passengers }} passager(s)</p>
              </div>
              
              <div class="flex space-x-2">
                <button 
                  @click="viewTicketDetails(booking)"
                  class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Voir le billet
                </button>
                <button 
                  v-if="booking.status === 'confirmed'"
                  @click="cancelBooking(booking)"
                  class="px-4 py-2 border border-red-300 hover:bg-red-50 text-red-600 rounded-lg font-medium transition-colors"
                >
                  Annuler
                </button>
                <button 
                  v-if="booking.status === 'completed'"
                  @click="downloadTicket(booking)"
                  class="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-colors"
                >
                  Télécharger
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredBookings.length === 0" class="text-center py-12">
        <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Aucune réservation trouvée</h3>
        <p class="text-gray-600 mb-6">Vous n'avez pas encore de réservation correspondant à vos critères</p>
        <button 
          @click="searchTrips"
          class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
        >
          Rechercher un trajet
        </button>
      </div>
    </div>

    <!-- Ticket Details Modal -->
    <div v-if="selectedBooking" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <!-- Modal Header -->
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold">Détails du billet</h2>
            <button 
              @click="closeTicketDetails"
              class="text-gray-400 hover:text-gray-600"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Ticket Content -->
          <div class="border-2 border-dashed border-gray-300 rounded-lg p-6">
            <!-- Ticket Header -->
            <div class="text-center mb-6">
              <div class="w-20 h-20 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900">RUSA TRAVEL</h3>
              <p class="text-gray-600">Billet de voyage</p>
            </div>

            <!-- Booking Details -->
            <div class="space-y-4 mb-6">
              <div class="flex justify-between items-center py-2 border-b">
                <span class="text-gray-600">Réservation #</span>
                <span class="font-medium">{{ selectedBooking.id }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b">
                <span class="text-gray-600">Trajet</span>
                <span class="font-medium">{{ selectedBooking.route }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b">
                <span class="text-gray-600">Date</span>
                <span class="font-medium">{{ formatDate(selectedBooking.date) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b">
                <span class="text-gray-600">Heure</span>
                <span class="font-medium">{{ selectedBooking.time }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b">
                <span class="text-gray-600">Sièges</span>
                <span class="font-medium">{{ selectedBooking.seats.join(', ') }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b">
                <span class="text-gray-600">Passagers</span>
                <span class="font-medium">{{ selectedBooking.passengerName }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b">
                <span class="text-gray-600">Compagnie</span>
                <span class="font-medium">{{ selectedBooking.company }}</span>
              </div>
              <div class="flex justify-between items-center py-2">
                <span class="text-gray-600">Prix total</span>
                <span class="font-bold text-lg text-blue-600">{{ formatCurrency(selectedBooking.price) }}</span>
              </div>
            </div>

            <!-- QR Code Placeholder -->
            <div class="text-center">
              <div class="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <p class="text-sm text-gray-500">Code QR à scanner</p>
            </div>
          </div>

          <!-- Modal Actions -->
          <div class="flex space-x-4 mt-6">
            <button 
              @click="downloadTicket(selectedBooking)"
              class="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
            >
              Télécharger le billet
            </button>
            <button 
              @click="closeTicketDetails"
              class="flex-1 px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'MyTickets'
})

const router = useRouter()

interface Booking {
  id: string
  route: string
  date: string
  time: string
  seats: string[]
  passengers: number
  price: number
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed'
  company: string
  passengerName: string
  bookingDate: string
}

// State
const searchQuery = ref('')
const statusFilter = ref('')
const periodFilter = ref('')
const selectedBooking = ref<Booking | null>(null)

// Mock booking data
const bookings = ref<Booking[]>([
  {
    id: 'BK001',
    route: 'Kinshasa → Lubumbashi',
    date: '2024-03-20',
    time: '08:00',
    seats: ['12A', '12B'],
    passengers: 2,
    price: 30000,
    status: 'confirmed',
    company: 'Rusa Travel',
    passengerName: 'Jean Kabila',
    bookingDate: '2024-03-10'
  },
  {
    id: 'BK002',
    route: 'Kinshasa → Kisangani',
    date: '2024-03-15',
    time: '06:00',
    seats: ['8C'],
    passengers: 1,
    price: 10000,
    status: 'completed',
    company: 'Congo Express',
    passengerName: 'Jean Kabila',
    bookingDate: '2024-03-05'
  },
  {
    id: 'BK003',
    route: 'Lubumbashi → Kinshasa',
    date: '2024-03-25',
    time: '14:30',
    seats: ['15A', '15B', '15C'],
    passengers: 3,
    price: 45000,
    status: 'confirmed',
    company: 'Tchopo Transport',
    passengerName: 'Jean Kabila',
    bookingDate: '2024-03-12'
  },
  {
    id: 'BK004',
    route: 'Kinshasa → Matadi',
    date: '2024-02-28',
    time: '07:30',
    seats: ['5D'],
    passengers: 1,
    price: 4500,
    status: 'cancelled',
    company: 'Rusa Travel',
    passengerName: 'Jean Kabila',
    bookingDate: '2024-02-20'
  },
  {
    id: 'BK005',
    route: 'Kinshasa → Bukavu',
    date: '2024-04-10',
    time: '05:00',
    seats: ['22A', '22B'],
    passengers: 2,
    price: 28000,
    status: 'pending',
    company: 'Congo Express',
    passengerName: 'Jean Kabila',
    bookingDate: '2024-03-13'
  }
])

// Computed properties
const filteredBookings = computed(() => {
  let filtered = bookings.value

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(booking =>
      booking.route.toLowerCase().includes(query) ||
      booking.id.toLowerCase().includes(query) ||
      booking.company.toLowerCase().includes(query)
    )
  }

  // Status filter
  if (statusFilter.value) {
    filtered = filtered.filter(booking => booking.status === statusFilter.value)
  }

  // Period filter
  if (periodFilter.value) {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    
    filtered = filtered.filter(booking => {
      const bookingDate = new Date(booking.date)
      
      switch (periodFilter.value) {
        case 'upcoming':
          return bookingDate >= today
        case 'past':
          return bookingDate < today
        case 'thisMonth':
          return bookingDate.getMonth() === now.getMonth() && 
                 bookingDate.getFullYear() === now.getFullYear()
        default:
          return true
      }
    })
  }

  return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})

// Helper functions
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF',
    minimumFractionDigits: 0
  }).format(amount)
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

const getStatusClass = (status: string) => {
  switch (status) {
    case 'confirmed':
      return 'bg-green-100 text-green-800'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'cancelled':
      return 'bg-red-100 text-red-800'
    case 'completed':
      return 'bg-blue-100 text-blue-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'confirmed':
      return 'Confirmé'
    case 'pending':
      return 'En attente'
    case 'cancelled':
      return 'Annulé'
    case 'completed':
      return 'Terminé'
    default:
      return status
  }
}

// Actions
const viewTicketDetails = (booking: Booking) => {
  selectedBooking.value = booking
}

const closeTicketDetails = () => {
  selectedBooking.value = null
}

const cancelBooking = (booking: Booking) => {
  if (confirm(`Êtes-vous sûr de vouloir annuler la réservation #${booking.id} ?`)) {
    // Update booking status
    const index = bookings.value.findIndex(b => b.id === booking.id)
    if (index !== -1) {
      bookings.value[index].status = 'cancelled'
    }
    
    // Show success message
    alert(`Réservation #${booking.id} annulée avec succès`)
  }
}

const downloadTicket = (booking: Booking) => {
  // In a real app, this would generate and download a PDF ticket
  const ticketData = {
    id: booking.id,
    route: booking.route,
    date: booking.date,
    time: booking.time,
    seats: booking.seats,
    passengerName: booking.passengerName,
    price: booking.price
  }
  
  console.log('Downloading ticket:', ticketData)
  alert(`Téléchargement du billet #${booking.id} en cours...`)
}

const searchTrips = () => {
  // Navigate to search page
  router.push({ name: 'search' })
}

onMounted(() => {
  // Load user bookings
  console.log('Loading user bookings...')
})
</script>
