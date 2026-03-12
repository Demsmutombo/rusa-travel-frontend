<template>
  <div style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: white; display: flex !important; align-items: center !important; justify-content: center !important; z-index: 99999 !important; margin: 0 !important; padding: 0 !important;">
    <div style="text-align: center;">
      <img 
        src="/images/logo/auth-logo.svg" 
        alt="Rusa Travel" 
        style="width: 128px; height: 128px; margin-bottom: 32px;"
      />
      <div style="display: flex !important; justify-content: center; gap: 8px; margin-bottom: 16px;">
        <div style="width: 8px; height: 8px; background: #3B82F6; border-radius: 50%; animation: bounce 1.4s infinite !important;"></div>
        <div style="width: 8px; height: 8px; background: #3B82F6; border-radius: 50%; animation: bounce 1.4s infinite !important; animation-delay: 0.1s !important;"></div>
        <div style="width: 8px; height: 8px; background: #3B82F6; border-radius: 50%; animation: bounce 1.4s infinite !important; animation-delay: 0.2s !important;"></div>
      </div>
      <p style="color: #6B7280; font-size: 14px; margin: 0; font-weight: bold;">Démarrage du système...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/home')
  }, 2000)
})

// Réinitialiser les styles lors du démontage
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style>
@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

body {
  overflow: hidden !important;
  margin: 0 !important;
  padding: 0 !important;
}

* {
  box-sizing: border-box !important;
}
</style>
