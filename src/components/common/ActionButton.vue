<template>
  <div>
    <!-- Bouton d'action -->
    <button
      @click="openModal"
      :class="[
        'px-4 py-2 rounded-lg font-medium transition-all duration-200',
        variant === 'primary' 
          ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md' 
          : variant === 'secondary'
          ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          : variant === 'success'
          ? 'bg-green-600 text-white hover:bg-green-700 shadow-sm hover:shadow-md'
          : variant === 'danger'
          ? 'bg-red-600 text-white hover:bg-red-700 shadow-sm hover:shadow-md'
          : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md'
      ]"
      :disabled="disabled"
    >
      <div class="flex items-center space-x-2">
        <svg
          v-if="icon"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icon" />
        </svg>
        <span>{{ text }}</span>
      </div>
    </button>

    <!-- Modal -->
    <BaseModal
      :is-open="isModalOpen"
      :title="modalTitle"
      :type="modalType"
      :form-fields="formFields"
      :info-data="infoData"
      :message="modalMessage"
      @close="closeModal"
      @submit="handleSubmit"
    >
      <template v-if="modalType === 'custom'" #content>
        <slot name="modal-content"></slot>
      </template>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseModal from './BaseModal.vue'

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
  text: string
  icon?: string
  variant?: 'primary' | 'secondary' | 'success' | 'danger'
  disabled?: boolean
  modalType?: 'form' | 'info' | 'custom'
  modalTitle?: string
  modalMessage?: string
  formFields?: FormField[]
  infoData?: Record<string, unknown>
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  modalType: 'form',
  modalTitle: 'Action',
  modalMessage: ''
})

const emit = defineEmits<{
  action: [data: Record<string, unknown>]
}>()

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const handleSubmit = (data: Record<string, unknown>) => {
  emit('action', data)
}
</script>
