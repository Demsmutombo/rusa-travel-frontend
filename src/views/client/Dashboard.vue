<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center space-x-4">
      <!-- Logo -->
      <div class="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden shadow-md">
        <img 
          src="/images/logo/auth-logo (2).png" 
          alt="Rusa Travel" 
          class="w-full h-full object-contain"
        />
      </div>
      <div>
        <h1 class="text-3xl font-bold">Dashboard Client - Espace Personnel</h1>
        <p class="text-gray-600 mt-1">Vue d'ensemble de vos voyages et réservations</p>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Travel History Chart -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Historique des Voyages</h3>
        <div class="h-64">
          <canvas ref="travelChartCanvas"></canvas>
        </div>
      </div>

      <!-- Spending Chart -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Dépenses Mensuelles</h3>
        <div class="h-64">
          <canvas ref="spendingChart"></canvas>
        </div>
      </div>
    </div>

    <!-- Additional Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <!-- Popular Routes -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Routes Préférées</h3>
        <div class="h-48">
          <canvas ref="routesChart"></canvas>
        </div>
      </div>

      <!-- Loyalty Points -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Points Fidélité</h3>
        <div class="h-48">
          <canvas ref="loyaltyChart"></canvas>
        </div>
      </div>

      <!-- Travel Frequency -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Fréquence de Voyage</h3>
        <div class="h-48">
          <canvas ref="frequencyChart"></canvas>
        </div>
      </div>
    </div>

    <!-- Client Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Voyages</p>
            <p class="text-2xl font-bold text-gray-900">{{ clientStats.totalTrips }}</p>
            <p class="text-xs text-green-600 mt-1">+3 ce mois</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Réservations Actives</p>
            <p class="text-2xl font-bold text-gray-900">{{ clientStats.activeBookings }}</p>
            <p class="text-xs text-green-600 mt-1">+2 cette semaine</p>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Points Fidélité</p>
            <p class="text-2xl font-bold text-gray-900">{{ clientStats.loyaltyPoints.toLocaleString() }}</p>
            <p class="text-xs text-green-600 mt-1">+250 ce mois</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Dépensé</p>
            <p class="text-2xl font-bold text-gray-900">{{ formatCurrency(clientStats.totalSpent) }}</p>
            <p class="text-xs text-green-600 mt-1">+15% ce mois</p>
          </div>
          <div class="p-3 bg-yellow-100 rounded-full">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Économies Réalisées</p>
            <p class="text-2xl font-bold text-gray-900">{{ formatCurrency(clientStats.totalSavings) }}</p>
            <p class="text-xs text-green-600 mt-1">+22% ce mois</p>
          </div>
          <div class="p-3 bg-red-100 rounded-full">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts and Analytics -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Travel History -->
      <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-xl font-semibold mb-4">Analyse des Voyages</h2>
        <div class="h-64 flex items-center justify-center text-gray-500">
          <div class="text-center">
            <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <p>Graphique d'analyse des voyages</p>
          </div>
        </div>
      </div>

      <!-- Favorite Destinations -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-xl font-semibold mb-4">Destinations Préférées</h2>
        <div class="space-y-4">
          <div v-for="(destination, index) in favoriteDestinations" :key="destination.id" class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span class="text-sm font-medium text-blue-600">{{ index + 1 }}</span>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">{{ destination.name }}</p>
                <p class="text-xs text-gray-500">{{ destination.trips }} voyages</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm font-medium text-gray-900">{{ destination.frequency }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activities -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Recent Bookings -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold">Réservations Récentes</h2>
          <router-link
            to="/client/bookings"
            class="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Voir tout
          </router-link>
        </div>
        
        <div class="space-y-3">
          <div v-for="booking in recentBookings" :key="booking.id" class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div class="flex items-center space-x-3">
              <div class="p-2 bg-white rounded-full">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900">{{ booking.route }}</p>
                <p class="text-xs text-gray-500">{{ booking.date }}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm font-medium text-gray-900">{{ formatCurrency(booking.price) }}</p>
              <p class="text-xs text-gray-500">{{ booking.status }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Travel Notifications -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold">Notifications Voyage</h2>
          <router-link
            to="/client/notifications"
            class="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Voir tout
          </router-link>
        </div>
        
        <div class="space-y-4">
          <div v-for="notification in travelNotifications" :key="notification.id" class="flex items-start space-x-3 p-3 rounded-lg"
               :class="{
                 'bg-red-50': notification.type === 'urgent',
                 'bg-yellow-50': notification.type === 'reminder',
                 'bg-blue-50': notification.type === 'info'
               }">
            <div class="p-2 rounded-full flex-shrink-0"
                 :class="{
                   'bg-red-100': notification.type === 'urgent',
                   'bg-yellow-100': notification.type === 'reminder',
                   'bg-blue-100': notification.type === 'info'
                 }">
              <svg class="w-5 h-5"
                   :class="{
                     'text-red-600': notification.type === 'urgent',
                     'text-yellow-600': notification.type === 'reminder',
                     'text-blue-600': notification.type === 'info'
                   }"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900">{{ notification.title }}</p>
              <p class="text-xs text-gray-500 mt-1">{{ notification.message }}</p>
              <p class="text-xs text-gray-400 mt-1">{{ notification.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { useRouter } from 'vue-router'

// Enregistrement des composants Chart.js
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

defineOptions({
  name: 'ClientDashboard'
})

const router = useRouter()

// Références aux canvas
const travelChartCanvas = ref<HTMLCanvasElement>()
const spendingChart = ref<HTMLCanvasElement>()
const routesChart = ref<HTMLCanvasElement>()
const loyaltyChart = ref<HTMLCanvasElement>()
const frequencyChart = ref<HTMLCanvasElement>()

// Données client
const clientStats = ref({
  totalTrips: 47,
  activeBookings: 12,
  totalSpent: 2850000,
  loyaltyPoints: 1850,
  monthlyTrips: 8,
  favoriteRoutes: 4,
  totalSavings: 125000
})

// Données supplémentaires
const favoriteDestinations = ref([
  { city: 'Kinshasa', trips: 15, percentage: 32 },
  { city: 'Lubumbashi', trips: 12, percentage: 26 },
  { city: 'Goma', trips: 8, percentage: 17 },
  { city: 'Kisangani', trips: 6, percentage: 13 },
  { city: 'Matadi', trips: 4, percentage: 8 },
  { city: 'Bukavu', trips: 2, percentage: 4 }
])

const routeFrequencies = ref([
  { id: 1, name: 'Kinshasa', trips: 8, frequency: 'Très fréquent' },
  { id: 2, name: 'Lubumbashi', trips: 6, frequency: 'Fréquent' },
  { id: 3, name: 'Goma', trips: 4, frequency: 'Occasionnel' },
  { id: 4, name: 'Kisangani', trips: 3, frequency: 'Rare' },
  { id: 5, name: 'Matadi', trips: 3, frequency: 'Rare' }
])

// Recent bookings
const recentBookings = ref([
  {
    id: 1,
    description: 'Kinshasa → Lubumbashi',
    time: 'Il y a 2 heures',
    amount: 45000,
    status: 'Confirmé',
    date: '15 Mars 2024'
  },
  {
    id: 2,
    description: 'Kinshasa → Goma',
    time: 'Il y a 3 jours',
    amount: 35000,
    status: 'Confirmé',
    date: '12 Mars 2024'
  },
  {
    id: 3,
    description: 'Kinshasa → Kisangani',
    time: 'Il y a 1 semaine',
    amount: 28000,
    status: 'Terminé',
    date: '8 Mars 2024'
  }
])

// Travel notifications
const travelNotifications = ref([
  {
    id: 1,
    title: 'Départ imminent',
    description: 'Votre voyage Kinshasa-Lubumbashi prévu dans 2 heures',
    type: 'urgent',
    time: 'Il y a 30 minutes'
  },
  {
    id: 2,
    title: 'Promotion spéciale',
    description: '-20% sur tous les voyages vers l\'Est cette semaine',
    type: 'info',
    time: 'Il y a 2 heures'
  },
  {
    id: 3,
    title: 'Points fidélité',
    description: 'Vous avez gagné 250 points ce mois',
    type: 'reminder',
    time: 'Il y a 1 jour'
  }
])

// Currency formatter for Congolese Francs
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('fr-CD', {
    style: 'currency',
    currency: 'CDF',
    minimumFractionDigits: 0
  }).format(amount)
}

// Chart initialization
onMounted(() => {
  // Travel History Chart
  const travelCanvas = travelChartCanvas.value
  if (travelCanvas) {
    new Chart(travelCanvas, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Voyages',
          data: [3, 4, 2, 5, 6, 4],
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    })
  }

  // Spending Chart
  const spendingCanvas = spendingChart.value
  if (spendingCanvas) {
    new Chart(spendingCanvas, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Dépenses (K Fb)',
          data: [65000, 85000, 55000, 95000, 120000, 60000],
          backgroundColor: 'rgba(34, 197, 94, 0.8)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    })
  }

  // Popular Routes Chart
  const routesCanvas = routesChart.value
  if (routesCanvas) {
    new Chart(routesCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Kinshasa-Lubumbashi', 'Kinshasa-Goma', 'Kinshasa-Kisangani', 'Autres'],
        datasets: [{
          data: [40, 25, 20, 15],
          backgroundColor: [
            'rgba(59, 130, 246, 0.8)',
            'rgba(34, 197, 94, 0.8)',
            'rgba(251, 146, 60, 0.8)',
            'rgba(156, 163, 175, 0.8)'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
        }
      }
    })
  }

  // Loyalty Points Chart
  const loyaltyCanvas = loyaltyChart.value
  if (loyaltyCanvas) {
    new Chart(loyaltyCanvas, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Points Gagnés',
          data: [180, 220, 150, 280, 320, 100],
          backgroundColor: 'rgba(59, 130, 246, 0.8)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    })
  }

  // Travel Frequency Chart
  const frequencyCanvas = frequencyChart.value
  if (frequencyCanvas) {
    new Chart(frequencyCanvas, {
      type: 'polarArea',
      data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [{
          data: [4, 3, 5, 2, 6, 3, 1],
          backgroundColor: [
            'rgba(59, 130, 246, 0.6)',
            'rgba(34, 197, 94, 0.6)',
            'rgba(251, 146, 60, 0.6)',
            'rgba(156, 163, 175, 0.6)',
            'rgba(239, 68, 68, 0.6)',
            'rgba(147, 51, 234, 0.6)',
            'rgba(245, 158, 11, 0.6)'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
        }
      }
    })
  }
})
</script>
