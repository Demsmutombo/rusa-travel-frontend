<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-bold">Gestion des Commandes</h1>
      <p class="text-gray-600 mt-1">Suivi et gestion de toutes les commandes de la plateforme</p>
    </div>

    <!-- Stats Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Commandes</p>
            <p class="text-2xl font-bold text-gray-900">847</p>
            <p class="text-xs text-green-600 mt-1">+22% ce mois</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M4 15h8a2 2 0 002 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 012-2z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Livrées</p>
            <p class="text-2xl font-bold text-gray-900">623</p>
            <p class="text-xs text-green-600 mt-1">+18% cette semaine</p>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">En Cours</p>
            <p class="text-2xl font-bold text-gray-900">156</p>
            <p class="text-xs text-yellow-600 mt-1">-3% cette semaine</p>
          </div>
          <div class="p-3 bg-yellow-100 rounded-full">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Annulées</p>
            <p class="text-2xl font-bold text-gray-900">68</p>
            <p class="text-xs text-red-600 mt-1">+5% cette semaine</p>
          </div>
          <div class="p-3 bg-red-100 rounded-full">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters and Search -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
        <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Statut</label>
            <select class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Tous les statuts</option>
              <option value="delivered">Livrées</option>
              <option value="processing">En cours</option>
              <option value="pending">En attente</option>
              <option value="cancelled">Annulées</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Période</label>
            <select class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Toutes les périodes</option>
              <option value="today">Aujourd'hui</option>
              <option value="week">Cette semaine</option>
              <option value="month">Ce mois</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Tous les types</option>
              <option value="ticket">Billets</option>
              <option value="package">Colis</option>
              <option value="service">Services</option>
            </select>
          </div>
        </div>
        <div class="flex space-x-3">
          <div class="relative">
            <input
              type="text"
              placeholder="Rechercher une commande..."
              class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            <svg class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Exporter
          </button>
        </div>
      </div>
    </div>

    <!-- Orders Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
      <div class="p-6 border-b border-gray-200">
        <h2 class="text-xl font-semibold">Liste des Commandes</h2>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Commande
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Articles
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Montant
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="order in orders" :key="order.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                #{{ order.id }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div>
                  <div class="font-medium">{{ order.client.name }}</div>
                  <div class="text-gray-500">{{ order.client.email }}</div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <span
                  :class="{
                    'px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full': true,
                    'bg-blue-100 text-blue-800': order.type === 'ticket',
                    'bg-green-100 text-green-800': order.type === 'package',
                    'bg-purple-100 text-purple-800': order.type === 'service'
                  }"
                >
                  {{ getTypeText(order.type) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ order.items }} article{{ order.items > 1 ? 's' : '' }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ order.date }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ formatCurrency(order.amount) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="{
                    'px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full': true,
                    'bg-green-100 text-green-800': order.status === 'delivered',
                    'bg-yellow-100 text-yellow-800': order.status === 'processing',
                    'bg-blue-100 text-blue-800': order.status === 'pending',
                    'bg-red-100 text-red-800': order.status === 'cancelled'
                  }"
                >
                  {{ getStatusText(order.status) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mr-3">Voir</button>
                <button class="text-gray-600 hover:text-gray-900">Modifier</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Pagination -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex items-center justify-between">
        <div class="text-sm text-gray-700">
          Affichage de <span class="font-medium">1</span> à <span class="font-medium">10</span> sur
          <span class="font-medium">847</span> résultats
        </div>
        <div class="flex space-x-2">
          <button class="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Précédent
          </button>
          <button class="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            1
          </button>
          <button class="px-3 py-2 bg-blue-600 border border-blue-600 rounded-md text-sm font-medium text-white">
            2
          </button>
          <button class="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            3
          </button>
          <button class="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Suivant
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'ManagerOrders'
})

const orders = ref([
  {
    id: 'ORD2024031501',
    client: {
      name: 'Jean Mutombo',
      email: 'jean.mutombo@email.com'
    },
    type: 'ticket',
    items: 2,
    date: '15 Mars 2024',
    amount: 90000,
    status: 'delivered'
  },
  {
    id: 'ORD2024031502',
    client: {
      name: 'Marie Kabila',
      email: 'marie.kabila@email.com'
    },
    type: 'package',
    items: 1,
    date: '15 Mars 2024',
    amount: 15000,
    status: 'processing'
  },
  {
    id: 'ORD2024031503',
    client: {
      name: 'Pierre Lumumba',
      email: 'pierre.lumumba@email.com'
    },
    type: 'service',
    items: 3,
    date: '14 Mars 2024',
    amount: 75000,
    status: 'pending'
  },
  {
    id: 'ORD2024031504',
    client: {
      name: 'Sophie Kanza',
      email: 'sophie.kanza@email.com'
    },
    type: 'ticket',
    items: 1,
    date: '14 Mars 2024',
    amount: 35000,
    status: 'cancelled'
  }
])

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('fr-CD', {
    style: 'currency',
    currency: 'CDF',
    minimumFractionDigits: 0
  }).format(amount)
}

const getStatusText = (status: string): string => {
  switch (status) {
    case 'delivered':
      return 'Livrée'
    case 'processing':
      return 'En cours'
    case 'pending':
      return 'En attente'
    case 'cancelled':
      return 'Annulée'
    default:
      return status
  }
}

const getTypeText = (type: string): string => {
  switch (type) {
    case 'ticket':
      return 'Billet'
    case 'package':
      return 'Colis'
    case 'service':
      return 'Service'
    default:
      return type
  }
}
</script>
