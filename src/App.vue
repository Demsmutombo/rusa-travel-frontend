<template>
  <ThemeProvider>
    <div>
      <!-- Loading Screen pour le démarrage -->
      <LoadingScreen 
        :is-loading="loadingStore.isLoading"
        :loading-text="loadingStore.loadingText"
        :loading-subtext="loadingStore.loadingSubtext"
      />
      
      <!-- Main App Content -->
      <RouterView />
    </div>
  </ThemeProvider>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ThemeProvider from '@/components/layout/ThemeProvider.vue'
import LoadingScreen from '@/components/common/LoadingScreen.vue'
import { useLoadingStore } from '@/stores/loading'

const router = useRouter()
const loadingStore = useLoadingStore()

onMounted(() => {
  console.log('Application Rusa Travel initialisée')
  
  // Vérifier si c'est le premier chargement
  const hasVisited = sessionStorage.getItem('rusa-travel-visited')
  
  if (!hasVisited) {
    // Premier chargement - afficher le splash screen
    sessionStorage.setItem('rusa-travel-visited', 'true')
    router.push('/splash')
  } else {
    // Pas le premier chargement - aller directement à l'accueil
    router.push('/')
  }
  
  // Afficher l'écran de chargement
  loadingStore.initializeApp()
})
</script>
