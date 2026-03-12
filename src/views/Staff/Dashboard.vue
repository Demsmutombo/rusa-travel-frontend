<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold">Dashboard Staff</h1>
          <p class="text-gray-600 mt-1">Gestion des opérations quotidiennes</p>
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-500">Bienvenue,</p>
          <p class="font-semibold">{{ authStore.currentUser?.name }}</p>
        </div>
      </div>
    </div>

    <!-- Stats Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Réservations du jour</p>
            <p class="text-2xl font-bold text-gray-900">47</p>
            <p class="text-xs text-green-600 mt-1">+12% hier</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Passagers en transit</p>
            <p class="text-2xl font-bold text-gray-900">128</p>
            <p class="text-xs text-yellow-600 mt-1">3 retards</p>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Incidents signalés</p>
            <p class="text-2xl font-bold text-gray-900">3</p>
            <p class="text-xs text-red-600 mt-1">2 critiques</p>
          </div>
          <div class="p-3 bg-yellow-100 rounded-full">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Taux de satisfaction</p>
            <p class="text-2xl font-bold text-gray-900">98.5%</p>
            <p class="text-xs text-green-600 mt-1">+2.1% ce mois</p>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activities -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 class="text-lg font-semibold mb-4">Activités Récentes</h3>
      <div class="space-y-4">
        <div class="flex items-start space-x-3">
          <div class="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
          <div class="flex-1">
            <p class="text-sm font-medium">Nouvelle réservation - Kinshasa/Lubumbashi</p>
            <p class="text-xs text-gray-500">Il y a 5 minutes • Client: Jean Mukendi</p>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <div class="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
          <div class="flex-1">
            <p class="text-sm font-medium">Bus arrivé à destination - Goma</p>
            <p class="text-xs text-gray-500">Il y a 15 minutes • TRANSCO Bus 001</p>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <div class="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
          <div class="flex-1">
            <p class="text-sm font-medium">Retard signalé - Route Kisangani</p>
            <p class="text-xs text-gray-500">Il y a 30 minutes • City Express Bus 004</p>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <div class="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
          <div class="flex-1">
            <p class="text-sm font-medium">Mise à jour tarifaire appliquée</p>
            <p class="text-xs text-gray-500">Il y a 1 heure • Toutes routes Est</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 class="text-lg font-semibold mb-4">Actions Rapides</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
          <svg class="w-6 h-6 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8l-8 8-4-4-6 6" />
          </svg>
          <p class="text-sm font-medium">Nouvelle Réservation</p>
        </button>
        <button class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
          <svg class="w-6 h-6 text-green-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v1a3 3 0 003 3h0a3 3 0 003-3v-1m-6 0l-1-1m7 1l1-1" />
          </svg>
          <p class="text-sm font-medium">Signaler Incident</p>
        </button>
        <button class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
          <svg class="w-6 h-6 text-purple-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <p class="text-sm font-medium">Voir Rapports</p>
        </button>
        <button class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
          <svg class="w-6 h-6 text-yellow-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-2.572-1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31.826-2.37 2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p class="text-sm font-medium">Paramètres</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

defineOptions({
  name: 'StaffDashboard'
})

const authStore = useAuthStore()
</script>
