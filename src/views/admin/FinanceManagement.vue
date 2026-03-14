<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold">Rusa Travel - Gestion Financière</h1>
          <p class="text-gray-600 mt-1">Suivi des revenus et commissions</p>
        </div>
        <div class="flex space-x-2">
          <button 
            @click="refreshFinanceData"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Actualiser
          </button>
          <button 
            @click="exportFinanceData"
            class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Exporter
          </button>
        </div>
      </div>
    </div>

    <!-- Financial Overview Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span class="text-sm text-green-600 font-medium">+15%</span>
        </div>
        <h3 class="text-2xl font-bold text-gray-900">{{ formatCurrency(financeStats.totalRevenue) }}</h3>
        <p class="text-gray-600 text-sm">Revenus Totaux</p>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <span class="text-sm text-blue-600 font-medium">+12%</span>
        </div>
        <h3 class="text-2xl font-bold text-gray-900">{{ formatCurrency(financeStats.platformCommissions) }}</h3>
        <p class="text-gray-600 text-sm">Commissions Plateforme</p>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <span class="text-sm text-purple-600 font-medium">+8%</span>
        </div>
        <h3 class="text-2xl font-bold text-gray-900">{{ financeStats.totalTransactions.toLocaleString() }}</h3>
        <p class="text-gray-600 text-sm">Transactions Totales</p>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <span class="text-sm text-orange-600 font-medium">+22%</span>
        </div>
        <h3 class="text-2xl font-bold text-gray-900">{{ formatCurrency(financeStats.monthlyGrowth) }}</h3>
        <p class="text-gray-600 text-sm">Croissance Mensuelle</p>
      </div>
    </div>

    <!-- Revenue Chart -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold">Évolution des Revenus</h3>
        <select v-model="chartPeriod" class="px-3 py-1 border border-gray-300 rounded-lg text-sm">
          <option value="6months">6 derniers mois</option>
          <option value="1year">Dernière année</option>
          <option value="3months">3 derniers mois</option>
        </select>
      </div>
      <div class="h-64">
        <canvas ref="revenueChartCanvas"></canvas>
      </div>
    </div>

    <!-- Transactions List -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold">Transactions Récentes</h3>
        <div class="flex space-x-2">
          <input
            v-model="transactionSearch"
            type="text"
            placeholder="Rechercher..."
            class="px-3 py-1 border border-gray-300 rounded-lg text-sm"
          />
          <select v-model="transactionFilter" class="px-3 py-1 border border-gray-300 rounded-lg text-sm">
            <option value="">Tous</option>
            <option value="booking">Réservations</option>
            <option value="commission">Commissions</option>
            <option value="refund">Remboursements</option>
          </select>
        </div>
      </div>
      
      <div class="space-y-3">
        <div
          v-for="transaction in filteredTransactions"
          :key="transaction.id"
          class="flex justify-between items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div class="flex items-center space-x-3">
            <div :class="getTransactionIconClass(transaction.type)" class="w-10 h-10 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="font-medium">{{ transaction.description }}</p>
              <p class="text-sm text-gray-500">{{ transaction.date }} • {{ transaction.agency }}</p>
            </div>
          </div>
          <div class="text-right">
            <p :class="getTransactionAmountClass(transaction.type)" class="font-semibold">
              {{ transaction.type === 'refund' ? '-' : '+' }}{{ formatCurrency(transaction.amount) }}
            </p>
            <span :class="getTransactionStatusClass(transaction.status)" class="px-2 py-1 text-xs rounded-full">
              {{ getTransactionStatusLabel(transaction.status) }}
            </span>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-between items-center mt-6">
        <div class="text-sm text-gray-600">
          Affichage de {{ transactionStartIndex + 1 }} à {{ Math.min(transactionEndIndex, filteredTransactions.length) }} sur {{ filteredTransactions.length }}
        </div>
        <div class="flex space-x-2">
          <button
            @click="previousTransactionPage"
            :disabled="transactionCurrentPage === 1"
            class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Précédent
          </button>
          <span class="px-3 py-1">{{ transactionCurrentPage }} / {{ totalTransactionPages }}</span>
          <button
            @click="nextTransactionPage"
            :disabled="transactionCurrentPage === totalTransactionPages"
            class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>

    <!-- Agency Performance -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 class="text-lg font-semibold mb-4">Performance des Agences</h3>
      <div class="space-y-4">
        <div
          v-for="agency in agencyPerformance"
          :key="agency.name"
          class="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
        >
          <div class="flex-1">
            <div class="flex justify-between items-center mb-2">
              <h4 class="font-medium">{{ agency.name }}</h4>
              <span class="text-sm text-gray-500">{{ agency.bookings }} réservations</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="bg-blue-600 h-2 rounded-full transition-all duration-300"
                :style="{ width: `${(agency.revenue / topAgencyRevenue) * 100}%` }"
              ></div>
            </div>
          </div>
          <div class="ml-4 text-right">
            <p class="font-semibold">{{ formatCurrency(agency.revenue) }}</p>
            <p class="text-sm text-gray-500">{{ ((agency.revenue / totalAgencyRevenue) * 100).toFixed(1) }}%</p>
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

defineOptions({
  name: 'FinanceManagement'
})

// Types
interface Transaction {
  id: number
  description: string
  amount: number
  type: 'booking' | 'commission' | 'refund'
  status: 'completed' | 'pending' | 'failed'
  date: string
  agency: string
}

interface AgencyPerformance {
  name: string
  revenue: number
  bookings: number
}

// Reactive data
const financeStats = ref({
  totalRevenue: 2847500,
  platformCommissions: 284750,
  totalTransactions: 8934,
  monthlyGrowth: 450000
})

const transactions = ref<Transaction[]>([
  {
    id: 1,
    description: 'Réservation Kinshasa-Lubumbashi',
    amount: 85000,
    type: 'booking',
    status: 'completed',
    date: '2024-06-13',
    agency: 'Trans Congo Express'
  },
  {
    id: 2,
    description: 'Commission plateforme',
    amount: 8500,
    type: 'commission',
    status: 'completed',
    date: '2024-06-13',
    agency: 'Trans Congo Express'
  },
  {
    id: 3,
    description: 'Réservation Kinshasa-Goma',
    amount: 65000,
    type: 'booking',
    status: 'completed',
    date: '2024-06-13',
    agency: 'Express Line'
  },
  {
    id: 4,
    description: 'Remboursement annulation',
    amount: 32500,
    type: 'refund',
    status: 'completed',
    date: '2024-06-12',
    agency: 'City Bus RDC'
  },
  {
    id: 5,
    description: 'Réservation Lubumbashi-Kolwezi',
    amount: 45000,
    type: 'booking',
    status: 'pending',
    date: '2024-06-12',
    agency: 'City Bus RDC'
  }
])

const agencyPerformance = ref<AgencyPerformance[]>([
  { name: 'Trans Congo Express', revenue: 45000000, bookings: 1567 },
  { name: 'City Bus RDC', revenue: 28000000, bookings: 892 },
  { name: 'Express Line', revenue: 18000000, bookings: 456 },
  { name: 'Royaume Bus', revenue: 8000000, bookings: 234 },
  { name: 'Congo Travel', revenue: 3200000, bookings: 89 }
])

// Chart data
const chartPeriod = ref('6months')
const revenueChartCanvas = ref<HTMLCanvasElement | null>(null)

const chartData = computed(() => {
  const periods = {
    '3months': {
      labels: ['Avril', 'Mai', 'Juin'],
      data: [2300000, 2700000, 2847500]
    },
    '6months': {
      labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
      data: [1800000, 2100000, 2300000, 2500000, 2700000, 2847500]
    },
    '1year': {
      labels: ['Juin-23', 'Juil-23', 'Août-23', 'Sep-23', 'Oct-23', 'Nov-23', 'Déc-23', 'Jan-24', 'Fév-24', 'Mar-24', 'Avr-24', 'Mai-24', 'Juin-24'],
      data: [1200000, 1400000, 1600000, 1800000, 2000000, 2200000, 2400000, 1800000, 2100000, 2300000, 2500000, 2700000, 2847500]
    }
  }
  return periods[chartPeriod.value as keyof typeof periods]
})

// Transactions filters
const transactionSearch = ref('')
const transactionFilter = ref('')
const transactionCurrentPage = ref(1)
const transactionItemsPerPage = 10

// Computed properties
const filteredTransactions = computed(() => {
  return transactions.value.filter(transaction => {
    const matchesSearch = !transactionSearch.value || 
      transaction.description.toLowerCase().includes(transactionSearch.value.toLowerCase()) ||
      transaction.agency.toLowerCase().includes(transactionSearch.value.toLowerCase())
    
    const matchesFilter = !transactionFilter.value || transaction.type === transactionFilter.value
    
    return matchesSearch && matchesFilter
  })
})

const totalTransactionPages = computed(() => {
  return Math.ceil(filteredTransactions.value.length / transactionItemsPerPage)
})

const transactionStartIndex = computed(() => {
  return (transactionCurrentPage.value - 1) * transactionItemsPerPage
})

const transactionEndIndex = computed(() => {
  return transactionStartIndex.value + transactionItemsPerPage
})

const topAgencyRevenue = computed(() => {
  return Math.max(...agencyPerformance.value.map(a => a.revenue))
})

const totalAgencyRevenue = computed(() => {
  return agencyPerformance.value.reduce((sum, agency) => sum + agency.revenue, 0)
})

// Methods
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XAF',
    minimumFractionDigits: 0
  }).format(amount).replace('XAF', 'FC')
}

const getTransactionIconClass = (type: string) => {
  const classes = {
    booking: 'bg-green-100 text-green-600',
    commission: 'bg-blue-100 text-blue-600',
    refund: 'bg-red-100 text-red-600'
  }
  return classes[type as keyof typeof classes] || 'bg-gray-100 text-gray-600'
}

const getTransactionAmountClass = (type: string) => {
  const classes = {
    booking: 'text-green-600',
    commission: 'text-blue-600',
    refund: 'text-red-600'
  }
  return classes[type as keyof typeof classes] || 'text-gray-600'
}

const getTransactionStatusClass = (status: string) => {
  const classes = {
    completed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-red-100 text-red-800'
  }
  return classes[status as keyof typeof classes] || 'bg-gray-100 text-gray-800'
}

const getTransactionStatusLabel = (status: string) => {
  const labels = {
    completed: 'Complétée',
    pending: 'En attente',
    failed: 'Échouée'
  }
  return labels[status as keyof typeof labels] || status
}

const refreshFinanceData = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Update stats with random variations
  financeStats.value.totalRevenue += Math.floor(Math.random() * 100000) - 50000
  financeStats.value.platformCommissions += Math.floor(Math.random() * 10000) - 5000
  financeStats.value.totalTransactions += Math.floor(Math.random() * 20) - 10
  financeStats.value.monthlyGrowth += Math.floor(Math.random() * 50000) - 25000
  
  console.log('Finance data refreshed')
}

const exportFinanceData = () => {
  console.log('Exporting finance data...')
  // Simulate export functionality
  const csvContent = [
    'Type,Description,Amount,Status,Date,Agency',
    ...transactions.value.map(t => 
      `${t.type},"${t.description}",${t.amount},${t.status},${t.date},${t.agency}`
    )
  ].join('\n')
  
  const blob = new Blob([csvContent], { type: 'text/csv' })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'finance-data.csv'
  a.click()
  window.URL.revokeObjectURL(url)
}

const previousTransactionPage = () => {
  if (transactionCurrentPage.value > 1) {
    transactionCurrentPage.value--
  }
}

const nextTransactionPage = () => {
  if (transactionCurrentPage.value < totalTransactionPages.value) {
    transactionCurrentPage.value++
  }
}

// Initialize chart
const initializeChart = () => {
  if (revenueChartCanvas.value) {
    new Chart(revenueChartCanvas.value, {
      type: 'line',
      data: {
        labels: chartData.value.labels,
        datasets: [{
          label: 'Revenus (FC)',
          data: chartData.value.data,
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
            display: true,
            position: 'top'
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

// Watch for chart period changes
watch(chartPeriod, () => {
  initializeChart()
})

onMounted(() => {
  initializeChart()
  console.log('Finance management loaded')
})
</script>
