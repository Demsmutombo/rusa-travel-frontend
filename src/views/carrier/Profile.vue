<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-bold">Profil Transporteur</h1>
      <p class="text-gray-600 mt-1">Gérez les informations de votre entreprise de transport</p>
    </div>

    <!-- Profile Overview -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-6 lg:space-y-0">
        <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div class="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
            <span class="text-3xl font-bold text-blue-600">RT</span>
          </div>
          <div class="text-center sm:text-left">
            <h2 class="text-2xl font-bold text-gray-900">Rusa Travel Transport</h2>
            <p class="text-gray-600 mt-1">Transporteur certifié depuis 2019</p>
            <div class="flex items-center justify-center sm:justify-start space-x-4 mt-2">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Vérifié
              </span>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.8/5.0
              </span>
            </div>
          </div>
        </div>
        <div class="flex space-x-3">
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Modifier le profil
          </button>
          <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
            Télécharger le certificat
          </button>
        </div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Note Moyenne</p>
            <p class="text-2xl font-bold text-gray-900">4.8</p>
            <p class="text-xs text-green-600 mt-1">+0.2 ce mois</p>
          </div>
          <div class="p-3 bg-yellow-100 rounded-full">
            <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Avis</p>
            <p class="text-2xl font-bold text-gray-900">1,247</p>
            <p class="text-xs text-green-600 mt-1">+89 ce mois</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Taux de Ponctualité</p>
            <p class="text-2xl font-bold text-gray-900">96%</p>
            <p class="text-xs text-green-600 mt-1">+3% ce mois</p>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Routes Actives</p>
            <p class="text-2xl font-bold text-gray-900">12</p>
            <p class="text-xs text-green-600 mt-1">+2 ce mois</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Company Information -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-6">Informations de l'Entreprise</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-lg font-medium mb-4">Informations Générales</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Nom de l'entreprise</label>
              <input
                type="text"
                value="Rusa Travel Transport"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                readonly
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value="contact@rusatravel.cd"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                readonly
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
              <input
                type="tel"
                value="+243 123 456 789"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                readonly
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Site web</label>
              <input
                type="url"
                value="www.rusatravel.cd"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                readonly
              >
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-medium mb-4">Adresse</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
              <input
                type="text"
                value="Avenue des Aviateurs, N°1234"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                readonly
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Ville</label>
              <input
                type="text"
                value="Kinshasa"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                readonly
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Province</label>
              <input
                type="text"
                value="Kinshasa"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                readonly
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Code postal</label>
              <input
                type="text"
                value="12345"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                readonly
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Reviews -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold">Avis Récents</h2>
        <button class="text-blue-600 hover:text-blue-700 font-medium text-sm">
          Voir tout
        </button>
      </div>
      
      <div class="space-y-4">
        <div v-for="review in reviews" :key="review.id" class="border border-gray-200 rounded-lg p-4">
          <div class="flex justify-between items-start mb-2">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span class="text-sm font-medium">{{ review.client.name.charAt(0) }}</span>
              </div>
              <div>
                <h4 class="font-medium">{{ review.client.name }}</h4>
                <div class="flex items-center mt-1">
                  <div class="flex text-yellow-400">
                    <svg v-for="star in 5" :key="star" class="w-4 h-4" :class="star <= review.rating ? 'fill-current' : 'fill-gray-300'" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span class="text-sm text-gray-500 ml-2">{{ review.rating }}/5</span>
                </div>
              </div>
            </div>
            <span class="text-sm text-gray-500">{{ review.date }}</span>
          </div>
          <p class="text-gray-600">{{ review.comment }}</p>
          <div class="mt-2 text-sm text-gray-500">
            Route: {{ review.route }}
          </div>
        </div>
      </div>
    </div>

    <!-- Documents -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-6">Documents</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="border border-gray-200 rounded-lg p-4">
          <div class="flex items-center justify-between mb-2">
            <div class="p-2 bg-blue-100 rounded">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span class="text-sm text-green-600">Validé</span>
          </div>
          <h3 class="font-medium">Licence de Transport</h3>
          <p class="text-sm text-gray-500">Valide jusqu'au 31 Déc 2025</p>
          <button class="mt-2 text-blue-600 hover:text-blue-700 text-sm">Voir le document</button>
        </div>
        
        <div class="border border-gray-200 rounded-lg p-4">
          <div class="flex items-center justify-between mb-2">
            <div class="p-2 bg-green-100 rounded">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span class="text-sm text-green-600">Validé</span>
          </div>
          <h3 class="font-medium">Assurance Responsabilité</h3>
          <p class="text-sm text-gray-500">Valide jusqu'au 30 Juin 2024</p>
          <button class="mt-2 text-blue-600 hover:text-blue-700 text-sm">Voir le document</button>
        </div>
        
        <div class="border border-gray-200 rounded-lg p-4">
          <div class="flex items-center justify-between mb-2">
            <div class="p-2 bg-purple-100 rounded">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span class="text-sm text-green-600">Validé</span>
          </div>
          <h3 class="font-medium">Registre de Commerce</h3>
          <p class="text-sm text-gray-500">N°: CD/KIN/2023/A1234</p>
          <button class="mt-2 text-blue-600 hover:text-blue-700 text-sm">Voir le document</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'CarrierProfile'
})

const reviews = ref([
  {
    id: 1,
    client: {
      name: 'Jean Mutombo'
    },
    rating: 5,
    comment: 'Excellent service! Bus confortable et ponctuel. Je recommande vivement.',
    date: '14 Mars 2024',
    route: 'Kinshasa - Lubumbashi'
  },
  {
    id: 2,
    client: {
      name: 'Marie Kabila'
    },
    rating: 4,
    comment: 'Bon voyage overall. Personnel attentionné et bus propre.',
    date: '13 Mars 2024',
    route: 'Kinshasa - Goma'
  },
  {
    id: 3,
    client: {
      name: 'Pierre Lumumba'
    },
    rating: 5,
    comment: 'Service très professionnel. Arrivée à l\'heure et trajet agréable.',
    date: '12 Mars 2024',
    route: 'Lubumbashi - Kolwezi'
  }
])
</script>
