<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div class="container mx-auto px-4 py-16">
        <div class="text-center">
          <img 
            src="/images/logo/auth-logo.svg" 
            alt="Rusa Travel" 
            class="mx-auto h-20 w-auto mb-8"
          />
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            Bienvenue sur Rusa Travel
          </h1>
          <p class="text-xl md:text-2xl mb-8">
            Votre plateforme de voyage de confiance en République Démocratique du Congo
          </p>
          <div class="flex justify-center">
            <router-link
              to="/auth/signin"
              class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Se connecter
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Pas de logique de recherche pour les utilisateurs non connectés
</script>
