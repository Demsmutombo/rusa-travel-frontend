<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-bold">Paramètres Manager</h1>
      <p class="text-gray-600 mt-1">Configuration des préférences et paramètres du système</p>
    </div>

    <!-- Settings Navigation -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
      <div class="border-b border-gray-200">
        <nav class="flex space-x-8 px-6" aria-label="Tabs">
          <button
            v-for="tab in settingsTabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap',
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            ]"
          >
            {{ tab.name }}
          </button>
        </nav>
      </div>

      <!-- Tab Content -->
      <div class="p-6">
        <!-- General Settings -->
        <div v-if="activeTab === 'general'" class="space-y-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Paramètres Généraux</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nom de l'entreprise</label>
              <input
                type="text"
                value="Rusa Travel"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email administrateur</label>
              <input
                type="email"
                value="admin@rusatravel.cd"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
              <input
                type="tel"
                value="+243 123 456 789"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Fuseau horaire</label>
              <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Africa/Kinshasa (UTC+1)</option>
                <option>Africa/Lagos (UTC+1)</option>
                <option>Africa/Johannesburg (UTC+2)</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Adresse</label>
            <textarea
              rows="3"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >Avenue des Aviateurs, N°1234, Kinshasa, RDC</textarea>
          </div>

          <div class="flex justify-end">
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Sauvegarder
            </button>
          </div>
        </div>

        <!-- Notification Settings -->
        <div v-if="activeTab === 'notifications'" class="space-y-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Paramètres de Notification</h3>
          
          <div class="space-y-4">
            <div v-for="notification in notificationSettings" :key="notification.id" class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 class="font-medium text-gray-900">{{ notification.title }}</h4>
                <p class="text-sm text-gray-500">{{ notification.description }}</p>
              </div>
              <div class="flex items-center space-x-4">
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    v-model="notification.email"
                    class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  >
                  <span class="ml-2 text-sm text-gray-700">Email</span>
                </label>
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    v-model="notification.sms"
                    class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  >
                  <span class="ml-2 text-sm text-gray-700">SMS</span>
                </label>
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    v-model="notification.push"
                    class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  >
                  <span class="ml-2 text-sm text-gray-700">Push</span>
                </label>
              </div>
            </div>
          </div>

          <div class="flex justify-end">
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Sauvegarder
            </button>
          </div>
        </div>

        <!-- Security Settings -->
        <div v-if="activeTab === 'security'" class="space-y-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Paramètres de Sécurité</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="font-medium text-gray-900 mb-3">Mot de passe</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Mot de passe actuel</label>
                  <input
                    type="password"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nouveau mot de passe</label>
                  <input
                    type="password"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Confirmer le mot de passe</label>
                  <input
                    type="password"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                </div>
              </div>
            </div>

            <div>
              <h4 class="font-medium text-gray-900 mb-3">Authentification à deux facteurs</h4>
              <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p class="font-medium text-gray-900">2FA via SMS</p>
                  <p class="text-sm text-gray-500">Recevoir un code par SMS pour vous connecter</p>
                </div>
                <button class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  Activer
                </button>
              </div>
            </div>

            <div>
              <h4 class="font-medium text-gray-900 mb-3">Sessions actives</h4>
              <div class="space-y-3">
                <div v-for="session in activeSessions" :key="session.id" class="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <div class="p-2 bg-gray-100 rounded">
                      <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">{{ session.device }}</p>
                      <p class="text-sm text-gray-500">{{ session.location }} • {{ session.time }}</p>
                    </div>
                  </div>
                  <button class="text-red-600 hover:text-red-700 text-sm">
                    Déconnecter
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-end">
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Sauvegarder
            </button>
          </div>
        </div>

        <!-- Team Settings -->
        <div v-if="activeTab === 'team'" class="space-y-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Paramètres Équipe</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="font-medium text-gray-900 mb-3">Permissions par rôle</h4>
              <div class="space-y-4">
                <div v-for="role in teamRoles" :key="role.name" class="border border-gray-200 rounded-lg p-4">
                  <div class="flex items-center justify-between mb-3">
                    <h5 class="font-medium text-gray-900">{{ role.name }}</h5>
                    <span class="text-sm text-gray-500">{{ role.count }} membres</span>
                  </div>
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <label v-for="permission in role.permissions" :key="permission.name" class="flex items-center">
                      <input
                        type="checkbox"
                        v-model="permission.enabled"
                        class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      >
                      <span class="ml-2 text-sm text-gray-700">{{ permission.name }}</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 class="font-medium text-gray-900 mb-3">Inviter des membres</h4>
              <div class="flex space-x-3">
                <input
                  type="email"
                  placeholder="Email du membre"
                  class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                <select class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Manager</option>
                  <option>Staff</option>
                  <option>Analyste</option>
                </select>
                <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Inviter
                </button>
              </div>
            </div>
          </div>

          <div class="flex justify-end">
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Sauvegarder
            </button>
          </div>
        </div>

        <!-- System Settings -->
        <div v-if="activeTab === 'system'" class="space-y-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Paramètres Système</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="font-medium text-gray-900 mb-3">Maintenance et Sauvegarde</h4>
              <div class="space-y-4">
                <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p class="font-medium text-gray-900">Sauvegarde automatique</p>
                    <p class="text-sm text-gray-500">Sauvegarder les données quotidiennement à 02:00</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="systemSettings.autoBackup" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p class="font-medium text-gray-900">Mode maintenance</p>
                    <p class="text-sm text-gray-500">Activer le mode maintenance pour les mises à jour</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="systemSettings.maintenanceMode" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h4 class="font-medium text-gray-900 mb-3">Limites et quotas</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Limite de téléchargement (MB)</label>
                  <input
                    type="number"
                    v-model="systemSettings.downloadLimit"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Sessions simultanées max</label>
                  <input
                    type="number"
                    v-model="systemSettings.maxSessions"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                </div>
              </div>
            </div>

            <div>
              <h4 class="font-medium text-gray-900 mb-3">Logs et monitoring</h4>
              <div class="space-y-3">
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    v-model="systemSettings.enableLogging"
                    class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  >
                  <span class="ml-2 text-sm text-gray-700">Activer les logs système</span>
                </label>
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    v-model="systemSettings.enableMonitoring"
                    class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  >
                  <span class="ml-2 text-sm text-gray-700">Activer le monitoring performance</span>
                </label>
              </div>
            </div>
          </div>

          <div class="flex justify-end">
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Sauvegarder
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

defineOptions({
  name: 'ManagerSettings'
})

const activeTab = ref('general')

const settingsTabs = ref([
  { id: 'general', name: 'Général' },
  { id: 'notifications', name: 'Notifications' },
  { id: 'security', name: 'Sécurité' },
  { id: 'team', name: 'Équipe' },
  { id: 'system', name: 'Système' }
])

const notificationSettings = ref([
  {
    id: 1,
    title: 'Réservations',
    description: 'Notifications pour nouvelles réservations et annulations',
    email: true,
    sms: false,
    push: true
  },
  {
    id: 2,
    title: 'Paiements',
    description: 'Alertes pour les transactions et problèmes de paiement',
    email: true,
    sms: true,
    push: true
  },
  {
    id: 3,
    title: 'System',
    description: 'Notifications système et mises à jour',
    email: false,
    sms: false,
    push: true
  },
  {
    id: 4,
    title: 'Reports',
    description: 'Rapports générés et analyses disponibles',
    email: true,
    sms: false,
    push: false
  }
])

const activeSessions = ref([
  {
    id: 1,
    device: 'Chrome - Windows',
    location: 'Kinshasa, RDC',
    time: 'Actuellement'
  },
  {
    id: 2,
    device: 'Mobile App - iPhone',
    location: 'Lubumbashi, RDC',
    time: 'Il y a 2 heures'
  }
])

const teamRoles = ref([
  {
    name: 'Manager',
    count: 3,
    permissions: [
      { name: 'Voir les rapports', enabled: true },
      { name: 'Gérer les équipes', enabled: true },
      { name: 'Exporter les données', enabled: true },
      { name: 'Accès admin', enabled: false },
      { name: 'Gérer les utilisateurs', enabled: false },
      { name: 'Configurer le système', enabled: false }
    ]
  },
  {
    name: 'Staff',
    count: 8,
    permissions: [
      { name: 'Voir les rapports', enabled: true },
      { name: 'Gérer les équipes', enabled: false },
      { name: 'Exporter les données', enabled: false },
      { name: 'Accès admin', enabled: false },
      { name: 'Gérer les utilisateurs', enabled: false },
      { name: 'Configurer le système', enabled: false }
    ]
  }
])

const systemSettings = reactive({
  autoBackup: true,
  maintenanceMode: false,
  downloadLimit: 100,
  maxSessions: 5,
  enableLogging: true,
  enableMonitoring: true
})
</script>
