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
        <h1 class="text-3xl font-bold">Dashboard Transporteur - Gestion des Courses</h1>
        <p class="text-gray-600 mt-1">Vue d'ensemble de vos activités de transport</p>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Revenue Chart -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Évolution des Revenus</h3>
        <div class="h-64">
          <canvas ref="revenueChartCanvas"></canvas>
        </div>
      </div>

      <!-- Bus Occupancy Chart -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Taux de Remplissage</h3>
        <div class="h-64">
          <canvas ref="occupancyChart"></canvas>
        </div>
      </div>
    </div>

    <!-- Additional Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <!-- Route Performance -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Performance par Route</h3>
        <div class="h-48">
          <canvas ref="routeChart"></canvas>
        </div>
      </div>

      <!-- Bus Status -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Statut des Bus</h3>
        <div class="h-48">
          <canvas ref="busChart"></canvas>
        </div>
      </div>

      <!-- Daily Revenue -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Revenus Quotidiens</h3>
        <div class="h-48">
          <canvas ref="dailyChart"></canvas>
        </div>
      </div>
    </div>

    <!-- Carrier Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Bus</p>
            <p class="text-2xl font-bold text-gray-900">{{ carrierStats.totalBuses }}</p>
            <p class="text-xs text-green-600 mt-1">+2 ce mois</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Routes Actives</p>
            <p class="text-2xl font-bold text-gray-900">{{ carrierStats.activeRoutes }}</p>
            <p class="text-xs text-green-600 mt-1">+3 ce mois</p>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Réservations Aujourd'hui</p>
            <p class="text-2xl font-bold text-gray-900">{{ carrierStats.todayBookings }}</p>
            <p class="text-xs text-green-600 mt-1">+18% cette semaine</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Revenus Mensuels</p>
            <p class="text-2xl font-bold text-gray-900">{{ formatCurrency(carrierStats.monthlyRevenue) }}</p>
            <p class="text-xs text-green-600 mt-1">+22% ce mois</p>
          </div>
          <div class="p-3 bg-yellow-100 rounded-full">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Taux de Remplissage</p>
            <p class="text-2xl font-bold text-gray-900">{{ carrierStats.occupancyRate }}%</p>
            <p class="text-xs text-green-600 mt-1">+5% ce mois</p>
          </div>
          <div class="p-3 bg-red-100 rounded-full">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts and Analytics -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Revenue Chart -->
      <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-xl font-semibold mb-4">Analyse des Revenus</h2>
        <div class="h-64 flex items-center justify-center text-gray-500">
          <div class="text-center">
            <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <p>Graphique d'analyse des revenus</p>
          </div>
        </div>
      </div>

      <!-- Top Routes -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-xl font-semibold mb-4">Meilleures Routes</h2>
        <div class="space-y-4">
          <div v-for="(route, index) in topRoutes" :key="route.id" class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span class="text-sm font-medium text-blue-600">{{ index + 1 }}</span>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">{{ route.name }}</p>
                <p class="text-xs text-gray-500">{{ route.bookings }} réservations</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm font-medium text-gray-900">{{ formatCurrency(route.revenue) }}</p>
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
            to="/carrier/bookings"
            class="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Voir tout
          </router-link>
        </div>
        
        <div class="space-y-4">
          <div v-for="booking in recentBookings" :key="booking.id" class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div class="flex items-center space-x-3">
              <div class="p-2 bg-white rounded-full">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">{{ booking.description }}</p>
                <p class="text-xs text-gray-500">{{ booking.time }}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm font-medium text-gray-900">{{ formatCurrency(booking.amount) }}</p>
              <p class="text-xs text-gray-500">{{ booking.status }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bus Issues -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold">Alertes Bus</h2>
          <router-link
            to="/carrier/maintenance"
            class="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Voir tout
          </router-link>
        </div>
        
        <div class="space-y-4">
          <div v-for="issue in busIssues" :key="issue.id" class="flex items-start space-x-3 p-3 rounded-lg"
               :class="{
                 'bg-red-50': issue.severity === 'high',
                 'bg-yellow-50': issue.severity === 'medium',
                 'bg-blue-50': issue.severity === 'low'
               }">
            <div class="p-2 rounded-full"
                 :class="{
                   'bg-red-100': issue.severity === 'high',
                   'bg-yellow-100': issue.severity === 'medium',
                   'bg-blue-100': issue.severity === 'low'
                 }">
              <svg class="w-5 h-5"
                   :class="{
                     'text-red-600': issue.severity === 'high',
                     'text-yellow-600': issue.severity === 'medium',
                     'text-blue-600': issue.severity === 'low'
                   }"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900">{{ issue.title }}</p>
              <p class="text-xs text-gray-500 mt-1">{{ issue.description }}</p>
              <p class="text-xs text-gray-400 mt-2">{{ issue.time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Chart from 'chart.js/auto'

// Define component name to satisfy ESLint
defineOptions({
  name: 'CarrierDashboard'
})

// Chart refs
const revenueChartCanvas = ref<HTMLCanvasElement | null>(null)
const occupancyChart = ref<HTMLCanvasElement | null>(null)
const routeChart = ref<HTMLCanvasElement | null>(null)
const busChart = ref<HTMLCanvasElement | null>(null)
const dailyChart = ref<HTMLCanvasElement | null>(null)

// Carrier statistics
const carrierStats = reactive({
  totalBuses: 12,
  activeRoutes: 8,
  todayBookings: 24,
  monthlyRevenue: 2500000,
  occupancyRate: 85
})

// Top performing routes
const topRoutes = ref([
  { id: 1, name: 'Kinshasa-Lubumbashi', bookings: 124, revenue: 5600000 },
  { id: 2, name: 'Kinshasa-Goma', bookings: 98, revenue: 4400000 },
  { id: 3, name: 'Kinshasa-Kisangani', bookings: 76, revenue: 3800000 },
  { id: 4, name: 'Lubumbashi-Kolwezi', bookings: 62, revenue: 2800000 },
  { id: 5, name: 'Kinshasa-Matadi', bookings: 45, revenue: 2000000 }
])

// Recent bookings
const recentBookings = ref([
  {
    id: 1,
    description: 'Réservation #1234 - Kinshasa-Lubumbashi',
    time: 'Il y a 2 minutes',
    amount: 45000,
    status: 'Confirmé',
    client: 'Jean Mutombo'
  },
  {
    id: 2,
    description: 'Réservation #1235 - Kinshasa-Goma',
    time: 'Il y a 5 minutes',
    amount: 35000,
    status: 'Confirmé',
    client: 'Marie Kabila'
  },
  {
    id: 3,
    description: 'Réservation #1236 - Kinshasa-Kisangani',
    time: 'Il y a 8 minutes',
    amount: 48000,
    status: 'En attente',
    client: 'Pierre Lumumba'
  }
])

// Bus issues and alerts
const busIssues = ref([
  {
    id: 1,
    title: 'Maintenance Bus 001',
    description: 'Le bus 001 nécessite une révision moteur',
    severity: 'high',
    time: 'Il y a 10 minutes'
  },
  {
    id: 2,
    title: 'Pneus à remplacer',
    description: 'Les pneus du bus 003 doivent être remplacés',
    severity: 'medium',
    time: 'Il y a 30 minutes'
  },
  {
    id: 3,
    title: 'Nettoyage programmé',
    description: 'Nettoyage intérieur des bus prévu pour demain',
    severity: 'low',
    time: 'Il y a 2 heures'
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
  // Revenue Chart
  const revenueCanvas = revenueChartCanvas.value
  if (revenueCanvas) {
    new Chart(revenueCanvas, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Revenus (M Fb)',
          data: [2.0, 2.1, 2.3, 1.9, 2.5, 2.3],
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

  // Occupancy Chart
  const occupancyCanvas = occupancyChart.value
  if (occupancyCanvas) {
    new Chart(occupancyCanvas, {
      type: 'bar',
      data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [{
          label: 'Taux de remplissage (%)',
          data: [85, 72, 90, 65, 88, 92, 78],
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

  // Route Performance Chart
  const routeCanvas = routeChart.value
  if (routeCanvas) {
    new Chart(routeCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Kinshasa-Lubumbashi', 'Kinshasa-Goma', 'Kinshasa-Kisangani', 'Autres'],
        datasets: [{
          data: [35, 25, 20, 20],
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

  // Bus Status Chart
  const busCanvas = busChart.value
  if (busCanvas) {
    new Chart(busCanvas, {
      type: 'bar',
      data: {
        labels: ['Bus 001', 'Bus 002', 'Bus 003', 'Bus 004', 'Bus 005'],
        datasets: [{
          label: 'Statut',
          data: [85, 72, 90, 65, 88],
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

  // Daily Revenue Chart
  const dailyCanvas = dailyChart.value
  if (dailyCanvas) {
    new Chart(dailyCanvas, {
      type: 'polarArea',
      data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [{
          data: [450000, 380000, 520000, 480000, 620000, 550000, 410000],
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
