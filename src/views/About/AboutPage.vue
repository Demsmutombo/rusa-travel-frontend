<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <AppHeader />

    <!-- Hero Section - À propos -->
    <section class="relative h-96 flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg" 
          alt="À propos de Rusa Travel" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 text-center text-white px-4">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            À propos de <span class="text-yellow-400">Rusa Travel</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Votre partenaire de confiance pour les voyages en République Démocratique du Congo
          </p>
        </div>
      </div>
    </section>

    <!-- Notre Histoire -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <div class="space-y-4 text-gray-600">
                <p class="text-base sm:text-lg leading-relaxed">
                  Fondée en 2020, Rusa Travel est née d'une vision simple : rendre les transports en RDC 
                  plus sûrs, plus fiables et plus accessibles pour tous les Congolais.
                </p>
                <p class="text-base sm:text-lg leading-relaxed">
                  Depuis nos débuts modestes avec seulement 3 bus, nous avons grandi pour devenir 
                  l'un des leaders du transport routier au Congo, avec une flotte de plus de 150 véhicules 
                  desservant les principales villes du pays.
                </p>
                <p class="text-base sm:text-lg leading-relaxed">
                  Notre engagement envers l'excellence et la sécurité nous a permis de gagner 
                  la confiance de milliers de voyageurs qui nous font confiance chaque jour pour 
                  leurs déplacements professionnels et personnels.
                </p>
              </div>
            </div>
            <div class="text-center">
              <div class="relative">
                <img 
                  src="https://picsum.photos/seed/rusa-travel-company/400/400.jpg" 
                  alt="Rusa Travel Company" 
                  class="w-full h-auto rounded-2xl shadow-2xl mb-6 object-cover"
                />
                <div class="absolute -bottom-4 -right-4 bg-yellow-400 text-blue-900 rounded-xl p-4 shadow-xl">
                  <div class="text-2xl font-bold">4 ans</div>
                  <div class="text-sm">d'excellence</div>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4 text-center">
                <div class="bg-blue-50 rounded-xl p-4 sm:p-6">
                  <div class="text-2xl sm:text-3xl font-bold text-blue-600">150+</div>
                  <div class="text-xs sm:text-sm text-gray-600">Véhicules</div>
                </div>
                <div class="bg-green-50 rounded-xl p-4 sm:p-6">
                  <div class="text-2xl sm:text-3xl font-bold text-green-600">50K+</div>
                  <div class="text-xs sm:text-sm text-gray-600">Clients</div>
                </div>
                <div class="bg-purple-50 rounded-xl p-4 sm:p-6">
                  <div class="text-2xl sm:text-3xl font-bold text-purple-600">24/7</div>
                  <div class="text-xs sm:text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Notre Mission -->
    <section class="py-12 sm:py-16 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div class="order-2 md:order-1">
              <img 
                src="https://picsum.photos/seed/transport-mission/500/300.jpg" 
                alt="Notre mission" 
                class="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div class="order-1 md:order-2">
              <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Notre Mission</h2>
              <div class="space-y-4">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-2">Sécurité Avant Tout</h3>
                    <p class="text-gray-600">Garantir des voyages sécurisés avec des véhicules bien entretenus et des chauffeurs expérimentés.</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-2">Service Client Exceptionnel</h3>
                    <p class="text-gray-600">Offrir un support 24/7 pour assister nos voyageurs à chaque étape de leur trajet.</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-2">Tarifs Accessibles</h3>
                    <p class="text-gray-600">Proposer des prix compétitifs pour rendre le transport accessible à tous.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Valeurs -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Les principes qui guident notre action au quotidien
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Fiabilité</h3>
            <p class="text-gray-600">Des horaires respectés et un service constant</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Ponctualité</h3>
            <p class="text-gray-600">Respect du temps de nos voyageurs</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Bienveillance</h3>
            <p class="text-gray-600">Le confort et la sécurité de nos clients</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Innovation</h3>
            <p class="text-gray-600">Amélioration continue de nos services</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Équipe -->
    <section class="py-12 sm:py-16 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Des professionnels passionnés à votre service
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <img 
              src="https://picsum.photos/seed/ceo-rusa-travel/400/300.jpg" 
              alt="Directeur Général" 
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Jean-Marc Mukendi</h3>
              <p class="text-blue-600 mb-4">Directeur Général</p>
              <p class="text-gray-600">Plus de 15 ans d'expérience dans le transport routier en RDC</p>
            </div>
          </div>
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <img 
              src="https://picsum.photos/seed/operations-manager/400/300.jpg" 
              alt="Directeur des Opérations" 
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Marie Kabila</h3>
              <p class="text-blue-600 mb-4">Directrice des Opérations</p>
              <p class="text-gray-600">Expertise en logistique et gestion de flotte</p>
            </div>
          </div>
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <img 
              src="https://picsum.photos/seed/customer-service/400/300.jpg" 
              alt="Responsable Clientèle" 
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Pierre Ntumba</h3>
              <p class="text-blue-600 mb-4">Responsable Clientèle</p>
              <p class="text-gray-600">Dédié à l'excellence du service client</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

defineOptions({
  name: 'AboutPage'
})
</script>
