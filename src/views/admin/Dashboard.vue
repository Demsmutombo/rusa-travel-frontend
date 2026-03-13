<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center space-x-4">
      <!-- Logo -->
      <div class="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden shadow-md">
        <img 
          src="/images/logo/auth-logo.svg" 
          alt="Rusa Travel" 
          class="w-full h-full object-contain"
        />
      </div>
      <div>
        <h1 class="text-3xl font-bold">Dashboard Rusa Travel - Administration Globale</h1>
        <p class="text-gray-600 mt-1">Vue d'ensemble de la plateforme Rusa Travel</p>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Revenue Chart -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold">Évolution des Revenus</h3>
          <ActionButton
            text="Détails"
            icon="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            variant="secondary"
            modal-type="info"
            modal-title="Détails des Revenus"
            :info-data="revenueDetails"
            @action="handleRevenueDetails"
          />
        </div>
        <div class="h-64">
          <canvas ref="revenueChartCanvas"></canvas>
        </div>
      </div>

      <!-- Booking Trends Chart -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold">Tendances des Réservations</h3>
          <ActionButton
            text="Voir Plus"
            icon="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            variant="secondary"
            modal-type="info"
            modal-title="Statistiques des Réservations"
            :info-data="bookingDetails"
            @action="handleBookingDetails"
          />
        </div>
        <div class="h-64">
          <canvas ref="bookingChart"></canvas>
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

      <!-- Agency Distribution -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Répartition des Agences</h3>
        <div class="h-48">
          <canvas ref="agencyChart"></canvas>
        </div>
      </div>

      <!-- Payment Methods -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Méthodes de Paiement</h3>
        <div class="h-48">
          <canvas ref="paymentChart"></canvas>
        </div>
      </div>
    </div>

    <!-- Global Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Agences</p>
            <p class="text-2xl font-bold text-gray-900">{{ globalStats.totalAgencies }}</p>
            <p class="text-xs text-green-600 mt-1">+12% ce mois</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Utilisateurs</p>
            <p class="text-2xl font-bold text-gray-900">{{ globalStats.totalUsers }}</p>
            <p class="text-xs text-green-600 mt-1">+25% ce mois</p>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Réservations totales</p>
            <p class="text-2xl font-bold text-gray-900">{{ globalStats.totalBookings }}</p>
            <p class="text-xs text-green-600 mt-1">+18% ce mois</p>
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
            <p class="text-sm font-medium text-gray-600">Revenus totaux</p>
            <p class="text-2xl font-bold text-gray-900">{{ formatCurrency(globalStats.totalRevenue) }}</p>
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
            <p class="text-sm font-medium text-gray-600">Commissions</p>
            <p class="text-2xl font-bold text-gray-900">{{ formatCurrency(globalStats.totalCommissions) }}</p>
            <p class="text-xs text-green-600 mt-1">+15% ce mois</p>
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
        <h2 class="text-xl font-semibold mb-4">Évolution des revenus</h2>
        <div class="h-64 flex items-center justify-center text-gray-500">
          <div class="text-center">
            <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <p>Graphique d'évolution des revenus</p>
          </div>
        </div>
      </div>

      <!-- Top Agencies -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-xl font-semibold mb-4">Meilleures agences</h2>
        <div class="space-y-4">
          <div v-for="(agency, index) in topAgencies" :key="agency.id" class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span class="text-sm font-medium text-blue-600">{{ index + 1 }}</span>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">{{ agency.name }}</p>
                <p class="text-xs text-gray-500">{{ agency.bookings }} réservations</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm font-medium text-gray-900">{{ formatCurrency(agency.revenue) }}</p>
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
          <h2 class="text-xl font-semibold">Transactions récentes</h2>
          <router-link
            to="/admin/transactions"
            class="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Voir tout
          </router-link>
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
              <p class="text-xs text-gray-500">{{ transaction.method }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- System Issues -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold">Alertes système</h2>
          <router-link
            to="/admin/disputes"
            class="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Voir tout
          </router-link>
        </div>
        
        <div class="space-y-4">
          <div v-for="issue in systemIssues" :key="issue.id" class="flex items-start space-x-3 p-3 rounded-lg"
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
import ActionButton from '@/components/common/ActionButton.vue'

// Form fields for modals
const userFormFields = reactive([
  { name: 'name', label: 'Nom', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'role', label: 'Rôle', type: 'select', options: ['admin', 'manager', 'carrier', 'client'], required: true },
  { name: 'password', label: 'Mot de passe', type: 'password', required: true }
])

const agencyFormFields = reactive([
  { name: 'name', label: 'Nom de l\'agence', type: 'text', required: true },
  { name: 'address', label: 'Adresse', type: 'text', required: true },
  { name: 'phone', label: 'Téléphone', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true }
])

// Mock data
const globalStats = reactive({
  totalRevenue: '45,250,000 Fb',
  totalUsers: '1,234',
  totalBookings: '8,567',
  totalBuses: '45',
  totalAgencies: '12',
  totalCommissions: '2,340,000 Fb',
  growth: '+18%'
})

const recentTransactions = ref([
  { id: 1, description: 'Réservation Kinshasa-Lubumbashi', amount: 85000, status: 'completed', time: '10:30', method: 'Mobile Money' },
  { id: 2, description: 'Achat billets groupe', amount: 125000, status: 'pending', time: '09:15', method: 'Carte Bancaire' },
  { id: 3, description: 'Remboursement annulation', amount: -25000, status: 'completed', time: '08:45', method: 'Mobile Money' }
])

const systemIssues = ref([
  { id: 1, title: 'Synchronisation base de données', description: 'Lenteur détectée', time: 'Il y a 2h', priority: 'high', severity: 'high' },
  { id: 2, title: 'Paiement en ligne', description: 'Gateway temporairement indisponible', time: 'Il y a 30min', priority: 'medium', severity: 'medium' },
  { id: 3, title: 'Notifications email', description: 'Retard de 15min', time: 'Il y a 1h', priority: 'low', severity: 'low' }
])

// Modal data
const revenueDetails = ref({
  title: 'Détails des Revenus',
  data: [
    { month: 'Janvier', revenue: 3500000 },
    { month: 'Février', revenue: 4200000 },
    { month: 'Mars', revenue: 3800000 }
  ]
})

const bookingDetails = ref({
  title: 'Statistiques des Réservations',
  data: [
    { day: 'Lundi', bookings: 145 },
    { day: 'Mardi', bookings: 189 },
    { day: 'Mercredi', bookings: 167 }
  ]
})

// Chart refs
const routeChart = ref(null)
const agencyChart = ref(null)
const paymentChart = ref(null)
const bookingChart = ref(null)

// Utility functions
const formatCurrency = (amount: string | number) => {
  const numAmount = typeof amount === 'string' ? parseFloat(amount.replace(/[^0-9.-]/g, '')) : amount
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF'
  }).format(numAmount)
}

// Modal handlers
const handleAddUser = (formData: any) => {
  console.log('Adding user:', formData)
  // Handle user addition logic here
}

const handleAddAgency = (formData: any) => {
  console.log('Adding agency:', formData)
  // Handle agency addition logic here
}

const handleRevenueDetails = (data: any) => {
  console.log('Revenue details:', data)
  // Handle revenue details logic here
}

const handleBookingDetails = (data: any) => {
  console.log('Booking details:', data)
  // Handle booking details logic here
}

// Data for top agencies
const topAgencies = ref([
  { id: 1, name: 'Agence Kinshasa', bookings: 156, revenue: 2500000 },
  { id: 2, name: 'Agence Lubumbashi', bookings: 134, revenue: 2100000 },
  { id: 3, name: 'Agence Goma', bookings: 98, revenue: 1800000 },
  { id: 4, name: 'Agence Kisangani', bookings: 87, revenue: 1500000 }
])

onMounted(() => {
  // Initialize Route Distribution Chart
  if (routeChart.value) {
    new Chart(routeChart.value, {
      type: 'doughnut',
      data: {
        labels: ['Kinshasa', 'Lubumbashi', 'Goma', 'Kisangani', 'Kolwezi'],
        datasets: [{
          data: [35, 25, 15, 15, 10],
          backgroundColor: [
            '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    })
  }

  // Initialize Agency Performance Chart
  if (agencyChart.value) {
    new Chart(agencyChart.value, {
      type: 'bar',
      data: {
        labels: ['Agence A', 'Agence B', 'Agence C', 'Agence D', 'Agence E'],
        datasets: [{
          label: 'Réservations',
          data: [65, 78, 90, 45, 82],
          backgroundColor: '#3B82F6'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }

  // Payment Methods Chart
  const paymentCanvas = paymentChart.value
  if (paymentCanvas) {
    new Chart(paymentCanvas, {
      type: 'polarArea',
      data: {
        labels: ['M-Pesa', 'Airtel Money', 'Orange Money', 'Carte Bancaire'],
        datasets: [{
          data: [40, 30, 25, 5],
          backgroundColor: [
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
})
</script>
