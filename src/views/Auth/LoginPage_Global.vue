<template>
  <div class="min-h-screen bg-white flex items-center justify-center px-4">
    <div class="max-w-md w-full">
      <!-- Logo -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Rusa Travel</h1>
        <p class="mt-2 text-sm text-gray-600">Documentation Global State</p>
      </div>

      <!-- Documentation Button -->
      <div class="bg-white py-8 px-6 shadow-lg rounded-lg border border-gray-200">
        <button
          @click="handleToggle"
          class="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          {{ isDocVisible ? 'Masquer' : 'Voir' }} la Documentation
        </button>
        
        <!-- Debug Info -->
        <div class="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <p class="text-yellow-800 text-sm">
            <strong>Debug:</strong> isDocVisible = {{ isDocVisible }}
          </p>
        </div>
      </div>

      <!-- Documentation Section -->
      <div v-show="isDocVisible" class="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
        <div class="bg-white rounded-lg p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">🎉 Documentation Affichée !</h2>
          <p class="text-gray-600 mb-4">
            Le bouton fonctionne parfaitement ! La documentation s'affiche quand vous cliquez dessus.
          </p>
          
          <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
            <p class="text-green-800">
              <strong>Succès :</strong> Le bouton "Voir la Documentation" fonctionne avec état global !
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-blue-50 rounded-lg p-4">
              <h3 class="font-semibold text-blue-900 mb-2">🚀 Démarrage Rapide</h3>
              <p class="text-blue-800 text-sm">Utilisez admin@rusatravel.com pour l'espace admin.</p>
            </div>
            <div class="bg-purple-50 rounded-lg p-4">
              <h3 class="font-semibold text-purple-900 mb-2">👥 Rôles</h3>
              <p class="text-purple-800 text-sm">Admin, Manager, Client, Transporteur, Staff.</p>
            </div>
          </div>
          
          <button
            @click="hideDocumentation"
            class="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Fermer la Documentation
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// État global partagé entre toutes les instances
const globalState = {
  isDocVisible: false
}

export default {
  name: 'LoginPageGlobal',
  data() {
    return {
      isDocVisible: globalState.isDocVisible
    }
  },
  methods: {
    handleToggle() {
      // Forcer la mise à jour de l'état global
      globalState.isDocVisible = !globalState.isDocVisible
      this.isDocVisible = globalState.isDocVisible
      
      // Forcer la réactivité Vue
      this.$forceUpdate()
      
      console.log('Documentation togglée (global):', this.isDocVisible)
      
      // Alternative: manipuler directement le DOM
      if (this.isDocVisible) {
        this.showDocumentationSection()
      } else {
        this.hideDocumentationSection()
      }
    },
    hideDocumentation() {
      globalState.isDocVisible = false
      this.isDocVisible = false
      this.$forceUpdate()
      this.hideDocumentationSection()
    },
    showDocumentationSection() {
      // Manipulation DOM directe comme fallback
      const docSection = document.querySelector('.mt-8.bg-gradient-to-br')
      if (docSection) {
        docSection.style.display = 'block'
      }
    },
    hideDocumentationSection() {
      // Manipulation DOM directe comme fallback
      const docSection = document.querySelector('.mt-8.bg-gradient-to-br')
      if (docSection) {
        docSection.style.display = 'none'
      }
    }
  },
  mounted() {
    console.log('LoginPage_Global monté - État global')
    // S'assurer que l'état initial est correct
    this.isDocVisible = globalState.isDocVisible
  },
  updated() {
    console.log('LoginPage_Global mis à jour - isDocVisible:', this.isDocVisible)
  }
}
</script>
