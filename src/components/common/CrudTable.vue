<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200">
    <!-- Header -->
    <div class="px-4 sm:px-6 py-4 border-b border-gray-200">
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        <h2 class="text-lg font-semibold text-gray-900">{{ title }}</h2>
        <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <button
            @click="$emit('export')"
            class="px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto"
          >
            Exporter
          </button>
          <button
            @click="$emit('refresh')"
            class="px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto"
          >
            Actualiser
          </button>
          <button
            @click="$emit('create')"
            class="px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>

    <!-- Search and Filters -->
    <div class="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gray-50">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher..."
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          v-model="statusFilter"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Tous les statuts</option>
          <option v-for="status in statusOptions" :key="status.value" :value="status.value">
            {{ status.label }}
          </option>
        </select>
        <select
          v-if="filterOptions"
          v-model="additionalFilter"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Tous</option>
          <option v-for="option in filterOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              v-for="column in columns"
              :key="column.key"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {{ column.label }}
            </th>
            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-if="filteredData.length === 0">
            <td :colspan="columns.length + 1" class="px-6 py-12 text-center text-gray-500">
              <div class="flex flex-col items-center">
                <svg class="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p>Aucune donnée trouvée</p>
                <p class="text-sm text-gray-400 mt-1">Commencez par ajouter un nouvel élément</p>
              </div>
            </td>
          </tr>
          <tr v-for="item in paginatedData" :key="item.id" class="hover:bg-gray-50">
            <td
              v-for="column in columns"
              :key="column.key"
              class="px-6 py-4 whitespace-nowrap"
            >
              <!-- Custom cell rendering -->
              <slot
                :name="`cell-${column.key}`"
                :item="item"
                :column="column"
              >
                <!-- Default rendering -->
                <span v-if="column.type === 'status'" :class="getStatusClass(item[column.key])">
                  {{ getStatusLabel(item[column.key]) }}
                </span>
                <span v-else-if="column.type === 'currency'" class="font-medium">
                  {{ formatCurrency(item[column.key]) }}
                </span>
                <span v-else-if="column.type === 'date'" class="text-sm text-gray-900">
                  {{ formatDate(item[column.key]) }}
                </span>
                <span v-else class="text-sm text-gray-900">
                  {{ item[column.key] }}
                </span>
              </slot>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <div class="flex justify-end space-x-2">
                <button
                  @click="$emit('view', item)"
                  class="text-blue-600 hover:text-blue-900"
                >
                  Voir
                </button>
                <button
                  @click="$emit('edit', item)"
                  class="text-green-600 hover:text-green-900"
                >
                  Modifier
                </button>
                <button
                  @click="$emit('delete', item)"
                  class="text-red-600 hover:text-red-900"
                >
                  Supprimer
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="px-6 py-4 border-t border-gray-200">
      <div class="flex items-center justify-between">
        <div class="text-sm text-gray-700">
          Affichage de {{ startIndex + 1 }} à {{ endIndex }} sur {{ filteredData.length }} résultats
        </div>
        <div class="flex space-x-2">
          <button
            @click="previousPage"
            :disabled="currentPage === 1"
            class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
          >
            Précédent
          </button>
          <span class="px-3 py-1 text-sm">
            Page {{ currentPage }} sur {{ totalPages }}
          </span>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface Column {
  key: string
  label: string
  type?: 'text' | 'status' | 'currency' | 'date'
}

interface StatusOption {
  value: string
  label: string
}

interface Props {
  title: string
  columns: Column[]
  data: any[]
  statusOptions?: StatusOption[]
  filterOptions?: StatusOption[]
  itemsPerPage?: number
}

interface Emits {
  (e: 'export'): void
  (e: 'create'): void
  (e: 'view', item: any): void
  (e: 'edit', item: any): void
  (e: 'delete', item: any): void
  (e: 'refresh'): void
}

const props = withDefaults(defineProps<Props>(), {
  itemsPerPage: 10
})

const emit = defineEmits<Emits>()

// Reactive data
const searchQuery = ref('')
const statusFilter = ref('')
const additionalFilter = ref('')
const currentPage = ref(1)

// Computed properties
const filteredData = computed(() => {
  let filtered = props.data

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(item => {
      // Search in all relevant fields
      const searchableFields = ['name', 'email', 'phone', 'address', 'role', 'status']
      return searchableFields.some(field => {
        const value = item[field]
        return value && value.toString().toLowerCase().includes(query)
      })
    })
  }

  // Status filter
  if (statusFilter.value) {
    filtered = filtered.filter(item => item.status === statusFilter.value)
  }

  // Additional filter
  if (additionalFilter.value && props.filterOptions) {
    filtered = filtered.filter(item => item.role === additionalFilter.value)
  }

  return filtered
})

const totalPages = computed(() => Math.ceil(filteredData.value.length / props.itemsPerPage))
const startIndex = computed(() => (currentPage.value - 1) * props.itemsPerPage)
const endIndex = computed(() => Math.min(startIndex.value + props.itemsPerPage, filteredData.value.length))
const paginatedData = computed(() => {
  return filteredData.value.slice(startIndex.value, endIndex.value)
})

// Watch for filter changes to reset pagination
watch([searchQuery, statusFilter, additionalFilter], () => {
  currentPage.value = 1
})

// Methods
const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const getStatusClass = (status: string) => {
  const classes = {
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-red-100 text-red-800',
    pending: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
    suspended: 'bg-gray-100 text-gray-800'
  }
  return classes[status as keyof typeof classes] || 'bg-gray-100 text-gray-800'
}

const getStatusLabel = (status: string) => {
  const labels = {
    active: 'Actif',
    inactive: 'Inactif',
    pending: 'En attente',
    approved: 'Approuvé',
    rejected: 'Rejeté',
    suspended: 'Suspendu'
  }
  return labels[status as keyof typeof labels] || status
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'CDF'
  }).format(amount)
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('fr-FR')
}
</script>
