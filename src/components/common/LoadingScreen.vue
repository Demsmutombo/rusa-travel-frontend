<template>
  <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-white">
    <!-- Logo seul -->
    <div class="relative">
      <img 
        src="/images/logo/auth-logo (2).png" 
        alt="Rusa Travel" 
        class="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain"
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
