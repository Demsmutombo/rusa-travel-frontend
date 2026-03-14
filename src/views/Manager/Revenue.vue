<template>
  <!-- Revenue Overview -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Revenus Totaux</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ totalRevenue.toLocaleString() }}</p>
          <p class="text-xs text-green-600 mt-1">+25% ce mois</p>
        </div>
        <div class="p-2 sm:p-3 bg-blue-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 0 3 1.343 3 0 3-1.657 0 3-1.343m0 6a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Revenus Mensuels</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ monthlyRevenue.toLocaleString() }}</p>
          <p class="text-xs text-green-600 mt-1">Ce mois</p>
        </div>
        <div class="p-2 sm:p-3 bg-green-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v12a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Moyenne/Jour</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ dailyAverage.toLocaleString() }}</p>
          <p class="text-xs text-gray-500 mt-1">FC</p>
        </div>
        <div class="p-2 sm:p-3 bg-purple-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Croissance</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ growthRate }}%</p>
          <p class="text-xs text-green-600 mt-1">vs mois dernier</p>
        </div>
        <div class="p-2 sm:p-3 bg-orange-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- Revenue Charts -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-4 sm:space-y-0">
        <h2 class="text-lg sm:text-xl font-semibold">Revenus Mensuels</h2>
        <select v-model="selectedPeriod" class="px-3 py-2 border border-gray-300 rounded-lg text-sm w-full sm:w-auto">
          <option value="6months">6 derniers mois</option>
          <option value="1year">1 an</option>
          <option value="2years">2 ans</option>
        </select>
      </div>
      <div class="h-64 sm:h-80">
        <canvas ref="monthlyChart"></canvas>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-4 sm:space-y-0">
        <h2 class="text-lg sm:text-xl font-semibold">Revenus par Route</h2>
      </div>
      <div class="h-64 sm:h-80">
        <canvas ref="routeChart"></canvas>
      </div>
    </div>
  </div>

  <!-- Revenue Table -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-200">
    <div class="p-4 sm:p-6 border-b border-gray-200">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h2 class="text-lg sm:text-xl font-semibold text-gray-900">Détails des Revenus</h2>
        <div class="flex flex-col sm:flex-row gap-3">
          <button
            @click="exportRevenue"
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
              Période
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Route
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Réservations
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Revenus
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Moyenne/Réservation
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Croissance
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="revenue in revenueData" :key="revenue.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ revenue.period }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ revenue.route }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ revenue.bookings.toLocaleString() }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">{{ revenue.amount.toLocaleString() }} FC</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ revenue.averagePerBooking.toLocaleString() }} FC</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span :class="getGrowthClass(revenue.growth)" class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full">
                {{ revenue.growth > 0 ? '+' : '' }}{{ revenue.growth }}%
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

defineOptions({
  name: 'ManagerRevenue'
})

// Types
interface Revenue {
  id: number
  period: string
  route: string
  bookings: number
  amount: number
  averagePerBooking: number
  growth: number
}

// Reactive data
const selectedPeriod = ref('6months')
const monthlyChart = ref<HTMLCanvasElement | null>(null)
const routeChart = ref<HTMLCanvasElement | null>(null)

const revenueData = ref<Revenue[]>([
  { id: 1, period: 'Mars 2024', route: 'Kinshasa → Lubumbashi', bookings: 245, amount: 20825000, averagePerBooking: 85000, growth: 12.5 },
  { id: 2, period: 'Mars 2024', route: 'Kinshasa → Matadi', bookings: 189, amount: 2835000, averagePerBooking: 15000, growth: 8.2 },
  { id: 3, period: 'Mars 2024', route: 'Lubumbashi → Kisangani', bookings: 156, amount: 10140000, averagePerBooking: 65000, growth: -3.1 },
  { id: 4, period: 'Mars 2024', route: 'Kinshasa → Bukavu', bookings: 98, amount: 8820000, averagePerBooking: 90000, growth: 15.7 },
  { id: 5, period: 'Mars 2024', route: 'Matadi → Boma', bookings: 67, amount: 536000, averagePerBooking: 8000, growth: 4.3 },
  { id: 6, period: 'Février 2024', route: 'Kinshasa → Lubumbashi', bookings: 218, amount: 18530000, averagePerBooking: 85000, growth: 10.2 },
  { id: 7, period: 'Février 2024', route: 'Kinshasa → Matadi', bookings: 175, amount: 2625000, averagePerBooking: 15000, growth: 6.8 },
  { id: 8, period: 'Février 2024', route: 'Lubumbashi → Kisangani', bookings: 161, amount: 10465000, averagePerBooking: 65000, growth: -1.5 }
])

// Computed properties
const totalRevenue = computed(() => revenueData.value.reduce((sum, r) => sum + r.amount, 0))
const monthlyRevenue = computed(() => {
  const currentMonth = revenueData.value.filter(r => r.period === 'Mars 2024')
  return currentMonth.reduce((sum, r) => sum + r.amount, 0)
})
const dailyAverage = computed(() => Math.round(monthlyRevenue.value / 30))
const growthRate = computed(() => {
  const currentMonth = revenueData.value.filter(r => r.period === 'Mars 2024')
  const lastMonth = revenueData.value.filter(r => r.period === 'Février 2024')
  
  const currentTotal = currentMonth.reduce((sum, r) => sum + r.amount, 0)
  const lastTotal = lastMonth.reduce((sum, r) => sum + r.amount, 0)
  
  return lastTotal > 0 ? Math.round(((currentTotal - lastTotal) / lastTotal) * 100) : 0
})

// Chart data
const monthlyChartData = computed(() => {
  const periods = {
    '6months': {
      labels: ['Oct', 'Nov', 'Déc', 'Jan', 'Fév', 'Mar'],
      data: [15600000, 18200000, 19800000, 21300000, 31625000, 42635000]
    },
    '1year': {
      labels: ['Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc', 'Jan', 'Fév', 'Mar'],
      data: [12300000, 14500000, 16700000, 18900000, 20100000, 22300000, 15600000, 18200000, 19800000, 21300000, 31625000, 42635000]
    },
    '2years': {
      labels: ['J-D', 'F-M', 'A-M', 'M-J', 'J-A', 'S-O', 'N-D', 'J-D', 'F-M', 'A-M', 'M-J', 'J-A', 'S-O', 'N-D', 'J-D', 'F-M', 'A-M', 'M-J', 'J-A', 'S-O', 'N-D', 'J-D', 'F-M', 'A-M'],
      data: [8900000, 12300000, 14500000, 16700000, 18900000, 20100000, 22300000, 15600000, 18200000, 19800000, 21300000, 31625000, 42635000, 51200000, 48900000, 52300000, 56700000, 58900000, 61200000, 64500000, 67800000, 71200000, 74500000]
    }
  }
  return periods[selectedPeriod.value as keyof typeof periods]
})

const routeChartData = {
  labels: ['Kinshasa → Lubumbashi', 'Kinshasa → Matadi', 'Lubumbashi → Kisangani', 'Kinshasa → Bukavu', 'Matadi → Boma'],
  data: [20825000, 2835000, 10140000, 8820000, 536000]
}

// Methods
const initializeMonthlyChart = () => {
  if (monthlyChart.value) {
    new Chart(monthlyChart.value, {
      type: 'line',
      data: {
        labels: monthlyChartData.value.labels,
        datasets: [{
          label: 'Revenus (FC)',
          data: monthlyChartData.value.data,
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
                return (value as number / 1000000).toFixed(1) + 'M'
              }
            }
          }
        }
      }
    })
  }
}

const initializeRouteChart = () => {
  if (routeChart.value) {
    new Chart(routeChart.value, {
      type: 'doughnut',
      data: {
        labels: routeChartData.labels,
        datasets: [{
          data: routeChartData.data,
          backgroundColor: [
            '#3B82F6',
            '#10B981',
            '#F59E0B',
            '#EF4444',
            '#8B5CF6'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    })
  }
}

const exportRevenue = () => {
  const csvContent = [
    ['Période', 'Route', 'Réservations', 'Revenus', 'Moyenne/Réservation', 'Croissance'],
    ...revenueData.value.map(revenue => [
      revenue.period,
      revenue.route,
      revenue.bookings.toString(),
      revenue.amount.toString(),
      revenue.averagePerBooking.toString(),
      `${revenue.growth > 0 ? '+' : ''}${revenue.growth}%`
    ])
  ].map(row => row.join(',')).join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `revenue_${new Date().toISOString().split('T')[0]}.csv`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const getGrowthClass = (growth: number) => {
  return growth > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
}

// Watch for period changes
watch(selectedPeriod, () => {
  initializeMonthlyChart()
})

onMounted(() => {
  initializeMonthlyChart()
  initializeRouteChart()
})
</script>
