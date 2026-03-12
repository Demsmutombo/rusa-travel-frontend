<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-bold">Performance Globale</h1>
      <p class="text-gray-600 mt-1">Analyse des performances et indicateurs clés de la plateforme</p>
    </div>

    <!-- Performance Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Score Performance</p>
            <p class="text-2xl font-bold text-gray-900">{{ performanceStats.overallScore }}/100</p>
            <p class="text-xs text-green-600 mt-1">+8 ce mois</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Efficacité Opérationnelle</p>
            <p class="text-2xl font-bold text-gray-900">{{ performanceStats.operationalEfficiency }}%</p>
            <p class="text-xs text-green-600 mt-1">+12% ce mois</p>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Satisfaction Client</p>
            <p class="text-2xl font-bold text-gray-900">{{ performanceStats.customerSatisfaction }}%</p>
            <p class="text-xs text-green-600 mt-1">+5% ce mois</p>
          </div>
          <div class="p-3 bg-yellow-100 rounded-full">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">ROI</p>
            <p class="text-2xl font-bold text-gray-900">{{ performanceStats.roi }}%</p>
            <p class="text-xs text-green-600 mt-1">+15% ce mois</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Performance Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Performance Trend -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Tendance de Performance</h3>
        <div class="h-64">
          <canvas ref="performanceTrendChartCanvas"></canvas>
        </div>
      </div>

      <!-- KPI Comparison -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Comparaison des KPI</h3>
        <div class="h-64">
          <canvas ref="kpiComparisonChartCanvas"></canvas>
        </div>
      </div>
    </div>

    <!-- Department Performance -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-6">Performance par Département</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="dept in departmentPerformance" :key="dept.name" class="text-center">
          <div class="relative inline-flex items-center justify-center">
            <svg class="w-24 h-24 transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="36"
                stroke="currentColor"
                stroke-width="8"
                fill="none"
                class="text-gray-200"
              />
              <circle
                cx="48"
                cy="48"
                r="36"
                stroke="currentColor"
                stroke-width="8"
                fill="none"
                :stroke-dasharray="`${dept.performance * 2.26} 226`"
                class="text-blue-600"
              />
            </svg>
            <div class="absolute">
              <p class="text-2xl font-bold">{{ dept.performance }}%</p>
            </div>
          </div>
          <h3 class="font-medium mt-3">{{ dept.name }}</h3>
          <p class="text-sm text-gray-500">{{ dept.kpi }} KPIs</p>
        </div>
      </div>
    </div>

    <!-- Performance Metrics -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Revenue Performance -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Performance Revenus</h3>
        <div class="space-y-4">
          <div v-for="metric in revenueMetrics" :key="metric.name" class="flex justify-between items-center">
            <div>
              <p class="text-sm font-medium text-gray-900">{{ metric.name }}</p>
              <p class="text-xs text-gray-500">{{ metric.description }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm font-bold">{{ metric.value }}</p>
              <p class="text-xs" :class="metric.trend > 0 ? 'text-green-600' : 'text-red-600'">
                {{ metric.trend > 0 ? '+' : '' }}{{ metric.trend }}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Operational Metrics -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Métriques Opérationnelles</h3>
        <div class="space-y-4">
          <div v-for="metric in operationalMetrics" :key="metric.name" class="flex justify-between items-center">
            <div>
              <p class="text-sm font-medium text-gray-900">{{ metric.name }}</p>
              <p class="text-xs text-gray-500">{{ metric.description }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm font-bold">{{ metric.value }}</p>
              <p class="text-xs" :class="metric.trend > 0 ? 'text-green-600' : 'text-red-600'">
                {{ metric.trend > 0 ? '+' : '' }}{{ metric.trend }}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Customer Metrics -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Métriques Client</h3>
        <div class="space-y-4">
          <div v-for="metric in customerMetrics" :key="metric.name" class="flex justify-between items-center">
            <div>
              <p class="text-sm font-medium text-gray-900">{{ metric.name }}</p>
              <p class="text-xs text-gray-500">{{ metric.description }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm font-bold">{{ metric.value }}</p>
              <p class="text-xs" :class="metric.trend > 0 ? 'text-green-600' : 'text-red-600'">
                {{ metric.trend > 0 ? '+' : '' }}{{ metric.trend }}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Performance Goals -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold">Objectifs de Performance</h2>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Nouvel Objectif
        </button>
      </div>
      
      <div class="space-y-4">
        <div v-for="goal in performanceGoals" :key="goal.id" class="border border-gray-200 rounded-lg p-4">
          <div class="flex justify-between items-start mb-3">
            <div>
              <h3 class="font-medium text-gray-900">{{ goal.title }}</h3>
              <p class="text-sm text-gray-500 mt-1">{{ goal.description }}</p>
            </div>
            <span
              :class="{
                'px-2 py-1 text-xs rounded-full': true,
                'bg-green-100 text-green-800': goal.status === 'achieved',
                'bg-yellow-100 text-yellow-800': goal.status === 'in-progress',
                'bg-red-100 text-red-800': goal.status === 'behind'
              }"
            >
              {{ getGoalStatusText(goal.status) }}
            </span>
          </div>
          <div class="space-y-2">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Progression</span>
              <span class="font-medium">{{ goal.current }} / {{ goal.target }}</span>
            </div>
            <div class="bg-gray-200 rounded-full h-2">
              <div 
                class="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                :style="{ width: (goal.current / goal.target * 100) + '%' }"
              ></div>
            </div>
            <div class="flex justify-between text-xs text-gray-500">
              <span>Date limite: {{ goal.deadline }}</span>
              <span>{{ Math.round(goal.current / goal.target * 100) }}% complété</span>
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
  name: 'ManagerPerformance'
})

// Chart refs
const performanceTrendChartCanvas = ref<HTMLCanvasElement | null>(null)
const kpiComparisonChartCanvas = ref<HTMLCanvasElement | null>(null)

// Performance statistics
const performanceStats = reactive({
  overallScore: 87,
  operationalEfficiency: 92,
  customerSatisfaction: 94,
  roi: 156
})

// Department performance
const departmentPerformance = ref([
  { name: 'Ventes', performance: 94, kpi: 12 },
  { name: 'Support', performance: 88, kpi: 8 },
  { name: 'IT', performance: 85, kpi: 6 },
  { name: 'Marketing', performance: 82, kpi: 10 }
])

// Revenue metrics
const revenueMetrics = ref([
  {
    name: 'Revenus Mensuels',
    description: 'Total des revenus ce mois',
    value: '45.2M Fb',
    trend: 18
  },
  {
    name: 'Croissance Annuelle',
    description: 'Croissance vs année dernière',
    value: '28%',
    trend: 5
  },
  {
    name: 'Marge Bénéficiaire',
    description: 'Marge moyenne',
    value: '22%',
    trend: -3
  },
  {
    name: 'Valeur Client',
    description: 'Valeur moyenne par client',
    value: '125K Fb',
    trend: 12
  }
])

// Operational metrics
const operationalMetrics = ref([
  {
    name: 'Taux Utilisation',
    description: 'Utilisation des ressources',
    value: '87%',
    trend: 8
  },
  {
    name: 'Temps Traitement',
    description: 'Temps moyen de traitement',
    value: '2.4h',
    trend: -15
  },
  {
    name: 'Taux Succès',
    description: 'Taux de réussite des opérations',
    value: '96%',
    trend: 2
  },
  {
    name: 'Productivité',
    description: 'Output par employé',
    value: '142',
    trend: 11
  }
])

// Customer metrics
const customerMetrics = ref([
  {
    name: 'Satisfaction',
    description: 'Score de satisfaction client',
    value: '4.7/5',
    trend: 3
  },
  {
    name: 'Rétention',
    description: 'Taux de rétention client',
    value: '89%',
    trend: 6
  },
  {
    name: 'Acquisition',
    description: 'Nouveaux clients ce mois',
    value: '234',
    trend: 22
  },
  {
    name: 'Support Response',
    description: 'Temps de réponse support',
    value: '1.8h',
    trend: -20
  }
])

// Performance goals
const performanceGoals = ref([
  {
    id: 1,
    title: 'Augmenter les revenus de 20%',
    description: 'Atteindre 54M Fb de revenus mensuels',
    current: 45.2,
    target: 54,
    status: 'in-progress',
    deadline: '31 Mars 2024'
  },
  {
    id: 2,
    title: 'Réduire le temps de réponse',
    description: 'Temps de réponse support sous 1h',
    current: 1.8,
    target: 1,
    status: 'behind',
    deadline: '15 Avril 2024'
  },
  {
    id: 3,
    title: 'Améliorer la satisfaction client',
    description: 'Atteindre 4.8/5 de satisfaction',
    current: 4.7,
    target: 4.8,
    status: 'in-progress',
    deadline: '30 Avril 2024'
  },
  {
    id: 4,
    title: 'Former l\'équipe',
    description: '100% des employés formés aux nouveaux processus',
    current: 87,
    target: 100,
    status: 'in-progress',
    deadline: '31 Mars 2024'
  }
])

const getGoalStatusText = (status: string): string => {
  switch (status) {
    case 'achieved':
      return 'Atteint'
    case 'in-progress':
      return 'En cours'
    case 'behind':
      return 'En retard'
    default:
      return status
  }
}

// Chart initialization
onMounted(() => {
  // Performance Trend Chart
  const performanceTrendCanvas = performanceTrendChartCanvas.value
  if (performanceTrendCanvas) {
    new Chart(performanceTrendCanvas, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [
          {
            label: 'Performance Globale',
            data: [78, 82, 85, 83, 87, 87],
            borderColor: 'rgb(59, 130, 246)',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4
          },
          {
            label: 'Objectif',
            data: [80, 82, 84, 86, 88, 90],
            borderColor: 'rgb(156, 163, 175)',
            borderDash: [5, 5],
            backgroundColor: 'transparent',
            tension: 0.4
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

  // KPI Comparison Chart
  const kpiComparisonCanvas = kpiComparisonChartCanvas.value
  if (kpiComparisonCanvas) {
    new Chart(kpiComparisonCanvas, {
      type: 'radar',
      data: {
        labels: ['Revenus', 'Opérationnel', 'Client', 'Qualité', 'Innovation', 'Équipe'],
        datasets: [
          {
            label: 'Actuel',
            data: [87, 92, 94, 88, 75, 85],
            borderColor: 'rgb(59, 130, 246)',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            pointBackgroundColor: 'rgb(59, 130, 246)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(59, 130, 246)'
          },
          {
            label: 'Précédent',
            data: [82, 85, 89, 85, 70, 80],
            borderColor: 'rgb(156, 163, 175)',
            backgroundColor: 'rgba(156, 163, 175, 0.2)',
            pointBackgroundColor: 'rgb(156, 163, 175)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(156, 163, 175)'
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
