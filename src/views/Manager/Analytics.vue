<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-bold">Statistiques et Analytics</h1>
      <p class="text-gray-600 mt-1">Analyse approfondie des performances et tendances</p>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Revenue Analytics -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Analyse des Revenus</h3>
        <div class="h-64">
          <canvas ref="revenueChartCanvas"></canvas>
        </div>
      </div>

      <!-- Booking Trends -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Tendances des Réservations</h3>
        <div class="h-64">
          <canvas ref="bookingChartCanvas"></canvas>
        </div>
      </div>
    </div>

    <!-- Additional Analytics -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <!-- Route Performance -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Performance par Route</h3>
        <div class="h-48">
          <canvas ref="routeChartCanvas"></canvas>
        </div>
      </div>

      <!-- Carrier Performance -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Performance Transporteurs</h3>
        <div class="h-48">
          <canvas ref="carrierChartCanvas"></canvas>
        </div>
      </div>

      <!-- Customer Satisfaction -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Satisfaction Client</h3>
        <div class="h-48">
          <canvas ref="satisfactionChartCanvas"></canvas>
        </div>
      </div>
    </div>

    <!-- Key Metrics -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Revenus Totaux</p>
            <p class="text-2xl font-bold text-gray-900">{{ formatCurrency(analyticsStats.totalRevenue) }}</p>
            <p class="text-xs text-green-600 mt-1">+25% ce mois</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Taux de Croissance</p>
            <p class="text-2xl font-bold text-gray-900">{{ analyticsStats.growthRate }}%</p>
            <p class="text-xs text-green-600 mt-1">+8% vs trimestre dernier</p>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Réservations Actives</p>
            <p class="text-2xl font-bold text-gray-900">{{ analyticsStats.activeBookings.toLocaleString() }}</p>
            <p class="text-xs text-green-600 mt-1">+15% cette semaine</p>
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
            <p class="text-sm font-medium text-gray-600">Taux Conversion</p>
            <p class="text-2xl font-bold text-gray-900">{{ analyticsStats.conversionRate }}%</p>
            <p class="text-xs text-green-600 mt-1">+3% ce mois</p>
          </div>
          <div class="p-3 bg-yellow-100 rounded-full">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Satisfaction Client</p>
            <p class="text-2xl font-bold text-gray-900">{{ analyticsStats.satisfaction }}%</p>
            <p class="text-xs text-green-600 mt-1">+2% ce mois</p>
          </div>
          <div class="p-3 bg-red-100 rounded-full">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Detailed Analytics -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Revenue Breakdown -->
      <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-xl font-semibold mb-4">Analyse Détaillée des Revenus</h2>
        <div class="h-64">
          <canvas ref="detailedRevenueChartCanvas"></canvas>
        </div>
      </div>

      <!-- Top Performers -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-xl font-semibold mb-4">Top Performers</h2>
        <div class="space-y-4">
          <div v-for="(performer, index) in topPerformers" :key="performer.id" class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span class="text-sm font-medium text-blue-600">{{ index + 1 }}</span>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">{{ performer.name }}</p>
                <p class="text-xs text-gray-500">{{ performer.type }}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm font-medium text-gray-900">{{ formatCurrency(performer.revenue) }}</p>
              <p class="text-xs text-green-600">+{{ performer.growth }}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activities -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Recent Transactions -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold">Transactions Récentes</h2>
          <button class="text-blue-600 hover:text-blue-700 font-medium text-sm">
            Voir tout
          </button>
        </div>
        
        <div class="space-y-4">
          <div v-for="transaction in recentTransactions" :key="transaction.id" class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div class="flex items-center space-x-3">
              <div class="p-2 bg-white rounded-full">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">{{ transaction.description }}</p>
                <p class="text-xs text-gray-500">{{ transaction.time }}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm font-medium text-gray-900">{{ formatCurrency(transaction.amount) }}</p>
              <p class="text-xs text-gray-500">{{ transaction.status }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Analytics Alerts -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold">Alertes Analytics</h2>
          <button class="text-blue-600 hover:text-blue-700 font-medium text-sm">
            Voir tout
          </button>
        </div>
        
        <div class="space-y-4">
          <div v-for="alert in analyticsAlerts" :key="alert.id" class="flex items-start space-x-3 p-3 rounded-lg"
               :class="{
                 'bg-red-50': alert.severity === 'critical',
                 'bg-yellow-50': alert.severity === 'warning',
                 'bg-blue-50': alert.severity === 'info'
               }">
            <div class="p-2 rounded-full"
                 :class="{
                   'bg-red-100': alert.severity === 'critical',
                   'bg-yellow-100': alert.severity === 'warning',
                   'bg-blue-100': alert.severity === 'info'
                 }">
              <svg class="w-5 h-5"
                   :class="{
                     'text-red-600': alert.severity === 'critical',
                     'text-yellow-600': alert.severity === 'warning',
                     'text-blue-600': alert.severity === 'info'
                   }"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900">{{ alert.title }}</p>
              <p class="text-xs text-gray-500 mt-1">{{ alert.description }}</p>
              <p class="text-xs text-gray-400 mt-2">{{ alert.time }}</p>
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

defineOptions({
  name: 'ManagerAnalytics'
})

// Chart refs
const revenueChartCanvas = ref<HTMLCanvasElement | null>(null)
const bookingChartCanvas = ref<HTMLCanvasElement | null>(null)
const routeChartCanvas = ref<HTMLCanvasElement | null>(null)
const carrierChartCanvas = ref<HTMLCanvasElement | null>(null)
const satisfactionChartCanvas = ref<HTMLCanvasElement | null>(null)
const detailedRevenueChartCanvas = ref<HTMLCanvasElement | null>(null)

// Analytics statistics
const analyticsStats = reactive({
  totalRevenue: 125000000,
  growthRate: 28,
  activeBookings: 3421,
  conversionRate: 68,
  satisfaction: 94
})

// Top performers
const topPerformers = ref([
  { id: 1, name: 'TRANSCO', type: 'Transporteur', revenue: 45000000, growth: 25 },
  { id: 2, name: 'Kinshasa-Lubumbashi', type: 'Route', revenue: 32000000, growth: 18 },
  { id: 3, name: 'Trans Royaume', type: 'Transporteur', revenue: 28000000, growth: 15 },
  { id: 4, name: 'Kinshasa-Goma', type: 'Route', revenue: 22000000, growth: 22 },
  { id: 5, name: 'City Express', type: 'Transporteur', revenue: 18000000, growth: 12 }
])

// Recent transactions
const recentTransactions = ref([
  {
    id: 1,
    description: 'Réservation groupée - Entreprise ABC',
    time: 'Il y a 2 heures',
    amount: 2500000,
    status: 'Confirmé'
  },
  {
    id: 2,
    description: 'Paiement mensuel transporteur',
    time: 'Il y a 5 heures',
    amount: 8500000,
    status: 'Traité'
  },
  {
    id: 3,
    description: 'Remboursement client',
    time: 'Il y a 1 jour',
    amount: -350000,
    status: 'Effectué'
  }
])

// Analytics alerts
const analyticsAlerts = ref([
  {
    id: 1,
    title: 'Taux conversion en baisse',
    description: 'Le taux de conversion a baissé de 5% cette semaine',
    severity: 'warning',
    time: 'Il y a 30 minutes'
  },
  {
    id: 2,
    title: 'Objectif mensuel atteint',
    description: 'Les revenus ont dépassé l\'objectif de 15%',
    severity: 'info',
    time: 'Il y a 2 heures'
  },
  {
    id: 3,
    title: 'Pic de trafic inhabituel',
    description: 'Augmentation de 40% du trafic sur la route Kinshasa-Goma',
    severity: 'critical',
    time: 'Il y a 4 heures'
  }
])

// Currency formatter
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
          data: [85, 92, 88, 95, 102, 98],
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

  // Booking Trends Chart
  const bookingCanvas = bookingChartCanvas.value
  if (bookingCanvas) {
    new Chart(bookingCanvas, {
      type: 'bar',
      data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [{
          label: 'Réservations',
          data: [120, 145, 132, 168, 185, 142, 98],
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
  const routeCanvas = routeChartCanvas.value
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

  // Carrier Performance Chart
  const carrierCanvas = carrierChartCanvas.value
  if (carrierCanvas) {
    new Chart(carrierCanvas, {
      type: 'bar',
      data: {
        labels: ['TRANSCO', 'Trans Royaume', 'City Express', 'Express Plus'],
        datasets: [{
          label: 'Performance (%)',
          data: [92, 88, 85, 78],
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

  // Customer Satisfaction Chart
  const satisfactionCanvas = satisfactionChartCanvas.value
  if (satisfactionCanvas) {
    new Chart(satisfactionCanvas, {
      type: 'polarArea',
      data: {
        labels: ['Excellent', 'Très Bon', 'Bon', 'Moyen', 'Faible'],
        datasets: [{
          data: [45, 30, 15, 8, 2],
          backgroundColor: [
            'rgba(34, 197, 94, 0.6)',
            'rgba(59, 130, 246, 0.6)',
            'rgba(251, 146, 60, 0.6)',
            'rgba(245, 158, 11, 0.6)',
            'rgba(239, 68, 68, 0.6)'
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

  // Detailed Revenue Chart
  const detailedRevenueCanvas = detailedRevenueChartCanvas.value
  if (detailedRevenueCanvas) {
    new Chart(detailedRevenueCanvas, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [
          {
            label: 'Billets',
            data: [45, 52, 48, 55, 62, 58],
            backgroundColor: 'rgba(59, 130, 246, 0.8)'
          },
          {
            label: 'Colis',
            data: [25, 28, 30, 32, 35, 33],
            backgroundColor: 'rgba(34, 197, 94, 0.8)'
          },
          {
            label: 'Services',
            data: [15, 12, 10, 8, 5, 7],
            backgroundColor: 'rgba(251, 146, 60, 0.8)'
          }
        ]
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
})
</script>
