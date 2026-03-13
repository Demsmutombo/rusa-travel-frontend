<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <AppHeader />

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              {{ destination.name }}
            </h1>
            <p class="text-xl text-blue-100 mb-8">
              {{ destination.description }}
            </p>
            <div class="flex items-center justify-center space-x-6">
              <div class="text-center">
                <p class="text-3xl font-bold text-yellow-300">{{ destination.price }} Fb</p>
                <p class="text-blue-100">À partir de</p>
              </div>
              <div class="text-center">
                <p class="text-3xl font-bold text-yellow-300">{{ destination.duration }}</p>
                <p class="text-blue-100">Durée du trajet</p>
              </div>
              <div class="text-center">
                <p class="text-3xl font-bold text-yellow-300">{{ destination.frequency }}</p>
                <p class="text-blue-100">Départs par jour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10 pointer-events-none -z-10">
        <div class="absolute inset-0 bg-repeat" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINGg0djBIMHYyaDR2NGgydi00aDR2LTJINHpNNCA0VjBINGg0SDAwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvZz48L3N2Zz4='); background-size: 60px 60px;"></div>
      </div>
    </section>

    <!-- Destination Details -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Main Content -->
            <div class="md:col-span-2 space-y-8">
              <!-- Description -->
              <div class="bg-white rounded-lg shadow-lg p-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">À propos de {{ destination.name }}</h2>
                <div class="prose prose-lg text-gray-600">
                  <p class="mb-4">{{ destination.fullDescription }}</p>
                  <p class="mb-4">{{ destination.additionalInfo }}</p>
                </div>
              </div>

              <!-- Services -->
              <div class="bg-white rounded-lg shadow-lg p-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Services inclus</h2>
                <div class="grid grid-cols-2 gap-4">
                  <div v-for="service in destination.services" :key="service.name" class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span class="text-gray-700">{{ service.name }}</span>
                  </div>
                </div>
              </div>

              <!-- Schedule -->
              <div class="bg-white rounded-lg shadow-lg p-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Horaires de départ</h2>
                <div class="space-y-3">
                  <div v-for="schedule in destination.schedules" :key="schedule.time" class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span class="font-medium text-gray-900">{{ schedule.time }}</span>
                    <span class="text-gray-600">{{ schedule.frequency }}</span>
                    <span class="text-blue-600 font-medium">{{ schedule.price }} Fb</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="space-y-8">
              <!-- Booking Card -->
              <div class="bg-white rounded-lg shadow-lg p-6 sticky top-6">
                <h3 class="text-xl font-bold text-gray-900 mb-4">Réserver votre trajet</h3>
                
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Date de départ</label>
                    <input
                      v-model="bookingData.date"
                      type="date"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Heure de départ</label>
                    <select
                      v-model="bookingData.time"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Sélectionnez une heure</option>
                      <option v-for="schedule in destination.schedules" :key="schedule.time" :value="schedule.time">
                        {{ schedule.time }} - {{ schedule.price }} Fb
                      </option>
                    </select>
                  </div>
                  
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nombre de passagers</label>
                    <input
                      v-model="bookingData.passengers"
                      type="number"
                      min="1"
                      max="10"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div class="mt-6 pt-6 border-t border-gray-200">
                  <div class="flex justify-between items-center mb-4">
                    <span class="text-gray-600">Total estimé:</span>
                    <span class="text-2xl font-bold text-blue-600">{{ totalPrice }} Fb</span>
                  </div>
                  
                  <button
                    @click="handleBooking"
                    class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 font-medium transition"
                  >
                    Réserver maintenant
                  </button>
                </div>
              </div>

              <!-- Contact Info -->
              <div class="bg-white rounded-lg shadow-lg p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-4">Besoin d'aide?</h3>
                <div class="space-y-3">
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span class="text-gray-700">+243 123 456 789</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span class="text-gray-700">info@rusatravel.cd</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Destinations -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">Autres destinations populaires</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="related in relatedDestinations" :key="related.id" @click="goToDestination(related.id)" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
              <div class="h-32" :class="related.colorClass"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">{{ related.name }}</h3>
                <p class="text-gray-600 mb-4">{{ related.description }}</p>
                <p class="text-lg font-bold text-blue-600">À partir de {{ related.price }} Fb</p>
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
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
                <img 
                  src="/images/logo/auth-logo (2).png" 
                  alt="Rusa Travel" 
                  class="w-full h-full object-contain"
                />
              </div>
              <span class="text-xl font-bold">Rusa Travel</span>
            </div>
            <p class="text-gray-400">Votre partenaire de confiance pour tous vos voyages en RDC</p>
          </div>
          <div>
            <h3 class="font-bold mb-4">Liens rapides</h3>
            <ul class="space-y-2 text-gray-400">
              <li><router-link to="/about" class="hover:text-white transition">À propos</router-link></li>
              <li><router-link to="/search" class="hover:text-white transition">Destinations</router-link></li>
              <li><router-link to="/search" class="hover:text-white transition">Tarifs</router-link></li>
              <li><router-link to="/contact" class="hover:text-white transition">Contact</router-link></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-4">Services</h3>
            <ul class="space-y-2 text-gray-400">
              <li><router-link to="/search" class="hover:text-white transition">Réservations</router-link></li>
              <li><router-link to="/login" class="hover:text-white transition">Transport de marchandises</router-link></li>
              <li><router-link to="/login" class="hover:text-white transition">Services entreprises</router-link></li>
              <li><router-link to="/contact" class="hover:text-white transition">Assistance 24/7</router-link></li>
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
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppHeader from '@/components/common/AppHeader.vue'

defineOptions({
  name: 'DestinationDetailPage'
})

interface Service {
  name: string
  included: boolean
}

interface Schedule {
  time: string
  frequency: string
  price: number
}

interface Destination {
  id: string
  name: string
  description: string
  fullDescription: string
  additionalInfo: string
  price: number
  duration: string
  frequency: string
  colorClass: string
  services: Service[]
  schedules: Schedule[]
}

const route = useRoute()
const router = useRouter()

const bookingData = ref({
  date: '',
  time: '',
  passengers: 1
})

// Données des destinations
const destinations: Record<string, Destination> = {
  kinshasa: {
    id: 'kinshasa',
    name: 'Kinshasa',
    description: 'Capitale vibrante',
    fullDescription: 'Kinshasa, la capitale dynamique de la République Démocratique du Congo, est une ville pleine d\'énergie et de contrastes. Située sur les rives du fleuve Congo, elle offre un mélange unique de culture moderne et traditionnelle.',
    additionalInfo: 'Avec ses marchés animés, sa cuisine savoureuse et sa vie nocturne trépidante, Kinshasa est une destination incontournable pour découvrir le cœur battant du pays.',
    price: 25000,
    duration: 'Variable',
    frequency: '12 départs/jour',
    colorClass: 'bg-gradient-to-br from-blue-400 to-blue-600',
    services: [
      { name: 'Climatisation', included: true },
      { name: 'WiFi gratuit', included: true },
      { name: 'Prises électriques', included: true },
      { name: 'Bagage 20kg', included: true },
      { name: 'Boissons', included: true },
      { name: 'Snacks', included: false }
    ],
    schedules: [
      { time: '06:00', frequency: 'Quotidien', price: 25000 },
      { time: '08:00', frequency: 'Quotidien', price: 25000 },
      { time: '10:00', frequency: 'Quotidien', price: 30000 },
      { time: '14:00', frequency: 'Quotidien', price: 30000 },
      { time: '16:00', frequency: 'Quotidien', price: 25000 },
      { time: '18:00', frequency: 'Quotidien', price: 35000 }
    ]
  },
  lubumbashi: {
    id: 'lubumbashi',
    name: 'Lubumbashi',
    description: 'Capitale minière',
    fullDescription: 'Lubumbashi, deuxième plus grande ville du pays, est le cœur battant de l\'industrie minière congolaise. Cette ville moderne et bien organisée est connue pour son économie dynamique et son climat agréable.',
    additionalInfo: 'Surnommée la "capitale du cuivre", Lubumbashi offre une qualité de vie exceptionnelle avec ses espaces verts, ses restaurants raffinés et sa vie culturelle riche.',
    price: 85000,
    duration: '12-14h',
    frequency: '6 départs/jour',
    colorClass: 'bg-gradient-to-br from-green-400 to-green-600',
    services: [
      { name: 'Climatisation', included: true },
      { name: 'WiFi gratuit', included: true },
      { name: 'Prises électriques', included: true },
      { name: 'Bagage 25kg', included: true },
      { name: 'Repas inclus', included: true },
      { name: 'Sièges VIP', included: false }
    ],
    schedules: [
      { time: '05:00', frequency: 'Quotidien', price: 85000 },
      { time: '07:00', frequency: 'Quotidien', price: 90000 },
      { time: '12:00', frequency: 'Quotidien', price: 95000 },
      { time: '18:00', frequency: 'Quotidien', price: 100000 },
      { time: '22:00', frequency: 'Quotidien', price: 85000 },
      { time: '23:59', frequency: 'Quotidien', price: 90000 }
    ]
  },
  goma: {
    id: 'goma',
    name: 'Goma',
    description: 'Ville lacustre',
    fullDescription: 'Goma, située sur les rives du magnifique lac Kivu, est une ville au charme unique avec ses paysages spectaculaires et son ambiance détendue. Cette ville touristique est la porte d\'entrée vers l\'Est du Congo.',
    additionalInfo: 'Avec vue sur le lac Kivu et proche des volcans, Goma offre des opportunités exceptionnelles pour le tourisme d\'aventure et la découverte de la nature.',
    price: 65000,
    duration: '10-12h',
    frequency: '4 départs/jour',
    colorClass: 'bg-gradient-to-br from-purple-400 to-purple-600',
    services: [
      { name: 'Climatisation', included: true },
      { name: 'WiFi gratuit', included: false },
      { name: 'Prises électriques', included: true },
      { name: 'Bagage 20kg', included: true },
      { name: 'Guide touristique', included: false },
      { name: 'Assurance voyage', included: false }
    ],
    schedules: [
      { time: '06:30', frequency: 'Quotidien', price: 65000 },
      { time: '09:00', frequency: 'Lun-Ven', price: 70000 },
      { time: '13:00', frequency: 'Quotidien', price: 65000 },
      { time: '17:00', frequency: 'Quotidien', price: 75000 }
    ]
  },
  kisangani: {
    id: 'kisangani',
    name: 'Kisangani',
    description: 'Cité de Stanley',
    fullDescription: 'Kisangani, anciennement Stanleyville, est une ville historique située sur les chutes du fleuve Congo. C\'est une importante ville portuaire et commerciale au cœur de la forêt équatoriale.',
    additionalInfo: 'Connue pour ses magnifiques chutes et son riche patrimoine historique, Kisangani est un carrefour commercial important entre l\'est et l\'ouest du pays.',
    price: 55000,
    duration: '8-10h',
    frequency: '5 départs/jour',
    colorClass: 'bg-gradient-to-br from-orange-400 to-orange-600',
    services: [
      { name: 'Climatisation', included: true },
      { name: 'WiFi gratuit', included: false },
      { name: 'Prises électriques', included: true },
      { name: 'Bagage 20kg', included: true },
      { name: 'Film à bord', included: true },
      { name: 'Journal', included: false }
    ],
    schedules: [
      { time: '07:00', frequency: 'Quotidien', price: 55000 },
      { time: '10:00', frequency: 'Quotidien', price: 60000 },
      { time: '14:00', frequency: 'Quotidien', price: 55000 },
      { time: '18:00', frequency: 'Quotidien', price: 65000 },
      { time: '21:00', frequency: 'Lun-Ven', price: 60000 }
    ]
  }
}

const destination = computed(() => {
  const destinationId = route.params.id as string
  return destinations[destinationId] || destinations.kinshasa
})

const relatedDestinations = computed(() => {
  const currentId = destination.value.id
  return Object.values(destinations)
    .filter(dest => dest.id !== currentId)
    .slice(0, 3)
})

const totalPrice = computed(() => {
  const selectedSchedule = destination.value.schedules.find(s => s.time === bookingData.value.time)
  const basePrice = selectedSchedule?.price || destination.value.price
  return basePrice * bookingData.value.passengers
})

const goToDestination = (destinationId: string) => {
  router.push(`/destination/${destinationId}`)
}

const handleBooking = () => {
  // Rediriger vers la page de réservation avec les données pré-remplies
  router.push({
    name: 'SearchPublic',
    query: {
      to: destination.value.name,
      date: bookingData.value.date,
      time: bookingData.value.time,
      passengers: bookingData.value.passengers.toString()
    }
  })
}

onMounted(() => {
  // Scroll to top
  window.scrollTo(0, 0)
})
</script>
