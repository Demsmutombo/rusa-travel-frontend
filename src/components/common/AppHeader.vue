<template>
  <header class="bg-white shadow-lg border-b sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <RusaLogo 
            size="sm" 
            :rounded="true"
            custom-class="mr-3 shadow-md hover:shadow-lg transition-shadow"
          />
          <span class="text-xl font-bold text-gray-900">Rusa Travel</span>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <router-link
            to="/"
            class="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 relative group"
          >
            Accueil
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
          </router-link>
          
          <!-- Destinations Dropdown -->
          <div class="relative group" @mouseenter="showDestinationsDropdown = true" @mouseleave="showDestinationsDropdown = false">
            <button class="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 flex items-center space-x-1">
              <span>Destinations</span>
              <svg class="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              v-show="showDestinationsDropdown"
              class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
            >
              <div class="py-2">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Kinshasa</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Lubumbashi</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Goma</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Kisangani</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Kolwezi</a>
              </div>
            </div>
          </div>
          
          <router-link
            to="/search"
            class="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 relative group"
          >
            Rechercher
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
          </router-link>
          
          <router-link
            to="/about"
            class="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 relative group"
          >
            À propos
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
          </router-link>
          
          <router-link
            to="/contact"
            class="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 relative group"
          >
            Contact
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
          </router-link>
          
          <!-- Auth Buttons -->
          <div v-if="!authStore.isAuthenticated" class="flex items-center space-x-3 ml-6">
            <router-link
              to="/login"
              class="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span class="flex items-center space-x-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span>Connexion</span>
              </span>
            </router-link>
            <router-link
              to="/register"
              class="px-6 py-2.5 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white font-medium text-sm transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span class="flex items-center space-x-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v-1a3 3 0 00-3-3H6a3 3 0 00-3 3v1z" />
                </svg>
                <span>S'inscrire</span>
              </span>
            </router-link>
          </div>
          
          <!-- User Menu (Authenticated) -->
          <div v-else class="flex items-center space-x-4 ml-6">
            <!-- Notifications -->
            <div class="relative" @mouseenter="showNotifications = true" @mouseleave="showNotifications = false">
              <button class="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200 relative">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              
              <!-- Notifications Dropdown -->
              <div
                v-show="showNotifications"
                class="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible hover:opacity-100 hover:visible transition-all duration-200"
              >
                <div class="p-4 border-b">
                  <h3 class="font-semibold text-gray-900">Notifications</h3>
                </div>
                <div class="max-h-96 overflow-y-auto">
                  <div class="p-4 border-b hover:bg-gray-50 transition-colors cursor-pointer">
                    <div class="flex items-start space-x-3">
                      <div class="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div class="flex-1">
                        <p class="text-sm font-medium text-gray-900">Nouvelle réservation confirmée</p>
                        <p class="text-xs text-gray-500 mt-1">Il y a 5 minutes</p>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 border-b hover:bg-gray-50 transition-colors cursor-pointer">
                    <div class="flex items-start space-x-3">
                      <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div class="flex-1">
                        <p class="text-sm font-medium text-gray-900">Paiement reçu</p>
                        <p class="text-xs text-gray-500 mt-1">Il y a 1 heure</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-4 border-t">
                  <button class="text-sm text-blue-600 hover:text-blue-700 font-medium">Voir toutes les notifications</button>
                </div>
              </div>
            </div>
            
            <!-- User Profile Dropdown -->
            <div class="relative" @mouseenter="showUserMenu = true" @mouseleave="showUserMenu = false">
              <button class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium shadow-md">
                  {{ authStore.currentUser?.name?.charAt(0)?.toUpperCase() }}
                </div>
                <div class="text-right hidden sm:block">
                  <p class="text-sm font-medium text-gray-900">{{ authStore.currentUser?.name }}</p>
                  <p class="text-xs text-gray-500 capitalize">{{ authStore.currentUser?.role }}</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <!-- User Menu Dropdown -->
              <div
                v-show="showUserMenu"
                class="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible hover:opacity-100 hover:visible transition-all duration-200"
              >
                <div class="p-4 border-b">
                  <p class="text-sm font-medium text-gray-900">{{ authStore.currentUser?.name }}</p>
                  <p class="text-xs text-gray-500 capitalize">{{ authStore.currentUser?.email }}</p>
                </div>
                <div class="py-2">
                  <router-link
                    :to="`/${authStore.currentUser?.role}/profile`"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <span class="flex items-center space-x-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>Mon profil</span>
                    </span>
                  </router-link>
                  <router-link
                    :to="`/${authStore.currentUser?.role}/settings`"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <span class="flex items-center space-x-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-2.572-1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31.826-2.37 2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Paramètres</span>
                    </span>
                  </router-link>
                  <div class="border-t my-2"></div>
                  <button
                    @click="$emit('handleLogout')"
                    class="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors text-left"
                  >
                    <span class="flex items-center space-x-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4 4m4-4H3m4 4h12a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Déconnexion</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        
        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
        >
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div v-show="isMobileMenuOpen" class="lg:hidden py-4 border-t">
        <nav class="flex flex-col space-y-4">
          <router-link
            to="/"
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-blue-600 font-medium text-lg py-2 transition-colors"
          >
            Accueil
          </router-link>
          
          <div class="relative">
            <button class="text-gray-700 hover:text-blue-600 font-medium text-lg py-2 transition-colors flex items-center space-x-1">
              <span>Destinations</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <router-link
            to="/search"
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-blue-600 font-medium text-lg py-2 transition-colors"
          >
            Rechercher
          </router-link>
          
          <router-link
            to="/about"
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-blue-600 font-medium text-lg py-2 transition-colors"
          >
            À propos
          </router-link>
          
          <router-link
            to="/contact"
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-blue-600 font-medium text-lg py-2 transition-colors"
          >
            Contact
          </router-link>
          
          <div v-if="!authStore.isAuthenticated" class="flex flex-col space-y-3 pt-4 border-t">
            <router-link
              to="/login"
              @click="$emit('toggleMobileMenu')"
              class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium text-lg transition-all duration-200 text-center shadow-md"
            >
              <span class="flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span>Connexion</span>
              </span>
            </router-link>
            <router-link
              to="/register"
              @click="$emit('toggleMobileMenu')"
              class="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white font-medium text-lg transition-all duration-200 text-center"
            >
              <span class="flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v-1a3 3 0 00-3-3H6a3 3 0 00-3 3v1z" />
                </svg>
                <span>S'inscrire</span>
              </span>
            </router-link>
          </div>
          
          <div v-else class="pt-4 border-t">
            <div class="flex items-center space-x-3 pb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg font-medium shadow-md">
                {{ authStore.currentUser?.name?.charAt(0)?.toUpperCase() }}
              </div>
              <div>
                <p class="font-medium text-gray-900">{{ authStore.currentUser?.name }}</p>
                <p class="text-sm text-gray-500 capitalize">{{ authStore.currentUser?.role }}</p>
              </div>
            </div>
            <div class="flex flex-col space-y-2">
              <router-link
                :to="`/${authStore.currentUser?.role}/dashboard`"
                class="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-left"
                @click="closeMobileMenu"
              >
                <span class="flex items-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1z" />
                  </svg>
                  <span>Dashboard</span>
                </span>
              </router-link>
              <router-link
                :to="`/${authStore.currentUser?.role}/profile`"
                class="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-left"
                @click="closeMobileMenu"
              >
                <span class="flex items-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Mon profil</span>
                </span>
              </router-link>
              <button
                @click="handleLogout"
                class="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium text-lg transition-colors"
              >
                <span class="flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4 4m4-4H3m4 4h12a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Déconnexion</span>
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import RusaLogo from '@/components/common/RusaLogo.vue'

defineOptions({
  name: 'AppHeader'
})

const props = defineProps<{
  isMobileMenuOpen?: boolean
}>()

const emit = defineEmits<{
  toggleMobileMenu: []
  handleLogout: []
}>()

const router = useRouter()
const authStore = useAuthStore()
const showDestinationsDropdown = ref(false)
const showNotifications = ref(false)
const showUserMenu = ref(false)

// Internal mobile menu state
const internalIsMobileMenuOpen = ref(false)

// Use prop if provided, otherwise use internal state
const isMobileMenuOpen = computed(() => props.isMobileMenuOpen ?? internalIsMobileMenuOpen.value)

const toggleMobileMenu = () => {
  if (props.isMobileMenuOpen !== undefined) {
    emit('toggleMobileMenu')
  } else {
    internalIsMobileMenuOpen.value = !internalIsMobileMenuOpen.value
  }
}

const closeMobileMenu = () => {
  if (props.isMobileMenuOpen !== undefined) {
    emit('toggleMobileMenu')
  } else {
    internalIsMobileMenuOpen.value = false
  }
}

const handleLogout = () => {
  console.log('Déconnexion cliquée - utilisateur actuel:', authStore.currentUser)
  authStore.logout()
  router.push('/')
  showUserMenu.value = false
  closeMobileMenu()
  emit('handleLogout')
}
</script>
