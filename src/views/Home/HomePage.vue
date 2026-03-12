<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <AppHeader />

    <!-- Hero Section with Logo -->
    <section class="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
         
          
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Voyagez en toute sécurité avec <span class="text-yellow-300">Rusa Travel</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100">
            La plateforme de transport la plus fiable de la République Démocratique du Congo
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/search"
              class="px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-300 font-bold text-lg transition shadow-lg hover:shadow-xl"
            >
              Réserver un trajet
            </router-link>
            <router-link
              to="/login"
              class="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-bold text-lg transition shadow-lg hover:shadow-xl"
            >
              Connexion
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-repeat" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINGg0djBIMHYyaDR2NGgydi00aDR2LTJINHpNNCA0VjBINGg0SDAwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvZz48L3N2Zz4='); background-size: 60px 60px;"></div>
      </div>
    </section>

    <!-- Search Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8">Rechercher votre trajet</h2>
          <div class="bg-gray-50 rounded-xl p-6 shadow-lg">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Départ</label>
                <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Kinshasa</option>
                  <option>Lubumbashi</option>
                  <option>Goma</option>
                  <option>Kisangani</option>
                  <option>Kolwezi</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Lubumbashi</option>
                  <option>Kinshasa</option>
                  <option>Goma</option>
                  <option>Kisangani</option>
                  <option>Kolwezi</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input type="date" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
            </div>
            <button class="w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition">
              Rechercher
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Destinations -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Destinations Populaires</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div class="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Kinshasa</h3>
              <p class="text-gray-600 mb-4">Capitale vibrante</p>
              <p class="text-2xl font-bold text-blue-600">À partir de 25,000 Fb</p>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div class="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Lubumbashi</h3>
              <p class="text-gray-600 mb-4">Capitale minière</p>
              <p class="text-2xl font-bold text-blue-600">À partir de 85,000 Fb</p>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div class="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Goma</h3>
              <p class="text-gray-600 mb-4">Ville lacustre</p>
              <p class="text-2xl font-bold text-blue-600">À partir de 65,000 Fb</p>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div class="h-48 bg-gradient-to-br from-orange-400 to-orange-600"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Kisangani</h3>
              <p class="text-gray-600 mb-4">Cité de Stanley</p>
              <p class="text-2xl font-bold text-blue-600">À partir de 55,000 Fb</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Pourquoi choisir Rusa Travel?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Sécurité garantie</h3>
            <p class="text-gray-600">Voyagez en toute sécurité avec nos bus modernes et nos chauffeurs expérimentés</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Ponctualité</h3>
            <p class="text-gray-600">Respectons nos horaires pour garantir vos déplacements à temps</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Service client</h3>
            <p class="text-gray-600">Notre équipe est disponible 24/7 pour vous assister</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Prêt à voyager avec nous?</h2>
        <p class="text-xl mb-8 text-blue-100">Rejoignez des milliers de voyageurs qui nous font confiance</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/search"
            class="px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-300 font-bold text-lg transition shadow-lg hover:shadow-xl"
          >
            Réserver maintenant
          </router-link>
          <router-link
            to="/login"
            class="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-bold text-lg transition shadow-lg hover:shadow-xl"
          >
            Connexion
          </router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
                <img 
                  src="/images/logo/auth-logo (2).png" 
                  alt="Rusa Travel" 
                  class="w-full h-full object-contain"
                />
              </div>
              <span class="text-xl font-bold">Rusa Travel</span>
            </div>
            <p class="text-gray-400">Votre partenaire de confiance pour tous vos voyages en RDC</p>
          </div>
          <div>
            <h3 class="font-bold mb-4">Liens rapides</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition">À propos</a></li>
              <li><a href="#" class="hover:text-white transition">Destinations</a></li>
              <li><a href="#" class="hover:text-white transition">Tarifs</a></li>
              <li><a href="#" class="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-4">Services</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition">Réservations</a></li>
              <li><a href="#" class="hover:text-white transition">Transport de marchandises</a></li>
              <li><a href="#" class="hover:text-white transition">Services entreprises</a></li>
              <li><a href="#" class="hover:text-white transition">Assistance 24/7</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-4">Contact</h3>
            <ul class="space-y-2 text-gray-400">
              <li>+243 123 456 789</li>
              <li>info@rusatravel.cd</li>
              <li>Kinshasa, RDC</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Rusa Travel. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/common/AppHeader.vue'

defineOptions({
  name: 'HomePage'
})

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>
