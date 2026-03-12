<template>
  <teleport to="body">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center"
      @click="closeModal"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      
      <!-- Modal Content -->
      <div 
        class="relative bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 class="text-xl font-semibold text-gray-900">{{ title }}</h3>
          <button 
            @click="closeModal"
            class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Body -->
        <div class="p-6">
          <!-- Form Modal -->
          <form v-if="type === 'form'" @submit.prevent="handleSubmit">
            <div class="space-y-4">
              <div v-for="field in fields" :key="field.name" class="space-y-2">
                <label :for="field.name" class="block text-sm font-medium text-gray-700">
                  {{ field.label }} <span v-if="field.required" class="text-red-500">*</span>
                </label>
                
                <!-- Input Text -->
                <input 
                  v-if="field.type === 'text' || field.type === 'email' || field.type === 'tel'"
                  :type="field.type"
                  :id="field.name"
                  :name="field.name"
                  v-model="formData[field.name]"
                  :required="field.required"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  :placeholder="`Entrez ${field.label.toLowerCase()}`"
                />
                
                <!-- Input Number -->
                <input 
                  v-else-if="field.type === 'number'"
                  type="number"
                  :id="field.name"
                  :name="field.name"
                  v-model="formData[field.name]"
                  :required="field.required"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  :placeholder="`Entrez ${field.label.toLowerCase()}`"
                />
                
                <!-- Select -->
                <select 
                  v-else-if="field.type === 'select'"
                  :id="field.name"
                  :name="field.name"
                  v-model="formData[field.name]"
                  :required="field.required"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez...</option>
                  <option v-for="option in field.options" :key="option" :value="option">
                    {{ option }}
                  </option>
                </select>
                
                <!-- Textarea -->
                <textarea 
                  v-else-if="field.type === 'textarea'"
                  :id="field.name"
                  :name="field.name"
                  v-model="formData[field.name]"
                  :required="field.required"
                  rows="4"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  :placeholder="`Entrez ${field.label.toLowerCase()}`"
                ></textarea>
                
                <!-- Checkbox -->
                <div v-else-if="field.type === 'checkbox'" class="flex items-center">
                  <input 
                    :id="field.name"
                    :name="field.name"
                    type="checkbox"
                    v-model="formData[field.name]"
                    :required="field.required"
                    class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label :for="field.name" class="ml-2 text-sm text-gray-700">{{ field.label }}</label>
                </div>
              </div>
            </div>
            
            <!-- Form Actions -->
            <div class="flex justify-end space-x-3 mt-6">
              <button 
                type="button"
                @click="closeModal"
                class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                Annuler
              </button>
              <button 
                type="submit"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                {{ submitText || 'Soumettre' }}
              </button>
            </div>
          </form>
          
          <!-- Info Modal -->
          <div v-else-if="type === 'info'">
            <div class="space-y-4">
              <div v-if="infoData && Object.keys(infoData).length > 0">
                <div v-for="(value, key) in infoData" :key="key" class="flex justify-between py-2 border-b border-gray-100">
                  <span class="text-sm font-medium text-gray-600">{{ formatKey(key) }}</span>
                  <span class="text-sm text-gray-900">{{ formatValue(value) }}</span>
                </div>
              </div>
              <div v-else class="text-center py-8">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p class="text-gray-600">{{ message || 'Aucune information disponible' }}</p>
              </div>
            </div>
            
            <!-- Info Actions -->
            <div class="flex justify-end mt-6">
              <button 
                @click="closeModal"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Fermer
              </button>
            </div>
          </div>
          
          <!-- Confirmation Modal -->
          <div v-else-if="type === 'confirm'">
            <div class="text-center py-6">
              <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <p class="text-gray-900 mb-6">{{ message || 'Êtes-vous sûr de vouloir continuer ?' }}</p>
            </div>
            
            <!-- Confirm Actions -->
            <div class="flex justify-center space-x-3">
              <button 
                @click="closeModal"
                class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                Annuler
              </button>
              <button 
                @click="handleConfirm"
                class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                {{ confirmText || 'Confirmer' }}
              </button>
            </div>
          </div>
          
          <!-- Success Modal -->
          <div v-else-if="type === 'success'">
            <div class="text-center py-6">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-gray-900 mb-6">{{ message || 'Opération réussie !' }}</p>
            </div>
            
            <!-- Success Actions -->
            <div class="flex justify-center">
              <button 
                @click="closeModal"
                class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

defineOptions({
  name: 'UniversalModal'
})

interface ModalField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'number' | 'select' | 'textarea' | 'checkbox'
  required?: boolean
  options?: string[]
}

interface Props {
  isOpen: boolean
  type: 'form' | 'info' | 'confirm' | 'success'
  title: string
  message?: string
  fields?: ModalField[]
  infoData?: Record<string, any>
  submitText?: string
  confirmText?: string
}

interface Emits {
  (e: 'close'): void
  (e: 'submit', data: Record<string, any>): void
  (e: 'confirm'): void
}

const props = withDefaults(defineProps<Props>(), {
  message: '',
  fields: () => [],
  infoData: () => ({}),
  submitText: 'Soumettre',
  confirmText: 'Confirmer'
})

const emit = defineEmits<Emits>()

// Form data
const formData = reactive<Record<string, any>>({})

// Initialize form data when fields change
watch(() => props.fields, (newFields) => {
  // Clear existing data
  Object.keys(formData).forEach(key => delete formData[key])
  
  // Initialize with field defaults
  newFields.forEach(field => {
    if (field.type === 'checkbox') {
      formData[field.name] = false
    } else {
      formData[field.name] = ''
    }
  })
}, { immediate: true })

const closeModal = () => {
  emit('close')
}

const handleSubmit = () => {
  emit('submit', { ...formData })
}

const handleConfirm = () => {
  emit('confirm')
}

const formatKey = (key: string): string => {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim()
}

const formatValue = (value: any): string => {
  if (typeof value === 'number') {
    return new Intl.NumberFormat('fr-FR').format(value)
  }
  if (typeof value === 'boolean') {
    return value ? 'Oui' : 'Non'
  }
  if (value instanceof Date) {
    return new Intl.DateTimeFormat('fr-FR').format(value)
  }
  return String(value)
}
</script>
