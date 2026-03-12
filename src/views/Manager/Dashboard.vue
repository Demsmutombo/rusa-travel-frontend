<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center space-x-4">
      <!-- Logo -->
      <div class="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden shadow-md">
        <img 
          src="/images/logo/auth-logo (2).png" 
          alt="Rusa Travel" 
          class="w-full h-full object-contain"
        />
      </div>
      <div>
        <h1 class="text-3xl font-bold">Dashboard Manager - Gestion des Opérations</h1>
        <p class="text-gray-600 mt-1">Vue d'ensemble de la gestion des équipes et opérations</p>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Team Performance Chart -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Performance des Équipes</h3>
        <div class="h-64">
          <canvas ref="teamChartCanvas"></canvas>
        </div>
      </div>

      <!-- Task Completion Chart -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Taux de Complétion des Tâches</h3>
        <div class="h-64">
          <canvas ref="taskChart"></canvas>
        </div>
      </div>
    </div>

    <!-- Additional Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <!-- Department Performance -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Performance par Département</h3>
        <div class="h-48">
          <canvas ref="departmentChart"></canvas>
        </div>
      </div>

      <!-- Project Status -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Statut des Projets</h3>
        <div class="h-48">
          <canvas ref="projectChart"></canvas>
        </div>
      </div>

      <!-- Resource Utilization -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Utilisation des Ressources</h3>
        <div class="h-48">
          <canvas ref="resourceChart"></canvas>
        </div>
      </div>
    </div>

    <!-- Manager Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Équipes</p>
            <p class="text-2xl font-bold text-gray-900">{{ managerStats.totalTeams }}</p>
            <p class="text-xs text-green-600 mt-1">+2 ce mois</p>
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
            <p class="text-sm font-medium text-gray-600">Total Employés</p>
            <p class="text-2xl font-bold text-gray-900">{{ managerStats.totalEmployees }}</p>
            <p class="text-xs text-green-600 mt-1">+15 ce mois</p>
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
            <p class="text-sm font-medium text-gray-600">Tâches Actives</p>
            <p class="text-2xl font-bold text-gray-900">{{ managerStats.activeTasks }}</p>
            <p class="text-xs text-green-600 mt-1">+18% cette semaine</p>
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
            <p class="text-sm font-medium text-gray-600">Projets En Cours</p>
            <p class="text-2xl font-bold text-gray-900">{{ managerStats.activeProjects }}</p>
            <p class="text-xs text-green-600 mt-1">+22% ce mois</p>
          </div>
          <div class="p-3 bg-yellow-100 rounded-full">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Efficacité Globale</p>
            <p class="text-2xl font-bold text-gray-900">{{ managerStats.efficiency }}%</p>
            <p class="text-xs text-green-600 mt-1">+5% ce mois</p>
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
        <h2 class="text-xl font-semibold mb-4">Évolution des performances</h2>
        <div class="h-64 flex items-center justify-center text-gray-500">
          <div class="text-center">
            <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <p>Graphique d'évolution des performances</p>
          </div>
        </div>
      </div>

      <!-- Top Performers -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-xl font-semibold mb-4">Meilleurs Performeurs</h2>
        <div class="space-y-4">
          <div v-for="(employee, index) in topEmployees" :key="employee.id" class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span class="text-sm font-medium text-blue-600">{{ index + 1 }}</span>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">{{ employee.name }}</p>
                <p class="text-xs text-gray-500">{{ employee.department }}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm font-medium text-gray-900">{{ employee.performance }}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activities -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Recent Tasks -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold">Tâches Récentes</h2>
          <router-link
            to="/manager/tasks"
            class="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Voir tout
          </router-link>
        </div>
        
        <div class="space-y-4">
          <div v-for="task in recentTasks" :key="task.id" class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div class="flex items-center space-x-3">
              <div class="p-2 bg-white rounded-full">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">{{ task.title }}</p>
                <p class="text-xs text-gray-500">{{ task.time }}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm font-medium text-gray-900">{{ task.assignee }}</p>
              <p class="text-xs text-gray-500">{{ task.priority }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Issues -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold">Alertes Équipe</h2>
          <router-link
            to="/manager/issues"
            class="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Voir tout
          </router-link>
        </div>
        
        <div class="space-y-4">
          <div v-for="issue in teamIssues" :key="issue.id" class="flex items-start space-x-3 p-3 rounded-lg"
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

// Define component name to satisfy ESLint
defineOptions({
  name: 'ManagerDashboard'
})

// Chart refs
const teamChartCanvas = ref<HTMLCanvasElement | null>(null)
const taskChart = ref<HTMLCanvasElement | null>(null)
const departmentChart = ref<HTMLCanvasElement | null>(null)
const projectChart = ref<HTMLCanvasElement | null>(null)
const resourceChart = ref<HTMLCanvasElement | null>(null)

// Manager statistics
const managerStats = reactive({
  totalTeams: 8,
  totalEmployees: 156,
  activeTasks: 89,
  activeProjects: 12,
  efficiency: 94
})

// Top performing employees
const topEmployees = ref([
  { id: 1, name: 'Jean Mutombo', department: 'Support Client', performance: 98 },
  { id: 2, name: 'Marie Kabila', department: 'Opérations', performance: 96 },
  { id: 3, name: 'Pierre Lumumba', department: 'Technique', performance: 94 },
  { id: 4, name: 'Sophie Kanza', department: 'Commercial', performance: 92 },
  { id: 5, name: 'Thomas Tshisekedi', department: 'Logistique', performance: 90 }
])

// Recent tasks
const recentTasks = ref([
  {
    id: 1,
    title: 'Audit mensuel des équipes',
    time: 'Il y a 2 heures',
    assignee: 'Jean Mutombo',
    priority: 'Haute'
  },
  {
    id: 2,
    title: 'Formation nouvelle équipe',
    time: 'Il y a 4 heures',
    assignee: 'Marie Kabila',
    priority: 'Moyenne'
  },
  {
    id: 3,
    title: 'Optimisation des processus',
    time: 'Il y a 6 heures',
    assignee: 'Pierre Lumumba',
    priority: 'Basse'
  }
])

// Team issues and alerts
const teamIssues = ref([
  {
    id: 1,
    title: 'Performance équipe Support',
    description: 'L\'équipe support a une performance de 78% cette semaine',
    severity: 'medium',
    time: 'Il y a 30 minutes'
  },
  {
    id: 2,
    title: 'Ressources insuffisantes',
    description: 'Le département technique manque de personnel qualifié',
    severity: 'high',
    time: 'Il y a 2 heures'
  },
  {
    id: 3,
    title: 'Formation planifiée',
    description: 'Formation sur les nouveaux outils prévue pour demain',
    severity: 'low',
    time: 'Il y a 4 heures'
  }
])

// Chart initialization
onMounted(() => {
  // Team Performance Chart
  const teamCanvas = teamChartCanvas.value
  if (teamCanvas) {
    new Chart(teamCanvas, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Performance (%)',
          data: [88, 91, 89, 93, 94, 96],
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

  // Task Completion Chart
  const taskCanvas = taskChart.value
  if (taskCanvas) {
    new Chart(taskCanvas, {
      type: 'bar',
      data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [{
          label: 'Tâches Complétées',
          data: [12, 19, 15, 25, 22, 30, 28],
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

  // Department Performance Chart
  const departmentCanvas = departmentChart.value
  if (departmentCanvas) {
    new Chart(departmentCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Support', 'Opérations', 'Technique', 'Commercial'],
        datasets: [{
          data: [30, 25, 25, 20],
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

  // Project Status Chart
  const projectCanvas = projectChart.value
  if (projectCanvas) {
    new Chart(projectCanvas, {
      type: 'bar',
      data: {
        labels: ['Projet A', 'Projet B', 'Projet C', 'Projet D', 'Projet E'],
        datasets: [{
          label: 'Progression (%)',
          data: [85, 92, 78, 65, 88],
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

  // Resource Utilization Chart
  const resourceCanvas = resourceChart.value
  if (resourceCanvas) {
    new Chart(resourceCanvas, {
      type: 'polarArea',
      data: {
        labels: ['Humain', 'Matériel', 'Budget', 'Temps'],
        datasets: [{
          data: [85, 70, 90, 75],
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
