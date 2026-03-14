<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <AppHeader />

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex-1 min-w-0">
            <h1 class="text-xl sm:text-2xl font-bold">Mon Profil</h1>
            <p class="text-sm sm:text-base text-gray-600 mt-1">Gérez vos informations personnelles et préférences</p>
          </div>
          <div class="flex flex-col sm:flex-row sm:items-center space-x-4">
            <div class="text-center">
              <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold">
                {{ userProfile.name.charAt(0) }}
              </div>
              <p class="text-xs sm:text-sm text-gray-600 mt-1">Membre depuis {{ formatDate(userProfile.memberSince) }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Personal Information -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-semibold">Informations personnelles</h2>
              <button 
                @click="toggleEditMode('personal')"
                class="text-blue-600 hover:text-blue-800 font-medium"
              >
                {{ editModes.personal ? 'Annuler' : 'Modifier' }}
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input 
                  v-model="userProfile.name"
                  :disabled="!editModes.personal"
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  v-model="userProfile.email"
                  :disabled="!editModes.personal"
                  type="email" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                <input 
                  v-model="userProfile.phone"
                  :disabled="!editModes.personal"
                  type="tel" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">CNI/Passeport</label>
                <input 
                  v-model="userProfile.idNumber"
                  :disabled="!editModes.personal"
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                />
              </div>
              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                <input 
                  v-model="userProfile.address"
                  :disabled="!editModes.personal"
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                />
              </div>
            </div>

            <div v-if="editModes.personal" class="flex space-x-4 mt-6">
              <button 
                @click="savePersonalInfo"
                class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
              >
                Enregistrer
              </button>
              <button 
                @click="toggleEditMode('personal')"
                class="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium"
              >
                Annuler
              </button>
            </div>
          </div>

          <!-- Change Password -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-semibold">Changer le mot de passe</h2>
              <button 
                @click="toggleEditMode('password')"
                class="text-blue-600 hover:text-blue-800 font-medium"
              >
                {{ editModes.password ? 'Annuler' : 'Modifier' }}
              </button>
            </div>

            <div v-if="editModes.password" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Mot de passe actuel</label>
                <input 
                  v-model="passwordForm.currentPassword"
                  type="password" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Nouveau mot de passe</label>
                <input 
                  v-model="passwordForm.newPassword"
                  type="password" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Confirmer le nouveau mot de passe</label>
                <input 
                  v-model="passwordForm.confirmPassword"
                  type="password" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div class="flex space-x-4">
                <button 
                  @click="changePassword"
                  class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
                >
                  Mettre à jour
                </button>
                <button 
                  @click="toggleEditMode('password')"
                  class="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium"
                >
                  Annuler
                </button>
              </div>
            </div>
            <div v-else class="text-gray-500">
              Cliquez sur "Modifier" pour changer votre mot de passe
            </div>
          </div>

          <!-- Booking History -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-semibold">Historique des réservations</h2>
              <button class="text-blue-600 hover:text-blue-800 font-medium">
                Voir tout
              </button>
            </div>

            <div class="space-y-4">
              <div 
                v-for="booking in recentBookings" 
                :key="booking.id"
                class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div class="flex justify-between items-start">
                  <div class="flex-1">
                    <div class="flex items-center space-x-2 mb-2">
                      <span class="font-medium text-gray-900">{{ booking.route }}</span>
                      <span :class="getStatusClass(booking.status)" class="px-2 py-1 text-xs font-semibold rounded-full">
                        {{ getStatusLabel(booking.status) }}
                      </span>
                    </div>
                    <div class="text-sm text-gray-600 space-y-1">
                      <div>Date: {{ formatDate(booking.date) }}</div>
                      <div>Sièges: {{ booking.seats.join(', ') }}</div>
                      <div>Prix: {{ formatCurrency(booking.price) }}</div>
                    </div>
                  </div>
                  <button 
                    @click="viewBookingDetails(booking)"
                    class="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Voir détails
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Loyalty Points -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 class="text-lg font-semibold mb-4">Points Fidélité</h3>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600 mb-2">{{ userProfile.loyaltyPoints }}</div>
              <p class="text-sm text-gray-600 mb-4">points disponibles</p>
              <button class="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium">
                Utiliser des points
              </button>
            </div>
          </div>

          <!-- Preferences -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 class="text-lg font-semibold mb-4">Préférences</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium">Notifications par email</span>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input 
                    v-model="userPreferences.emailNotifications"
                    type="checkbox" 
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium">Notifications SMS</span>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input 
                    v-model="userPreferences.smsNotifications"
                    type="checkbox" 
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium">Newsletter</span>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input 
                    v-model="userPreferences.newsletter"
                    type="checkbox" 
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
            <button 
              @click="savePreferences"
              class="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
            >
              Enregistrer les préférences
            </button>
          </div>

          <!-- Quick Actions -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 class="text-lg font-semibold mb-4">Actions rapides</h3>
            <div class="space-y-3">
              <button class="w-full px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium text-left">
                Télécharger mes données
              </button>
              <button class="w-full px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium text-left">
                Supprimer mon compte
              </button>
              <button 
                @click="logout"
                class="w-full px-4 py-2 border border-red-300 hover:bg-red-50 text-red-600 rounded-lg font-medium text-left"
              >
                Se déconnecter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'ClientProfile'
})

const router = useRouter()

interface UserProfile {
  name: string
  email: string
  phone: string
  idNumber: string
  address: string
  memberSince: string
  loyaltyPoints: number
}

interface PasswordForm {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

interface UserPreferences {
  emailNotifications: boolean
  smsNotifications: boolean
  newsletter: boolean
}

interface Booking {
  id: string
  route: string
  date: string
  seats: string[]
  price: number
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed'
}

// State
const userProfile = reactive<UserProfile>({
  name: 'Jean Kabila',
  email: 'jean.kabila@email.com',
  phone: '+243 812 345 678',
  idNumber: 'CD-12345678901234',
  address: 'Avenue des Nations, Kinshasa, RDC',
  memberSince: '2023-01-15',
  loyaltyPoints: 2500
})

const originalProfile = ref({ ...userProfile })

const passwordForm = reactive<PasswordForm>({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const userPreferences = reactive<UserPreferences>({
  emailNotifications: true,
  smsNotifications: false,
  newsletter: true
})

const editModes = reactive({
  personal: false,
  password: false
})

// Mock recent bookings
const recentBookings = ref<Booking[]>([
  {
    id: 'BK001',
    route: 'Kinshasa → Lubumbashi',
    date: '2024-03-20',
    seats: ['12A', '12B'],
    price: 30000,
    status: 'confirmed'
  },
  {
    id: 'BK002',
    route: 'Kinshasa → Kisangani',
    date: '2024-03-15',
    seats: ['8C'],
    price: 10000,
    status: 'completed'
  },
  {
    id: 'BK003',
    route: 'Lubumbashi → Kinshasa',
    date: '2024-03-25',
    seats: ['15A'],
    price: 15000,
    status: 'confirmed'
  }
])

// Helper functions
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF',
    minimumFractionDigits: 0
  }).format(amount)
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

const getStatusClass = (status: string) => {
  switch (status) {
    case 'confirmed':
      return 'bg-green-100 text-green-800'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'cancelled':
      return 'bg-red-100 text-red-800'
    case 'completed':
      return 'bg-blue-100 text-blue-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'confirmed':
      return 'Confirmé'
    case 'pending':
      return 'En attente'
    case 'cancelled':
      return 'Annulé'
    case 'completed':
      return 'Terminé'
    default:
      return status
  }
}

// Actions
const toggleEditMode = (mode: 'personal' | 'password') => {
  editModes[mode] = !editModes[mode]
  
  if (!editModes[mode]) {
    // Reset form data
    if (mode === 'personal') {
      Object.assign(userProfile, originalProfile.value)
    } else if (mode === 'password') {
      passwordForm.currentPassword = ''
      passwordForm.newPassword = ''
      passwordForm.confirmPassword = ''
    }
  }
}

const savePersonalInfo = () => {
  // Validate required fields
  if (!userProfile.name || !userProfile.email || !userProfile.phone) {
    alert('Veuillez remplir tous les champs obligatoires')
    return
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(userProfile.email)) {
    alert('Veuillez entrer une adresse email valide')
    return
  }
  
  // Save changes
  originalProfile.value = { ...userProfile }
  editModes.personal = false
  
  alert('Informations personnelles mises à jour avec succès!')
}

const changePassword = () => {
  // Validate form
  if (!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword) {
    alert('Veuillez remplir tous les champs')
    return
  }
  
  if (passwordForm.newPassword !== passwordForm.confirmPassword) {
    alert('Les nouveaux mots de passe ne correspondent pas')
    return
  }
  
  if (passwordForm.newPassword.length < 8) {
    alert('Le mot de passe doit contenir au moins 8 caractères')
    return
  }
  
  // In a real app, this would call an API
  console.log('Changing password...')
  
  // Reset form
  passwordForm.currentPassword = ''
  passwordForm.newPassword = ''
  passwordForm.confirmPassword = ''
  editModes.password = false
  
  alert('Mot de passe mis à jour avec succès!')
}

const savePreferences = () => {
  // In a real app, this would save to backend
  console.log('Saving preferences:', userPreferences)
  alert('Préférences enregistrées avec succès!')
}

const viewBookingDetails = (booking: Booking) => {
  // Navigate to booking details or open modal
  console.log('View booking details:', booking)
  router.push({ name: 'my-tickets', query: { bookingId: booking.id } })
}

const logout = () => {
  if (confirm('Êtes-vous sûr de vouloir vous déconnecter?')) {
    // Clear auth state and redirect to login
    router.push({ name: 'login' })
  }
}

onMounted(() => {
  // Load user profile data
  console.log('Loading user profile...')
})
</script>
