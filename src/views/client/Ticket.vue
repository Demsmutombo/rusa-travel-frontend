<template>
  <div class="space-y-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h1 class="text-2xl font-bold mb-6">Votre billet</h1>
      
      <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p class="text-green-800 font-medium">✅ Paiement confirmé</p>
        <p class="text-green-600 text-sm">Votre réservation a été validée avec succès</p>
      </div>

      <div class="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <div class="text-center mb-6">
          <h2 class="text-xl font-bold">RUSA TRAVEL</h2>
          <p class="text-gray-600">Billet électronique</p>
        </div>

        <div class="grid grid-cols-2 gap-6 mb-6">
          <div>
            <p class="text-sm text-gray-600">Trajet</p>
            <p class="font-semibold">{{ booking?.bus?.from }} → {{ booking?.bus?.to }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Date</p>
            <p class="font-semibold">{{ formatDate(booking?.date) }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Heure</p>
            <p class="font-semibold">{{ booking?.bus?.departureTime }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Sièges</p>
            <p class="font-semibold">{{ booking?.seats?.map((s: any) => s.row + s.number).join(', ') }}</p>
          </div>
        </div>

        <div class="border-t pt-4">
          <div class="flex justify-center mb-4">
            <div class="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
              <p class="text-sm text-gray-600">QR Code</p>
            </div>
          </div>
          <p class="text-center text-sm text-gray-600">Numéro de réservation: {{ transaction?.id }}</p>
        </div>
      </div>

      <div class="flex justify-center space-x-4 mt-6">
        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Télécharger le PDF
        </button>
        <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          Envoyer par email
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const booking = ref<any>(null)
const transaction = ref<any>(null)

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR')
}

onMounted(() => {
  const confirmedBooking = localStorage.getItem('bookingConfirmed')
  if (confirmedBooking) {
    const data = JSON.parse(confirmedBooking)
    booking.value = data
    transaction.value = data.transaction
  }
})
</script>
