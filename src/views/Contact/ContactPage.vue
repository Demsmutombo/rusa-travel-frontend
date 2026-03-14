<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <AppHeader />

    <!-- Hero Section - Contact -->
    <section class="relative h-96 flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg" 
          alt="Contactez Rusa Travel" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 text-center text-white px-4">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Contactez <span class="text-yellow-400">Rusa Travel</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Notre équipe est à votre disposition 24/7 pour répondre à toutes vos questions
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form and Info -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <!-- Contact Form -->
            <div class="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
              
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="votre.email@example.com"
                  />
                </div>

                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    v-model="formData.phone"
                    type="tel"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+243 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    v-model="formData.subject"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="reservation">Réservation</option>
                    <option value="information">Demande d'information</option>
                    <option value="reclamation">Réclamation</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    rows="4"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
                </button>
              </form>

              <!-- Success Message -->
              <div v-if="showSuccess" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-green-800">Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              </div>
            </div>

            <!-- Contact Information -->
            <div class="space-y-8">
              <!-- Contact Info -->
              <div class="bg-white rounded-lg shadow-lg p-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h2>
                
                <div class="space-y-4">
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 mb-1">Téléphone</h3>
                      <p class="text-gray-600">+243 123 456 789</p>
                      <p class="text-gray-600">+243 998 765 432 (Service client 24/7)</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
                      <p class="text-gray-600">info@rusatravel.cd</p>
                      <p class="text-gray-600">support@rusatravel.cd</p>
                      <p class="text-gray-600">reservations@rusatravel.cd</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 mb-1">Adresse</h3>
                      <p class="text-gray-600">Avenue des Aviateurs, n°1234</p>
                      <p class="text-gray-600">Gombe, Kinshasa</p>
                      <p class="text-gray-600">République Démocratique du Congo</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 mb-1">Heures d'ouverture</h3>
                      <p class="text-gray-600">Lundi - Vendredi: 6h00 - 22h00</p>
                      <p class="text-gray-600">Samedi: 6h00 - 20h00</p>
                      <p class="text-gray-600">Dimanche: 7h00 - 18h00</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Social Media -->
              <div class="bg-white rounded-lg shadow-lg p-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Suivez-nous</h2>
                <div class="flex space-x-4">
                  <a href="#" class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" class="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" class="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069 3.204 0 3.584.013 4.849.069 3.252.148 4.771 1.699 4.919 4.92.058 1.265.07 1.645.07 4.849zm-6.965-8.635a1.414 1.414 0 100 2.828 1.414 1.414 0 000-2.828zm5.317 1.414a3.903 3.903 0 10-7.806 0 3.903 3.903 0 007.806 0z"/>
                    </svg>
                  </a>
                  <a href="#" class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Questions fréquentes</h2>
          
          <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index" class="border border-gray-200 rounded-lg">
              <button
                @click="toggleFaq(index)"
                class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span class="font-medium text-gray-900">{{ faq.question }}</span>
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
              <div v-show="faq.isOpen" class="px-6 py-4 border-t border-gray-200">
                <p class="text-gray-600">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h3 class="font-bold text-lg mb-4">Rusa Travel</h3>
            <p class="text-gray-400">
              Votre partenaire de confiance pour les voyages en toute sécurité en RDC.
            </p>
          </div>
          <div>
            <h3 class="font-bold mb-4">Liens rapides</h3>
            <ul class="space-y-2 text-gray-400">
              <li><router-link to="/" class="hover:text-white transition">Accueil</router-link></li>
              <li><router-link to="/about" class="hover:text-white transition">À propos</router-link></li>
              <li><router-link to="/contact" class="hover:text-white transition">Contact</router-link></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-4">Services</h3>
            <ul class="space-y-2 text-gray-400">
              <li><router-link to="/search" class="hover:text-white transition">Réservations</router-link></li>
              <li><router-link to="/login" class="hover:text-white transition">Espace client</router-link></li>
              <li><router-link to="/login" class="hover:text-white transition">Transport de marchandises</router-link></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-4">Contact</h3>
            <ul class="space-y-2 text-gray-400">
              <li>+243 123 456 789</li>
              <li>info@rusatravel.cd</li>
              <li>Kinshasa, RDC</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Rusa Travel. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/common/AppHeader.vue'

defineOptions({
  name: 'ContactPage'
})

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FAQ {
  question: string
  answer: string
  isOpen: boolean
}

const formData = ref<FormData>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const faqs = ref<FAQ[]>([
  {
    question: 'Comment puis-je réserver un billet ?',
    answer: 'Vous pouvez réserver un billet directement sur notre site web, via notre application mobile, ou en appelant notre service client au +243 123 456 789.',
    isOpen: false
  },
  {
    question: 'Puis-je annuler ma réservation ?',
    answer: 'Oui, vous pouvez annuler votre réservation jusqu\'à 24 heures avant le départ pour un remboursement complet. Les annulations moins de 24 heures avant sont soumises à des frais.',
    isOpen: false
  },
  {
    question: 'Quels sont les modes de paiement acceptés ?',
    answer: 'Nous acceptons les paiements par carte bancaire, mobile money (Orange Money, Airtel Money, M-Pesa), virement bancaire et espèces à nos agences.',
    isOpen: false
  },
  {
    question: 'Les bagages sont-ils inclus dans le prix ?',
    answer: 'Chaque passager a droit à un bagage à main et un bagage en soute jusqu\'à 20kg. Des frais supplémentaires s\'appliquent pour les bagages excédentaires.',
    isOpen: false
  },
  {
    question: 'Y a-t-il des réductions pour les groupes ?',
    answer: 'Oui, nous offrons des réductions pour les groupes de 10 personnes et plus. Contactez notre service commercial pour obtenir un devis personnalisé.',
    isOpen: false
  }
])

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Réinitialiser le formulaire
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    
    showSuccess.value = true
    
    // Masquer le message de succès après 5 secondes
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
  } finally {
    isSubmitting.value = false
  }
}

const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>
