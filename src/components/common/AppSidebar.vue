<template>
  <aside 
    :class="[
      'fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out',
      isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    ]"
  >
    <div class="flex flex-col h-full">
      <!-- Logo -->
      <div class="flex items-center justify-center h-16 border-b">
        <div class="flex items-center">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
            <img 
              src="/images/logo/auth-logo.svg" 
              alt="Rusa Travel" 
              class="w-full h-full object-contain"
            />
          </div>
          <span class="text-lg font-bold text-gray-900">Rusa Travel</span>
        </div>
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
                class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                :class="isActive(item.path) 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-gray-50'"
              >
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
                </svg>
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </nav>

      <!-- User Info -->
      <div class="border-t p-4">
        <div class="flex items-center">
          <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
            {{ authStore.currentUser?.name?.charAt(0)?.toUpperCase() }}
          </div>
          <div class="flex-1">
            <p class="text-sm font-medium text-gray-900">{{ authStore.currentUser?.name }}</p>
            <p class="text-xs text-gray-500 capitalize">{{ authStore.currentUser?.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import RusaLogo from '@/components/common/RusaLogo.vue'

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

  // Manager items
  {
    path: '/manager/dashboard',
    label: 'Dashboard',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1z',
    roles: ['manager']
  },
  {
    path: '/manager/bookings',
    label: 'Réservations',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5z',
    roles: ['manager']
  },
  {
    path: '/manager/orders',
    label: 'Commandes',
    icon: 'M16 11V7a4 4 0 00-8 0v4M4 15h8a2 2 0 002 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 012-2z',
    roles: ['manager']
  },
  {
    path: '/manager/analytics',
    label: 'Statistiques',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    roles: ['manager']
  },
  {
    path: '/manager/teams',
    label: 'Équipes',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    roles: ['manager']
  },
  {
    path: '/manager/performance',
    label: 'Performance',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    roles: ['manager']
  },
  {
    path: '/manager/reports',
    label: 'Rapports',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    roles: ['manager']
  },
  {
    path: '/manager/settings',
    label: 'Paramètres',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-2.572-1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31.826-2.37 2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    roles: ['manager']
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

  // Client items
  {
    path: '/client/dashboard',
    label: 'Dashboard',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1z',
    roles: ['client']
  },
  {
    path: '/client/bookings',
    label: 'Mes réservations',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5z',
    roles: ['client']
  },
  {
    path: '/client/orders',
    label: 'Mes commandes',
    icon: 'M16 11V7a4 4 0 00-8 0v4M4 15h8a2 2 0 002 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 012-2z',
    roles: ['client']
  },
  {
    path: '/client/profile',
    label: 'Profil',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    roles: ['client']
  },
  {
    path: '/client/support',
    label: 'Support',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    roles: ['client']
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
</script>
