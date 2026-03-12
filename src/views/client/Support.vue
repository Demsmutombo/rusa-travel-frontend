<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-bold">Support Client</h1>
      <p class="text-gray-600 mt-1">Nous sommes là pour vous aider</p>
    </div>

    <!-- Support Options -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Contact Support -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span class="text-sm text-gray-500">Réponse sous 24h</span>
        </div>
        <h3 class="text-lg font-semibold mb-2">Contact Support</h3>
        <p class="text-gray-600 mb-4">Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.</p>
        <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          Envoyer un message
        </button>
      </div>

      <!-- Phone Support -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <span class="text-sm text-gray-500">Disponible 24/7</span>
        </div>
        <h3 class="text-lg font-semibold mb-2">Support Téléphonique</h3>
        <p class="text-gray-600 mb-4">Appelez-nous pour une assistance immédiate.</p>
        <div class="space-y-2">
          <p class="text-lg font-bold text-green-600">+243 123 456 789</p>
          <button class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
            Appeler maintenant
          </button>
        </div>
      </div>

      <!-- Live Chat -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <span class="text-sm text-gray-500">En ligne</span>
        </div>
        <h3 class="text-lg font-semibold mb-2">Chat Direct</h3>
        <p class="text-gray-600 mb-4">Discutez avec un agent en temps réel.</p>
        <button class="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
          Démarrer le chat
        </button>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-6">Questions Fréquemment Posées</h2>
      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="border border-gray-200 rounded-lg">
          <button
            @click="toggleFaq(index)"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
          >
            <span class="font-medium">{{ faq.question }}</span>
            <svg
              class="w-5 h-5 text-gray-500 transform transition-transform"
              :class="{ 'rotate-180': faq.isOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            v-show="faq.isOpen"
            class="px-6 py-4 border-t border-gray-200 bg-gray-50"
          >
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Tickets -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold">Mes Tickets Récents</h2>
        <button class="text-blue-600 hover:text-blue-700 font-medium text-sm">
          Voir tout
        </button>
      </div>
      
      <div class="space-y-4">
        <div v-for="ticket in recentTickets" :key="ticket.id" class="border border-gray-200 rounded-lg p-4">
          <div class="flex justify-between items-start mb-2">
            <div>
              <h3 class="font-medium">{{ ticket.subject }}</h3>
              <p class="text-sm text-gray-500 mt-1">{{ ticket.description }}</p>
            </div>
            <span
              :class="{
                'px-2 py-1 text-xs rounded-full': true,
                'bg-green-100 text-green-800': ticket.status === 'resolved',
                'bg-yellow-100 text-yellow-800': ticket.status === 'pending',
                'bg-blue-100 text-blue-800': ticket.status === 'open'
              }"
            >
              {{ ticket.status === 'resolved' ? 'Résolu' : ticket.status === 'pending' ? 'En attente' : 'Ouvert' }}
            </span>
          </div>
          <div class="flex justify-between items-center text-sm text-gray-500">
            <span>Ticket #{{ ticket.id }}</span>
            <span>{{ ticket.date }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-6">Nouveau Ticket de Support</h2>
      <form @submit.prevent="submitTicket" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
            <select
              v-model="newTicket.subject"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Sélectionner un sujet</option>
              <option value="booking">Problème de réservation</option>
              <option value="payment">Problème de paiement</option>
              <option value="account">Problème de compte</option>
              <option value="technical">Problème technique</option>
              <option value="other">Autre</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Priorité</label>
            <select
              v-model="newTicket.priority"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Sélectionner une priorité</option>
              <option value="low">Basse</option>
              <option value="medium">Moyenne</option>
              <option value="high">Haute</option>
              <option value="urgent">Urgente</option>
            </select>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            v-model="newTicket.description"
            rows="4"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Décrivez votre problème en détail..."
            required
          ></textarea>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Pièce jointe (optionnel)</label>
          <input
            type="file"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            accept="image/*,.pdf,.doc,.docx"
          >
        </div>
        
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Envoyer le ticket
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

defineOptions({
  name: 'ClientSupport'
})

const faqs = ref([
  {
    question: 'Comment puis-je annuler ma réservation ?',
    answer: 'Vous pouvez annuler votre réservation jusqu\'à 2 heures avant le départ. Allez dans "Mes Réservations" et cliquez sur "Annuler". Le remboursement sera traité selon nos conditions.',
    isOpen: false
  },
  {
    question: 'Quels sont les moyens de paiement acceptés ?',
    answer: 'Nous acceptons les cartes bancaires, Mobile Money (M-Pesa, Airtel Money, Orange Money), et les espèces à nos agences.',
    isOpen: false
  },
  {
    question: 'Puis-je modifier ma réservation ?',
    answer: 'Oui, vous pouvez modifier votre réservation jusqu\'à 24 heures avant le départ. Des frais de modification peuvent s\'appliquer.',
    isOpen: false
  },
  {
    question: 'Comment obtenir mon billet électronique ?',
    answer: 'Après paiement, votre billet électronique est envoyé par email et disponible dans votre espace client sous "Mes Billets".',
    isOpen: false
  },
  {
    question: 'Que faire en cas de retard ou d\'annulation ?',
    answer: 'En cas de retard ou d\'annulation de notre part, vous serez notifié par SMS et email. Vous aurez le choix entre un remboursement complet ou un report sur un prochain voyage.',
    isOpen: false
  }
])

const recentTickets = ref([
  {
    id: '1234',
    subject: 'Problème de paiement',
    description: 'Paiement effectué mais réservation non confirmée',
    status: 'resolved',
    date: '10 Mars 2024'
  },
  {
    id: '1235',
    subject: 'Modification de voyage',
    description: 'Besoin de changer la date de voyage',
    status: 'pending',
    date: '12 Mars 2024'
  },
  {
    id: '1236',
    subject: 'Information sur les bagages',
    description: 'Question sur la politique bagages',
    status: 'open',
    date: '14 Mars 2024'
  }
])

const newTicket = reactive({
  subject: '',
  priority: '',
  description: ''
})

const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}

const submitTicket = () => {
  // Logique pour soumettre le ticket
  console.log('Ticket soumis:', newTicket)
  
  // Réinitialiser le formulaire
  newTicket.subject = ''
  newTicket.priority = ''
  newTicket.description = ''
  
  // Afficher un message de succès (à implémenter)
  alert('Votre ticket a été soumis avec succès. Nous vous répondrons dans les plus brefs délais.')
}
</script>
