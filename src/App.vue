<template>
  <ThemeProvider>
    <div>
      <!-- Global Loading Screen -->
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
import ThemeProvider from '@/components/layout/ThemeProvider.vue'
import LoadingScreen from '@/components/common/LoadingScreen.vue'
import { useLoadingStore } from '@/stores/loading'

const loadingStore = useLoadingStore()

onMounted(() => {
  console.log('Application Rusa Travel initialisée')
  
  // Utiliser sessionStorage pour détecter les actualisations
  const hasVisited = sessionStorage.getItem('rusa-travel-visited')
  
  if (!hasVisited) {
    // Premier chargement de l'application
    loadingStore.initializeApp()
    sessionStorage.setItem('rusa-travel-visited', 'true')
  } else {
    // Actualisation de page
    loadingStore.showPageRefreshLoading()
  }
})

// Écouter les événements de navigation pour les actualisations
window.addEventListener('beforeunload', () => {
  // Le loading s'affichera au prochain chargement
})
</script>
