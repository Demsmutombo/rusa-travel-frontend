<template>
  <ThemeProvider>
    <div>
      <!-- Loading Screen simple -->
      <LoadingScreen 
        :is-loading="isLoading"
        loading-text="Rusa Travel"
        loading-subtext="Chargement..."
      />
      
      <!-- Main App Content -->
      <RouterView />
    </div>
  </ThemeProvider>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ThemeProvider from '@/components/layout/ThemeProvider.vue'
import LoadingScreen from '@/components/common/LoadingScreen.vue'

const router = useRouter()
const isLoading = ref(true)

onMounted(() => {
  // Logo simple pendant 2 secondes puis redirection vers l'accueil
  setTimeout(() => {
    isLoading.value = false
    router.push('/')
  }, 2000)
})
</script>
