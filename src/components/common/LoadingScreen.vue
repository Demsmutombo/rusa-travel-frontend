<template>
  <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-white">
    <!-- Logo seul -->
    <div class="relative">
      <img 
        src="/images/logo/auth-logo (2).png" 
        alt="Rusa Travel" 
        class="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'LoadingScreen'
})

interface Props {
  isLoading: boolean
}

const { isLoading } = defineProps<Props>()
</script>
