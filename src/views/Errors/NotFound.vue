<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 text-center">
      <div>
        <div class="mx-auto h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center">
          <svg class="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Rusa Travel - Page non trouvée</h2>
        <p class="mt-2 text-sm text-gray-600">
          La page Rusa Travel que vous recherchez n'existe pas ou a été déplacée.
        </p>
      </div>
      
      <div class="space-y-4">
        <p class="text-6xl font-bold text-gray-300">404</p>
        
        <div class="space-y-3">
          <router-link
            to="/"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Retour à l'accueil
          </router-link>
          
          <button
            @click="goBack"
            class="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Retour en arrière
          </button>
        </div>
      </div>
      
      <div class="text-sm text-gray-500">
        <p>Si vous pensez qu'il s'agit d'une erreur, veuillez contacter notre support.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const goBack = () => {
  window.history.back()
}

// Expose variables to template
defineExpose({
  goBack
})
</script>
