import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoadingStore = defineStore('loading', () => {
  // State
  const isLoading = ref(false)
  const loadingText = ref('Chargement...')
  const loadingSubtext = ref('Veuillez patienter')
  const loadingProgress = ref(0)

  // Actions
  const showLoading = (text?: string, subtext?: string) => {
    isLoading.value = true
    if (text) loadingText.value = text
    if (subtext) loadingSubtext.value = subtext
    loadingProgress.value = 0
  }

  const hideLoading = () => {
    isLoading.value = false
    loadingProgress.value = 100
  }

  const updateProgress = (progress: number) => {
    loadingProgress.value = Math.min(100, Math.max(0, progress))
  }

  const setProgress = (progress: number, text?: string) => {
    updateProgress(progress)
    if (text) loadingText.value = text
  }

  // Initial loading on app start
  const initializeApp = () => {
    showLoading('Initialisation de Rusa Travel', 'Chargement des composants...')
    
    // Simulate loading steps
    setTimeout(() => {
      setProgress(25, 'Chargement des données...')
    }, 500)
    
    setTimeout(() => {
      setProgress(50, 'Configuration du système...')
    }, 1000)
    
    setTimeout(() => {
      setProgress(75, 'Préparation de l\'interface...')
    }, 1500)
    
    setTimeout(() => {
      setProgress(100, 'Prêt!')
      setTimeout(() => {
        hideLoading()
      }, 300)
    }, 2500)
  }

  // Loading on page refresh
  const showPageRefreshLoading = () => {
    showLoading('Rusa Travel', 'Actualisation de la page...')
    
    // Simulate quick loading for refresh
    setTimeout(() => {
      setProgress(33, 'Mise à jour des données...')
    }, 300)
    
    setTimeout(() => {
      setProgress(66, 'Chargement de l\'interface...')
    }, 600)
    
    setTimeout(() => {
      setProgress(100, 'Terminé!')
      setTimeout(() => {
        hideLoading()
      }, 200)
    }, 900)
  }

  return {
    // State
    isLoading,
    loadingText,
    loadingSubtext,
    loadingProgress,
    
    // Actions
    showLoading,
    hideLoading,
    updateProgress,
    setProgress,
    initializeApp,
    showPageRefreshLoading
  }
})
