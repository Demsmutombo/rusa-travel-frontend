<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Client -->
    <div class="bg-white shadow-sm border-b">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <RusaLogo size="md" />
            <div>
              <h1 class="text-xl font-bold text-gray-900">Espace Client</h1>
              <p class="text-sm text-gray-600">Bienvenue, {{ authStore.currentUser?.name }}</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <router-link 
              to="/search" 
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Réserver un trajet
            </router-link>
            <button 
              @click="handleLogout"
              class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div class="lg:w-1/2 mb-8 lg:mb-0">
            <h2 class="text-3xl font-bold mb-4">
              Bonjour {{ authStore.currentUser?.name }} !
            </h2>
            <p class="text-lg text-blue-100 mb-6">
              Votre espace personnel pour gérer vos réservations et voyager en toute sécurité
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link
                to="/search"
                class="px-6 py-3 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-300 font-semibold transition shadow-lg"
              >
                <span class="flex items-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Nouvelle réservation</span>
                </span>
              </router-link>
              <router-link
                to="/client/my-tickets"
                class="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-semibold transition"
              >
                <span class="flex items-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Mes billets</span>
                </span>
              </router-link>
            </div>
          </div>
          <div class="lg:w-1/2 flex justify-center">
            <!-- Logo retiré -->
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Actions -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Actions Rapides</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Réserver</h4>
            <p class="text-sm text-gray-600 mb-4">Trouver et réserver vos prochains trajets</p>
            <router-link to="/search" class="text-blue-600 hover:text-blue-700 font-medium text-sm">
              Commencer →
            </router-link>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Mes billets</h4>
            <p class="text-sm text-gray-600 mb-4">Voir vos réservations actives</p>
            <router-link to="/client/my-tickets" class="text-blue-600 hover:text-blue-700 font-medium text-sm">
              Voir mes billets →
            </router-link>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Paiements</h4>
            <p class="text-sm text-gray-600 mb-4">Gérer vos méthodes de paiement</p>
            <router-link to="/client/profile" class="text-blue-600 hover:text-blue-700 font-medium text-sm">
              Gérer →
            </router-link>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Support</h4>
            <p class="text-sm text-gray-600 mb-4">Besoin d'aide ? Contactez-nous</p>
            <router-link to="/client/support" class="text-blue-600 hover:text-blue-700 font-medium text-sm">
              Contacter →
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Activity -->
    <section class="py-12 bg-gray-100">
      <div class="container mx-auto px-4">
        <h3 class="text-2xl font-bold text-gray-900 mb-8">Activité Récente</h3>
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="space-y-4">
            <div class="flex items-center justify-between py-3 border-b">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-900">Réservation confirmée</p>
                  <p class="text-sm text-gray-600">Kinshasa - Lubumbashi</p>
                </div>
              </div>
              <span class="text-sm text-gray-500">Il y a 2 jours</span>
            </div>
            
            <div class="flex items-center justify-between py-3 border-b">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-900">Nouvelle recherche</p>
                  <p class="text-sm text-gray-600">Goma - Kisangani</p>
                </div>
              </div>
              <span class="text-sm text-gray-500">Il y a 5 jours</span>
            </div>
            
            <div class="flex items-center justify-between py-3">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-900">Paiement effectué</p>
                  <p class="text-sm text-gray-600">85 000 Fb</p>
                </div>
              </div>
              <span class="text-sm text-gray-500">Il y a 1 semaine</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import RusaLogo from '@/components/common/RusaLogo.vue'

defineOptions({
  name: 'ClientHome'
})

const router = useRouter()
const authStore = useAuthStore()

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>
