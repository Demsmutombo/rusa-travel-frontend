<template>
  <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Left: Mobile Menu Toggle & Page Title -->
        <div class="flex items-center">
          <!-- Mobile Menu Toggle -->
          <button
            @click="$emit('toggleMobileMenu')"
            class="lg:hidden p-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <!-- Page Title -->
          <div class="ml-2 lg:ml-0">
            <h1 class="text-xl font-bold text-gray-900">{{ pageTitle }}</h1>
            <p class="text-sm text-gray-500 hidden lg:block">{{ pageSubtitle }}</p>
          </div>
        </div>

        <!-- Right: User Actions -->
        <div class="flex items-center space-x-4">
          <!-- Search (Desktop) -->
          <div class="hidden md:block">
            <div class="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                class="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Notifications -->
          <button class="relative p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <!-- User Menu -->
          <div class="relative">
            <button
              @click="showUserMenu = !showUserMenu"
              class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                {{ userInitial }}
              </div>
              <div class="hidden lg:block text-left">
                <p class="text-sm font-medium text-gray-900">{{ authStore.currentUser?.name }}</p>
                <p class="text-xs text-gray-500 capitalize">{{ authStore.currentUser?.role }}</p>
              </div>
              <svg class="w-4 h-4 text-gray-400 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- User Dropdown -->
            <div
              v-if="showUserMenu"
              class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
            >
              <div class="px-4 py-2 border-b border-gray-100">
                <p class="text-sm font-medium text-gray-900">{{ authStore.currentUser?.name }}</p>
                <p class="text-xs text-gray-500">{{ authStore.currentUser?.email }}</p>
              </div>
              
              <router-link
                :to="`/${authStore.currentUser?.role}/profile`"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                @click="showUserMenu = false"
              >
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Profil</span>
                </div>
              </router-link>
              
              <router-link
                :to="`/${authStore.currentUser?.role}/settings`"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                @click="showUserMenu = false"
              >
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-2.572-1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31.826-2.37 2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Paramètres</span>
                </div>
              </router-link>
              
              <div class="border-t border-gray-100 mt-1">
                <button
                  @click="$emit('handleLogout')"
                  class="w-full block px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left"
                >
                  <div class="flex items-center space-x-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4 4m4-4H3m4 4h12a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Déconnexion</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

defineOptions({
  name: 'DashboardHeader'
})

defineProps<{
  isMobileMenuOpen: boolean
}>()

defineEmits<{
  toggleMobileMenu: []
  handleLogout: []
}>()

const route = useRoute()
const authStore = useAuthStore()
const showUserMenu = ref(false)

const userInitial = computed(() => {
  return authStore.currentUser?.name?.charAt(0)?.toUpperCase() || 'U'
})

// Page title and subtitle based on current route
const pageTitle = computed(() => {
  const routeName = route.name as string
  
  // Mapping des titres selon les routes
  const titleMap: Record<string, string> = {
    // Admin routes
    'AdminDashboard': 'Dashboard',
    'AdminUsers': 'Utilisateurs',
    'AdminOrders': 'Commandes',
    'AdminBookings': 'Réservations',
    'AdminAgencies': 'Agences',
    'AdminSettings': 'Paramètres',
    'AdminBuses': 'Bus',
    'AdminRoutes': 'Routes',
    'AdminFinance': 'Finance',
    'AdminNotifications': 'Notifications',
    'AdminTestMobile': 'Test Mobile',
    'AdminTransactions': 'Transactions',
    'AdminDisputes': 'Litiges',
    'AdminSuperAdminDashboard': 'Super Admin Dashboard',
    
    // Manager routes
    'ManagerDashboard': 'Dashboard',
    'ManagerBuses': 'Mes Bus',
    'ManagerRoutes': 'Routes',
    'ManagerTrips': 'Trajets',
    'ManagerBookings': 'Réservations',
    'ManagerPassengers': 'Passagers',
    'ManagerRevenue': 'Revenus',
    'ManagerSettings': 'Paramètres',
    
    // Carrier routes
    'CarrierDashboard': 'Dashboard',
    'CarrierRoutes': 'Courses',
    'CarrierHistory': 'Historique',
    'CarrierProfile': 'Profil',
    
    // Client routes
    'ClientDashboard': 'Tableau de bord',
    'SearchTrips': 'Recherche de trajets',
    'MyBookings': 'Mes réservations',
    'Tickets': 'Mes billets',
    'ClientNotifications': 'Notifications',
    'ClientProfile': 'Profil',
    'ClientSettings': 'Paramètres',
    'ClientBookings': 'Mes réservations',
    'ClientOrders': 'Mes commandes',
    'ClientSupport': 'Support',
    
    // Staff routes
    'StaffDashboard': 'Dashboard',
    'StaffReservations': 'Réservations',
    'StaffIncidents': 'Incidents',
    'StaffReports': 'Rapports',
    'StaffSettings': 'Paramètres'
  }
  
  return titleMap[routeName] || 'Dashboard'
})

const pageSubtitle = computed(() => {
  const userRole = authStore.currentUser?.role
  const roleLabels: Record<string, string> = {
    admin: 'Administration',
    manager: 'Management',
    carrier: 'Transporteur',
    client: 'Client',
    staff: 'Staff'
  }
  
  return roleLabels[userRole || ''] || 'Tableau de bord'
})

// Close user menu when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.relative')) {
    showUserMenu.value = false
  }
}

// Add click listener when menu is open
import { onMounted, onUnmounted } from 'vue'
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
