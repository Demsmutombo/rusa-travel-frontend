<template>
  <div class="space-y-8">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12">
      <div class="max-w-4xl">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Voyagez confortablement à travers le pays
        </h1>
        <p class="text-xl mb-8 text-blue-100">
          Réservez vos billets de bus en ligne avec Rusa Travel. Simple, rapide et sécurisé.
        </p>
        <router-link 
          to="/client/search"
          class="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
        >
          Rechercher un trajet
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </router-link>
      </div>
    </section>

    <!-- Quick Search -->
    <section class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-2xl font-bold mb-6">Recherche rapide</h2>
      <form @submit.prevent="handleQuickSearch" class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Départ</label>
          <input
            v-model="quickSearch.from"
            type="text"
            placeholder="Ville de départ"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Arrivée</label>
          <input
            v-model="quickSearch.to"
            type="text"
            placeholder="Ville d'arrivée"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Date</label>
          <input
            v-model="quickSearch.date"
            type="date"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div class="flex items-end">
          <button
            type="submit"
            class="w-full px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Rechercher
          </button>
        </div>
      </form>
    </section>

    <!-- Popular Routes -->
    <section>
      <h2 class="text-2xl font-bold mb-6">Trajets populaires</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="font-semibold text-lg">Kigali</h3>
              <p class="text-gray-600">Bujumbura</p>
            </div>
            <div class="text-right">
              <p class="text-2xl font-bold text-blue-600">15,000</p>
              <p class="text-sm text-gray-500">FBu</p>
            </div>
          </div>
          <div class="flex items-center text-sm text-gray-500">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            3h 30min
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="font-semibold text-lg">Kigali</h3>
              <p class="text-gray-600">Goma</p>
            </div>
            <div class="text-right">
              <p class="text-2xl font-bold text-blue-600">25,000</p>
              <p class="text-sm text-gray-500">FBu</p>
            </div>
          </div>
          <div class="flex items-center text-sm text-gray-500">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            5h 15min
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="font-semibold text-lg">Kigali</h3>
              <p class="text-gray-600">Kampala</p>
            </div>
            <div class="text-right">
              <p class="text-2xl font-bold text-blue-600">35,000</p>
              <p class="text-sm text-gray-500">FBu</p>
            </div>
          </div>
          <div class="flex items-center text-sm text-gray-500">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            7h 45min
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="bg-gray-50 rounded-xl p-8">
      <h2 class="text-2xl font-bold mb-6 text-center">Pourquoi choisir Rusa Travel?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="font-semibold text-lg mb-2">Réservation sécurisée</h3>
          <p class="text-gray-600">Paiement en ligne sécurisé avec M-Pesa, Airtel Money et Orange Money</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="font-semibold text-lg mb-2">Rapide et simple</h3>
          <p class="text-gray-600">Réservez votre billet en quelques clics, où que vous soyez</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="font-semibold text-lg mb-2">Disponible 24/7</h3>
          <p class="text-gray-600">Accédez à notre plateforme à tout moment pour vos réservations</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Define component name to satisfy ESLint
defineOptions({
  name: 'ClientHome'
})

const router = useRouter()

const quickSearch = ref({
  from: '',
  to: '',
  date: ''
})

const handleQuickSearch = () => {
  if (quickSearch.value.from && quickSearch.value.to && quickSearch.value.date) {
    // Rediriger vers la page de recherche avec les paramètres
    router.push({
      name: 'ClientSearch',
      query: {
        from: quickSearch.value.from,
        to: quickSearch.value.to,
        date: quickSearch.value.date
      }
    })
  }
}

// Expose variables to template
defineExpose({
  quickSearch,
  handleQuickSearch
})
</script>
