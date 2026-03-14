<template>
  <!-- Buses Overview -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Total Bus</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ totalBuses.toLocaleString() }}</p>
          <p class="text-xs text-green-600 mt-1">+8% ce mois</p>
        </div>
        <div class="p-2 sm:p-3 bg-blue-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4m-4 4h12m-4 4h4m-4 4l4 4m-4-4h4m-4 4l4-4" />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Bus Actifs</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ activeBuses.toLocaleString() }}</p>
          <p class="text-xs text-green-600 mt-1">85% du total</p>
        </div>
        <div class="p-2 sm:p-3 bg-green-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">Capacité Totale</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ totalCapacity.toLocaleString() }}</p>
          <p class="text-xs text-gray-500 mt-1">Places</p>
        </div>
        <div class="p-2 sm:p-3 bg-purple-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <p class="text-xs sm:text-sm font-medium text-gray-600">En Maintenance</p>
          <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ maintenanceBuses.toLocaleString() }}</p>
          <p class="text-xs text-orange-600 mt-1">En réparation</p>
        </div>
        <div class="p-2 sm:p-3 bg-orange-100 rounded-full ml-2 sm:ml-0">
          <svg class="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- Buses Table -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-200">
    <div class="p-4 sm:p-6 border-b border-gray-200">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h2 class="text-lg sm:text-xl font-semibold text-gray-900">Gestion des Bus</h2>
        <div class="flex flex-col sm:flex-row gap-3">
          <button
            @click="openAddModal"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Ajouter un Bus
          </button>
          <button
            @click="exportBuses"
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
              Bus
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Numéro
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Capacité
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
          <tr v-for="bus in buses" :key="bus.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">{{ bus.name }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ bus.number }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ bus.type }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ bus.capacity }} places</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span :class="getStatusClass(bus.status)" class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full">
                {{ getStatusLabel(bus.status) }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <div class="flex gap-2">
                <button
                  @click="editBus(bus)"
                  class="text-blue-600 hover:text-blue-900 text-sm"
                >
                  Modifier
                </button>
                <button
                  v-if="bus.status === 'active'"
                  @click="deactivateBus(bus.id)"
                  class="text-orange-600 hover:text-orange-900 text-sm"
                >
                  Désactiver
                </button>
                <button
                  v-else-if="bus.status === 'inactive'"
                  @click="activateBus(bus.id)"
                  class="text-green-600 hover:text-green-900 text-sm"
                >
                  Activer
                </button>
                <button
                  @click="deleteBus(bus.id)"
                  class="text-red-600 hover:text-red-900 text-sm"
                >
                  Supprimer
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Bus Modal -->
  <teleport to="body">
    <div v-if="showModal" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" @click="closeModal">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full w-full max-w-md mx-4">
          <form @submit.prevent="saveBus">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
                {{ isEditing ? 'Modifier le Bus' : 'Ajouter un Bus' }}
              </h3>

              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Nom du Bus</label>
                  <input
                    v-model="busForm.name"
                    type="text"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">Numéro du Bus</label>
                  <input
                    v-model="busForm.number"
                    type="text"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">Type de Bus</label>
                  <select
                    v-model="busForm.type"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Sélectionner un type...</option>
                    <option value="VIP">VIP</option>
                    <option value="Standard">Standard</option>
                    <option value="Economique">Economique</option>
                    <option value="Mini Bus">Mini Bus</option>
                    <option value="Luxury">Luxury</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">Capacité</label>
                  <input
                    v-model="busForm.capacity"
                    type="number"
                    min="1"
                    max="100"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">Statut</label>
                  <select
                    v-model="busForm.status"
                    required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="active">Actif</option>
                    <option value="inactive">Inactif</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                :disabled="isSaving"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
              >
                <span v-if="isSaving">Enregistrement...</span>
                <span v-else>{{ isEditing ? 'Mettre à jour' : 'Ajouter' }}</span>
              </button>
              <button
                type="button"
                @click="closeModal"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

defineOptions({
  name: 'ManagerBuses'
})

// Types
interface Bus {
  id: number
  name: string
  number: string
  type: string
  capacity: number
  status: 'active' | 'inactive' | 'maintenance'
}

// Reactive data
const buses = ref<Bus[]>([
  { id: 1, name: 'Express Line 1', number: 'CD-1234-AB', type: 'VIP', capacity: 45, status: 'active' },
  { id: 2, name: 'City Bus 5', number: 'CD-5678-CD', type: 'Standard', capacity: 60, status: 'active' },
  { id: 3, name: 'Rapid Transit 2', number: 'CD-9012-EF', type: 'Economique', capacity: 80, status: 'maintenance' },
  { id: 4, name: 'Mini Express 3', number: 'CD-3456-GH', type: 'Mini-bus', capacity: 25, status: 'inactive' },
  { id: 5, name: 'Luxury Coach 1', number: 'CD-7890-IJ', type: 'VIP', capacity: 40, status: 'active' }
])

// Modal state
const showModal = ref(false)
const isEditing = ref(false)
const isSaving = ref(false)
const currentBusId = ref<number | null>(null)

// Form data
const busForm = ref({
  name: '',
  number: '',
  type: '',
  capacity: 45,
  status: 'active' as 'active' | 'inactive' | 'maintenance'
})

// Computed properties
const totalBuses = computed(() => buses.value.length)
const activeBuses = computed(() => buses.value.filter(bus => bus.status === 'active').length)
const maintenanceBuses = computed(() => buses.value.filter(bus => bus.status === 'maintenance').length)
const totalCapacity = computed(() => buses.value.reduce((sum, bus) => sum + bus.capacity, 0))

// Methods
const openAddModal = () => {
  isEditing.value = false
  currentBusId.value = null
  busForm.value = {
    name: '',
    number: '',
    type: '',
    capacity: 45,
    status: 'active'
  }
  showModal.value = true
}

const editBus = (bus: Bus) => {
  isEditing.value = true
  currentBusId.value = bus.id
  busForm.value = { ...bus }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  isEditing.value = false
  currentBusId.value = null
}

const saveBus = async () => {
  isSaving.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (isEditing.value && currentBusId.value) {
      // Update existing bus
      const index = buses.value.findIndex(bus => bus.id === currentBusId.value)
      if (index !== -1) {
        buses.value[index] = { ...busForm.value, id: currentBusId.value }
      }
    } else {
      // Add new bus
      const newBus: Bus = {
        id: Math.max(...buses.value.map(b => b.id)) + 1,
        ...busForm.value
      }
      buses.value.push(newBus)
    }
    
    closeModal()
  } finally {
    isSaving.value = false
  }
}

const deleteBus = async (id: number) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce bus ?')) {
    buses.value = buses.value.filter(bus => bus.id !== id)
  }
}

const activateBus = async (id: number) => {
  const bus = buses.value.find(b => b.id === id)
  if (bus) {
    bus.status = 'active'
  }
}

const deactivateBus = async (id: number) => {
  const bus = buses.value.find(b => b.id === id)
  if (bus) {
    bus.status = 'inactive'
  }
}

const exportBuses = () => {
  const csvContent = [
    ['Nom', 'Numéro', 'Type', 'Capacité', 'Statut'],
    ...buses.value.map(bus => [
      bus.name,
      bus.number,
      bus.type,
      bus.capacity.toString(),
      getStatusLabel(bus.status)
    ])
  ].map(row => row.join(',')).join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `buses_${new Date().toISOString().split('T')[0]}.csv`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const getStatusClass = (status: string) => {
  const classes = {
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-gray-100 text-gray-800',
    maintenance: 'bg-orange-100 text-orange-800'
  }
  return classes[status as keyof typeof classes] || 'bg-gray-100 text-gray-800'
}

const getStatusLabel = (status: string) => {
  const labels = {
    active: 'Actif',
    inactive: 'Inactif',
    maintenance: 'Maintenance'
  }
  return labels[status as keyof typeof labels] || status
}
</script>
