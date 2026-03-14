<template>
  <teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <!-- Header -->
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
          <button @click="close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Dynamic form fields based on entity type -->
            <template v-for="field in formFields" :key="field.name">
              <div :class="field.fullWidth ? 'md:col-span-2' : ''">
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  {{ field.label }}
                  <span v-if="field.required" class="text-red-500">*</span>
                </label>
                
                <!-- Input field -->
                <input
                  v-if="field.type === 'text' || field.type === 'email' || field.type === 'tel' || field.type === 'number'"
                  v-model="formData[field.name]"
                  :type="field.type"
                  :placeholder="field.placeholder"
                  :required="field.required"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <!-- Select field -->
                <select
                  v-else-if="field.type === 'select'"
                  v-model="formData[field.name]"
                  :required="field.required"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Sélectionner...</option>
                  <option v-for="option in field.options" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>
                
                <!-- Textarea field -->
                <textarea
                  v-else-if="field.type === 'textarea'"
                  v-model="formData[field.name]"
                  :placeholder="field.placeholder"
                  :required="field.required"
                  rows="3"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </template>
          </div>

          <!-- Actions -->
          <div class="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              @click="close"
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <span v-if="isSubmitting">Enregistrement...</span>
              <span v-else>{{ submitText }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'number' | 'select' | 'textarea'
  placeholder?: string
  required?: boolean
  fullWidth?: boolean
  options?: Array<{ value: string; label: string }>
}

interface Props {
  isOpen: boolean
  title: string
  submitText: string
  formFields: FormField[]
  initialData?: Record<string, any> | undefined
  isSubmitting?: boolean
}

interface Emits {
  (e: 'close'): void
  (e: 'submit', data: Record<string, any>): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// Form data
const formData = ref<Record<string, any>>({})

// Initialize form data when modal opens or initial data changes
watch([() => props.isOpen, () => props.initialData], () => {
  if (props.isOpen) {
    // Reset form
    formData.value = {}
    
    // Set initial data if provided
    if (props.initialData) {
      Object.assign(formData.value, props.initialData)
    }
    
    // Set default values for required fields
    props.formFields.forEach(field => {
      if (!formData.value[field.name] && field.type === 'select') {
        formData.value[field.name] = ''
      }
    })
  }
})

const handleSubmit = () => {
  emit('submit', { ...formData.value })
}

const close = () => {
  emit('close')
}
</script>
