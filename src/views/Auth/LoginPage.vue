<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
    </div>

    <!-- Documentation Container -->
    <div class="relative z-10 w-full max-w-4xl mx-4">
      <!-- Title Section -->
      <div class="text-center mb-8">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">
          Rusa Travel
        </h1>
        <p class="text-blue-100 text-xl">
          Plateforme de Transport Complète
        </p>
      </div>

      <!-- Documentation Card -->
      <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <!-- Header -->
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">
            Documentation de la Plateforme
          </h2>
          <p class="text-gray-600">
            Guide complet pour utiliser Rusa Travel
          </p>
        </div>

        <!-- Demo Instructions -->
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div class="flex items-center mb-3">
            <svg class="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-lg font-semibold text-blue-900">Mode Démonstration</h3>
          </div>
          <p class="text-blue-800 mb-4">
            <strong>Utilisez n'importe quel email et mot de passe pour vous connecter.</strong>
          </p>
          
          <!-- Debug Info -->
          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <p class="text-yellow-800 text-sm">
              <strong>Debug:</strong> showDoc = {{ showDoc }}
            </p>
          </div>
          
          <!-- Documentation Button -->
          <div class="flex justify-center">
            <button
              onclick="this.nextElementSibling.nextElementSibling.style.display = this.nextElementSibling.nextElementSibling.style.display === 'none' ? 'block' : 'none'; this.nextElementSibling.querySelector('strong').textContent = this.nextElementSibling.nextElementSibling.style.display === 'none' ? 'Debug: showDoc = false' : 'Debug: showDoc = true';"
              class="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Voir la Documentation
            </button>
          </div>
          
          <!-- Role Examples -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white rounded-lg p-4">
              <h4 class="font-semibold text-gray-900 mb-2">👤 Rôles Disponibles</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li><strong>Admin</strong> : admin@rusatravel.com</li>
                <li><strong>Manager</strong> : manager@rusatravel.com</li>
                <li><strong>Client</strong> : client@rusatravel.com</li>
                <li><strong>Transporteur</strong> : carrier@rusatravel.com</li>
                <li><strong>Staff</strong> : staff@rusatravel.com</li>
              </ul>
            </div>
            <div class="bg-white rounded-lg p-4">
              <h4 class="font-semibold text-gray-900 mb-2">🔐 Mot de Passe</h4>
              <p class="text-sm text-gray-600">
                Utilisez n'importe quel mot de passe (ex: "demo", "123456", "password")
              </p>
            </div>
          </div>
        </div>

        <!-- Platform Features -->
        <div class="mb-8 platform-features">
          <h3 class="text-xl font-bold text-gray-900 mb-6">🚀 Fonctionnalités de la Plateforme</h3>
          
          <!-- Admin Features -->
          <div class="mb-6">
            <h4 class="font-semibold text-gray-900 mb-3 flex items-center">
              <span class="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">A</span>
              Administration
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 ml-11">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Gestion des utilisateurs et rôles
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Tableau de bord complet
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Statistiques et rapports
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Gestion système
              </div>
            </div>
          </div>

          <!-- Manager Features -->
          <div class="mb-6">
            <h4 class="font-semibold text-gray-900 mb-3 flex items-center">
              <span class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">M</span>
              Management
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 ml-11">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Gestion des bus et flotte
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Planification des trajets
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Gestion des réservations
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Suivi des passagers
              </div>
            </div>
          </div>

          <!-- Client Features -->
          <div class="mb-6">
            <h4 class="font-semibold text-gray-900 mb-3 flex items-center">
              <span class="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">C</span>
              Espace Client
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 ml-11">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Recherche de trajets
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Réservation en ligne
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Gestion des billets
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Historique des voyages
              </div>
            </div>
          </div>

          <!-- Carrier Features -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-3 flex items-center">
              <span class="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">T</span>
              Transporteur
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 ml-11">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Gestion des courses
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Suivi des trajets
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Validation des billets
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Rapports de revenus
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Start -->
        <div class="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <h3 class="text-lg font-semibold text-green-900 mb-3 flex items-center">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Démarrage Rapide
          </h3>
          <div class="text-green-800 space-y-2">
            <p>1. Choisissez votre rôle en utilisant l'email approprié</p>
            <p>2. Entrez n'importe quel mot de passe</p>
            <p>3. Cliquez sur "Se connecter"</p>
            <p>4. Accédez à votre espace personnalisé avec toutes les fonctionnalités</p>
          </div>
        </div>

        <!-- Login Button -->
        <div class="text-center">
          <button
            @click="goToLogin"
            class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center mx-auto"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Accéder à la Connexion
          </button>
          <p class="text-sm text-gray-500 mt-3">
            Ou cliquez sur "Se connecter" en haut de la page
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Complete Documentation Section -->
  <div style="display: none;" class="complete-documentation bg-gradient-to-br from-gray-50 to-gray-100 py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Close Button -->
      <div class="text-right mb-8">
        <button
          onclick="this.parentElement.parentElement.parentElement.style.display = 'none'; document.querySelector('.bg-yellow-50 strong').textContent = 'Debug: showDoc = false';"
          class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center ml-auto"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Fermer la Documentation
        </button>
      </div>
      
      <!-- Simple Test Content -->
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Guide Complet de la Plateforme</h2>
        <p class="text-xl text-gray-600 mb-6">
          La documentation s'affiche correctement ! 🎉
        </p>
        
        <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
          <p class="text-green-800">
            <strong>Succès :</strong> Le bouton "Voir la Documentation" fonctionne parfaitement !
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-blue-50 rounded-lg p-4">
            <h3 class="font-semibold text-blue-900 mb-2">🚀 Démarrage Rapide</h3>
            <p class="text-blue-800">Utilisez admin@rusatravel.com pour accéder à l'espace administrateur.</p>
          </div>
          <div class="bg-purple-50 rounded-lg p-4">
            <h3 class="font-semibold text-purple-900 mb-2">👥 Rôles Disponibles</h3>
            <p class="text-purple-800">Admin, Manager, Client, Transporteur, Staff.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'LoginPage',
  setup() {
    const router = useRouter()
    return {
      router
    }
  },
  data() {
    return {
      showDoc: false
    }
  },
  methods: {
    goToLogin() {
      this.router.push('/')
    },
    showDocumentation() {
      this.showDoc = true
      console.log('Documentation affichée:', this.showDoc)
    },
    hideDocumentation() {
      this.showDoc = false
      console.log('Documentation masquée:', this.showDoc)
    }
  }
}
</script>
