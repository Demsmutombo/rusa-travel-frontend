<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-2xl font-bold">Paiement</h1>
          <p class="text-gray-600 mt-1">Finalisez votre réservation</p>
        </div>
        <button
          @click="$router.go(-1)"
          class="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium"
        >
          Retour
        </button>
      </div>

      <!-- Order Summary -->
      <div class="bg-blue-50 rounded-lg p-4">
        <h3 class="font-semibold mb-3">Récapitulatif de la commande</h3>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span>Trajet:</span>
            <span class="font-medium">{{ paymentData?.booking?.bus?.from }} → {{ paymentData?.booking?.bus?.to }}</span>
          </div>
          <div class="flex justify-between">
            <span>Date:</span>
            <span class="font-medium">{{ formatDate(paymentData?.booking?.date) }}</span>
          </div>
          <div class="flex justify-between">
            <span>Sièges:</span>
            <span class="font-medium">{{ paymentData?.seats?.map((s: any) => s.row + s.number).join(', ') }}</span>
          </div>
          <div class="flex justify-between">
            <span>Passagers:</span>
            <span class="font-medium">{{ paymentData?.passengers?.length }}</span>
          </div>
          <div class="border-t pt-2 mt-2">
            <div class="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span class="text-blue-600">{{ formatCurrency(paymentData?.totalPrice) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Payment Methods -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-6">Choisissez un moyen de paiement</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button
          v-for="method in paymentMethods"
          :key="method.id"
          @click="selectedPaymentMethod = method.id"
          :class="{
            'border-blue-500 bg-blue-50': selectedPaymentMethod === method.id,
            'border-gray-200 hover:border-gray-300': selectedPaymentMethod !== method.id
          }"
          class="p-4 border-2 rounded-lg transition-all"
        >
          <div class="text-center">
            <div class="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center"
                 :class="{
                   'bg-blue-100': selectedPaymentMethod === method.id,
                   'bg-gray-100': selectedPaymentMethod !== method.id
                 }">
              <img :src="method.icon" :alt="method.name" class="w-8 h-8" />
            </div>
            <h3 class="font-medium">{{ method.name }}</h3>
            <p class="text-sm text-gray-600 mt-1">{{ method.description }}</p>
          </div>
        </button>
      </div>

      <!-- Payment Form -->
      <div v-if="selectedPaymentMethod" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Numéro de téléphone</label>
          <div class="relative">
            <input
              v-model="paymentForm.phoneNumber"
              type="tel"
              placeholder="+250 7XX XXX XXX"
              class="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <div class="absolute left-3 top-3.5">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Code PIN</label>
          <input
            v-model="paymentForm.pin"
            type="password"
            placeholder="Entrez votre code PIN"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div class="flex items-start space-x-2">
            <svg class="w-5 h-5 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div class="text-sm text-yellow-800">
              <p class="font-medium">Important:</p>
              <ul class="mt-1 space-y-1">
                <li>• Assurez-vous d'avoir suffisamment de fonds sur votre compte</li>
                <li>• Vous recevrez un code de confirmation par SMS</li>
                <li>• La transaction est sécurisée et cryptée</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Terms and Conditions -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-4">Conditions générales</h2>
      <div class="space-y-3">
        <label class="flex items-start space-x-3">
          <input
            v-model="termsAccepted"
            type="checkbox"
            class="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            required
          />
          <span class="text-sm text-gray-600">
            J'accepte les <a href="#" class="text-blue-600 hover:text-blue-700">conditions générales de vente</a> et 
            la <a href="#" class="text-blue-600 hover:text-blue-700">politique de confidentialité</a>
          </span>
        </label>
        
        <label class="flex items-start space-x-3">
          <input
            v-model="cancellationAccepted"
            type="checkbox"
            class="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            required
          />
          <span class="text-sm text-gray-600">
            J'ai lu et compris la politique d'annulation (annulation gratuite jusqu'à 24h avant le départ)
          </span>
        </label>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex items-center justify-between bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div>
        <p class="text-sm text-gray-600">Montant total à payer</p>
        <p class="text-2xl font-bold">{{ formatCurrency(paymentData?.totalPrice) }}</p>
      </div>
      <div class="space-x-3">
        <button
          @click="$router.push('/client/seat-selection')"
          class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Retour
        </button>
        <button
          @click="processPayment"
          :disabled="!isFormValid || isProcessing"
          class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
        >
          <svg v-if="isProcessing" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ isProcessing ? 'Traitement en cours...' : 'Confirmer le paiement' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// Define component name to satisfy ESLint
defineOptions({
  name: 'ClientPayment'
})

const router = useRouter()

const paymentData = ref<any>(null) // TypeScript any pour les données de paiement complexes
const selectedPaymentMethod = ref('')
const isProcessing = ref(false)
const termsAccepted = ref(false)
const cancellationAccepted = ref(false)

const paymentForm = ref({
  phoneNumber: '',
  pin: ''
})

const paymentMethods = [
  {
    id: 'mtn',
    name: 'M-Pesa',
    description: 'Paiement mobile rapide',
    icon: '/images/payment/mpesa.png'
  },
  {
    id: 'airtel',
    name: 'Airtel Money',
    description: 'Paiement instantané',
    icon: '/images/payment/airtel.png'
  },
  {
    id: 'orange',
    name: 'Orange Money',
    description: 'Paiement sécurisé',
    icon: '/images/payment/orange.png'
  }
]

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('fr-RW', {
    style: 'currency',
    currency: 'RWF',
    minimumFractionDigits: 0
  }).format(amount)
}

const isFormValid = computed(() => {
  return selectedPaymentMethod.value &&
         paymentForm.value.phoneNumber &&
         paymentForm.value.pin &&
         termsAccepted.value &&
         cancellationAccepted.value
})

const processPayment = async () => {
  if (!isFormValid.value) return
  
  isProcessing.value = true
  
  try {
    // Simuler le traitement du paiement
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Simuler une transaction réussie
    const transactionData = {
      id: 'TXN' + Date.now(),
      amount: paymentData.value.totalPrice,
      method: selectedPaymentMethod.value,
      phone: paymentForm.value.phoneNumber,
      status: 'success',
      timestamp: new Date().toISOString()
    }
    
    // Sauvegarder la transaction
    localStorage.setItem('lastTransaction', JSON.stringify(transactionData))
    localStorage.setItem('bookingConfirmed', JSON.stringify({
      ...paymentData.value,
      transaction: transactionData
    }))
    
    // Rediriger vers la page de confirmation
    router.push('/client/ticket/' + transactionData.id)
    
  } catch (error) {
    console.error('Payment error:', error)
    // Gérer l'erreur de paiement
  } finally {
    isProcessing.value = false
  }
}

// Variables directement accessibles dans le template - Vue 3 n'a pas besoin de defineExpose

onMounted(() => {
  const savedPaymentData = localStorage.getItem('paymentData')
  if (savedPaymentData) {
    paymentData.value = JSON.parse(savedPaymentData)
  } else {
    router.push('/client/search-trips')
  }
})
</script>
