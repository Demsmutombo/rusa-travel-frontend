<template>
  <div class="min-h-screen">
    <!-- Header Client -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <router-link to="/client" class="flex items-center">
              <img src="/images/logo/logo.svg" alt="Rusa Travel" class="h-8 w-auto" />
            </router-link>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex space-x-8">
            <router-link 
              to="/client" 
              class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Accueil
            </router-link>
            <router-link 
              to="/client/search" 
              class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Rechercher
            </router-link>
            <router-link 
              to="/client/my-tickets" 
              class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Mes Billets
            </router-link>
            <router-link 
              to="/client/profile" 
              class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Profil
            </router-link>
          </nav>

          <!-- User Menu -->
          <div class="flex items-center space-x-4">
            <button
              type="button"
              class="text-gray-600 hover:text-blue-600 text-sm font-medium"
              @click="handleLogout"
            >
              Déconnexion
            </button>
            <button class="text-gray-500 hover:text-gray-700">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div class="relative">
              <button class="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <div class="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <span class="text-white font-medium">JD</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <router-view></router-view>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-50 border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 class="text-sm font-semibold text-gray-900 mb-4">À propos</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Qui sommes-nous</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Nos services</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-900 mb-4">Support</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Aide</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">FAQ</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-900 mb-4">Paiement</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-600 hover:text-gray-900">M-Pesa</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Airtel Money</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Orange Money</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-900 mb-4">Suivez-nous</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Facebook</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Twitter</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-200">
          <p class="text-center text-gray-500 text-sm">
            &copy; 2024 Rusa Travel. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>
