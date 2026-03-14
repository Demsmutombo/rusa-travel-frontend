<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-lg sm:text-xl font-semibold text-gray-900">Mes réservations</h2>
        <div class="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0">
          <select
            v-model="statusFilter"
            class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Tous les statuts</option>
            <option value="pending">En attente</option>
            <option value="confirmed">Confirmé</option>
            <option value="cancelled">Annulé</option>
            <option value="completed">Terminé</option>
          </select>
          <button
            @click="exportBookings"
            class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Exporter
          </button>
        </div>
      </div>
    </div>

    <!-- Bookings List -->
    <div class="space-y-4">
      <div
        v-for="booking in filteredBookings"
        :key="booking.id"
        class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
      >
        <div class="p-4 sm:p-6">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <!-- Trip Info -->
            <div class="flex-1 mb-4 lg:mb-0">
              <div class="flex items-center space-x-4 mb-3">
                <div class="text-center">
                  <p class="text-lg font-bold text-gray-900">{{ booking.departureTime }}</p>
                  <p class="text-sm text-gray-500">{{ booking.departureCity }}</p>
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
                  <p class="text-xs text-gray-500 mt-1">{{ booking.duration }}</p>
                </div>
                
                <div class="text-center">
                  <p class="text-lg font-bold text-gray-900">{{ booking.arrivalTime }}</p>
                  <p class="text-sm text-gray-500">{{ booking.destinationCity }}</p>
                </div>
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                  <p class="text-gray-500">Date</p>
                  <p class="font-medium text-gray-900">{{ booking.date }}</p>
                </div>
                <div>
                  <p class="text-gray-500">Passagers</p>
                  <p class="font-medium text-gray-900">{{ booking.passengers }} personne(s)</p>
                </div>
                <div>
                  <p class="text-gray-500">Référence</p>
                  <p class="font-medium text-gray-900">#{{ booking.reference }}</p>
                </div>
                <div>
                  <p class="text-gray-500">Total</p>
                  <p class="font-medium text-gray-900">{{ booking.totalPrice }} FC</p>
                </div>
              </div>
            </div>
            
            <!-- Status and Actions -->
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div class="flex items-center space-x-2">
                <span
                  :class="[
                    'px-3 py-1 text-xs font-medium rounded-full',
                    getStatusClass(booking.status)
                  ]"
                >
                  {{ getStatusLabel(booking.status) }}
                </span>
              </div>
              
              <div class="flex flex-wrap gap-2">
                <button
                  @click="viewTicket(booking)"
                  class="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Voir le billet
                </button>
                
                <button
                  v-if="booking.status === 'confirmed'"
                  @click="downloadTicket(booking)"
                  class="px-3 py-1 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Télécharger
                </button>
                
                <button
                  v-if="booking.status === 'pending' || booking.status === 'confirmed'"
                  @click="openCancelModal(booking)"
                  class="px-3 py-1 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Annuler
                </button>
                
                <button
                  @click="viewDetails(booking)"
                  class="px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Détails
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredBookings.length === 0" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
      <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002-2h2a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5z" />
      </svg>
      <h3 class="text-lg font-medium text-gray-900 mb-2">Aucune réservation</h3>
      <p class="text-gray-500 mb-4">Vous n'avez pas encore de réservations</p>
      <button
        @click="$router.push('/client/search-trips')"
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Rechercher un trajet
      </button>
    </div>

    <!-- Cancel Modal -->
    <div v-if="showCancelModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Annuler la réservation</h3>
        
        <div v-if="selectedBooking" class="space-y-4">
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="font-medium text-gray-900">{{ selectedBooking.departureCity }} → {{ selectedBooking.destinationCity }}</p>
            <p class="text-sm text-gray-600">{{ selectedBooking.date }} • {{ selectedBooking.departureTime }}</p>
            <p class="text-sm text-gray-600">Référence: #{{ selectedBooking.reference }}</p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Raison de l'annulation</label>
            <textarea
              v-model="cancelReason"
              rows="3"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Expliquez pourquoi vous souhaitez annuler..."
            ></textarea>
          </div>

          <div class="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
            <p class="text-sm text-yellow-800">
              <strong>Attention:</strong> L'annulation peut entraîner des frais selon les conditions de réservation.
            </p>
          </div>

          <div class="flex justify-end space-x-3 pt-4">
            <button
              @click="closeCancelModal"
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Retour
            </button>
            <button
              @click="confirmCancel"
              class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Confirmer l'annulation
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Ticket Details Modal -->
    <div v-if="showTicketModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-xl shadow-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-lg font-semibold text-gray-900">Détails du billet</h3>
          <button
            @click="closeTicketModal"
            class="text-gray-400 hover:text-gray-600"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div v-if="selectedBooking" class="space-y-6">
          <!-- Ticket Header -->
          <div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
            <div class="flex justify-between items-start">
              <div>
                <h4 class="text-xl font-bold mb-2">{{ selectedBooking.departureCity }} → {{ selectedBooking.destinationCity }}</h4>
                <p class="text-blue-100">Réservation #{{ selectedBooking.reference }}</p>
              </div>
              <div class="text-right">
                <p class="text-2xl font-bold">{{ selectedBooking.totalPrice }} FC</p>
                <p class="text-blue-100">Total payé</p>
              </div>
            </div>
          </div>

          <!-- Trip Details -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 class="font-medium text-gray-900 mb-3">Informations du voyage</h5>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray-600">Date:</span>
                  <span class="font-medium">{{ selectedBooking.date }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Départ:</span>
                  <span class="font-medium">{{ selectedBooking.departureTime }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Arrivée:</span>
                  <span class="font-medium">{{ selectedBooking.arrivalTime }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Durée:</span>
                  <span class="font-medium">{{ selectedBooking.duration }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Type de bus:</span>
                  <span class="font-medium">{{ selectedBooking.busType }}</span>
                </div>
              </div>
            </div>

            <div>
              <h5 class="font-medium text-gray-900 mb-3">Informations passager</h5>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray-600">Nom:</span>
                  <span class="font-medium">{{ selectedBooking.passengerName }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Téléphone:</span>
                  <span class="font-medium">{{ selectedBooking.phoneNumber }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Email:</span>
                  <span class="font-medium">{{ selectedBooking.email }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Sièges:</span>
                  <span class="font-medium">{{ selectedBooking.seats }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Passagers:</span>
                  <span class="font-medium">{{ selectedBooking.passengers }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- QR Code Placeholder -->
          <div class="text-center py-4">
            <div class="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
              <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <p class="text-sm text-gray-500 mt-2">Code QR du billet</p>
          </div>

          <div class="flex justify-end space-x-3 pt-4 border-t">
            <button
              @click="downloadTicket(selectedBooking)"
              class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Télécharger PDF
            </button>
            <button
              @click="closeTicketModal"
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
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
import { ref, computed } from 'vue'

// États
const statusFilter = ref('')
const showCancelModal = ref(false)
const showTicketModal = ref(false)
const selectedBooking = ref(null)
const cancelReason = ref('')

// Données mockées
const bookings = ref([
  {
    id: 1,
    reference: 'BK001',
    departureCity: 'Kinshasa',
    destinationCity: 'Lubumbashi',
    date: '15/03/2026',
    departureTime: '08:00',
    arrivalTime: '14:30',
    duration: '6h 30min',
    busType: 'VIP',
    passengers: 2,
    totalPrice: 30000,
    status: 'confirmed',
    passengerName: 'Jean Dupont',
    phoneNumber: '+243 123 456 789',
    email: 'jean.dupont@email.com',
    seats: '12A, 12B',
    bookingDate: '10/03/2026'
  },
  {
    id: 2,
    reference: 'BK002',
    departureCity: 'Kinshasa',
    destinationCity: 'Matadi',
    date: '18/03/2026',
    departureTime: '14:30',
    arrivalTime: '18:45',
    duration: '4h 15min',
    busType: 'Standard',
    passengers: 1,
    totalPrice: 8500,
    status: 'pending',
    passengerName: 'Jean Dupont',
    phoneNumber: '+243 123 456 789',
    email: 'jean.dupont@email.com',
    seats: '15C',
    bookingDate: '12/03/2026'
  },
  {
    id: 3,
    reference: 'BK003',
    departureCity: 'Kinshasa',
    destinationCity: 'Bukavu',
    date: '20/03/2026',
    departureTime: '10:15',
    arrivalTime: '16:30',
    duration: '6h 15min',
    busType: 'VIP',
    passengers: 1,
    totalPrice: 12000,
    status: 'completed',
    passengerName: 'Jean Dupont',
    phoneNumber: '+243 123 456 789',
    email: 'jean.dupont@email.com',
    seats: '8A',
    bookingDate: '05/03/2026'
  }
])

// Bookings filtrés
const filteredBookings = computed(() => {
  if (!statusFilter.value) {
    return bookings.value
  }
  return bookings.value.filter(booking => booking.status === statusFilter.value)
})

// Méthodes
const getStatusClass = (status) => {
  switch (status) {
    case 'pending': return 'bg-yellow-100 text-yellow-800'
    case 'confirmed': return 'bg-green-100 text-green-800'
    case 'cancelled': return 'bg-red-100 text-red-800'
    case 'completed': return 'bg-gray-100 text-gray-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

const getStatusLabel = (status) => {
  switch (status) {
    case 'pending': return 'En attente'
    case 'confirmed': return 'Confirmé'
    case 'cancelled': return 'Annulé'
    case 'completed': return 'Terminé'
    default: return status
  }
}

const viewTicket = (booking) => {
  selectedBooking.value = booking
  showTicketModal.value = true
}

const downloadTicket = (booking) => {
  console.log('Téléchargement du billet:', booking.reference)
  alert('Téléchargement du billet #' + booking.reference + ' en PDF...')
}

const openCancelModal = (booking) => {
  selectedBooking.value = booking
  showCancelModal.value = true
}

const closeCancelModal = () => {
  showCancelModal.value = false
  selectedBooking.value = null
  cancelReason.value = ''
}

const confirmCancel = () => {
  if (selectedBooking.value) {
    // Mettre à jour le statut
    const booking = bookings.value.find(b => b.id === selectedBooking.value.id)
    if (booking) {
      booking.status = 'cancelled'
    }
    
    console.log('Réservation annulée:', {
      booking: selectedBooking.value,
      reason: cancelReason.value
    })
    
    alert('Réservation #' + selectedBooking.value.reference + ' annulée avec succès!')
    closeCancelModal()
  }
}

const closeTicketModal = () => {
  showTicketModal.value = false
  selectedBooking.value = null
}

const viewDetails = (booking) => {
  viewTicket(booking)
}

const exportBookings = () => {
  console.log('Export des réservations...')
  alert('Export des réservations en cours...')
}
</script>
