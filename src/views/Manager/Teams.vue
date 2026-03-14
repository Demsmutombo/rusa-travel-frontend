<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-bold">Rusa Travel - Gestion des Bus</h1>
      <p class="text-gray-600 mt-1">Gestion de la flotte de bus de transport</p>
    </div>

    <!-- Bus Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Bus</p>
            <p class="text-2xl font-bold text-gray-900">{{ busStats.totalBuses }}</p>
            <p class="text-xs text-green-600 mt-1">+2 ce mois</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Bus Actifs</p>
            <p class="text-2xl font-bold text-gray-900">{{ busStats.activeBuses }}</p>
            <p class="text-xs text-green-600 mt-1">En service</p>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Capacité Totale</p>
            <p class="text-2xl font-bold text-gray-900">{{ busStats.totalCapacity }}</p>
            <p class="text-xs text-gray-600 mt-1">Places</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Taux Occupation</p>
            <p class="text-2xl font-bold text-gray-900">{{ busStats.occupancyRate }}%</p>
            <p class="text-xs text-green-600 mt-1">+3% ce mois</p>
          </div>
          <div class="p-3 bg-orange-100 rounded-full">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Bus Management -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
      <div class="p-6 border-b border-gray-200">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold">Liste des Bus</h2>
          <button 
            @click="showAddBusModal = true"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ajouter un Bus
          </button>
        </div>
      </div>

      <!-- Search and Filters -->
      <div class="p-6 border-b border-gray-200">
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="flex-1">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Rechercher un bus..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select v-model="statusFilter" class="px-4 py-2 border border-gray-300 rounded-lg">
            <option value="">Tous les statuts</option>
            <option value="active">Actif</option>
            <option value="inactive">Inactif</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>
      </div>

      <!-- Bus List -->
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Immatriculation</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modèle</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacité</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chauffeur</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="bus in filteredBuses" :key="bus.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ bus.plateNumber }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ bus.model }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ bus.capacity }} places</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="getStatusClass(bus.status)" class="px-2 py-1 text-xs font-semibold rounded-full">
                  {{ getStatusLabel(bus.status) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ bus.driver || 'Non assigné' }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button @click="editBus(bus)" class="text-blue-600 hover:text-blue-900 mr-3">Modifier</button>
                <button @click="deleteBus(bus.id)" class="text-red-600 hover:text-red-900">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Add/Edit Bus Modal -->
    <div v-if="showAddBusModal || editingBus" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl p-6 w-full max-w-md">
        <h3 class="text-lg font-semibold mb-4">
          {{ editingBus ? 'Modifier le Bus' : 'Ajouter un Bus' }}
        </h3>
        <form @submit.prevent="saveBus">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Immatriculation</label>
              <input 
                v-model="busForm.plateNumber"
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Modèle</label>
              <input 
                v-model="busForm.model"
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Capacité</label>
              <input 
                v-model.number="busForm.capacity"
                type="number" 
                required
                min="1"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Chauffeur</label>
              <input 
                v-model="busForm.driver"
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Statut</label>
              <select v-model="busForm.status" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option value="active">Actif</option>
                <option value="inactive">Inactif</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
          </div>
          <div class="flex justify-end space-x-3 mt-6">
            <button 
              type="button"
              @click="closeBusModal"
              class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Annuler
            </button>
            <button 
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {{ editingBus ? 'Mettre à jour' : 'Ajouter' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'

defineOptions({
  name: 'BusManagement'
})

interface Bus {
  id: number
  plateNumber: string
  model: string
  capacity: number
  status: 'active' | 'inactive' | 'maintenance'
  driver?: string
}

// Bus statistics
const busStats = reactive({
  totalBuses: 25,
  activeBuses: 22,
  totalCapacity: 550,
  occupancyRate: 78
})

// Bus data
const buses = ref<Bus[]>([
  { id: 1, plateNumber: 'CD-123-AB', model: 'Mercedes-Benz Tourismo', capacity: 45, status: 'active', driver: 'Jean Mutombo' },
  { id: 2, plateNumber: 'CD-456-CD', model: 'Volvo B9R', capacity: 50, status: 'active', driver: 'Pierre Lumumba' },
  { id: 3, plateNumber: 'CD-789-EF', model: 'Scania K-series', capacity: 55, status: 'maintenance', driver: 'Marie Kabila' },
  { id: 4, plateNumber: 'CD-012-GH', model: 'MAN Lion\'s Coach', capacity: 48, status: 'active', driver: 'Thomas Tshisekedi' },
  { id: 5, plateNumber: 'CD-345-IJ', model: 'Setra S517 HD', capacity: 52, status: 'inactive', driver: '' }
])

// Search and filter
const searchQuery = ref('')
const statusFilter = ref('')

// Modal state
const showAddBusModal = ref(false)
const editingBus = ref<Bus | null>(null)

// Bus form
const busForm = reactive({
  plateNumber: '',
  model: '',
  capacity: 0,
  driver: '',
  status: 'active' as 'active' | 'inactive' | 'maintenance'
})

// Computed filtered buses
const filteredBuses = computed(() => {
  return buses.value.filter(bus => {
    const matchesSearch = !searchQuery.value || 
      bus.plateNumber.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      bus.model.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      (bus.driver && bus.driver.toLowerCase().includes(searchQuery.value.toLowerCase()))
    
    const matchesStatus = !statusFilter.value || bus.status === statusFilter.value
    
    return matchesSearch && matchesStatus
  })
})

// Status helpers
const getStatusClass = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800'
    case 'inactive':
      return 'bg-gray-100 text-gray-800'
    case 'maintenance':
      return 'bg-yellow-100 text-yellow-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'active':
      return 'Actif'
    case 'inactive':
      return 'Inactif'
    case 'maintenance':
      return 'Maintenance'
    default:
      return status
  }
}

// CRUD operations
const editBus = (bus: Bus) => {
  editingBus.value = bus
  busForm.plateNumber = bus.plateNumber
  busForm.model = bus.model
  busForm.capacity = bus.capacity
  busForm.driver = bus.driver || ''
  busForm.status = bus.status
}

const deleteBus = (id: number) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce bus ?')) {
    buses.value = buses.value.filter(bus => bus.id !== id)
    updateStats()
  }
}

const saveBus = () => {
  if (editingBus.value) {
    // Update existing bus
    const index = buses.value.findIndex(bus => bus.id === editingBus.value!.id)
    if (index !== -1) {
      buses.value[index] = {
        ...buses.value[index],
        plateNumber: busForm.plateNumber,
        model: busForm.model,
        capacity: busForm.capacity,
        driver: busForm.driver,
        status: busForm.status
      }
    }
  } else {
    // Add new bus
    const newBus: Bus = {
      id: Math.max(...buses.value.map(b => b.id)) + 1,
      plateNumber: busForm.plateNumber,
      model: busForm.model,
      capacity: busForm.capacity,
      driver: busForm.driver,
      status: busForm.status
    }
    buses.value.push(newBus)
  }
  
  updateStats()
  closeBusModal()
}

const closeBusModal = () => {
  showAddBusModal.value = false
  editingBus.value = null
  
  // Reset form
  busForm.plateNumber = ''
  busForm.model = ''
  busForm.capacity = 0
  busForm.driver = ''
  busForm.status = 'active'
}

const updateStats = () => {
  busStats.totalBuses = buses.value.length
  busStats.activeBuses = buses.value.filter(bus => bus.status === 'active').length
  busStats.totalCapacity = buses.value.reduce((sum, bus) => sum + bus.capacity, 0)
}
</script>
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
