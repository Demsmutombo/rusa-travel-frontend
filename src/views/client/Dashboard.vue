<template>
  <DashboardLayout>
    <!-- Welcome Section -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 sm:p-6 text-white mb-6">
        <h2 class="text-lg sm:text-2xl font-bold mb-2">Bienvenue, {{ userProfile.name }} !</h2>
        <p class="text-sm sm:text-base opacity-90">Vous avez {{ upcomingTrips.length }} voyage(s) à venir</p>
      </div>

      <!-- Stats Overview -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Voyages à Venir</p>
            <p class="text-xl sm:text-2xl font-bold text-gray-900">{{ upcomingTrips.length }}</p>
            <p class="text-xs text-green-600 mt-1">Prochains jours</p>
          </div>
          <div class="p-2 sm:p-3 bg-blue-100 rounded-full">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Réservations Récentes</p>
            <p class="text-xl sm:text-2xl font-bold text-gray-900">{{ recentBookings.length }}</p>
            <p class="text-xs text-green-600 mt-1">30 derniers jours</p>
          </div>
          <div class="p-2 sm:p-3 bg-green-100 rounded-full">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Notifications</p>
            <p class="text-xl sm:text-2xl font-bold text-gray-900">{{ unreadNotifications }}</p>
            <p class="text-xs text-yellow-600 mt-1">Non lues</p>
          </div>
          <div class="p-2 sm:p-3 bg-yellow-100 rounded-full">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Points Fidélité</p>
            <p class="text-xl sm:text-2xl font-bold text-gray-900">{{ userProfile.loyaltyPoints }}</p>
            <p class="text-xs text-purple-600 mt-1">À utiliser</p>
          </div>
          <div class="p-2 sm:p-3 bg-purple-100 rounded-full">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Upcoming Trips -->
      <div class="lg:col-span-2 space-y-6">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold">Voyages à Venir</h3>
            <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Voir tout
            </button>
          </div>
          <div class="space-y-4">
            <div 
              v-for="trip in upcomingTrips" 
              :key="trip.id"
              class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div class="flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-center space-x-2 mb-2">
                    <span class="text-lg font-bold text-gray-900">{{ trip.departure }}</span>
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <span class="text-lg font-bold text-gray-900">{{ trip.destination }}</span>
                  </div>
                  <div class="text-sm text-gray-600 space-y-1">
                    <div>Date: {{ formatDate(trip.date) }}</div>
                    <div>Heure: {{ trip.time }}</div>
                    <div>Bus: {{ trip.busPlate }}</div>
                    <div>Siège: {{ trip.seatNumber }}</div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-lg font-bold text-blue-600">{{ formatCurrency(trip.price) }}</div>
                  <span :class="getStatusClass(trip.status)" class="inline-block px-2 py-1 text-xs font-semibold rounded-full mt-2">
                    {{ getStatusLabel(trip.status) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Bookings -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold">Réservations Récentes</h3>
            <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Voir tout
            </button>
          </div>
          <div class="space-y-4">
            <div 
              v-for="booking in recentBookings" 
              :key="booking.id"
              class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div class="flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-center space-x-2 mb-2">
                    <span class="font-medium text-gray-900">{{ booking.route }}</span>
                  </div>
                  <div class="text-sm text-gray-600 space-y-1">
                    <div>Réservation: #{{ booking.id }}</div>
                    <div>Date: {{ formatDate(booking.date) }}</div>
                    <div>Places: {{ booking.seats }}</div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="font-bold text-gray-900">{{ formatCurrency(booking.price) }}</div>
                  <span :class="getStatusClass(booking.status)" class="inline-block px-2 py-1 text-xs font-semibold rounded-full mt-2">
                    {{ getStatusLabel(booking.status) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Sidebar -->
      <div class="space-y-6">
        <!-- Notifications -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold">Notifications</h3>
            <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Tout marquer comme lu
            </button>
          </div>
          <div class="space-y-3">
            <div 
              v-for="notification in notifications" 
              :key="notification.id"
              class="p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
              :class="{ 'bg-blue-50': !notification.read }"
            >
              <div class="flex items-start space-x-3">
                <div class="p-2 rounded-full" :class="getNotificationIconClass(notification.type)">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-sm font-medium text-gray-900">{{ notification.title }}</p>
                  <p class="text-xs text-gray-600 mt-1">{{ notification.message }}</p>
                  <p class="text-xs text-gray-400 mt-1">{{ formatRelativeTime(notification.time) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Favorite Destinations -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold">Destinations Préférées</h3>
            <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Modifier
            </button>
          </div>
          <div class="space-y-3">
            <div 
              v-for="destination in favoriteDestinations" 
              :key="destination.id"
              class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {{ destination.name.charAt(0) }}
                </div>
                <div>
                  <p class="font-medium text-gray-900">{{ destination.name }}</p>
                  <p class="text-xs text-gray-600">{{ destination.trips }} voyages</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm font-bold text-blue-600">{{ formatCurrency(destination.avgPrice) }}</p>
                <p class="text-xs text-gray-500">moy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>
        <script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue'
import DashboardLayout from '@/components/layouts/DashboardLayout.vue'

defineOptions({
  name: 'ClientDashboard'
})

// User profile
const userProfile = reactive({
  name: 'Jean Client',
  email: 'jean.client@email.com',
  phone: '+243 812 345 678',
  loyaltyPoints: 2500
})

// Upcoming trips
const upcomingTrips = ref([
  {
    id: 1,
    departure: 'Kinshasa',
    destination: 'Lubumbashi',
    date: '2024-03-20',
    time: '08:00',
    busPlate: 'CD-123-AB',
    seatNumber: '12A',
    price: 15000,
    status: 'confirmed'
  },
  {
    id: 2,
    departure: 'Lubumbashi',
    destination: 'Kinshasa',
    date: '2024-03-25',
    time: '14:30',
    busPlate: 'CD-456-CD',
    seatNumber: '8B',
    price: 15000,
    status: 'confirmed'
  }
])

// Recent bookings
const recentBookings = ref([
  {
    id: 'BK001',
    route: 'Kinshasa → Kisangani',
    date: '2024-03-10',
    seats: 2,
    price: 20000,
    status: 'completed'
  },
  {
    id: 'BK002',
    route: 'Kinshasa → Matadi',
    date: '2024-03-05',
    seats: 1,
    price: 4500,
    status: 'completed'
  },
  {
    id: 'BK003',
    route: 'Kinshasa → Bukavu',
    date: '2024-02-28',
    seats: 3,
    price: 42000,
    status: 'completed'
  }
])

// Notifications
const notifications = ref([
  {
    id: 1,
    type: 'info',
    title: 'Nouveau trajet disponible',
    message: 'Un nouveau trajet Kinshasa-Lubumbashi a été ajouté pour le 25 mars.',
    time: new Date('2024-03-13T10:30:00'),
    read: false
  },
  {
    id: 2,
    type: 'success',
    title: 'Réservation confirmée',
    message: 'Votre réservation #BK004 pour Kinshasa-Lubumbashi a été confirmée.',
    time: new Date('2024-03-12T15:45:00'),
    read: false
  },
  {
    id: 3,
    type: 'reminder',
    title: 'Rappel de voyage',
    message: 'Votre voyage Kinshasa-Lubumbashi est prévu pour demain à 08:00.',
    time: new Date('2024-03-11T09:00:00'),
    read: true
  },
  {
    id: 4,
    type: 'promotion',
    title: 'Offre spéciale',
    message: 'Profitez de -20% sur tous les trajets vers Lubumbashi cette semaine.',
    time: new Date('2024-03-10T14:20:00'),
    read: true
  }
])

// Favorite destinations
const favoriteDestinations = ref([
  {
    id: 1,
    name: 'Lubumbashi',
    trips: 8,
    avgPrice: 15000
  },
  {
    id: 2,
    name: 'Kisangani',
    trips: 5,
    avgPrice: 10000
  },
  {
    id: 3,
    name: 'Matadi',
    trips: 3,
    avgPrice: 4500
  },
  {
    id: 4,
    name: 'Bukavu',
    trips: 2,
    avgPrice: 14000
  }
])

// Computed properties
const unreadNotifications = computed(() => {
  return notifications.value.filter(n => !n.read).length
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

const formatRelativeTime = (date: Date) => {
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60))
  const diffInDays = Math.floor(diffInHours / 24)

  if (diffInHours < 1) {
    return 'Il y a quelques minutes'
  } else if (diffInHours < 24) {
    return `Il y a ${diffInHours} heure${diffInHours > 1 ? 's' : ''}`
  } else if (diffInDays < 7) {
    return `Il y a ${diffInDays} jour${diffInDays > 1 ? 's' : ''}`
  } else {
    return date.toLocaleDateString('fr-FR')
  }
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

const getNotificationIconClass = (type: string) => {
  switch (type) {
    case 'info':
      return 'bg-blue-100 text-blue-600'
    case 'success':
      return 'bg-green-100 text-green-600'
    case 'reminder':
      return 'bg-yellow-100 text-yellow-600'
    case 'promotion':
      return 'bg-purple-100 text-purple-600'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}

// Actions
const markAllNotificationsAsRead = () => {
  notifications.value.forEach(notification => {
    notification.read = true
  })
}

const viewAllTrips = () => {
  // Navigate to trips page
  console.log('Navigate to all trips')
}

const viewAllBookings = () => {
  // Navigate to bookings page
  console.log('Navigate to all bookings')
}

const editFavoriteDestinations = () => {
  // Open modal to edit favorites
  console.log('Edit favorite destinations')
}

onMounted(() => {
  // Initialize data
  console.log('Client Dashboard mounted')
})
</script>
