<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-lg sm:text-xl font-semibold text-gray-900">Mes billets</h2>
        <div class="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0">
          <select
            v-model="statusFilter"
            class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Tous les billets</option>
            <option value="active">Actifs</option>
            <option value="used">Utilisés</option>
            <option value="expired">Expirés</option>
          </select>
          <button
            @click="downloadAllTickets"
            class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Télécharger tout
          </button>
        </div>
      </div>
    </div>

    <!-- Tickets Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="ticket in filteredTickets"
        :key="ticket.id"
        class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
      >
        <!-- Ticket Header -->
        <div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-bold text-lg">{{ ticket.departureCity }} → {{ ticket.destinationCity }}</h3>
              <p class="text-blue-100 text-sm">Billet #{{ ticket.ticketNumber }}</p>
            </div>
            <div class="text-right">
              <p class="text-2xl font-bold">{{ ticket.price }} FC</p>
            </div>
          </div>
        </div>

        <!-- Ticket Body -->
        <div class="p-4 space-y-3">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-sm text-gray-500">Date</p>
              <p class="font-medium">{{ ticket.date }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-500">Heure</p>
              <p class="font-medium">{{ ticket.departureTime }}</p>
            </div>
          </div>

          <div class="flex justify-between items-center">
            <div>
              <p class="text-sm text-gray-500">Passager</p>
              <p class="font-medium">{{ ticket.passengerName }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-500">Siège</p>
              <p class="font-medium">{{ ticket.seatNumber }}</p>
            </div>
          </div>

          <div class="flex justify-between items-center">
            <div>
              <p class="text-sm text-gray-500">Bus</p>
              <p class="font-medium">{{ ticket.busType }}</p>
            </div>
            <div class="text-right">
              <span
                :class="[
                  'px-2 py-1 text-xs font-medium rounded-full',
                  getTicketStatusClass(ticket.status)
                ]"
              >
                {{ getTicketStatusLabel(ticket.status) }}
              </span>
            </div>
          </div>

          <!-- QR Code -->
          <div class="bg-gray-100 p-4 rounded-lg text-center">
            <div class="w-24 h-24 mx-auto bg-white rounded-lg flex items-center justify-center">
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <p class="text-xs text-gray-500 mt-2">Code QR du billet</p>
          </div>
        </div>

        <!-- Ticket Actions -->
        <div class="p-4 border-t border-gray-200">
          <div class="flex gap-2">
            <button
              @click="viewTicketDetails(ticket)"
              class="flex-1 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir détails
            </button>
            <button
              v-if="ticket.status === 'active'"
              @click="downloadTicket(ticket)"
              class="flex-1 px-3 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Télécharger
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredTickets.length === 0" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
      <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
      <h3 class="text-lg font-medium text-gray-900 mb-2">Aucun billet</h3>
      <p class="text-gray-500 mb-4">Vous n'avez pas encore de billets</p>
      <button
        @click="$router.push('/client/search-trips')"
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Réserver un trajet
      </button>
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
        
        <div v-if="selectedTicket" class="space-y-6">
          <!-- Ticket Header -->
          <div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
            <div class="flex justify-between items-start">
              <div>
                <h4 class="text-xl font-bold mb-2">{{ selectedTicket.departureCity }} → {{ selectedTicket.destinationCity }}</h4>
                <p class="text-blue-100">Billet #{{ selectedTicket.ticketNumber }}</p>
                <p class="text-blue-100">Réservation #{{ selectedTicket.bookingReference }}</p>
              </div>
              <div class="text-right">
                <p class="text-2xl font-bold">{{ selectedTicket.price }} FC</p>
                <p class="text-blue-100">Prix du billet</p>
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
                  <span class="font-medium">{{ selectedTicket.date }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Départ:</span>
                  <span class="font-medium">{{ selectedTicket.departureTime }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Arrivée:</span>
                  <span class="font-medium">{{ selectedTicket.arrivalTime }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Durée:</span>
                  <span class="font-medium">{{ selectedTicket.duration }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Type de bus:</span>
                  <span class="font-medium">{{ selectedTicket.busType }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Numéro du bus:</span>
                  <span class="font-medium">{{ selectedTicket.busNumber }}</span>
                </div>
              </div>
            </div>

            <div>
              <h5 class="font-medium text-gray-900 mb-3">Informations passager</h5>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray-600">Nom:</span>
                  <span class="font-medium">{{ selectedTicket.passengerName }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Téléphone:</span>
                  <span class="font-medium">{{ selectedTicket.phoneNumber }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Email:</span>
                  <span class="font-medium">{{ selectedTicket.email }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Siège:</span>
                  <span class="font-medium">{{ selectedTicket.seatNumber }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Classe:</span>
                  <span class="font-medium">{{ selectedTicket.class }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Statut:</span>
                  <span class="font-medium">{{ getTicketStatusLabel(selectedTicket.status) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- QR Code -->
          <div class="text-center py-4">
            <div class="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
              <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <p class="text-sm text-gray-500 mt-2">Code QR du billet</p>
            <p class="text-xs text-gray-400 mt-1">Présentez ce code QR à l'embarquement</p>
          </div>

          <!-- Important Information -->
          <div class="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <h5 class="font-medium text-yellow-800 mb-2">Informations importantes</h5>
            <ul class="text-sm text-yellow-700 space-y-1">
              <li>• Présentez-vous à l'embarquement 30 minutes avant le départ</li>
              <li>• Ayez votre pièce d'identité et ce billet avec vous</li>
              <li>• Le billet est non remboursable 24h avant le départ</li>
              <li>• Le changement de date est possible avec des frais supplémentaires</li>
            </ul>
          </div>

          <div class="flex justify-end space-x-3 pt-4 border-t">
            <button
              @click="shareTicket(selectedTicket)"
              class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Partager
            </button>
            <button
              @click="downloadTicket(selectedTicket)"
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
const showTicketModal = ref(false)
const selectedTicket = ref(null)

// Données mockées
const tickets = ref([
  {
    id: 1,
    ticketNumber: 'TK001',
    bookingReference: 'BK001',
    departureCity: 'Kinshasa',
    destinationCity: 'Lubumbashi',
    date: '15/03/2026',
    departureTime: '08:00',
    arrivalTime: '14:30',
    duration: '6h 30min',
    busType: 'VIP',
    busNumber: 'RUSA-001',
    passengerName: 'Jean Dupont',
    phoneNumber: '+243 123 456 789',
    email: 'jean.dupont@email.com',
    seatNumber: '12A',
    class: 'VIP',
    price: 15000,
    status: 'active',
    purchaseDate: '10/03/2026'
  },
  {
    id: 2,
    ticketNumber: 'TK002',
    bookingReference: 'BK002',
    departureCity: 'Kinshasa',
    destinationCity: 'Matadi',
    date: '18/03/2026',
    departureTime: '14:30',
    arrivalTime: '18:45',
    duration: '4h 15min',
    busType: 'Standard',
    busNumber: 'RUSA-005',
    passengerName: 'Jean Dupont',
    phoneNumber: '+243 123 456 789',
    email: 'jean.dupont@email.com',
    seatNumber: '15C',
    class: 'Standard',
    price: 8500,
    status: 'active',
    purchaseDate: '12/03/2026'
  },
  {
    id: 3,
    ticketNumber: 'TK003',
    bookingReference: 'BK003',
    departureCity: 'Kinshasa',
    destinationCity: 'Bukavu',
    date: '20/03/2026',
    departureTime: '10:15',
    arrivalTime: '16:30',
    duration: '6h 15min',
    busType: 'VIP',
    busNumber: 'RUSA-002',
    passengerName: 'Jean Dupont',
    phoneNumber: '+243 123 456 789',
    email: 'jean.dupont@email.com',
    seatNumber: '8A',
    class: 'VIP',
    price: 12000,
    status: 'used',
    purchaseDate: '05/03/2026'
  },
  {
    id: 4,
    ticketNumber: 'TK004',
    bookingReference: 'BK004',
    departureCity: 'Kinshasa',
    destinationCity: 'Kisangani',
    date: '01/02/2026',
    departureTime: '09:00',
    arrivalTime: '15:30',
    duration: '6h 30min',
    busType: 'Standard',
    busNumber: 'RUSA-003',
    passengerName: 'Jean Dupont',
    phoneNumber: '+243 123 456 789',
    email: 'jean.dupont@email.com',
    seatNumber: '22B',
    class: 'Standard',
    price: 10000,
    status: 'expired',
    purchaseDate: '25/01/2026'
  }
])

// Tickets filtrés
const filteredTickets = computed(() => {
  if (!statusFilter.value) {
    return tickets.value
  }
  return tickets.value.filter(ticket => ticket.status === statusFilter.value)
})

// Méthodes
const getTicketStatusClass = (status) => {
  switch (status) {
    case 'active': return 'bg-green-100 text-green-800'
    case 'used': return 'bg-gray-100 text-gray-800'
    case 'expired': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

const getTicketStatusLabel = (status) => {
  switch (status) {
    case 'active': return 'Actif'
    case 'used': return 'Utilisé'
    case 'expired': return 'Expiré'
    default: return status
  }
}

const viewTicketDetails = (ticket) => {
  selectedTicket.value = ticket
  showTicketModal.value = true
}

const closeTicketModal = () => {
  showTicketModal.value = false
  selectedTicket.value = null
}

const downloadTicket = (ticket) => {
  console.log('Téléchargement du billet:', ticket.ticketNumber)
  alert('Téléchargement du billet #' + ticket.ticketNumber + ' en PDF...')
}

const downloadAllTickets = () => {
  console.log('Téléchargement de tous les billets...')
  alert('Téléchargement de tous les billets actifs en ZIP...')
}

const shareTicket = (ticket) => {
  console.log('Partage du billet:', ticket.ticketNumber)
  alert('Lien de partage du billet #' + ticket.ticketNumber + ' copié!')
}
</script>
