<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-bold">Rapports et Analyse</h1>
      <p class="text-gray-600 mt-1">Génération et consultation des rapports de performance</p>
    </div>

    <!-- Report Generation -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold">Générer un Rapport</h2>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Rapport Personnalisé
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Type de Rapport</label>
          <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Sélectionner...</option>
            <option value="financial">Financier</option>
            <option value="operational">Opérationnel</option>
            <option value="customer">Client</option>
            <option value="performance">Performance</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Période</label>
          <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Sélectionner...</option>
            <option value="daily">Quotidien</option>
            <option value="weekly">Hebdomadaire</option>
            <option value="monthly">Mensuel</option>
            <option value="quarterly">Trimestriel</option>
            <option value="yearly">Annuel</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Format</label>
          <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="pdf">PDF</option>
            <option value="excel">Excel</option>
            <option value="csv">CSV</option>
          </select>
        </div>
        <div class="flex items-end">
          <button class="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Générer
          </button>
        </div>
      </div>
    </div>

    <!-- Quick Reports -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span class="text-sm text-gray-500">Mise à jour: 2h</span>
        </div>
        <h3 class="font-semibold mb-2">Rapport Financier Mensuel</h3>
        <p class="text-sm text-gray-600 mb-4">Analyse complète des revenus et dépenses du mois</p>
        <button class="w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
          Télécharger
        </button>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <span class="text-sm text-gray-500">Mise à jour: 1j</span>
        </div>
        <h3 class="font-semibold mb-2">Performance Opérationnelle</h3>
        <p class="text-sm text-gray-600 mb-4">Indicateurs clés de performance opérationnelle</p>
        <button class="w-full px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">
          Télécharger
        </button>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <span class="text-sm text-gray-500">Mise à jour: 3j</span>
        </div>
        <h3 class="font-semibold mb-2">Analyse Client</h3>
        <p class="text-sm text-gray-600 mb-4">Comportement et satisfaction des clients</p>
        <button class="w-full px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm">
          Télécharger
        </button>
      </div>
    </div>

    <!-- Recent Reports -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
      <div class="p-6 border-b border-gray-200">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold">Rapports Récents</h2>
          <div class="flex space-x-2">
            <button class="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
              Filtrer
            </button>
            <button class="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
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
                Rapport
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Période
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Créé par
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Taille
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="report in recentReports" :key="report.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <div class="flex items-center">
                  <div class="p-2 bg-gray-100 rounded mr-3">
                    <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <div class="font-medium">{{ report.name }}</div>
                    <div class="text-gray-500">{{ report.description }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <span
                  :class="{
                    'px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full': true,
                    'bg-blue-100 text-blue-800': report.type === 'financial',
                    'bg-green-100 text-green-800': report.type === 'operational',
                    'bg-purple-100 text-purple-800': report.type === 'customer',
                    'bg-yellow-100 text-yellow-800': report.type === 'performance'
                  }"
                >
                  {{ getReportTypeText(report.type) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ report.period }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                    <span class="text-xs">{{ report.createdBy.charAt(0) }}</span>
                  </div>
                  {{ report.createdBy }}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ report.date }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ report.size }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mr-3">Télécharger</button>
                <button class="text-gray-600 hover:text-gray-900">Voir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Report Analytics -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Report Generation Trend -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Tendance de Génération</h3>
        <div class="h-64">
          <canvas ref="reportTrendChartCanvas"></canvas>
        </div>
      </div>

      <!-- Report Types Distribution -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Répartition par Type</h3>
        <div class="h-64">
          <canvas ref="reportTypesChartCanvas"></canvas>
        </div>
      </div>
    </div>

    <!-- Scheduled Reports -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold">Rapports Programmés</h2>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Nouvelle Programmation
        </button>
      </div>
      
      <div class="space-y-4">
        <div v-for="scheduled in scheduledReports" :key="scheduled.id" class="border border-gray-200 rounded-lg p-4">
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <div class="flex items-center space-x-3 mb-2">
                <h3 class="font-medium text-gray-900">{{ scheduled.name }}</h3>
                <span
                  :class="{
                    'px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full': true,
                    'bg-green-100 text-green-800': scheduled.status === 'active',
                    'bg-gray-100 text-gray-800': scheduled.status === 'paused'
                  }"
                >
                  {{ scheduled.status === 'active' ? 'Actif' : 'En pause' }}
                </span>
              </div>
              <p class="text-sm text-gray-600 mb-2">{{ scheduled.description }}</p>
              <div class="flex items-center space-x-4 text-sm text-gray-500">
                <span>Fréquence: {{ scheduled.frequency }}</span>
                <span>Prochain: {{ scheduled.nextRun }}</span>
                <span>Destinataires: {{ scheduled.recipients.length }}</span>
              </div>
            </div>
            <div class="flex space-x-2 ml-4">
              <button class="text-blue-600 hover:text-blue-900 text-sm">Modifier</button>
              <button class="text-gray-600 hover:text-gray-900 text-sm">{{ scheduled.status === 'active' ? 'Pause' : 'Activer' }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

defineOptions({
  name: 'ManagerReports'
})

// Chart refs
const reportTrendChartCanvas = ref<HTMLCanvasElement | null>(null)
const reportTypesChartCanvas = ref<HTMLCanvasElement | null>(null)

// Recent reports
const recentReports = ref([
  {
    id: 1,
    name: 'Rapport Financier Mars 2024',
    description: 'Analyse mensuelle des revenus et dépenses',
    type: 'financial',
    period: 'Mars 2024',
    createdBy: 'Jean Mutombo',
    date: '15 Mars 2024',
    size: '2.4 MB'
  },
  {
    id: 2,
    name: 'Performance Q1 2024',
    description: 'Indicateurs de performance du premier trimestre',
    type: 'performance',
    period: 'Q1 2024',
    createdBy: 'Marie Kabila',
    date: '14 Mars 2024',
    size: '1.8 MB'
  },
  {
    id: 3,
    name: 'Analyse Client Semaine 11',
    description: 'Comportement et satisfaction clients',
    type: 'customer',
    period: 'Semaine 11',
    createdBy: 'Pierre Lumumba',
    date: '13 Mars 2024',
    size: '945 KB'
  },
  {
    id: 4,
    name: 'Rapport Opérationnel Hebdo',
    description: 'Métriques opérationnelles hebdomadaires',
    type: 'operational',
    period: 'Semaine 11',
    createdBy: 'Sophie Kanza',
    date: '12 Mars 2024',
    size: '1.2 MB'
  }
])

// Scheduled reports
const scheduledReports = ref([
  {
    id: 1,
    name: 'Rapport Financier Mensuel',
    description: 'Génération automatique du rapport financier mensuel',
    frequency: 'Mensuel',
    nextRun: '1 Avril 2024',
    status: 'active',
    recipients: ['direction@rusatravel.cd', 'finance@rusatravel.cd']
  },
  {
    id: 2,
    name: 'Performance Hebdomadaire',
    description: 'Rapport de performance hebdomadaire pour l\'équipe',
    frequency: 'Hebdomadaire',
    nextRun: '18 Mars 2024',
    status: 'active',
    recipients: ['managers@rusatravel.cd']
  },
  {
    id: 3,
    name: 'Analyse Client Trimestrielle',
    description: 'Analyse détaillée des clients chaque trimestre',
    frequency: 'Trimestriel',
    nextRun: '1 Avril 2024',
    status: 'paused',
    recipients: ['marketing@rusatravel.cd', 'support@rusatravel.cd']
  }
])

const getReportTypeText = (type: string): string => {
  switch (type) {
    case 'financial':
      return 'Financier'
    case 'operational':
      return 'Opérationnel'
    case 'customer':
      return 'Client'
    case 'performance':
      return 'Performance'
    default:
      return type
  }
}

// Chart initialization
onMounted(() => {
  // Report Trend Chart
  const reportTrendCanvas = reportTrendChartCanvas.value
  if (reportTrendCanvas) {
    new Chart(reportTrendCanvas, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Rapports générés',
          data: [45, 52, 48, 58, 62, 55],
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

  // Report Types Chart
  const reportTypesCanvas = reportTypesChartCanvas.value
  if (reportTypesCanvas) {
    new Chart(reportTypesCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Financier', 'Opérationnel', 'Client', 'Performance'],
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
})
</script>
