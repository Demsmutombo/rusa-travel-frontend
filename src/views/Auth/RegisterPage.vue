<template>
  <div class="min-h-screen bg-white flex items-center justify-center px-4">
    <div class="max-w-md w-full">
      <!-- Logo -->
      <div class="text-center mb-8">
        <img
          src="/images/logo/auth-logo (2).png"
          alt="Rusa Travel"
          class="mx-auto h-24 w-auto mb-6"
        />
        <h1 class="text-2xl font-bold text-gray-900 mb-2">
          Créer votre compte
        </h1>
        <p class="text-gray-600">
          Rejoignez Rusa Travel et voyagez en toute sécurité
        </p>
      </div>

      <!-- Registration Form -->
      <div class="bg-white rounded-lg border border-gray-200 p-8">
        <form @submit.prevent="handleRegister" class="space-y-6">
          <!-- Name Fields -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                Prénom *
              </label>
              <input
                id="firstName"
                v-model="formData.firstName"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Jean"
              />
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                Nom *
              </label>
              <input
                id="lastName"
                v-model="formData.lastName"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Dupont"
              />
            </div>
          </div>

          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="votre@email.com"
            />
          </div>

          <!-- Phone Field -->
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
              Téléphone *
            </label>
            <input
              id="phone"
              v-model="formData.phone"
              type="tel"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+243 XXX XXX XXX"
            />
          </div>

          <!-- Password Fields -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe *
            </label>
            <input
              id="password"
              v-model="formData.password"
              type="password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">
              Confirmer le mot de passe *
            </label>
            <input
              id="confirmPassword"
              v-model="formData.confirmPassword"
              type="password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <!-- User Type -->
          <div>
            <label for="userType" class="block text-sm font-medium text-gray-700 mb-2">
              Type de compte *
            </label>
            <select
              id="userType"
              v-model="formData.userType"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Sélectionnez un type</option>
              <option value="client">Client</option>
              <option value="carrier">Transporteur</option>
            </select>
          </div>

          <!-- Terms and Conditions -->
          <div class="flex items-start">
            <input
              id="terms"
              v-model="formData.acceptTerms"
              type="checkbox"
              required
              class="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label for="terms" class="ml-2 text-sm text-gray-600">
              J'accepte les 
              <a href="#" class="text-blue-600 hover:text-blue-500">conditions d'utilisation</a>
              et la 
              <a href="#" class="text-blue-600 hover:text-blue-500">politique de confidentialité</a>
            </label>
          </div>

          <!-- Error Message -->
          <div v-if="errorMessage" class="p-4 bg-red-50 border border-red-200 rounded-lg">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-red-800">{{ errorMessage }}</p>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isSubmitting ? 'Inscription en cours...' : 'Créer mon compte' }}
          </button>
        </form>

        <!-- Login Link -->
        <div class="text-center mt-6">
          <p class="text-sm text-gray-600">
            Déjà un compte?
            <router-link to="/login" class="font-medium text-blue-600 hover:text-blue-500 transition-colors">
              Se connecter
            </router-link>
          </p>
        </div>
      </div>

      <!-- Back to Home -->
      <div class="text-center mt-6">
        <router-link
          to="/"
          class="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          ← Retour à l'accueil
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'RegisterPage'
})

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
  userType: string
  acceptTerms: boolean
}

const router = useRouter()

const formData = ref<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  userType: '',
  acceptTerms: false
})

const isSubmitting = ref(false)
const errorMessage = ref('')

const validateForm = (): boolean => {
  // Validate passwords match
  if (formData.value.password !== formData.value.confirmPassword) {
    errorMessage.value = 'Les mots de passe ne correspondent pas'
    return false
  }

  // Validate password strength
  if (formData.value.password.length < 8) {
    errorMessage.value = 'Le mot de passe doit contenir au moins 8 caractères'
    return false
  }

  // Validate phone format
  const phoneRegex = /^\+243\s?\d{3}\s?\d{3}\s?\d{3}$/
  if (!phoneRegex.test(formData.value.phone)) {
    errorMessage.value = 'Format de téléphone invalide (ex: +243 123 456 789)'
    return false
  }

  return true
}

const handleRegister = async () => {
  errorMessage.value = ''

  // Validate form
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // For demo, we'll just redirect to login
    console.log('Inscription réussie:', {
      firstName: formData.value.firstName,
      lastName: formData.value.lastName,
      email: formData.value.email,
      phone: formData.value.phone,
      userType: formData.value.userType
    })

    // Redirect to login with success message
    router.push({
      name: 'Login',
      query: {
        registered: 'true',
        email: formData.value.email
      }
    })

  } catch (error) {
    console.error('Erreur d\'inscription:', error)
    errorMessage.value = 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
