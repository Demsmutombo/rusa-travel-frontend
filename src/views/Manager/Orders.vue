<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-bold">Rusa Travel - Gestion des Routes</h1>
      <p class="text-gray-600 mt-1">Gestion des routes et tarifs de transport</p>
    </div>

    <!-- Route Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Routes</p>
            <p class="text-2xl font-bold text-gray-900">{{ routeStats.totalRoutes }}</p>
            <p class="text-xs text-green-600 mt-1">+3 ce mois</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Routes Actives</p>
            <p class="text-2xl font-bold text-gray-900">{{ routeStats.activeRoutes }}</p>
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
            <p class="text-sm font-medium text-gray-600">Prix Moyen</p>
            <p class="text-2xl font-bold text-gray-900">{{ formatCurrency(routeStats.averagePrice) }}</p>
            <p class="text-xs text-gray-600 mt-1">Par trajet</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Distance Totale</p>
            <p class="text-2xl font-bold text-gray-900">{{ routeStats.totalDistance }}km</p>
            <p class="text-xs text-green-600 mt-1">+150km ce mois</p>
          </div>
          <div class="p-3 bg-orange-100 rounded-full">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Route Management -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
      <div class="p-6 border-b border-gray-200">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold">Liste des Routes</h2>
          <button 
            @click="showAddRouteModal = true"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ajouter une Route
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
              placeholder="Rechercher une route..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select v-model="statusFilter" class="px-4 py-2 border border-gray-300 rounded-lg">
            <option value="">Tous les statuts</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <!-- Route List -->
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Départ</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durée</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="route in filteredRoutes" :key="route.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ route.departure }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ route.destination }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ route.distance }}km</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ formatCurrency(route.price) }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ route.duration }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="getStatusClass(route.status)" class="px-2 py-1 text-xs font-semibold rounded-full">
                  {{ getStatusLabel(route.status) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button @click="editRoute(route)" class="text-blue-600 hover:text-blue-900 mr-3">Modifier</button>
                <button @click="deleteRoute(route.id)" class="text-red-600 hover:text-red-900">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Add/Edit Route Modal -->
    <div v-if="showAddRouteModal || editingRoute" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl p-6 w-full max-w-md">
        <h3 class="text-lg font-semibold mb-4">
          {{ editingRoute ? 'Modifier la Route' : 'Ajouter une Route' }}
        </h3>
        <form @submit.prevent="saveRoute">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Ville de Départ</label>
              <input 
                v-model="routeForm.departure"
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Ville de Destination</label>
              <input 
                v-model="routeForm.destination"
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Distance (km)</label>
              <input 
                v-model.number="routeForm.distance"
                type="number" 
                required
                min="1"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Prix (FCFA)</label>
              <input 
                v-model.number="routeForm.price"
                type="number" 
                required
                min="0"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Durée</label>
              <input 
                v-model="routeForm.duration"
                type="text" 
                placeholder="ex: 2h30min"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Statut</label>
              <select v-model="routeForm.status" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div class="flex justify-end space-x-3 mt-6">
            <button 
              type="button"
              @click="closeRouteModal"
              class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Annuler
            </button>
            <button 
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {{ editingRoute ? 'Mettre à jour' : 'Ajouter' }}
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
  name: 'RouteManagement'
})

interface Route {
  id: number
  departure: string
  destination: string
  distance: number
  price: number
  duration: string
  status: 'active' | 'inactive'
}

// Route statistics
const routeStats = reactive({
  totalRoutes: 18,
  activeRoutes: 15,
  averagePrice: 8500,
  totalDistance: 2450
})

// Route data
const routes = ref<Route[]>([
  { id: 1, departure: 'Kinshasa', destination: 'Lubumbashi', distance: 1650, price: 15000, duration: '24h', status: 'active' },
  { id: 2, departure: 'Kinshasa', destination: 'Kisangani', distance: 1120, price: 10000, duration: '18h', status: 'active' },
  { id: 3, departure: 'Kinshasa', destination: 'Matadi', distance: 380, price: 4500, duration: '6h', status: 'active' },
  { id: 4, departure: 'Lubumbashi', destination: 'Kisangani', distance: 980, price: 9000, duration: '16h', status: 'active' },
  { id: 5, departure: 'Kinshasa', destination: 'Bukavu', distance: 1550, price: 14000, duration: '22h', status: 'inactive' }
])

// Search and filter
const searchQuery = ref('')
const statusFilter = ref('')

// Modal state
const showAddRouteModal = ref(false)
const editingRoute = ref<Route | null>(null)

// Route form
const routeForm = reactive({
  departure: '',
  destination: '',
  distance: 0,
  price: 0,
  duration: '',
  status: 'active' as 'active' | 'inactive'
})

// Computed filtered routes
const filteredRoutes = computed(() => {
  return routes.value.filter(route => {
    const matchesSearch = !searchQuery.value || 
      route.departure.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      route.destination.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesStatus = !statusFilter.value || route.status === statusFilter.value
    
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
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'active':
      return 'Active'
    case 'inactive':
      return 'Inactive'
    default:
      return status
  }
}

// Format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF',
    minimumFractionDigits: 0
  }).format(amount)
}

// CRUD operations
const editRoute = (route: Route) => {
  editingRoute.value = route
  routeForm.departure = route.departure
  routeForm.destination = route.destination
  routeForm.distance = route.distance
  routeForm.price = route.price
  routeForm.duration = route.duration
  routeForm.status = route.status
}

const deleteRoute = (id: number) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette route ?')) {
    routes.value = routes.value.filter(route => route.id !== id)
    updateStats()
  }
}

const saveRoute = () => {
  if (editingRoute.value) {
    // Update existing route
    const index = routes.value.findIndex(route => route.id === editingRoute.value!.id)
    if (index !== -1) {
      routes.value[index] = {
        ...routes.value[index],
        departure: routeForm.departure,
        destination: routeForm.destination,
        distance: routeForm.distance,
        price: routeForm.price,
        duration: routeForm.duration,
        status: routeForm.status
      }
    }
  } else {
    // Add new route
    const newRoute: Route = {
      id: Math.max(...routes.value.map(r => r.id)) + 1,
      departure: routeForm.departure,
      destination: routeForm.destination,
      distance: routeForm.distance,
      price: routeForm.price,
      duration: routeForm.duration,
      status: routeForm.status
    }
    routes.value.push(newRoute)
  }
  
  updateStats()
  closeRouteModal()
}

const closeRouteModal = () => {
  showAddRouteModal.value = false
  editingRoute.value = null
  
  // Reset form
  routeForm.departure = ''
  routeForm.destination = ''
  routeForm.distance = 0
  routeForm.price = 0
  routeForm.duration = ''
  routeForm.status = 'active'
}

const updateStats = () => {
  routeStats.totalRoutes = routes.value.length
  routeStats.activeRoutes = routes.value.filter(route => route.status === 'active').length
  routeStats.totalDistance = routes.value.reduce((sum, route) => sum + route.distance, 0)
  routeStats.averagePrice = routes.value.length > 0 
    ? routes.value.reduce((sum, route) => sum + route.price, 0) / routes.value.length 
    : 0
}
</script>
            <p class="text-xs text-green-600 mt-1">+18% cette semaine</p>
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
            <p class="text-sm font-medium text-gray-600">En Cours</p>
            <p class="text-2xl font-bold text-gray-900">156</p>
            <p class="text-xs text-yellow-600 mt-1">-3% cette semaine</p>
          </div>
          <div class="p-3 bg-yellow-100 rounded-full">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Annulées</p>
            <p class="text-2xl font-bold text-gray-900">68</p>
            <p class="text-xs text-red-600 mt-1">+5% cette semaine</p>
          </div>
          <div class="p-3 bg-red-100 rounded-full">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters and Search -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
        <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Statut</label>
            <select class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Tous les statuts</option>
              <option value="delivered">Livrées</option>
              <option value="processing">En cours</option>
              <option value="pending">En attente</option>
              <option value="cancelled">Annulées</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Période</label>
            <select class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Toutes les périodes</option>
              <option value="today">Aujourd'hui</option>
              <option value="week">Cette semaine</option>
              <option value="month">Ce mois</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Tous les types</option>
              <option value="ticket">Billets</option>
              <option value="package">Colis</option>
              <option value="service">Services</option>
            </select>
          </div>
        </div>
        <div class="flex space-x-3">
          <div class="relative">
            <input
              type="text"
              placeholder="Rechercher une commande..."
              class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            <svg class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Exporter
          </button>
        </div>
      </div>
    </div>

    <!-- Orders Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
      <div class="p-6 border-b border-gray-200">
        <h2 class="text-xl font-semibold">Liste des Commandes</h2>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Commande
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Articles
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Montant
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
            <tr v-for="order in orders" :key="order.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                #{{ order.id }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div>
                  <div class="font-medium">{{ order.client.name }}</div>
                  <div class="text-gray-500">{{ order.client.email }}</div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <span
                  :class="{
                    'px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full': true,
                    'bg-blue-100 text-blue-800': order.type === 'ticket',
                    'bg-green-100 text-green-800': order.type === 'package',
                    'bg-purple-100 text-purple-800': order.type === 'service'
                  }"
                >
                  {{ getTypeText(order.type) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ order.items }} article{{ order.items > 1 ? 's' : '' }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ order.date }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ formatCurrency(order.amount) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="{
                    'px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full': true,
                    'bg-green-100 text-green-800': order.status === 'delivered',
                    'bg-yellow-100 text-yellow-800': order.status === 'processing',
                    'bg-blue-100 text-blue-800': order.status === 'pending',
                    'bg-red-100 text-red-800': order.status === 'cancelled'
                  }"
                >
                  {{ getStatusText(order.status) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mr-3">Voir</button>
                <button class="text-gray-600 hover:text-gray-900">Modifier</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Pagination -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex items-center justify-between">
        <div class="text-sm text-gray-700">
          Affichage de <span class="font-medium">1</span> à <span class="font-medium">10</span> sur
          <span class="font-medium">847</span> résultats
        </div>
        <div class="flex space-x-2">
          <button class="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Précédent
          </button>
          <button class="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            1
          </button>
          <button class="px-3 py-2 bg-blue-600 border border-blue-600 rounded-md text-sm font-medium text-white">
            2
          </button>
          <button class="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            3
          </button>
          <button class="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Suivant
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'ManagerOrders'
})

const orders = ref([
  {
    id: 'ORD2024031501',
    client: {
      name: 'Jean Mutombo',
      email: 'jean.mutombo@email.com'
    },
    type: 'ticket',
    items: 2,
    date: '15 Mars 2024',
    amount: 90000,
    status: 'delivered'
  },
  {
    id: 'ORD2024031502',
    client: {
      name: 'Marie Kabila',
      email: 'marie.kabila@email.com'
    },
    type: 'package',
    items: 1,
    date: '15 Mars 2024',
    amount: 15000,
    status: 'processing'
  },
  {
    id: 'ORD2024031503',
    client: {
      name: 'Pierre Lumumba',
      email: 'pierre.lumumba@email.com'
    },
    type: 'service',
    items: 3,
    date: '14 Mars 2024',
    amount: 75000,
    status: 'pending'
  },
  {
    id: 'ORD2024031504',
    client: {
      name: 'Sophie Kanza',
      email: 'sophie.kanza@email.com'
    },
    type: 'ticket',
    items: 1,
    date: '14 Mars 2024',
    amount: 35000,
    status: 'cancelled'
  }
])

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('fr-CD', {
    style: 'currency',
    currency: 'CDF',
    minimumFractionDigits: 0
  }).format(amount)
}

const getStatusText = (status: string): string => {
  switch (status) {
    case 'delivered':
      return 'Livrée'
    case 'processing':
      return 'En cours'
    case 'pending':
      return 'En attente'
    case 'cancelled':
      return 'Annulée'
    default:
      return status
  }
}

const getTypeText = (type: string): string => {
  switch (type) {
    case 'ticket':
      return 'Billet'
    case 'package':
      return 'Colis'
    case 'service':
      return 'Service'
    default:
      return type
  }
}
</script>
