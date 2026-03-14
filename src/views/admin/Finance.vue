<template>
  <DashboardLayout>
    <!-- Action Buttons -->
    <div class="flex justify-end space-x-3 mb-6">
      <button 
        @click="refreshData"
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Actualiser
      </button>
      <button 
        @click="exportReport"
        class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Exporter
      </button>
    </div>

    <!-- Financial Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Revenu Total</p>
            <p class="text-2xl font-bold text-gray-900">{{ formatCurrency(totalRevenue) }}</p>
            <p class="text-xs text-green-600 mt-1">+12.5% ce mois</p>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 0 3 1.343 3 0 3 1.657 0 3-1.343m0 6a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Commission Plateforme</p>
            <p class="text-2xl font-bold text-gray-900">{{ formatCurrency(platformCommission) }}</p>
            <p class="text-xs text-blue-600 mt-1">10% du revenu</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Transactions</p>
            <p class="text-2xl font-bold text-gray-900">{{ totalTransactions }}</p>
            <p class="text-xs text-purple-600 mt-1">Ce mois</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Revenu Mensuel</p>
            <p class="text-2xl font-bold text-gray-900">{{ formatCurrency(monthlyRevenue) }}</p>
            <p class="text-xs text-orange-600 mt-1">Moyenne 6 mois</p>
          </div>
          <div class="p-3 bg-orange-100 rounded-full">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Monthly Revenue Chart -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Revenus Mensuels</h3>
        <div class="h-64">
          <canvas ref="revenueChart"></canvas>
        </div>
      </div>

      <!-- Payment Methods Chart -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Méthodes de Paiement</h3>
        <div class="h-64">
          <canvas ref="paymentChart"></canvas>
        </div>
      </div>
    </div>

    <!-- Transactions List -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-lg font-semibold">Transactions Récentes</h3>
        <div class="flex space-x-2">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher une transaction..."
            class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            v-model="statusFilter"
            class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Tous les statuts</option>
            <option value="completed">Complétée</option>
            <option value="pending">En attente</option>
            <option value="failed">Échouée</option>
          </select>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Méthode</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="transaction in paginatedTransactions" :key="transaction.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                #{{ transaction.id }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ transaction.clientName }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ formatCurrency(transaction.amount) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ formatCurrency(transaction.commission) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" :class="getPaymentMethodClass(transaction.paymentMethod)">
                  {{ getPaymentMethodLabel(transaction.paymentMethod) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" :class="getStatusClass(transaction.status)">
                  {{ getStatusLabel(transaction.status) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ formatDate(transaction.createdAt) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  @click="viewTransactionDetails(transaction)"
                  class="text-blue-600 hover:text-blue-900"
                >
                  Voir
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="flex justify-between items-center mt-6">
        <div class="text-sm text-gray-600">
          Affichage de {{ startIndex + 1 }} à {{ Math.min(endIndex, filteredTransactions.length) }} sur {{ filteredTransactions.length }}
        </div>
        <div class="flex space-x-2">
          <button
            @click="previousPage"
            :disabled="currentPage === 1"
            class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Précédent
          </button>
          <span class="px-3 py-1">{{ currentPage }} / {{ totalPages }}</span>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>

    <!-- Transaction Details Modal -->
    <div
      v-if="showTransactionModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="closeTransactionModal"
    >
      <div
        class="bg-white rounded-xl p-6 max-w-md w-full mx-4"
        @click.stop
      >
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold">Détails de la Transaction</h3>
          <button
            @click="closeTransactionModal"
            class="text-gray-400 hover:text-gray-600"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div v-if="selectedTransaction" class="space-y-4">
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p class="text-gray-500">ID Transaction</p>
              <p class="font-medium">#{{ selectedTransaction.id }}</p>
            </div>
            <div>
              <p class="text-gray-500">Client</p>
              <p class="font-medium">{{ selectedTransaction.clientName }}</p>
            </div>
            <div>
              <p class="text-gray-500">Montant</p>
              <p class="font-medium">{{ formatCurrency(selectedTransaction.amount) }}</p>
            </div>
            <div>
              <p class="text-gray-500">Commission</p>
              <p class="font-medium">{{ formatCurrency(selectedTransaction.commission) }}</p>
            </div>
            <div>
              <p class="text-gray-500">Méthode</p>
              <p class="font-medium">{{ getPaymentMethodLabel(selectedTransaction.paymentMethod) }}</p>
            </div>
            <div>
              <p class="text-gray-500">Statut</p>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" :class="getStatusClass(selectedTransaction.status)">
                {{ getStatusLabel(selectedTransaction.status) }}
              </span>
            </div>
            <div>
              <p class="text-gray-500">Date</p>
              <p class="font-medium">{{ formatDate(selectedTransaction.createdAt) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import DashboardLayout from '@/components/layouts/DashboardLayout.vue'

defineOptions({
  name: 'FinanceDashboard'
})

// Types
interface Transaction {
  id: number
  clientName: string
  amount: number
  commission: number
  paymentMethod: 'mobile_money' | 'card' | 'cash' | 'bank_transfer'
  status: 'completed' | 'pending' | 'failed'
  createdAt: string
}

// Reactive data
const totalRevenue = ref(2847500)
const platformCommission = ref(284750)
const totalTransactions = ref(8934)
const monthlyRevenue = ref(475000)

const transactions = ref<Transaction[]>([
  {
    id: 1001,
    clientName: 'Jean Mugisha',
    amount: 15000,
    commission: 1500,
    paymentMethod: 'mobile_money',
    status: 'completed',
    createdAt: '2024-03-14T10:30:00'
  },
  {
    id: 1002,
    clientName: 'Marie Kabila',
    amount: 25000,
    commission: 2500,
    paymentMethod: 'card',
    status: 'completed',
    createdAt: '2024-03-14T09:15:00'
  },
  {
    id: 1003,
    clientName: 'Pierre Ntumba',
    amount: 8000,
    commission: 800,
    paymentMethod: 'cash',
    status: 'pending',
    createdAt: '2024-03-14T08:45:00'
  },
  {
    id: 1004,
    clientName: 'Sophie Mbuyi',
    amount: 35000,
    commission: 3500,
    paymentMethod: 'bank_transfer',
    status: 'completed',
    createdAt: '2024-03-14T07:20:00'
  },
  {
    id: 1005,
    clientName: 'Antoine Tshimanga',
    amount: 12000,
    commission: 1200,
    paymentMethod: 'mobile_money',
    status: 'failed',
    createdAt: '2024-03-14T06:10:00'
  }
])

// Filters
const searchQuery = ref('')
const statusFilter = ref('')

// Pagination
const currentPage = ref(1)
const itemsPerPage = 10

// Modal
const showTransactionModal = ref(false)
const selectedTransaction = ref<Transaction | null>(null)

// Chart refs
const revenueChart = ref<HTMLCanvasElement | null>(null)
const paymentChart = ref<HTMLCanvasElement | null>(null)

// Computed properties
const filteredTransactions = computed(() => {
  return transactions.value.filter(transaction => {
    const matchesSearch = !searchQuery.value || 
      transaction.clientName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      transaction.id.toString().includes(searchQuery.value)
    
    const matchesStatus = !statusFilter.value || transaction.status === statusFilter.value
    
    return matchesSearch && matchesStatus
  })
})

const totalPages = computed(() => {
  return Math.ceil(filteredTransactions.value.length / itemsPerPage)
})

const startIndex = computed(() => {
  return (currentPage.value - 1) * itemsPerPage
})

const endIndex = computed(() => {
  return startIndex.value + itemsPerPage
})

const paginatedTransactions = computed(() => {
  return filteredTransactions.value.slice(startIndex.value, endIndex.value)
})

// Methods
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF'
  }).format(amount)
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const getStatusLabel = (status: string) => {
  const labels = {
    completed: 'Complétée',
    pending: 'En attente',
    failed: 'Échouée'
  }
  return labels[status as keyof typeof labels] || status
}

const getStatusClass = (status: string) => {
  const classes = {
    completed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-red-100 text-red-800'
  }
  return classes[status as keyof typeof classes] || ''
}

const getPaymentMethodLabel = (method: string) => {
  const labels = {
    mobile_money: 'Mobile Money',
    card: 'Carte',
    cash: 'Espèces',
    bank_transfer: 'Virement'
  }
  return labels[method as keyof typeof labels] || method
}

const getPaymentMethodClass = (method: string) => {
  const classes = {
    mobile_money: 'bg-blue-100 text-blue-800',
    card: 'bg-purple-100 text-purple-800',
    cash: 'bg-green-100 text-green-800',
    bank_transfer: 'bg-orange-100 text-orange-800'
  }
  return classes[method as keyof typeof classes] || ''
}

const viewTransactionDetails = (transaction: Transaction) => {
  selectedTransaction.value = transaction
  showTransactionModal.value = true
}

const closeTransactionModal = () => {
  showTransactionModal.value = false
  selectedTransaction.value = null
}

const refreshData = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Add random transaction to simulate refresh
  const newTransaction: Transaction = {
    id: transactions.value.length + 1000,
    clientName: `Client ${transactions.value.length + 1}`,
    amount: Math.floor(Math.random() * 50000) + 5000,
    commission: Math.floor(Math.random() * 5000) + 500,
    paymentMethod: ['mobile_money', 'card', 'cash', 'bank_transfer'][Math.floor(Math.random() * 4)] as any,
    status: ['completed', 'pending', 'failed'][Math.floor(Math.random() * 3)] as any,
    createdAt: new Date().toISOString()
  }
  
  transactions.value.unshift(newTransaction)
  console.log('Financial data refreshed')
}

const exportReport = () => {
  // Simulate export functionality
  const reportData = {
    totalRevenue: totalRevenue.value,
    platformCommission: platformCommission.value,
    totalTransactions: totalTransactions.value,
    monthlyRevenue: monthlyRevenue.value,
    transactions: transactions.value
  }
  
  const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `financial_report_${new Date().toISOString().split('T')[0]}.json`
  a.click()
  URL.revokeObjectURL(url)
  
  console.log('Financial report exported')
}

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

// Initialize charts
const initializeCharts = () => {
  // This would normally use Chart.js or similar library
  // For now, we'll just log that charts would be initialized
  console.log('Charts initialized')
}

onMounted(() => {
  console.log('Finance dashboard loaded')
  initializeCharts()
})
</script>
