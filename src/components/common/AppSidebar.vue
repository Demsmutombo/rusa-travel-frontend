<template>
  <aside 
    :class="[
      'fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-2xl transform transition-all duration-300 ease-in-out lg:shadow-lg',
      isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    ]"
  >
    <div class="flex flex-col h-full">
      <!-- Mobile Header -->
      <div class="lg:hidden flex items-center justify-between p-4 border-b border-gray-200">
        <div class="flex items-center">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span class="ml-2 text-xl font-bold text-gray-900">Rusa Travel</span>
        </div>
        <button
          @click="closeMobileMenu"
          class="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <!-- Navigation -->
      <nav class="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        <div>
          <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            {{ menuTitle }}
          </h3>
          <ul class="space-y-1">
            <li v-for="item in filteredMenuItems" :key="item.path">
              <router-link
                :to="item.path"
                @click="closeMobileMenu"
                class="flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 group"
                :class="isActive(item.path) 
                  ? 'bg-blue-50 text-blue-600 shadow-sm' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'"
              >
                <svg class="w-5 h-5 mr-3 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
                </svg>
                <span class="flex-1">{{ item.label }}</span>
                <div v-if="isActive(item.path)" class="w-1 h-6 bg-blue-600 rounded-r-full"></div>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>

      <!-- User Info -->
      <div class="border-t p-4 bg-gray-50">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
            {{ authStore.currentUser?.name?.charAt(0)?.toUpperCase() }}
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-900 truncate">{{ authStore.currentUser?.name }}</p>
            <p class="text-xs text-gray-500 capitalize">{{ authStore.currentUser?.role }}</p>
          </div>
        </div>
        <div class="mt-3 pt-3 border-t border-gray-200">
          <button 
            @click="handleLogout"
            class="w-full flex items-center justify-center px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 font-medium"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4 4m4-4H3m4 4h12a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

defineOptions({
  name: 'AppSidebar'
})

interface MenuItem {
  path: string
  label: string
  icon: string
  roles: string[]
}

const emit = defineEmits<{
  closeMobileMenu: []
}>()

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

defineProps<{
  isMobileMenuOpen: boolean
}>()

// Menu configuration with RBAC
const menuItems: MenuItem[] = [
  // Admin items
  {
    path: '/admin/dashboard',
    label: 'Dashboard',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1z',
    roles: ['admin']
  },
  {
    path: '/admin/users',
    label: 'Utilisateurs',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    roles: ['admin']
  },
  {
    path: '/admin/orders',
    label: 'Commandes',
    icon: 'M16 11V7a4 4 0 00-8 0v4M4 15h8a2 2 0 002 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 012-2z',
    roles: ['admin']
  },
  {
    path: '/admin/bookings',
    label: 'Réservations',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5z',
    roles: ['admin']
  },
  {
    path: '/admin/agencies',
    label: 'Agences',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    roles: ['admin']
  },
  {
    path: '/admin/settings',
    label: 'Paramètres',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-2.572-1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31.826-2.37 2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    roles: ['admin']
  },
  {
    path: '/admin/buses',
    label: 'Bus',
    icon: 'M8 7h12m0 0l-4 4m0 0l4-4m-12 0h12a2 2 0 002 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2z',
    roles: ['admin']
  },
  {
    path: '/admin/routes',
    label: 'Routes',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0z',
    roles: ['admin']
  },
  {
    path: '/admin/finance',
    label: 'Finance',
    icon: 'M12 8c-1.657 0-3 1.343-3 3 0 1.657 0 3 1.343 3 0 3 1.657 0 3-1.343m0 6a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    roles: ['admin']
  },
  {
    path: '/admin/notifications',
    label: 'Notifications',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
    roles: ['admin']
  },
  {
    path: '/admin/transactions',
    label: 'Transactions',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    roles: ['admin']
  },

  // Manager items
  {
    path: '/manager/dashboard',
    label: 'Dashboard',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1z',
    roles: ['manager']
  },
  {
    path: '/manager/buses',
    label: 'Mes Bus',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4m-4 4h12m-4 4h4m-4 4l4 4m-4-4h4m-4 4l4-4',
    roles: ['manager']
  },
  {
    path: '/manager/routes',
    label: 'Routes',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
    roles: ['manager']
  },
  {
    path: '/manager/trips',
    label: 'Trajets',
    icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    roles: ['manager']
  },
  {
    path: '/manager/bookings',
    label: 'Réservations',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5z',
    roles: ['manager']
  },
  {
    path: '/manager/passengers',
    label: 'Passagers',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    roles: ['manager']
  },
  {
    path: '/manager/revenue',
    label: 'Revenus',
    icon: 'M12 8c-1.657 0-3 1.343-3 3 0 1.657 0 3 1.343 3 0 3-1.657 0 3-1.343m0 6a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    roles: ['manager']
  },
  {
    path: '/manager/settings',
    label: 'Paramètres',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-2.572-1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31.826-2.37 2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    roles: ['manager']
  },

  // Client items
  {
    path: '/client/dashboard',
    label: 'Tableau de bord',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1z',
    roles: ['client']
  },
  {
    path: '/client/search-trips',
    label: 'Recherche de trajets',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    roles: ['client']
  },
  {
    path: '/client/my-bookings',
    label: 'Mes réservations',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5z',
    roles: ['client']
  },
  {
    path: '/client/tickets',
    label: 'Mes billets',
    icon: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z',
    roles: ['client']
  },
  {
    path: '/client/notifications',
    label: 'Notifications',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
    roles: ['client']
  },
  {
    path: '/client/profile',
    label: 'Profil',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    roles: ['client']
  },
  {
    path: '/client/settings',
    label: 'Paramètres',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-2.572-1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31.826-2.37 2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    roles: ['client']
  },

  // Carrier items
  {
    path: '/carrier/dashboard',
    label: 'Dashboard',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1z',
    roles: ['carrier']
  },
  {
    path: '/carrier/routes',
    label: 'Courses',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    roles: ['carrier']
  },
  {
    path: '/carrier/history',
    label: 'Historique',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    roles: ['carrier']
  },
  {
    path: '/carrier/profile',
    label: 'Profil',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    roles: ['carrier']
  },

  // Staff items
  {
    path: '/staff/dashboard',
    label: 'Dashboard',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1z',
    roles: ['staff']
  },
  {
    path: '/staff/reservations',
    label: 'Réservations',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5z',
    roles: ['staff']
  },
  {
    path: '/staff/incidents',
    label: 'Incidents',
    icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    roles: ['staff']
  },
  {
    path: '/staff/reports',
    label: 'Rapports',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    roles: ['staff']
  },
  {
    path: '/staff/settings',
    label: 'Paramètres',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-2.572-1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31.826-2.37 2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    roles: ['staff']
  }
]

// Filter menu items based on user role
const filteredMenuItems = computed(() => {
  const userRole = authStore.currentUser?.role
  if (!userRole) return []
  
  return menuItems.filter(item => item.roles.includes(userRole))
})

// Menu title based on user role
const menuTitle = computed(() => {
  const userRole = authStore.currentUser?.role
  switch (userRole) {
    case 'admin':
      return 'Administration'
    case 'manager':
      return 'Management'
    case 'carrier':
      return 'Transporteur'
    case 'client':
      return 'Client'
    case 'staff':
      return 'Staff'
    default:
      return 'Menu'
  }
})

const isActive = (path: string) => route.path === path

const closeMobileMenu = () => {
  emit('closeMobileMenu')
}

const handleLogout = () => {
  authStore.logout()
  router.push('/')
  closeMobileMenu()
}
</script>
