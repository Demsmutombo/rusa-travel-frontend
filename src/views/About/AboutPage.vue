<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <AppHeader />

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            À propos de <span class="text-yellow-300">Rusa Travel</span>
          </h1>
          <p class="text-xl md:text-2xl text-blue-100">
            Votre partenaire de confiance pour les voyages en République Démocratique du Congo
          </p>
        </div>
      </div>
    </section>

    <!-- Notre Histoire -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <p class="text-gray-600 mb-4">
                Fondée en 2020, Rusa Travel est née d'une vision simple : rendre les transports en RDC 
                plus sûrs, plus fiables et plus accessibles pour tous les Congolais.
              </p>
              <p class="text-gray-600 mb-4">
                Depuis nos débuts modestes avec seulement 3 bus, nous avons grandi pour devenir 
                l'un des leaders du transport routier au Congo, avec une flotte de plus de 150 véhicules 
                desservant les principales villes du pays.
              </p>
              <p class="text-gray-600">
                Notre engagement envers l'excellence et la sécurité nous a permis de gagner 
                la confiance de milliers de voyageurs qui nous font confiance chaque jour pour 
                leurs déplacements professionnels et personnels.
              </p>
            </div>
            <div class="text-center">
              <img 
                src="/images/logo/auth-logo (2).png" 
                alt="Rusa Travel" 
                class="w-48 h-48 mx-auto mb-6"
              />
              <div class="grid grid-cols-3 gap-4 text-center">
                <div class="bg-blue-50 rounded-lg p-4">
                  <div class="text-3xl font-bold text-blue-600">150+</div>
                  <div class="text-sm text-gray-600">Bus en flotte</div>
                </div>
                <div class="bg-blue-50 rounded-lg p-4">
                  <div class="text-3xl font-bold text-blue-600">50+</div>
                  <div class="text-sm text-gray-600">Destinations</div>
                </div>
                <div class="bg-blue-50 rounded-lg p-4">
                  <div class="text-3xl font-bold text-blue-600">1M+</div>
                  <div class="text-sm text-gray-600">Passagers transportés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Valeurs -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Nos Valeurs</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Sécurité</h3>
              <p class="text-gray-600">
                La sécurité de nos passagers est notre priorité absolue. 
                Véhicules entretenus, chauffeurs expérimentés et assurance complète.
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Ponctualité</h3>
              <p class="text-gray-600">
                Nous respectons votre temps. Départs et arrivées programmés avec 
                une précision qui fait notre réputation.
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Service Client</h3>
              <p class="text-gray-600">
                Notre équipe dédiée est disponible 24/7 pour vous assister 
                et garantir une expérience de voyage exceptionnelle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Notre Équipe -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Notre Équipe de Direction</h2>
          <div class="grid md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Jean-Pierre Mbuyi</h3>
              <p class="text-gray-600 text-sm mb-2">Directeur Général</p>
              <p class="text-gray-500 text-xs">15 ans d'expérience dans le transport</p>
            </div>
            <div class="text-center">
              <div class="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Marie Kabeya</h3>
              <p class="text-gray-600 text-sm mb-2">Directrice des Opérations</p>
              <p class="text-gray-500 text-xs">Experte en logistique et gestion de flotte</p>
            </div>
            <div class="text-center">
              <div class="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Antoine Tshimanga</h3>
              <p class="text-gray-600 text-sm mb-2">Directeur Commercial</p>
              <p class="text-gray-500 text-xs">Spécialiste du développement commercial</p>
            </div>
            <div class="text-center">
              <div class="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Sophie Ntumba</h3>
              <p class="text-gray-600 text-sm mb-2">Directrice du Service Client</p>
              <p class="text-gray-500 text-xs">Passionnée par l'expérience client</p>
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
import AppHeader from '@/components/common/AppHeader.vue'

defineOptions({
  name: 'AboutPage'
})
</script>
