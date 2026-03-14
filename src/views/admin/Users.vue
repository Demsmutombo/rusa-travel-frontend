<template>
  <!-- Users Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Utilisateurs</p>
            <p class="text-2xl font-bold text-gray-900">{{ totalUsers.toLocaleString() }}</p>
            <p class="text-xs text-green-600 mt-1">+15% ce mois</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Utilisateurs Actifs</p>
            <p class="text-2xl font-bold text-green-600">{{ activeUsers.toLocaleString() }}</p>
            <p class="text-xs text-green-600 mt-1">En ligne</p>
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
            <p class="text-sm font-medium text-gray-600">Nouveaux</p>
            <p class="text-2xl font-bold text-orange-600">{{ newUsers.toLocaleString() }}</p>
            <p class="text-xs text-gray-500 mt-1">Cette semaine</p>
          </div>
          <div class="p-3 bg-orange-100 rounded-full">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Admins</p>
            <p class="text-2xl font-bold text-purple-600">{{ adminUsers.toLocaleString() }}</p>
            <p class="text-xs text-gray-500 mt-1">Super utilisateurs</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Users Table -->
    <CrudTable
      title="Liste des Utilisateurs"
      :columns="tableColumns"
      :data="users"
      :status-options="statusOptions"
      :filter-options="roleOptions"
      @create="openCreateModal"
      @view="viewUser"
      @edit="openEditModal"
      @delete="confirmDelete"
      @refresh="refreshData"
      @export="exportUsers"
    />

    <!-- Create/Edit Modal -->
    <CrudModal
      :is-open="isModalOpen"
      :title="modalTitle"
      :submit-text="modalSubmitText"
      :form-fields="formFields"
      :initial-data="selectedUser"
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
              <h3 class="text-lg font-semibold text-gray-900">Supprimer l'utilisateur</h3>
              <p class="text-sm text-gray-500">Cette action est irréversible</p>
            </div>
          </div>
          
          <p class="text-gray-700 mb-6">
            Êtes-vous sûr de vouloir supprimer l'utilisateur <strong>{{ userToDelete?.name }}</strong> ?
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
  name: 'AdminUsers'
})

// Types
interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'manager' | 'client' | 'carrier'
  status: 'active' | 'inactive' | 'suspended'
  lastLogin: string
  createdAt: string
  phone?: string
  address?: string
}

// Reactive data
const users = ref<User[]>([
  {
    id: 1,
    name: 'Jean Mukendi',
    email: 'jean.mukendi@rusatravel.com',
    role: 'admin',
    status: 'active',
    lastLogin: '2024-06-14T10:30:00Z',
    createdAt: '2024-01-15T08:00:00Z',
    phone: '+243 123 456 789',
    address: 'Kinshasa, Gombe'
  },
  {
    id: 2,
    name: 'Marie Kabila',
    email: 'marie.kabila@rusatravel.com',
    role: 'manager',
    status: 'active',
    lastLogin: '2024-06-14T09:15:00Z',
    createdAt: '2024-02-20T14:30:00Z',
    phone: '+243 987 654 321',
    address: 'Lubumbashi, Kenya'
  },
  {
    id: 3,
    name: 'Pierre Masamba',
    email: 'pierre.masamba@email.com',
    role: 'client',
    status: 'active',
    lastLogin: '2024-06-13T18:45:00Z',
    createdAt: '2024-03-10T11:20:00Z',
    phone: '+243 456 789 012',
    address: 'Mbuji-Mayi, Centre'
  }
])

// Modal state
const isModalOpen = ref(false)
const isDeleteModalOpen = ref(false)
const selectedUser = ref<User | undefined>(undefined)
const userToDelete = ref<User | null>(null)
const isSubmitting = ref(false)
const isDeleting = ref(false)
const modalMode = ref<'create' | 'edit'>('create')

// Computed properties
const totalUsers = computed(() => users.value.length)
const activeUsers = computed(() => users.value.filter(u => u.status === 'active').length)
const newUsers = computed(() => users.value.filter(u => {
  const createdAt = new Date(u.createdAt)
  const weekAgo = new Date()
  weekAgo.setDate(weekAgo.getDate() - 7)
  return createdAt > weekAgo
}).length)
const adminUsers = computed(() => users.value.filter(u => u.role === 'admin').length)

const modalTitle = computed(() => modalMode.value === 'create' ? 'Ajouter un utilisateur' : 'Modifier un utilisateur')
const modalSubmitText = computed(() => modalMode.value === 'create' ? 'Ajouter' : 'Modifier')

// Table configuration
const tableColumns = [
  { key: 'name', label: 'Nom' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Rôle' },
  { key: 'status', label: 'Statut', type: 'status' as const },
  { key: 'phone', label: 'Téléphone' },
  { key: 'address', label: 'Adresse' },
  { key: 'lastLogin', label: 'Dernière connexion', type: 'date' as const },
  { key: 'createdAt', label: 'Date de création', type: 'date' as const }
]

const statusOptions = [
  { value: 'active', label: 'Actif' },
  { value: 'inactive', label: 'Inactif' },
  { value: 'suspended', label: 'Suspendu' }
]

const roleOptions = [
  { value: 'admin', label: 'Admin' },
  { value: 'manager', label: 'Manager' },
  { value: 'client', label: 'Client' },
  { value: 'carrier', label: 'Transporteur' }
]

// Form fields for modal
const formFields = [
  { name: 'name', label: 'Nom complet', type: 'text' as const, required: true, placeholder: 'Ex: Jean Mukendi' },
  { name: 'email', label: 'Email', type: 'email' as const, required: true, placeholder: 'utilisateur@email.com' },
  { name: 'phone', label: 'Téléphone', type: 'tel' as const, placeholder: '+243 XXX XXX XXX' },
  { name: 'address', label: 'Adresse', type: 'text' as const, placeholder: 'Ville, Quartier' },
  { name: 'role', label: 'Rôle', type: 'select' as const, required: true, options: roleOptions },
  { name: 'status', label: 'Statut', type: 'select' as const, required: true, options: statusOptions }
]

// Methods
const openCreateModal = () => {
  console.log('Opening create modal')
  modalMode.value = 'create'
  selectedUser.value = undefined
  isModalOpen.value = true
}

const openEditModal = (user: User) => {
  console.log('Opening edit modal for user:', user)
  modalMode.value = 'edit'
  selectedUser.value = { ...user }
  isModalOpen.value = true
}

const viewUser = (user: User) => {
  console.log('View user:', user)
}

const closeModal = () => {
  isModalOpen.value = false
  selectedUser.value = undefined
}

const confirmDelete = (user: User) => {
  userToDelete.value = user
  isDeleteModalOpen.value = true
}

const closeDeleteModal = () => {
  isDeleteModalOpen.value = false
  userToDelete.value = null
}

const handleSubmit = async (data: Record<string, any>) => {
  console.log('Form submitted with data:', data)
  isSubmitting.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (modalMode.value === 'create') {
      const newUser: User = {
        id: Date.now(),
        name: data.name || '',
        email: data.email || '',
        role: data.role || 'client',
        status: data.status || 'active',
        lastLogin: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        phone: data.phone,
        address: data.address
      }
      users.value.push(newUser)
      console.log('User created successfully:', newUser)
    } else {
      const index = users.value.findIndex(u => u.id === selectedUser.value?.id)
      if (index !== -1) {
        users.value[index] = { ...users.value[index], ...data }
        console.log('User updated successfully:', users.value[index])
      }
    }
    
    closeModal()
  } catch (error) {
    console.error('Error saving user:', error)
  } finally {
    isSubmitting.value = false
  }
}

const handleDelete = async () => {
  if (!userToDelete.value) return
  
  isDeleting.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const index = users.value.findIndex(u => u.id === userToDelete.value!.id)
    if (index !== -1) {
      users.value.splice(index, 1)
      console.log('User deleted:', userToDelete.value)
    }
    
    closeDeleteModal()
  } catch (error) {
    console.error('Error deleting user:', error)
  } finally {
    isDeleting.value = false
  }
}

const refreshData = () => {
  console.log('Refreshing users data...')
}

const exportUsers = () => {
  console.log('Exporting users data...')
  const csvContent = [
    ['Nom', 'Email', 'Rôle', 'Statut', 'Téléphone', 'Adresse'],
    ...users.value.map(user => [
      user.name,
      user.email,
      user.role,
      user.status,
      user.phone || '',
      user.address || ''
    ])
  ].map(row => row.join(',')).join('\n')
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.setAttribute('href', url)
  link.setAttribute('download', 'users.csv')
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  console.log('Users exported successfully')
}
</script>
