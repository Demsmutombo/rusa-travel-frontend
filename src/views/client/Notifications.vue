<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-lg sm:text-xl font-semibold text-gray-900">Notifications</h2>
        <div class="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0">
          <button
            @click="markAllAsRead"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Tout marquer comme lu
          </button>
          <button
            @click="clearAllNotifications"
            class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Effacer tout
          </button>
        </div>
      </div>
    </div>

    <!-- Notifications List -->
    <div class="space-y-4">
      <div
        v-for="notification in notifications"
        :key="notification.id"
        :class="[
          'bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow',
          !notification.read ? 'border-l-4 border-l-blue-500' : ''
        ]"
      >
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between">
          <div class="flex items-start space-x-3 flex-1">
            <!-- Icon -->
            <div
              :class="[
                'p-2 rounded-full flex-shrink-0',
                getNotificationIconClass(notification.type)
              ]"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="getNotificationIcon(notification.type)"
                />
              </svg>
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-sm font-medium text-gray-900">
                    {{ notification.title }}
                  </h3>
                  <p class="text-sm text-gray-600 mt-1">
                    {{ notification.message }}
                  </p>
                  <div class="flex items-center mt-2 space-x-4 text-xs text-gray-500">
                    <span>{{ formatTime(notification.createdAt) }}</span>
                    <span v-if="notification.actionUrl" class="text-blue-600 hover:text-blue-700">
                      <a :href="notification.actionUrl" @click.prevent="handleAction(notification)">
                        {{ notification.actionText }}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center space-x-2 mt-3 sm:mt-0">
            <button
              v-if="!notification.read"
              @click="markAsRead(notification.id)"
              class="p-1 text-gray-400 hover:text-blue-600 transition-colors"
              title="Marquer comme lu"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
            <button
              @click="deleteNotification(notification.id)"
              class="p-1 text-gray-400 hover:text-red-600 transition-colors"
              title="Supprimer"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="notifications.length === 0" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
      <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
      <h3 class="text-lg font-medium text-gray-900 mb-2">Aucune notification</h3>
      <p class="text-gray-500">Vous n'avez pas de nouvelles notifications</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Données mockées
const notifications = ref([
  {
    id: 1,
    type: 'booking',
    title: 'Réservation confirmée',
    message: 'Votre réservation #BK001 pour Kinshasa → Lubumbashi a été confirmée.',
    createdAt: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    read: false,
    actionUrl: '/client/my-bookings',
    actionText: 'Voir la réservation'
  },
  {
    id: 2,
    type: 'reminder',
    title: 'Rappel de voyage',
    message: 'Votre voyage Kinshasa → Matadi est prévu pour demain à 14:30.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    read: false,
    actionUrl: '/client/tickets',
    actionText: 'Voir le billet'
  },
  {
    id: 3,
    type: 'payment',
    title: 'Paiement reçu',
    message: 'Votre paiement de 15,000 FC a été reçu avec succès.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    read: true,
    actionUrl: '/client/my-bookings',
    actionText: 'Voir les détails'
  },
  {
    id: 4,
    type: 'promotion',
    title: 'Offre spéciale',
    message: 'Profitez de -20% sur tous les trajets vers Lubumbashi cette semaine!',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
    read: true,
    actionUrl: '/client/search-trips',
    actionText: 'Réserver maintenant'
  },
  {
    id: 5,
    type: 'system',
    title: 'Maintenance système',
    message: 'Le système sera en maintenance demain de 02:00 à 04:00.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72), // 3 days ago
    read: true,
    actionUrl: null,
    actionText: null
  }
])

// Méthodes
const getNotificationIcon = (type) => {
  switch (type) {
    case 'booking':
      return 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002-2h2a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5z'
    case 'reminder':
      return 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    case 'payment':
      return 'M12 8c-1.657 0-3 1.343-3 3 0 1.657 0 3 1.343 3 0 3-1.657 0 3-1.343m0 6a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
    case 'promotion':
      return 'M12 8c-1.657 0-3 1.343-3 3 0 1.657 0 3 1.343 3 0 3-1.657 0 3-1.343m0 6a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
    case 'system':
      return 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-2.572-1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37 2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    default:
      return 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  }
}

const getNotificationIconClass = (type) => {
  switch (type) {
    case 'booking':
      return 'bg-blue-100 text-blue-600'
    case 'reminder':
      return 'bg-yellow-100 text-yellow-600'
    case 'payment':
      return 'bg-green-100 text-green-600'
    case 'promotion':
      return 'bg-purple-100 text-purple-600'
    case 'system':
      return 'bg-gray-100 text-gray-600'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}

const formatTime = (date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / (1000 * 60))
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  if (minutes < 1) return 'À l\'instant'
  if (minutes < 60) return `Il y a ${minutes} minute${minutes > 1 ? 's' : ''}`
  if (hours < 24) return `Il y a ${hours} heure${hours > 1 ? 's' : ''}`
  if (days < 7) return `Il y a ${days} jour${days > 1 ? 's' : ''}`
  
  return date.toLocaleDateString('fr-FR')
}

const markAsRead = (id) => {
  const notification = notifications.value.find(n => n.id === id)
  if (notification) {
    notification.read = true
  }
}

const markAllAsRead = () => {
  notifications.value.forEach(notification => {
    notification.read = true
  })
}

const deleteNotification = (id) => {
  const index = notifications.value.findIndex(n => n.id === id)
  if (index > -1) {
    notifications.value.splice(index, 1)
  }
}

const clearAllNotifications = () => {
  if (confirm('Êtes-vous sûr de vouloir effacer toutes les notifications?')) {
    notifications.value = []
  }
}

const handleAction = (notification) => {
  if (notification.actionUrl) {
    router.push(notification.actionUrl)
  }
}
</script>
