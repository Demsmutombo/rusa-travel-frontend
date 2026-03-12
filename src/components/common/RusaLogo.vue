<template>
  <div 
    :class="[
      'flex items-center justify-center overflow-hidden',
      sizeClasses[size],
      roundedClass,
      customClass
    ]"
    :style="customStyle"
  >
    <img 
      src="/images/logo/auth-logo (2).png" 
      alt="Rusa Travel" 
      class="w-full h-full object-contain"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'RusaLogo'
})

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  rounded?: boolean
  customClass?: string
  customStyle?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  rounded: false,
  customClass: '',
  customStyle: ''
})

const sizeClasses = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
  '2xl': 'w-20 h-20',
  '3xl': 'w-24 h-24'
}

const roundedClass = computed(() => {
  if (!props.rounded) return ''
  return props.size === 'xs' || props.size === 'sm' ? 'rounded' : 'rounded-lg'
})
</script>
