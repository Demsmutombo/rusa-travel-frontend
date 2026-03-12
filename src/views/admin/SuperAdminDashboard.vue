<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-bold">Dashboard Super Admin</h1>
      <p class="text-gray-600 mt-1">Contrôle total de la plateforme Rusa Travel</p>
    </div>

    <!-- Platform Overview Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Plateforme</p>
            <p class="text-2xl font-bold text-gray-900">{{ platformStats.totalRevenue }}</p>
            <p class="text-xs text-green-600 mt-1">+18% ce trimestre</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Utilisateurs Actifs</p>
            <p class="text-2xl font-bold text-gray-900">{{ platformStats.activeUsers }}</p>
            <p class="text-xs text-green-600 mt-1">+22% ce mois</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Transactions</p>
            <p class="text-2xl font-bold text-gray-900">{{ platformStats.totalTransactions }}</p>
            <p class="text-xs text-green-600 mt-1">+31% cette semaine</p>
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
            <p class="text-sm font-medium text-gray-600">Système Status</p>
            <p class="text-2xl font-bold text-green-600">99.9%</p>
            <p class="text-xs text-gray-500 mt-1">Uptime</p>
          </div>
          <div class="p-3 bg-yellow-100 rounded-full">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Advanced Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Platform Revenue Chart -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Revenus Globaux de la Plateforme</h3>
        <div class="h-64">
          <canvas ref="platformRevenueChart"></canvas>
        </div>
      </div>

      <!-- User Growth Chart -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Croissance des Utilisateurs</h3>
        <div class="h-64">
          <canvas ref="userGrowthChart"></canvas>
        </div>
      </div>
    </div>

    <!-- System Performance Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <!-- Agency Performance -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Performance des Agences</h3>
        <div class="h-48">
          <canvas ref="agencyPerformanceChart"></canvas>
        </div>
      </div>

      <!-- Route Distribution -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Distribution des Routes</h3>
        <div class="h-48">
          <canvas ref="routeDistributionChart"></canvas>
        </div>
      </div>

      <!-- Payment Analytics -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Analyse des Paiements</h3>
        <div class="h-48">
          <canvas ref="paymentAnalyticsChart"></canvas>
        </div>
      </div>
    </div>

    <!-- Real-time Monitoring -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 class="text-lg font-semibold mb-4">Monitoring en Temps Réel</h3>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 class="text-md font-medium mb-3">Activité du Système</h4>
          <div class="h-48">
            <canvas ref="systemActivityChart"></canvas>
          </div>
        </div>
        <div>
          <h4 class="text-md font-medium mb-3">Performance des Serveurs</h4>
          <div class="h-48">
            <canvas ref="serverPerformanceChart"></canvas>
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
  name: 'SuperAdminDashboard'
})

// Platform statistics
const platformStats = reactive({
  totalRevenue: '5.2B Fb',
  activeUsers: '125,430',
  totalTransactions: '48,291',
  systemUptime: '99.9%'
})

// Chart refs
const platformRevenueChart = ref<HTMLCanvasElement | null>(null)
const userGrowthChart = ref<HTMLCanvasElement | null>(null)
const agencyPerformanceChart = ref<HTMLCanvasElement | null>(null)
const routeDistributionChart = ref<HTMLCanvasElement | null>(null)
const paymentAnalyticsChart = ref<HTMLCanvasElement | null>(null)
const systemActivityChart = ref<HTMLCanvasElement | null>(null)
const serverPerformanceChart = ref<HTMLCanvasElement | null>(null)

// Chart initialization
onMounted(() => {
  // Platform Revenue Chart
  const revenueCanvas = platformRevenueChart.value
  if (revenueCanvas) {
    new Chart(revenueCanvas, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Revenus (B Fb)',
          data: [3.8, 4.2, 4.5, 4.8, 5.1, 5.2],
          borderColor: 'rgb(147, 51, 234)',
          backgroundColor: 'rgba(147, 51, 234, 0.1)',
          tension: 0.4
        }, {
          label: 'Commissions (M Fb)',
          data: [380, 420, 450, 480, 510, 520],
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

  // User Growth Chart
  const userCanvas = userGrowthChart.value
  if (userCanvas) {
    new Chart(userCanvas, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Nouveaux Utilisateurs',
          data: [1200, 1890, 2340, 2890, 3450, 4120],
          backgroundColor: 'rgba(34, 197, 94, 0.8)'
        }, {
          label: 'Utilisateurs Actifs',
          data: [45000, 67800, 82300, 98400, 112300, 125430],
          backgroundColor: 'rgba(251, 146, 60, 0.8)'
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

  // Agency Performance Chart
  const agencyCanvas = agencyPerformanceChart.value
  if (agencyCanvas) {
    new Chart(agencyCanvas, {
      type: 'doughnut',
      data: {
        labels: ['TRANSCO', 'Trans Royaume', 'City Express', 'Congo Travel', 'Autres'],
        datasets: [{
          data: [28, 22, 18, 15, 17],
          backgroundColor: [
            'rgba(147, 51, 234, 0.8)',
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

  // Route Distribution Chart
  const routeCanvas = routeDistributionChart.value
  if (routeCanvas) {
    new Chart(routeCanvas, {
      type: 'pie',
      data: {
        labels: ['Kinshasa-Lubumbashi', 'Kinshasa-Goma', 'Kinshasa-Kisangani', 'Routes secondaires'],
        datasets: [{
          data: [42, 28, 18, 12],
          backgroundColor: [
            'rgba(147, 51, 234, 0.8)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(34, 197, 94, 0.8)',
            'rgba(251, 146, 60, 0.8)'
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

  // Payment Analytics Chart
  const paymentCanvas = paymentAnalyticsChart.value
  if (paymentCanvas) {
    new Chart(paymentCanvas, {
      type: 'polarArea',
      data: {
        labels: ['M-Pesa', 'Airtel Money', 'Orange Money', 'Carte Bancaire', 'Espèces'],
        datasets: [{
          data: [38, 28, 22, 8, 4],
          backgroundColor: [
            'rgba(147, 51, 234, 0.6)',
            'rgba(59, 130, 246, 0.6)',
            'rgba(34, 197, 94, 0.6)',
            'rgba(251, 146, 60, 0.6)',
            'rgba(156, 163, 175, 0.6)'
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

  // System Activity Chart
  const activityCanvas = systemActivityChart.value
  if (activityCanvas) {
    new Chart(activityCanvas, {
      type: 'line',
      data: {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
        datasets: [{
          label: 'Requêtes/second',
          data: [120, 89, 234, 567, 445, 298, 145],
          borderColor: 'rgb(34, 197, 94)',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          tension: 0.4,
          fill: true
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

  // Server Performance Chart
  const serverCanvas = serverPerformanceChart.value
  if (serverCanvas) {
    new Chart(serverCanvas, {
      type: 'bar',
      data: {
        labels: ['CPU', 'Mémoire', 'Disque', 'Réseau'],
        datasets: [{
          label: 'Utilisation (%)',
          data: [65, 72, 45, 58],
          backgroundColor: [
            'rgba(59, 130, 246, 0.8)',
            'rgba(34, 197, 94, 0.8)',
            'rgba(251, 146, 60, 0.8)',
            'rgba(147, 51, 234, 0.8)'
          ]
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
})
</script>
