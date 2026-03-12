<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-bold">Gestion des Équipes</h1>
      <p class="text-gray-600 mt-1">Supervision et gestion du personnel de la plateforme</p>
    </div>

    <!-- Team Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Employés</p>
            <p class="text-2xl font-bold text-gray-900">{{ teamStats.totalEmployees }}</p>
            <p class="text-xs text-green-600 mt-1">+8 ce mois</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Équipes Actives</p>
            <p class="text-2xl font-bold text-gray-900">{{ teamStats.activeTeams }}</p>
            <p class="text-xs text-green-600 mt-1">+2 cette semaine</p>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Taux Productivité</p>
            <p class="text-2xl font-bold text-gray-900">{{ teamStats.productivityRate }}%</p>
            <p class="text-xs text-green-600 mt-1">+5% ce mois</p>
          </div>
          <div class="p-3 bg-yellow-100 rounded-full">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Satisfaction Équipe</p>
            <p class="text-2xl font-bold text-gray-900">{{ teamStats.satisfaction }}%</p>
            <p class="text-xs text-green-600 mt-1">+3% ce mois</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Performance Chart -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Performance par Équipe</h3>
        <div class="h-64">
          <canvas ref="teamPerformanceChartCanvas"></canvas>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Répartition des Compétences</h3>
        <div class="h-64">
          <canvas ref="skillsChartCanvas"></canvas>
        </div>
      </div>
    </div>

    <!-- Teams List -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
      <div class="p-6 border-b border-gray-200">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold">Liste des Équipes</h2>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Nouvelle Équipe
          </button>
        </div>
      </div>
      
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Équipe
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Chef d'Équipe
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Membres
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Performance
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Projets Actifs
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="team in teams" :key="team.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span class="text-sm font-medium text-blue-600">{{ team.name.charAt(0) }}</span>
                  </div>
                  <div>
                    <div class="font-medium">{{ team.name }}</div>
                    <div class="text-gray-500">{{ team.department }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                    <span class="text-xs">{{ team.leader.name.charAt(0) }}</span>
                  </div>
                  <div>
                    <div class="font-medium">{{ team.leader.name }}</div>
                    <div class="text-gray-500">{{ team.leader.role }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ team.members.length }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                    <div 
                      class="bg-green-600 h-2 rounded-full" 
                      :style="{ width: team.performance + '%' }"
                    ></div>
                  </div>
                  <span class="text-sm font-medium">{{ team.performance }}%</span>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ team.activeProjects }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="{
                    'px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full': true,
                    'bg-green-100 text-green-800': team.status === 'active',
                    'bg-yellow-100 text-yellow-800': team.status === 'busy',
                    'bg-red-100 text-red-800': team.status === 'inactive'
                  }"
                >
                  {{ getStatusText(team.status) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mr-3">Voir</button>
                <button class="text-gray-600 hover:text-gray-900">Éditer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Team Members -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Recent Activities -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold">Activités Récentes</h2>
          <button class="text-blue-600 hover:text-blue-700 font-medium text-sm">
            Voir tout
          </button>
        </div>
        
        <div class="space-y-4">
          <div v-for="activity in recentActivities" :key="activity.id" class="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            <div class="p-2 bg-white rounded-full">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900">{{ activity.description }}</p>
              <p class="text-xs text-gray-500 mt-1">{{ activity.team }} • {{ activity.time }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Performance Metrics -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold">Métriques de Performance</h2>
          <button class="text-blue-600 hover:text-blue-700 font-medium text-sm">
            Exporter
          </button>
        </div>
        
        <div class="space-y-4">
          <div v-for="metric in performanceMetrics" :key="metric.name" class="flex items-center justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900">{{ metric.name }}</p>
              <p class="text-xs text-gray-500">{{ metric.description }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm font-medium text-gray-900">{{ metric.value }}</p>
              <p class="text-xs" :class="metric.trend > 0 ? 'text-green-600' : 'text-red-600'">
                {{ metric.trend > 0 ? '+' : '' }}{{ metric.trend }}%
              </p>
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
  name: 'ManagerTeams'
})

// Chart refs
const teamPerformanceChartCanvas = ref<HTMLCanvasElement | null>(null)
const skillsChartCanvas = ref<HTMLCanvasElement | null>(null)

// Team statistics
const teamStats = reactive({
  totalEmployees: 47,
  activeTeams: 8,
  productivityRate: 87,
  satisfaction: 92
})

// Teams data
const teams = ref([
  {
    id: 1,
    name: 'Support Client',
    department: 'Service Client',
    leader: {
      name: 'Jean Mutombo',
      role: 'Team Leader'
    },
    members: ['Marie Kabila', 'Pierre Lumumba', 'Sophie Kanza'],
    performance: 92,
    activeProjects: 5,
    status: 'active'
  },
  {
    id: 2,
    name: 'Développement',
    department: 'IT',
    leader: {
      name: 'Thomas Nkulu',
      role: 'Tech Lead'
    },
    members: ['Alice Mukendi', 'Bob Kanza', 'Claude Lutumba'],
    performance: 88,
    activeProjects: 3,
    status: 'busy'
  },
  {
    id: 3,
    name: 'Marketing',
    department: 'Commercial',
    leader: {
      name: 'Céline Mbuyi',
      role: 'Marketing Manager'
    },
    members: ['David Tshimanga', 'Emma Kalonji'],
    performance: 85,
    activeProjects: 4,
    status: 'active'
  },
  {
    id: 4,
    name: 'Opérations',
    department: 'Logistique',
    leader: {
      name: 'François Mwamba',
      role: 'Operations Manager'
    },
    members: ['Grace Tshala', 'Henri Badi', 'Isabelle Katalayi'],
    performance: 78,
    activeProjects: 2,
    status: 'busy'
  }
])

// Recent activities
const recentActivities = ref([
  {
    id: 1,
    description: 'Nouveau projet assigné à l\'équipe Support Client',
    team: 'Support Client',
    time: 'Il y a 2 heures'
  },
  {
    id: 2,
    description: 'Formation terminée pour l\'équipe Développement',
    team: 'Développement',
    time: 'Il y a 4 heures'
  },
  {
    id: 3,
    description: 'Objectif mensuel atteint par l\'équipe Marketing',
    team: 'Marketing',
    time: 'Il y a 1 jour'
  },
  {
    id: 4,
    description: 'Réunion d\'équipe prévue pour Opérations',
    team: 'Opérations',
    time: 'Il y a 2 jours'
  }
])

// Performance metrics
const performanceMetrics = ref([
  {
    name: 'Taux de complétion des tâches',
    description: 'Pourcentage de tâches complétées à temps',
    value: '94%',
    trend: 5
  },
  {
    name: 'Temps de réponse moyen',
    description: 'Temps moyen de réponse aux demandes',
    value: '2.3h',
    trend: -8
  },
  {
    name: 'Score de satisfaction',
    description: 'Note moyenne de satisfaction client',
    value: '4.7/5',
    trend: 3
  },
  {
    name: 'Taux de rétention',
    description: 'Pourcentage d\'employés restants',
    value: '96%',
    trend: 2
  }
])

const getStatusText = (status: string): string => {
  switch (status) {
    case 'active':
      return 'Active'
    case 'busy':
      return 'Occupée'
    case 'inactive':
      return 'Inactive'
    default:
      return status
  }
}

// Chart initialization
onMounted(() => {
  // Team Performance Chart
  const teamPerformanceCanvas = teamPerformanceChartCanvas.value
  if (teamPerformanceCanvas) {
    new Chart(teamPerformanceCanvas, {
      type: 'bar',
      data: {
        labels: ['Support Client', 'Développement', 'Marketing', 'Opérations'],
        datasets: [{
          label: 'Performance (%)',
          data: [92, 88, 85, 78],
          backgroundColor: [
            'rgba(34, 197, 94, 0.8)',
            'rgba(59, 130, 246, 0.8)',
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
            position: 'top'
          }
        }
      }
    })
  }

  // Skills Distribution Chart
  const skillsCanvas = skillsChartCanvas.value
  if (skillsCanvas) {
    new Chart(skillsCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Support Client', 'Développement', 'Marketing', 'Ventes', 'Opérations'],
        datasets: [{
          data: [25, 20, 18, 22, 15],
          backgroundColor: [
            'rgba(34, 197, 94, 0.8)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(251, 146, 60, 0.8)',
            'rgba(245, 158, 11, 0.8)',
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
