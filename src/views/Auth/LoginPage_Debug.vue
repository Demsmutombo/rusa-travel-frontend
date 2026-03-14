<template>
  <div class="min-h-screen bg-white flex items-center justify-center px-4">
    <div class="max-w-md w-full">
      <!-- Logo -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Rusa Travel</h1>
        <p class="mt-2 text-sm text-gray-600">Debug Documentation</p>
      </div>

      <!-- Test 1: HTML Simple -->
      <div class="bg-white py-8 px-6 shadow-lg rounded-lg border border-gray-200 mb-4">
        <h3 class="text-lg font-semibold mb-4">Test 1: HTML Simple</h3>
        <button onclick="alert('Test 1 fonctionne!')" class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Test 1: Alert Simple
        </button>
      </div>

      <!-- Test 2: Toggle avec Style -->
      <div class="bg-white py-8 px-6 shadow-lg rounded-lg border border-gray-200 mb-4">
        <h3 class="text-lg font-semibold mb-4">Test 2: Toggle Style</h3>
        <button onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none';" class="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Test 2: Toggle Section
        </button>
        <div style="display: none;" class="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
          <p class="text-green-800">Section affichée ! 🎉</p>
        </div>
      </div>

      <!-- Test 3: Variable Globale -->
      <div class="bg-white py-8 px-6 shadow-lg rounded-lg border border-gray-200 mb-4">
        <h3 class="text-lg font-semibold mb-4">Test 3: Variable Globale</h3>
        <button onclick="window.testVar = (window.testVar || 0) + 1; this.nextElementSibling.textContent = 'Compteur: ' + window.testVar;" class="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
          Test 3: Compteur
        </button>
        <div class="mt-4 bg-purple-50 border border-purple-200 rounded-lg p-4">
          <p class="text-purple-800">Compteur: 0</p>
        </div>
      </div>

      <!-- Test 4: Documentation Complete -->
      <div class="bg-white py-8 px-6 shadow-lg rounded-lg border border-gray-200">
        <h3 class="text-lg font-semibold mb-4">Test 4: Documentation Complete</h3>
        <button onclick="window.docVisible = !window.docVisible; document.getElementById('doc-section').style.display = window.docVisible ? 'block' : 'none'; document.getElementById('debug-text').textContent = 'Debug: Documentation ' + (window.docVisible ? 'Visible' : 'Cachée');" class="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Voir la Documentation
        </button>
        
        <div class="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <p id="debug-text" class="text-yellow-800 text-sm">
            <strong>Debug: Documentation Cachée</strong>
          </p>
        </div>
      </div>

      <!-- Documentation Section -->
      <div id="doc-section" style="display: none;" class="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
        <div class="bg-white rounded-lg p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">🎉 Documentation Affichée !</h2>
          <p class="text-gray-600 mb-4">
            Le bouton fonctionne parfaitement ! La documentation s'affiche quand vous cliquez dessus.
          </p>
          
          <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
            <p class="text-green-800">
              <strong>Succès :</strong> Le bouton "Voir la Documentation" fonctionne avec JavaScript pur !
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
            onclick="window.docVisible = false; document.getElementById('doc-section').style.display = 'none'; document.getElementById('debug-text').textContent = 'Debug: Documentation Cachée';"
            class="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Fermer la Documentation
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
console.log('LoginPage_Debug chargé - Tests multiples')

// Initialiser les variables globales de manière sécurisée
if (typeof window !== 'undefined') {
  (window as any).testVar = 0
  (window as any).docVisible = false
}

// Pas de code supplémentaire pour éviter les erreurs
</script>
