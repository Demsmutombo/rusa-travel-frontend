<template>
  <!-- Settings Header -->
  <div class="mb-6">
    <h1 class="text-lg sm:text-2xl font-bold text-gray-900">Paramètres</h1>
    <p class="text-gray-600 mt-1 text-sm sm:text-base">Gérez les paramètres de votre compte et préférences système</p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
    <!-- Settings Navigation -->
    <div class="lg:col-span-1">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:sticky lg:top-6">
        <nav class="space-y-1">
          <button
            v-for="tab in settingsTabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors',
              activeTab === tab.id
                ? 'bg-blue-50 text-blue-600 border-blue-200'
                : 'text-gray-700 hover:bg-gray-50'
            ]"
          >
            <div class="flex items-center">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="tab.icon" />
              </svg>
              {{ tab.label }}
            </div>
          </button>
        </nav>
      </div>
    </div>

    <!-- Settings Content -->
    <div class="lg:col-span-2">
      <!-- Profile Settings -->
      <div v-if="activeTab === 'profile'" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Profil</h2>
        
        <div class="space-y-6">
          <div class="flex items-center space-x-6">
            <div class="flex-shrink-0">
              <div class="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                <span class="text-2xl font-medium text-gray-600">{{ user.name.charAt(0) }}</span>
              </div>
            </div>
            <div>
              <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Changer la photo
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700">Nom complet</label>
              <input
                v-model="user.name"
                type="text"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Email</label>
              <input
                v-model="user.email"
                type="email"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Téléphone</label>
              <input
                v-model="user.phone"
                type="tel"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Rôle</label>
              <input
                :value="user.role"
                type="text"
                disabled
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Bio</label>
            <textarea
              v-model="user.bio"
              rows="3"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Parlez-nous de vous..."
            ></textarea>
          </div>

          <div class="flex justify-end space-x-3">
            <button class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              Annuler
            </button>
            <button @click="saveProfile" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Enregistrer
            </button>
          </div>
        </div>
      </div>

      <!-- Security Settings -->
      <div v-if="activeTab === 'security'" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Sécurité</h2>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-md font-medium text-gray-900 mb-4">Changer le mot de passe</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Mot de passe actuel</label>
                <input
                  v-model="passwordForm.current"
                  type="password"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Nouveau mot de passe</label>
                <input
                  v-model="passwordForm.new"
                  type="password"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Confirmer le nouveau mot de passe</label>
                <input
                  v-model="passwordForm.confirm"
                  type="password"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-md font-medium text-gray-900 mb-4">Authentification à deux facteurs</h3>
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-700">Ajoutez une couche de sécurité supplémentaire à votre compte</p>
              </div>
              <button class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                Activer 2FA
              </button>
            </div>
          </div>

          <div>
            <h3 class="text-md font-medium text-gray-900 mb-4">Sessions actives</h3>
            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p class="text-sm font-medium text-gray-900">Chrome - Windows</p>
                  <p class="text-xs text-gray-500">Kinshasa, RDC • IP: 192.168.1.1</p>
                </div>
                <button class="text-red-600 hover:text-red-700 text-sm">Déconnecter</button>
              </div>
              <div class="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p class="text-sm font-medium text-gray-900">Safari - iPhone</p>
                  <p class="text-xs text-gray-500">Lubumbashi, RDC • IP: 192.168.1.2</p>
                </div>
                <button class="text-red-600 hover:text-red-700 text-sm">Déconnecter</button>
              </div>
            </div>
          </div>

          <div class="flex justify-end space-x-3">
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Mettre à jour le mot de passe
            </button>
          </div>
        </div>
      </div>

      <!-- Notification Settings -->
      <div v-if="activeTab === 'notifications'" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Notifications</h2>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-md font-medium text-gray-900 mb-4">Notifications par email</h3>
            <div class="space-y-3">
              <label class="flex items-center">
                <input
                  v-model="notifications.email.bookings"
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span class="ml-2 text-sm text-gray-700">Nouvelles réservations</span>
              </label>
              <label class="flex items-center">
                <input
                  v-model="notifications.email.payments"
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span class="ml-2 text-sm text-gray-700">Paiements reçus</span>
              </label>
              <label class="flex items-center">
                <input
                  v-model="notifications.email.system"
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span class="ml-2 text-sm text-gray-700">Alertes système</span>
              </label>
            </div>
          </div>

          <div>
            <h3 class="text-md font-medium text-gray-900 mb-4">Notifications push</h3>
            <div class="space-y-3">
              <label class="flex items-center">
                <input
                  v-model="notifications.push.bookings"
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span class="ml-2 text-sm text-gray-700">Réservations urgentes</span>
              </label>
              <label class="flex items-center">
                <input
                  v-model="notifications.push.messages"
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span class="ml-2 text-sm text-gray-700">Messages des passagers</span>
              </label>
            </div>
          </div>

          <div class="flex justify-end space-x-3">
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Enregistrer les préférences
            </button>
          </div>
        </div>
      </div>

      <!-- System Settings -->
      <div v-if="activeTab === 'system'" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Paramètres système</h2>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-md font-medium text-gray-900 mb-4">Préférences d'affichage</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Langue</label>
                <select v-model="system.language" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                  <option value="sw">Swahili</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Fuseau horaire</label>
                <select v-model="system.timezone" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option value="Africa/Kinshasa">Kinshasa (GMT+1)</option>
                  <option value="Africa/Lubumbashi">Lubumbashi (GMT+2)</option>
                  <option value="UTC">UTC</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Format de date</label>
                <select v-model="system.dateFormat" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-md font-medium text-gray-900 mb-4">Sauvegarde des données</h3>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-gray-700">Dernière sauvegarde</p>
                  <p class="text-xs text-gray-500">12 Mars 2024 à 14:30</p>
                </div>
                <button class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                  Sauvegarder maintenant
                </button>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-gray-700">Sauvegarde automatique</p>
                  <p class="text-xs text-gray-500">Tous les jours à 02:00</p>
                </div>
                <label class="flex items-center">
                  <input
                    v-model="system.autoBackup"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </label>
              </div>
            </div>
          </div>

          <div class="flex justify-end space-x-3">
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Enregistrer les paramètres
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'ManagerSettings'
})

// Reactive data
const activeTab = ref('profile')

const settingsTabs = [
  { id: 'profile', label: 'Profil', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { id: 'security', label: 'Sécurité', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { id: 'notifications', label: 'Notifications', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
  { id: 'system', label: 'Système', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-2.572-1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31.826-2.37 2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' }
]

const user = ref({
  name: 'Jean Mukendi',
  email: 'jean.mukendi@rusatravel.com',
  phone: '+243 812 345 678',
  role: 'Transport Manager',
  bio: 'Manager expérimenté avec plus de 10 ans dans le transport de passagers.'
})

const passwordForm = ref({
  current: '',
  new: '',
  confirm: ''
})

const notifications = ref({
  email: {
    bookings: true,
    payments: true,
    system: false
  },
  push: {
    bookings: true,
    messages: false
  }
})

const system = ref({
  language: 'fr',
  timezone: 'Africa/Kinshasa',
  dateFormat: 'DD/MM/YYYY',
  autoBackup: true
})

// Methods
const saveProfile = () => {
  // Simulate API call
  console.log('Profile saved:', user.value)
  alert('Profil mis à jour avec succès!')
}
</script>
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
