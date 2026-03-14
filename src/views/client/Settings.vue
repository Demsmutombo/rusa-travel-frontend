<template>
  <div class="space-y-6">
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
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <!-- Account Settings -->
          <div v-if="activeTab === 'account'" class="space-y-6">
            <h2 class="text-lg sm:text-xl font-semibold text-gray-900 mb-6">Compte</h2>
            
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                <input
                  v-model="accountSettings.name"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  v-model="accountSettings.email"
                  type="email"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input
                  v-model="accountSettings.phone"
                  type="tel"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Adresse</label>
                <textarea
                  v-model="accountSettings.address"
                  rows="3"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <div class="flex justify-end">
                <button
                  @click="saveAccountSettings"
                  class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>

          <!-- Security Settings -->
          <div v-if="activeTab === 'security'" class="space-y-6">
            <h2 class="text-lg sm:text-xl font-semibold text-gray-900 mb-6">Sécurité</h2>
            
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Mot de passe actuel</label>
                <input
                  v-model="securitySettings.currentPassword"
                  type="password"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nouveau mot de passe</label>
                  <input
                    v-model="securitySettings.newPassword"
                    type="password"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Confirmer le mot de passe</label>
                  <input
                    v-model="securitySettings.confirmPassword"
                    type="password"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                </div>
              </div>
              
              <div class="flex justify-end">
                <button
                  @click="updatePassword"
                  class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Mettre à jour
                </button>
              </div>
            </div>
            
            <!-- Two-Factor Authentication -->
            <div class="border-t pt-6">
              <h3 class="text-lg font-medium text-gray-900 mb-4">Authentification à deux facteurs</h3>
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-gray-700">Ajoutez une couche de sécurité supplémentaire à votre compte</p>
                  <p class="text-xs text-gray-500">Recommandé pour une meilleure sécurité</p>
                </div>
                <button
                  @click="toggle2FA"
                  :class="[
                    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                    securitySettings.twoFactorEnabled ? 'bg-blue-600' : 'bg-gray-200'
                  ]"
                >
                  <span
                    :class="[
                      'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                      securitySettings.twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                    ]"
                  ></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Notification Settings -->
          <div v-if="activeTab === 'notifications'" class="space-y-6">
            <h2 class="text-lg sm:text-xl font-semibold text-gray-900 mb-6">Notifications</h2>
            
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-sm font-medium text-gray-900">Email notifications</h3>
                  <p class="text-xs text-gray-500">Recevoir des notifications par email</p>
                </div>
                <button
                  @click="notificationSettings.emailNotifications = !notificationSettings.emailNotifications"
                  :class="[
                    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                    notificationSettings.emailNotifications ? 'bg-blue-600' : 'bg-gray-200'
                  ]"
                >
                  <span
                    :class="[
                      'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                      notificationSettings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                    ]"
                  ></span>
                </button>
              </div>
              
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-sm font-medium text-gray-900">Push notifications</h3>
                  <p class="text-xs text-gray-500">Recevoir des notifications push</p>
                </div>
                <button
                  @click="notificationSettings.pushNotifications = !notificationSettings.pushNotifications"
                  :class="[
                    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                    notificationSettings.pushNotifications ? 'bg-blue-600' : 'bg-gray-200'
                  ]"
                >
                  <span
                    :class="[
                      'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                      notificationSettings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                    ]"
                  ></span>
                </button>
              </div>
              
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-sm font-medium text-gray-900">SMS notifications</h3>
                  <p class="text-xs text-gray-500">Recevoir des notifications par SMS</p>
                </div>
                <button
                  @click="notificationSettings.smsNotifications = !notificationSettings.smsNotifications"
                  :class="[
                    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                    notificationSettings.smsNotifications ? 'bg-blue-600' : 'bg-gray-200'
                  ]"
                >
                  <span
                    :class="[
                      'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                      notificationSettings.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                    ]"
                  ></span>
                </button>
              </div>
              
              <div class="flex justify-end">
                <button
                  @click="saveNotificationSettings"
                  class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>

          <!-- Privacy Settings -->
          <div v-if="activeTab === 'privacy'" class="space-y-6">
            <h2 class="text-lg sm:text-xl font-semibold text-gray-900 mb-6">Confidentialité</h2>
            
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-sm font-medium text-gray-900">Profil public</h3>
                  <p class="text-xs text-gray-500">Rendre votre profil visible par d'autres utilisateurs</p>
                </div>
                <button
                  @click="privacySettings.publicProfile = !privacySettings.publicProfile"
                  :class="[
                    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                    privacySettings.publicProfile ? 'bg-blue-600' : 'bg-gray-200'
                  ]"
                >
                  <span
                    :class="[
                      'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                      privacySettings.publicProfile ? 'translate-x-6' : 'translate-x-1'
                    ]"
                  ></span>
                </button>
              </div>
              
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-sm font-medium text-gray-900">Partager les statistiques</h3>
                  <p class="text-xs text-gray-500">Partager vos statistiques de voyage</p>
                </div>
                <button
                  @click="privacySettings.shareStats = !privacySettings.shareStats"
                  :class="[
                    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                    privacySettings.shareStats ? 'bg-blue-600' : 'bg-gray-200'
                  ]"
                >
                  <span
                    :class="[
                      'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                      privacySettings.shareStats ? 'translate-x-6' : 'translate-x-1'
                    ]"
                  ></span>
                </button>
              </div>
              
              <div class="flex justify-end">
                <button
                  @click="savePrivacySettings"
                  class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>

          <!-- System Settings -->
          <div v-if="activeTab === 'system'" class="space-y-6">
            <h2 class="text-lg sm:text-xl font-semibold text-gray-900 mb-6">Système</h2>
            
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Langue</label>
                <select
                  v-model="systemSettings.language"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Fuseau horaire</label>
                <select
                  v-model="systemSettings.timezone"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Africa/Kinshasa">Africa/Kinshasa (UTC+1)</option>
                  <option value="Africa/Lagos">Africa/Lagos (UTC+1)</option>
                  <option value="Africa/Johannesburg">Africa/Johannesburg (UTC+2)</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Format de date</label>
                <select
                  v-model="systemSettings.dateFormat"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
              
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-sm font-medium text-gray-900">Sauvegarde automatique</h3>
                  <p class="text-xs text-gray-500">Sauvegarder automatiquement les données</p>
                </div>
                <button
                  @click="systemSettings.autoBackup = !systemSettings.autoBackup"
                  :class="[
                    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                    systemSettings.autoBackup ? 'bg-blue-600' : 'bg-gray-200'
                  ]"
                >
                  <span
                    :class="[
                      'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                      systemSettings.autoBackup ? 'translate-x-6' : 'translate-x-1'
                    ]"
                  ></span>
                </button>
              </div>
              
              <div class="flex justify-end">
                <button
                  @click="saveSystemSettings"
                  class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Active tab
const activeTab = ref('account')

// Settings tabs
const settingsTabs = [
  { id: 'account', label: 'Compte', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { id: 'security', label: 'Sécurité', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { id: 'notifications', label: 'Notifications', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
  { id: 'privacy', label: 'Confidentialité', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { id: 'system', label: 'Système', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-2.572-1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37 2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' }
]

// Settings data
const accountSettings = ref({
  name: 'Jean Dupont',
  email: 'jean.dupont@email.com',
  phone: '+243 123 456 789',
  address: 'Avenue des Forces Armées, Kinshasa, RDC'
})

const securitySettings = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
  twoFactorEnabled: false
})

const notificationSettings = ref({
  emailNotifications: true,
  pushNotifications: false,
  smsNotifications: false
})

const privacySettings = ref({
  publicProfile: false,
  shareStats: false
})

const systemSettings = ref({
  language: 'fr',
  timezone: 'Africa/Kinshasa',
  dateFormat: 'DD/MM/YYYY',
  autoBackup: true
})

// Methods
const saveAccountSettings = () => {
  console.log('Account settings saved:', accountSettings.value)
  alert('Paramètres du compte sauvegardés!')
}

const updatePassword = () => {
  if (securitySettings.value.newPassword !== securitySettings.value.confirmPassword) {
    alert('Les mots de passe ne correspondent pas')
    return
  }
  
  console.log('Password updated')
  alert('Mot de passe mis à jour!')
  
  // Reset form
  securitySettings.value.currentPassword = ''
  securitySettings.value.newPassword = ''
  securitySettings.value.confirmPassword = ''
}

const toggle2FA = () => {
  securitySettings.value.twoFactorEnabled = !securitySettings.value.twoFactorEnabled
  console.log('2FA toggled:', securitySettings.value.twoFactorEnabled)
}

const saveNotificationSettings = () => {
  console.log('Notification settings saved:', notificationSettings.value)
  alert('Paramètres de notification sauvegardés!')
}

const savePrivacySettings = () => {
  console.log('Privacy settings saved:', privacySettings.value)
  alert('Paramètres de confidentialité sauvegardés!')
}

const saveSystemSettings = () => {
  console.log('System settings saved:', systemSettings.value)
  alert('Paramètres système sauvegardés!')
}
</script>
