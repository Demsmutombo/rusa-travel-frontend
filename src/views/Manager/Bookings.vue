<template>
  <!-- Bookings Overview -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Total Réservations</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ totalBookings.toLocaleString() }}</p>
          <p class="text-xs text-green-600 mt-1">+18% ce mois</p>
        </div>
        <div class="p-2 sm:p-3 bg-blue-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002-2h2a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">En Attente</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ pendingBookings.toLocaleString() }}</p>
          <p class="text-xs text-orange-600 mt-1">À approuver</p>
        </div>
        <div class="p-2 sm:p-3 bg-orange-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Confirmées</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ confirmedBookings.toLocaleString() }}</p>
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
          <p class="text-xs sm:text-sm font-medium text-gray-600">Revenus</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ totalRevenue.toLocaleString() }}</p>
          <p class="text-xs text-gray-500 mt-1">FC</p>
        </div>
        <div class="p-2 sm:p-3 bg-purple-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 0 3 1.343 3 0 3-1.657 0 3-1.343m0 6a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- Bookings Table -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-200">
    <div class="p-4 sm:p-6 border-b border-gray-200">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h2 class="text-lg sm:text-xl font-semibold text-gray-900">Gestion des Réservations</h2>
        <div class="flex flex-col sm:flex-row gap-3">
          <button
            @click="exportBookings"
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
              Réservation
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Passager
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Trajet
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Montant
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
          <tr v-for="booking in bookings" :key="booking.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">#{{ booking.id.toString().padStart(6, '0') }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ booking.passengerName }}</div>
              <div class="text-xs text-gray-500">{{ booking.passengerEmail }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ booking.route }}</div>
              <div class="text-xs text-gray-500">{{ booking.bus }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ formatDate(booking.travelDate) }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ booking.amount.toLocaleString() }} FC</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span :class="getStatusClass(booking.status)" class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full">
                {{ getStatusLabel(booking.status) }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <div class="flex gap-2">
                <button
                  @click="viewDetails(booking)"
                  class="text-blue-600 hover:text-blue-900 text-sm"
                >
                  Détails
                </button>
                <button
                  v-if="booking.status === 'pending'"
                  @click="approveBooking(booking.id)"
                  class="text-green-600 hover:text-green-900 text-sm"
                >
                  Approuver
                </button>
                <button
                  v-if="booking.status === 'pending'"
                  @click="cancelBooking(booking.id)"
                  class="text-red-600 hover:text-red-900 text-sm"
                >
                  Annuler
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Booking Details Modal -->
  <teleport to="body">
    <div v-if="showDetailsModal" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" @click="closeDetailsModal">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full w-full max-w-md mx-4 sm:max-w-none">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">Détails de la Réservation #{{ selectedBooking?.id.toString().padStart(6, '0') }}</h3>
            
            <div v-if="selectedBooking" class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-3">
                <div>
                  <p class="text-sm font-medium text-gray-500">Passager</p>
                  <p class="text-sm text-gray-900">{{ selectedBooking.passengerName }}</p>
                  <p class="text-xs text-gray-500">{{ selectedBooking.passengerEmail }}</p>
                  <p class="text-xs text-gray-500">{{ selectedBooking.passengerPhone }}</p>
                </div>
                
                <div>
                  <p class="text-sm font-medium text-gray-500">Trajet</p>
                  <p class="text-sm text-gray-900">{{ selectedBooking.route }}</p>
                  <p class="text-xs text-gray-500">Bus: {{ selectedBooking.bus }}</p>
                </div>
                
                <div>
                  <p class="text-sm font-medium text-gray-500">Date de Voyage</p>
                  <p class="text-sm text-gray-900">{{ formatDate(selectedBooking.travelDate) }}</p>
                  <p class="text-xs text-gray-500">Heure: {{ selectedBooking.departureTime }}</p>
                </div>
              </div>
              
              <div class="space-y-3">
                <div>
                  <p class="text-sm font-medium text-gray-500">Sièges</p>
                  <p class="text-sm text-gray-900">{{ selectedBooking.seats.join(', ') }}</p>
                  <p class="text-xs text-gray-500">{{ selectedBooking.seats.length }} place(s)</p>
                </div>
                
                <div>
                  <p class="text-sm font-medium text-gray-500">Montant</p>
                  <p class="text-sm text-gray-900">{{ selectedBooking.amount.toLocaleString() }} FC</p>
                </div>
                
                <div>
                  <p class="text-sm font-medium text-gray-500">Statut</p>
                  <span :class="getStatusClass(selectedBooking.status)" class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full">
                    {{ getStatusLabel(selectedBooking.status) }}
                  </span>
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
  name: 'ManagerBookings'
})

// Types
interface Booking {
  id: number
  passengerName: string
  passengerEmail: string
  passengerPhone: string
  route: string
  bus: string
  travelDate: string
  departureTime: string
  seats: string[]
  amount: number
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
}

// Reactive data
const bookings = ref<Booking[]>([
  {
    id: 100001,
    passengerName: 'Jean Mukendi',
    passengerEmail: 'jean.mukendi@email.com',
    passengerPhone: '+243 812 345 678',
    route: 'Kinshasa → Lubumbashi',
    bus: 'Express Line 1',
    travelDate: '2024-03-20',
    departureTime: '06:00',
    seats: ['12A', '12B'],
    amount: 170000,
    status: 'pending'
  },
  {
    id: 100002,
    passengerName: 'Marie Kabila',
    passengerEmail: 'marie.kabila@email.com',
    passengerPhone: '+243 823 456 789',
    route: 'Kinshasa → Matadi',
    bus: 'City Bus 5',
    travelDate: '2024-03-18',
    departureTime: '08:00',
    seats: ['15C'],
    amount: 15000,
    status: 'confirmed'
  },
  {
    id: 100003,
    passengerName: 'Pierre Tshisekedi',
    passengerEmail: 'pierre.tshisekedi@email.com',
    passengerPhone: '+243 834 567 890',
    route: 'Lubumbashi → Kisangani',
    bus: 'Rapid Transit 2',
    travelDate: '2024-03-22',
    departureTime: '10:00',
    seats: ['8A', '8B', '8C'],
    amount: 195000,
    status: 'confirmed'
  },
  {
    id: 100004,
    passengerName: 'Anne Ntumba',
    passengerEmail: 'anne.ntumba@email.com',
    passengerPhone: '+243 845 678 901',
    route: 'Kinshasa → Bukavu',
    bus: 'Mini Express 3',
    travelDate: '2024-03-19',
    departureTime: '14:00',
    seats: ['5D'],
    amount: 90000,
    status: 'cancelled'
  },
  {
    id: 100005,
    passengerName: 'Joseph Mobutu',
    passengerEmail: 'joseph.mobutu@email.com',
    passengerPhone: '+243 856 789 012',
    route: 'Matadi → Boma',
    bus: 'Luxury Coach 1',
    travelDate: '2024-03-17',
    departureTime: '16:00',
    seats: ['10A'],
    amount: 8000,
    status: 'completed'
  }
])

// Modal state
const showDetailsModal = ref(false)
const selectedBooking = ref<Booking | null>(null)

// Computed properties
const totalBookings = computed(() => bookings.value.length)
const pendingBookings = computed(() => bookings.value.filter(booking => booking.status === 'pending').length)
const confirmedBookings = computed(() => bookings.value.filter(booking => booking.status === 'confirmed').length)
const totalRevenue = computed(() => bookings.value
  .filter(booking => booking.status === 'confirmed' || booking.status === 'completed')
  .reduce((sum, booking) => sum + booking.amount, 0))

// Methods
const viewDetails = (booking: Booking) => {
  selectedBooking.value = booking
  showDetailsModal.value = true
}

const closeDetailsModal = () => {
  showDetailsModal.value = false
  selectedBooking.value = null
}

const approveBooking = async (id: number) => {
  if (confirm('Êtes-vous sûr de vouloir approuver cette réservation ?')) {
    const booking = bookings.value.find(b => b.id === id)
    if (booking) {
      booking.status = 'confirmed'
    }
  }
}

const cancelBooking = async (id: number) => {
  if (confirm('Êtes-vous sûr de vouloir annuler cette réservation ?')) {
    const booking = bookings.value.find(b => b.id === id)
    if (booking) {
      booking.status = 'cancelled'
    }
  }
}

const exportBookings = () => {
  const csvContent = [
    ['ID', 'Passager', 'Email', 'Téléphone', 'Route', 'Bus', 'Date', 'Heure', 'Sièges', 'Montant', 'Statut'],
    ...bookings.value.map(booking => [
      `#${booking.id.toString().padStart(6, '0')}`,
      booking.passengerName,
      booking.passengerEmail,
      booking.passengerPhone,
      booking.route,
      booking.bus,
      booking.travelDate,
      booking.departureTime,
      booking.seats.join(', '),
      booking.amount.toString(),
      getStatusLabel(booking.status)
    ])
  ].map(row => row.join(',')).join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `bookings_${new Date().toISOString().split('T')[0]}.csv`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const getStatusClass = (status: string) => {
  const classes = {
    pending: 'bg-orange-100 text-orange-800',
    confirmed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
    completed: 'bg-blue-100 text-blue-800'
  }
  return classes[status as keyof typeof classes] || 'bg-gray-100 text-gray-800'
}

const getStatusLabel = (status: string) => {
  const labels = {
    pending: 'En attente',
    confirmed: 'Confirmée',
    cancelled: 'Annulée',
    completed: 'Terminée'
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
