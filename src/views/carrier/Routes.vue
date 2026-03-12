<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold">Gestion des Trajets</h1>
          <p class="text-gray-600 mt-1">Gérez vos routes et horaires</p>
        </div>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium">
          + Ajouter un trajet
        </button>
      </div>
    </div>

    <!-- Routes List -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="space-y-4">
        <!-- Route 1 -->
        <div class="border border-gray-200 rounded-lg p-4">
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <h3 class="font-semibold text-lg">Kinshasa → Lubumbashi</h3>
              <p class="text-gray-600">08:00 - 20:30 • Quotidien</p>
              <div class="mt-2 space-y-1">
                <p class="text-sm text-gray-500">Bus: 001, 002, 003</p>
                <p class="text-sm text-gray-500">Distance: 1,500 km</p>
                <p class="text-sm text-gray-500">Durée: 12h 30min</p>
              </div>
            </div>
            <div class="text-right ml-4">
              <span class="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">Actif</span>
              <p class="font-semibold mt-2">45,000 Fb</p>
              <div class="mt-2 space-x-2">
                <button class="text-blue-600 hover:text-blue-700 text-sm">Modifier</button>
                <button class="text-red-600 hover:text-red-700 text-sm">Supprimer</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Route 2 -->
        <div class="border border-gray-200 rounded-lg p-4">
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <h3 class="font-semibold text-lg">Kinshasa → Goma</h3>
              <p class="text-gray-600">06:00 - 14:00 • Quotidien</p>
              <div class="mt-2 space-y-1">
                <p class="text-sm text-gray-500">Bus: 004, 005</p>
                <p class="text-sm text-gray-500">Distance: 1,200 km</p>
                <p class="text-sm text-gray-500">Durée: 8h</p>
              </div>
            </div>
            <div class="text-right ml-4">
              <span class="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">Actif</span>
              <p class="font-semibold mt-2">35,000 Fb</p>
              <div class="mt-2 space-x-2">
                <button class="text-blue-600 hover:text-blue-700 text-sm">Modifier</button>
                <button class="text-red-600 hover:text-red-700 text-sm">Supprimer</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Route 3 -->
        <div class="border border-gray-200 rounded-lg p-4">
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <h3 class="font-semibold text-lg">Kinshasa → Kisangani</h3>
              <p class="text-gray-600">10:00 - 18:00 • 3x/semaine</p>
              <div class="mt-2 space-y-1">
                <p class="text-sm text-gray-500">Bus: 006, 007</p>
                <p class="text-sm text-gray-500">Distance: 800 km</p>
                <p class="text-sm text-gray-500">Durée: 8h</p>
              </div>
            </div>
            <div class="text-right ml-4">
              <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Inactif</span>
              <p class="font-semibold mt-2">25,000 Fb</p>
              <div class="mt-2 space-x-2">
                <button class="text-blue-600 hover:text-blue-700 text-sm">Modifier</button>
                <button class="text-red-600 hover:text-red-700 text-sm">Supprimer</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Route 4 -->
        <div class="border border-gray-200 rounded-lg p-4">
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <h3 class="font-semibold text-lg">Lubumbashi → Kolwezi</h3>
              <p class="text-gray-600">07:00 - 16:00 • Quotidien</p>
              <div class="mt-2 space-y-1">
                <p class="text-sm text-gray-500">Bus: 008, 009</p>
                <p class="text-sm text-gray-500">Distance: 600 km</p>
                <p class="text-sm text-gray-500">Durée: 9h</p>
              </div>
            </div>
            <div class="text-right ml-4">
              <span class="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">Actif</span>
              <p class="font-semibold mt-2">20,000 Fb</p>
              <div class="mt-2 space-x-2">
                <button class="text-blue-600 hover:text-blue-700 text-sm">Modifier</button>
                <button class="text-red-600 hover:text-red-700 text-sm">Supprimer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Statistics -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Total Trajets</h3>
        <p class="text-3xl font-bold text-blue-600">12</p>
        <p class="text-sm text-gray-500 mt-1">8 actifs, 4 inactifs</p>
      </div>
      
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Revenu Mensuel</h3>
        <p class="text-3xl font-bold text-green-600">125M Fb</p>
        <p class="text-sm text-gray-500 mt-1">+15% ce mois</p>
      </div>
      
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold mb-4">Taux de Remplissage</h3>
        <p class="text-3xl font-bold text-purple-600">78%</p>
        <p class="text-sm text-gray-500 mt-1">Moyenne ce mois</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define component name to satisfy ESLint
defineOptions({
  name: 'CarrierRoutes'
})
</script>
