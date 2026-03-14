<template>
  <!-- Platform Overview Stats -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <p class="text-xs sm:text-sm font-medium text-gray-600">Total Utilisateurs</p>
            <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ globalStats.totalUsers.toLocaleString() }}</p>
            <p class="text-xs text-green-600 mt-1">+{{ globalStats.monthlyGrowth }}% ce mois</p>
          </div>
          <div class="p-2 sm:p-3 bg-blue-100 rounded-full ml-2 sm:ml-0">
            <svg class="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <p class="text-xs sm:text-sm font-medium text-gray-600">Total Agences</p>
            <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ globalStats.totalAgencies.toLocaleString() }}</p>
            <p class="text-xs text-green-600 mt-1">+8% ce mois</p>
          </div>
          <div class="p-2 sm:p-3 bg-purple-100 rounded-full ml-2 sm:ml-0">
            <svg class="w-4 h-4 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <p class="text-xs sm:text-sm font-medium text-gray-600">Total Réservations</p>
            <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ globalStats.totalBookings.toLocaleString() }}</p>
            <p class="text-xs text-green-600 mt-1">+15% ce mois</p>
          </div>
          <div class="p-2 sm:p-3 bg-green-100 rounded-full ml-2 sm:ml-0">
            <svg class="w-4 h-4 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <p class="text-xs sm:text-sm font-medium text-gray-600">Total Bus</p>
            <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ globalStats.totalBuses.toLocaleString() }}</p>
            <p class="text-xs text-green-600 mt-1">+12% ce mois</p>
          </div>
          <div class="p-2 sm:p-3 bg-orange-100 rounded-full ml-2 sm:ml-0">
            <svg class="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Revenue Overview -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-4 sm:space-y-0">
          <h2 class="text-lg sm:text-xl font-semibold">Revenus</h2>
          <select v-model="revenuePeriod" class="px-3 py-2 border border-gray-300 rounded-lg text-sm w-full sm:w-auto">
            <option value="7days">7 derniers jours</option>
            <option value="1month">1 mois</option>
            <option value="3months">3 mois</option>
            <option value="1year">1 an</option>
          </select>
        </div>
        <div class="h-48 sm:h-64">
          <canvas ref="revenueChart"></canvas>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <h2 class="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Résumé Financier</h2>
        <div class="space-y-3 sm:space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-xs sm:text-sm text-gray-600">Revenus Totaux</span>
            <span class="text-sm sm:font-semibold">{{ formatCurrency(globalStats.totalRevenue) }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-xs sm:text-sm text-gray-600">Commissions Plateforme</span>
            <span class="text-sm sm:font-semibold">{{ formatCurrency(globalStats.platformCommissions) }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-xs sm:text-sm text-gray-600">Croissance Mensuelle</span>
            <span class="text-sm sm:font-semibold text-green-600">+{{ globalStats.monthlyGrowth }}%</span>
          </div>
          <div class="pt-3 sm:pt-4 border-t border-gray-200">
            <button @click="refreshData" class="w-full px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
              Actualiser les données
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <h2 class="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Activité Récente</h2>
        <div class="space-y-3 sm:space-y-4">
          <div v-for="activity in recentActivity" :key="activity.id" class="flex items-start space-x-3">
            <div :class="getActivityIconClass(activity.type)" class="p-2 rounded-full flex-shrink-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ activity.description }}</p>
              <p class="text-xs text-gray-500">{{ activity.time }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <h2 class="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Top Agences</h2>
        <div class="space-y-3 sm:space-y-4">
          <div v-for="(agency, index) in topAgencies" :key="index" class="flex items-center justify-between">
            <div class="flex items-center space-x-3 min-w-0 flex-1">
              <div class="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span class="text-xs sm:text-sm font-medium text-blue-600">{{ index + 1 }}</span>
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs sm:text-sm font-medium text-gray-900 truncate">{{ agency.name }}</p>
                <p class="text-xs text-gray-500">{{ agency.bookings }} réservations</p>
              </div>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="text-xs sm:text-sm font-medium text-gray-900">{{ formatCurrency(agency.revenue) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

// Reactive statistics data
const globalStats = ref({
  totalUsers: 15420,
  totalAgencies: 156,
  totalBookings: 8934,
  totalRevenue: 2847500,
  totalBuses: 1247,
  platformCommissions: 284750,
  monthlyGrowth: 12.5
})

// Revenue period filter
const revenuePeriod = ref('1month')

// Recent activity data
const recentActivity = ref([
  { id: 1, type: 'booking', description: 'Nouvelle réservation - Kinshasa à Lubumbashi', time: 'Il y a 5 minutes' },
  { id: 2, type: 'user', description: 'Nouvel utilisateur inscrit - Marie Kabila', time: 'Il y a 15 minutes' },
  { id: 3, type: 'agency', description: 'Agence approuvée - Express Line', time: 'Il y a 1 heure' },
  { id: 4, type: 'payment', description: 'Paiement reçu - 85,000 FC', time: 'Il y a 2 heures' },
  { id: 5, type: 'system', description: 'Synchronisation des données terminée', time: 'Il y a 3 heures' }
])

// Top agencies data
const topAgencies = ref([
  { name: 'Trans Congo Express', bookings: 1567, revenue: 45000000 },
  { name: 'City Bus RDC', bookings: 892, revenue: 28000000 },
  { name: 'Express Line', bookings: 456, revenue: 18000000 },
  { name: 'Royaume Bus', bookings: 234, revenue: 8000000 },
  { name: 'Congo Travel', bookings: 89, revenue: 3200000 }
])

// Chart ref
const revenueChart = ref<HTMLCanvasElement | null>(null)

// Revenue chart data based on period
const revenueChartData = computed(() => {
  const periods = {
    '7days': {
      labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
      data: [320000, 380000, 420000, 390000, 450000, 480000, 520000]
    },
    '1month': {
      labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
      data: [1800000, 2100000, 2300000, 2847500]
    },
    '3months': {
      labels: ['Jan', 'Fév', 'Mar'],
      data: [6800000, 7200000, 8450000]
    },
    '1year': {
      labels: ['J-D', 'F-M', 'A-M', 'M-J', 'J-A', 'S-O', 'N-D'],
      data: [12000000, 14000000, 16000000, 18000000, 20000000, 22000000, 28475000]
    }
  }
  return periods[revenuePeriod.value as keyof typeof periods]
})

// Methods
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XAF',
    minimumFractionDigits: 0
  }).format(amount).replace('XAF', 'FC')
}

const getActivityIconClass = (type: string) => {
  const classes = {
    booking: 'bg-blue-100 text-blue-600',
    user: 'bg-green-100 text-green-600',
    agency: 'bg-purple-100 text-purple-600',
    payment: 'bg-orange-100 text-orange-600',
    system: 'bg-gray-100 text-gray-600'
  }
  return classes[type as keyof typeof classes] || 'bg-gray-100 text-gray-600'
}

const refreshData = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Update stats with random variations
  globalStats.value.totalUsers += Math.floor(Math.random() * 20) - 10
  globalStats.value.totalBookings += Math.floor(Math.random() * 50) - 25
  globalStats.value.totalRevenue += Math.floor(Math.random() * 100000) - 50000
  
  console.log('Dashboard data refreshed')
}

// Initialize chart
const initializeChart = () => {
  if (revenueChart.value) {
    new Chart(revenueChart.value, {
      type: 'line',
      data: {
        labels: revenueChartData.value.labels,
        datasets: [{
          label: 'Revenus (FC)',
          data: revenueChartData.value.data,
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return formatCurrency(Number(value))
              }
            }
          }
        }
      }
    })
  }
}

// Watch for period changes
watch(revenuePeriod, () => {
  initializeChart()
})

onMounted(() => {
  initializeChart()
  console.log('Admin dashboard loaded')
})
</script>
