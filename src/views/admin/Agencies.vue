<template>
  <!-- Agencies Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Agences</p>
            <p class="text-2xl font-bold text-gray-900">{{ totalAgencies.toLocaleString() }}</p>
            <p class="text-xs text-green-600 mt-1">+12% ce mois</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Agences Actives</p>
            <p class="text-2xl font-bold text-green-600">{{ activeAgencies.toLocaleString() }}</p>
            <p class="text-xs text-green-600 mt-1">Approuvées</p>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">En Attente</p>
            <p class="text-2xl font-bold text-orange-600">{{ pendingAgencies.toLocaleString() }}</p>
            <p class="text-xs text-gray-500 mt-1">Validation requise</p>
          </div>
          <div class="p-3 bg-orange-100 rounded-full">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Revenu Total</p>
            <p class="text-2xl font-bold text-purple-600">{{ formatCurrency(totalRevenue) }}</p>
            <p class="text-xs text-green-600 mt-1">+18% ce mois</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 0 3 1.343 3 0 3 1.657 0 3-1.343m0 6a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Agencies Table -->
    <CrudTable
      title="Liste des Agences"
      :columns="tableColumns"
      :data="agencies"
      :status-options="statusOptions"
      :filter-options="performanceOptions"
      @create="openCreateModal"
      @view="viewAgency"
      @edit="openEditModal"
      @delete="confirmDelete"
      @refresh="refreshData"
    />

    <!-- Create/Edit Modal -->
    <CrudModal
      :is-open="isModalOpen"
      :title="modalTitle"
      :submit-text="modalSubmitText"
      :form-fields="formFields"
      :initial-data="selectedAgency"
      :is-submitting="isSubmitting"
      @close="closeModal"
      @submit="handleSubmit"
    />

    <!-- Delete Confirmation Modal -->
    <teleport to="body">
      <div v-if="isDeleteModalOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Supprimer l'agence</h3>
              <p class="text-sm text-gray-500">Cette action est irréversible</p>
            </div>
          </div>
          
          <p class="text-gray-700 mb-6">
            Êtes-vous sûr de vouloir supprimer l'agence <strong>{{ agencyToDelete?.name }}</strong> ?
          </p>
          
          <div class="flex justify-end space-x-3">
            <button
              @click="closeDeleteModal"
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              @click="handleDelete"
              :disabled="isDeleting"
              class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
            >
              <span v-if="isDeleting">Suppression...</span>
              <span v-else>Supprimer</span>
            </button>
          </div>
        </div>
      </div>
    </teleport>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import CrudTable from '@/components/common/CrudTable.vue'
import CrudModal from '@/components/common/CrudModal.vue'

defineOptions({
  name: 'AdminAgencies'
})

// Types
interface Agency {
  id: number
  name: string
  email: string
  contact: string
  address: string
  status: 'approved' | 'pending' | 'rejected' | 'suspended'
  performance: 'excellent' | 'good' | 'average' | 'poor'
  busesCount: number
  routesCount: number
  totalBookings: number
  monthlyRevenue: number
  rating: number
}

// Reactive data
const agencies = ref<Agency[]>([
  {
    id: 1,
    name: 'Trans Congo Express',
    email: 'info@transcongo.cd',
    contact: '+243 123 456 789',
    address: 'Kinshasa, Gombe',
    status: 'approved',
    performance: 'excellent',
    busesCount: 25,
    routesCount: 12,
    totalBookings: 1567,
    monthlyRevenue: 45000000,
    rating: 4.8
  },
  {
    id: 2,
    name: 'RDC Transport',
    email: 'contact@rdctransport.cd',
    contact: '+243 987 654 321',
    address: 'Lubumbashi, Kenya',
    status: 'pending',
    performance: 'good',
    busesCount: 15,
    routesCount: 8,
    totalBookings: 892,
    monthlyRevenue: 28000000,
    rating: 4.2
  },
  {
    id: 3,
    name: 'Express Bus Line',
    email: 'info@expressbus.cd',
    contact: '+243 456 789 012',
    address: 'Mbuji-Mayi, Centre',
    status: 'approved',
    performance: 'average',
    busesCount: 10,
    routesCount: 6,
    totalBookings: 445,
    monthlyRevenue: 15000000,
    rating: 3.9
  }
])

// Modal state
const isModalOpen = ref(false)
const isDeleteModalOpen = ref(false)
const selectedAgency = ref<Agency | null>(null)
const agencyToDelete = ref<Agency | null>(null)
const isSubmitting = ref(false)
const isDeleting = ref(false)
const modalMode = ref<'create' | 'edit'>('create')

// Computed properties
const totalAgencies = computed(() => agencies.value.length)
const activeAgencies = computed(() => agencies.value.filter(a => a.status === 'approved').length)
const pendingAgencies = computed(() => agencies.value.filter(a => a.status === 'pending').length)
const totalRevenue = computed(() => agencies.value.reduce((sum, a) => sum + a.monthlyRevenue, 0))

const modalTitle = computed(() => modalMode.value === 'create' ? 'Ajouter une agence' : 'Modifier une agence')
const modalSubmitText = computed(() => modalMode.value === 'create' ? 'Ajouter' : 'Modifier')

// Table configuration
const tableColumns = [
  { key: 'name', label: 'Nom de l\'agence' },
  { key: 'email', label: 'Email' },
  { key: 'contact', label: 'Contact' },
  { key: 'address', label: 'Adresse' },
  { key: 'status', label: 'Statut', type: 'status' },
  { key: 'performance', label: 'Performance' },
  { key: 'busesCount', label: 'Bus' },
  { key: 'routesCount', label: 'Routes' },
  { key: 'monthlyRevenue', label: 'Revenu mensuel', type: 'currency' },
  { key: 'rating', label: 'Note' }
]

const statusOptions = [
  { value: 'approved', label: 'Approuvée' },
  { value: 'pending', label: 'En attente' },
  { value: 'rejected', label: 'Rejetée' },
  { value: 'suspended', label: 'Suspendue' }
]

const performanceOptions = [
  { value: 'excellent', label: 'Excellente' },
  { value: 'good', label: 'Bonne' },
  { value: 'average', label: 'Moyenne' },
  { value: 'poor', label: 'Faible' }
]

// Form fields for modal
const formFields = [
  { name: 'name', label: 'Nom de l\'agence', type: 'text', required: true, placeholder: 'Ex: Trans Congo Express' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'contact@agence.cd' },
  { name: 'contact', label: 'Contact', type: 'tel', required: true, placeholder: '+243 XXX XXX XXX' },
  { name: 'address', label: 'Adresse', type: 'text', required: true, placeholder: 'Ville, Quartier' },
  { name: 'status', label: 'Statut', type: 'select', required: true, options: statusOptions },
  { name: 'performance', label: 'Performance', type: 'select', required: true, options: performanceOptions },
  { name: 'busesCount', label: 'Nombre de bus', type: 'number', required: true, placeholder: '10' },
  { name: 'routesCount', label: 'Nombre de routes', type: 'number', required: true, placeholder: '5' }
]

// Methods
const openCreateModal = () => {
  modalMode.value = 'create'
  selectedAgency.value = null
  isModalOpen.value = true
}

const openEditModal = (agency: Agency) => {
  modalMode.value = 'edit'
  selectedAgency.value = { ...agency }
  isModalOpen.value = true
}

const viewAgency = (agency: Agency) => {
  console.log('View agency:', agency)
  // TODO: Implement view details
}

const closeModal = () => {
  isModalOpen.value = false
  selectedAgency.value = null
}

const confirmDelete = (agency: Agency) => {
  agencyToDelete.value = agency
  isDeleteModalOpen.value = true
}

const closeDeleteModal = () => {
  isDeleteModalOpen.value = false
  agencyToDelete.value = null
}

const handleSubmit = async (data: Partial<Agency>) => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (modalMode.value === 'create') {
      // Create new agency
      const newAgency: Agency = {
        id: Date.now(),
        name: data.name || '',
        email: data.email || '',
        contact: data.contact || '',
        address: data.address || '',
        status: data.status || 'pending',
        performance: data.performance || 'good',
        busesCount: data.busesCount || 0,
        routesCount: data.routesCount || 0,
        totalBookings: 0,
        monthlyRevenue: 0,
        rating: 0
      }
      agencies.value.push(newAgency)
      console.log('Agency created:', newAgency)
    } else {
      // Update existing agency
      const index = agencies.value.findIndex(a => a.id === selectedAgency.value?.id)
      if (index !== -1) {
        agencies.value[index] = { ...agencies.value[index], ...data }
        console.log('Agency updated:', agencies.value[index])
      }
    }
    
    closeModal()
  } catch (error) {
    console.error('Error saving agency:', error)
  } finally {
    isSubmitting.value = false
  }
}

const handleDelete = async () => {
  if (!agencyToDelete.value) return
  
  isDeleting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const index = agencies.value.findIndex(a => a.id === agencyToDelete.value!.id)
    if (index !== -1) {
      agencies.value.splice(index, 1)
      console.log('Agency deleted:', agencyToDelete.value)
    }
    
    closeDeleteModal()
  } catch (error) {
    console.error('Error deleting agency:', error)
  } finally {
    isDeleting.value = false
  }
}

const refreshData = () => {
  console.log('Refreshing agencies data...')
  // TODO: Implement refresh logic
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'CDF'
  }).format(amount)
}
</script>
