<template>
  <Teleport to="body">
    <div
      v-show="isOpen"
      class="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <!-- Background overlay -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        @click="closeModal"
      ></div>

      <!-- Modal panel -->
      <div class="flex min-h-screen items-center justify-center p-4">
        <div
          class="relative bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-hidden transform transition-all"
          :class="[
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          ]"
        >
          <!-- Header -->
          <div class="bg-white px-6 py-4 border-b border-gray-200">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold text-gray-900" id="modal-title">
                {{ title }}
              </h3>
              <button
                @click="closeModal"
                class="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Body -->
          <div class="px-6 py-4 max-h-[60vh] overflow-y-auto">
            <!-- Form Modal -->
            <form v-if="type === 'form'" @submit.prevent="handleSubmit">
              <div class="space-y-4">
                <div v-for="field in props.formFields" :key="field.name" class="space-y-2">
                  <label :for="field.name" class="block text-sm font-medium text-gray-700">
                    {{ field.label }}
                    <span v-if="field.required" class="text-red-500">*</span>
                  </label>
                  
                  <!-- Input types -->
                  <input
                    v-if="field.type === 'text' || field.type === 'email' || field.type === 'tel' || field.type === 'number'"
                    :type="field.type"
                    :id="field.name"
                    v-model="formData[field.name]"
                    :placeholder="field.placeholder"
                    :required="field.required"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                  
                  <select
                    v-else-if="field.type === 'select'"
                    :id="field.name"
                    v-model="formData[field.name]"
                    :required="field.required"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">{{ field.placeholder }}</option>
                    <option v-for="option in field.options" :key="option.value" :value="option.value">
                      {{ option.label }}
                    </option>
                  </select>
                  
                  <textarea
                    v-else-if="field.type === 'textarea'"
                    :id="field.name"
                    v-model="formData[field.name]"
                    :placeholder="field.placeholder"
                    :required="field.required"
                    :rows="field.rows || 3"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                  
                  <div v-else-if="field.type === 'checkbox'" class="flex items-center">
                    <input
                      :id="field.name"
                      v-model="formData[field.name]"
                      type="checkbox"
                      class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    >
                    <label :for="field.name" class="ml-2 text-sm text-gray-700">
                      {{ field.label }}
                    </label>
                  </div>
                </div>
              </div>
            </form>

            <!-- Info Modal -->
            <div v-else-if="type === 'info'" class="space-y-4">
              <div v-if="infoData" class="space-y-3">
                <div v-for="(value, key) in infoData" :key="key" class="flex justify-between py-2 border-b border-gray-100">
                  <span class="text-sm font-medium text-gray-600">{{ formatKey(key) }}</span>
                  <span class="text-sm text-gray-900">{{ formatValue(value) }}</span>
                </div>
              </div>
              <div v-else class="text-gray-500">
                {{ message || 'Aucune information disponible' }}
              </div>
            </div>

            <!-- Custom Content Modal -->
            <div v-else-if="type === 'custom'">
              <slot name="content"></slot>
            </div>
          </div>

          <!-- Footer -->
          <div class="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div class="flex justify-end space-x-3">
              <button
                v-if="showCancelButton"
                @click="closeModal"
                class="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                {{ cancelText }}
              </button>
              <button
                v-if="type === 'form'"
                @click="handleSubmit"
                :disabled="isSubmitting"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isSubmitting">En cours...</span>
                <span v-else>{{ submitText }}</span>
              </button>
              <button
                v-else-if="type === 'info'"
                @click="closeModal"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {{ confirmText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'number' | 'select' | 'textarea' | 'checkbox'
  placeholder?: string
  required?: boolean
  options?: Array<{ value: string; label: string }>
  rows?: number
}

interface Props {
  isOpen: boolean
  title: string
  type?: 'form' | 'info' | 'custom'
  formFields?: FormField[]
  infoData?: Record<string, unknown>
  message?: string
  submitText?: string
  cancelText?: string
  confirmText?: string
  showCancelButton?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'form',
  submitText: 'Valider',
  cancelText: 'Annuler',
  confirmText: 'OK',
  showCancelButton: true
})

const emit = defineEmits<{
  close: []
  submit: [data: Record<string, unknown>]
}>()

const isSubmitting = ref(false)
// Form data : typé en any pour rester flexible selon le champ (input, select, textarea, checkbox)
const formData = reactive<Record<string, any>>({})

// Initialize form data when form fields change
watch(() => props.formFields, (fields) => {
  if (fields && props.type === 'form') {
    fields.forEach(field => {
      if (!(field.name in formData)) {
        formData[field.name] = field.type === 'checkbox' ? false : ''
      }
    })
  }
}, { immediate: true })

const closeModal = () => {
  emit('close')
  // Reset form data
  if (props.type === 'form') {
    Object.keys(formData).forEach(key => {
      const field = props.formFields?.find(f => f.name === key)
      formData[key] = field?.type === 'checkbox' ? false : ''
    })
  }
}

const handleSubmit = async () => {
  if (props.type !== 'form') return
  
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    emit('submit', { ...formData })
    closeModal()
  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}

const formatKey = (key: string): string => {
  return key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')
}

const formatValue = (value: unknown): string => {
  if (typeof value === 'boolean') {
    return value ? 'Oui' : 'Non'
  }
  if (typeof value === 'number' && value > 1000) {
    return new Intl.NumberFormat('fr-FR').format(value)
  }
  return String(value)
}
</script>
