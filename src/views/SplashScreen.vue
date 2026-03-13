<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINGg0djBIMHYyaDR2NGgydi00aDR2LTJINHpNNCA0VjBINGg0SDAwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvZz48L3N2Zz4='); background-size: 60px 60px;"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 text-center">
      <!-- Logo Container -->
      <div class="mb-8">
        <div class="relative inline-block">
          <!-- Logo Image -->
          <img 
            src="/images/logo/auth-logo.svg" 
            alt="Rusa Travel" 
            class="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain animate-pulse"
          />
          
          <!-- Glow Effect -->
          <div class="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-30 animate-ping"></div>
        </div>
      </div>

      <!-- Company Name -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
        Rusa Travel
      </h1>
      
      <!-- Tagline -->
      <p class="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 animate-fade-in-up animation-delay-200">
        Votre partenaire de confiance pour tous vos voyages
      </p>

      <!-- Loading Animation -->
      <div class="flex justify-center items-center space-x-2 animate-fade-in-up animation-delay-400">
        <div class="w-3 h-3 bg-white rounded-full animate-bounce" style="animation-delay: 0s;"></div>
        <div class="w-3 h-3 bg-white rounded-full animate-bounce" style="animation-delay: 0.1s;"></div>
        <div class="w-3 h-3 bg-white rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
      </div>

      <!-- Loading Text -->
      <p class="text-blue-100 mt-4 animate-fade-in-up animation-delay-600">
        Chargement de votre expérience...
      </p>
    </div>

    <!-- Bottom Elements -->
    <div class="absolute bottom-8 left-0 right-0 text-center">
      <p class="text-blue-200 text-sm">
        © 2024 Rusa Travel. Tous droits réservés.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

defineOptions({
  name: 'SplashScreen'
})

onMounted(() => {
  // Redirect to home after 3 seconds
  setTimeout(() => {
    window.location.href = '/'
  }, 3000)
})
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}
</style>
