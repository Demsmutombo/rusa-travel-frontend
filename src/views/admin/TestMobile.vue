<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Test Navigation Mobile</h1>
    
    <div class="bg-white rounded-lg shadow p-6 mb-6">
      <h2 class="text-lg font-semibold mb-4">Instructions de test</h2>
      <div class="space-y-3 text-sm text-gray-600">
        <p>📱 <strong>Sur mobile :</strong></p>
        <ul class="list-disc list-inside space-y-1 ml-4">
          <li>Cliquez sur le bouton ☰ en haut à gauche pour ouvrir le menu</li>
          <li>Le menu doit glisser depuis la gauche avec un overlay sombre</li>
          <li>Cliquez sur l'overlay ou le bouton ✕ pour fermer</li>
          <li>Les liens de navigation doivent fermer automatiquement le menu</li>
        </ul>
        
        <p>🖥️ <strong>Sur desktop :</strong></p>
        <ul class="list-disc list-inside space-y-1 ml-4">
          <li>La sidebar doit toujours être visible</li>
          <li>Le bouton hamburger doit être caché</li>
          <li>Redimensionnez la fenêtre pour tester la transition</li>
        </ul>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow p-6 mb-6">
      <h2 class="text-lg font-semibold mb-4">État actuel</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 bg-gray-50 rounded">
          <p class="text-sm font-medium text-gray-700">Largeur d'écran :</p>
          <p class="text-lg font-bold text-blue-600">{{ screenWidth }}px</p>
        </div>
        <div class="p-4 bg-gray-50 rounded">
          <p class="text-sm font-medium text-gray-700">Type d'affichage :</p>
          <p class="text-lg font-bold text-green-600">{{ displayType }}</p>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-lg font-semibold mb-4">Actions de test</h2>
      <div class="flex flex-wrap gap-3">
        <button 
          @click="testMobileMenu"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Test Menu Mobile
        </button>
        <button 
          @click="showAlert"
          class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Test Alert
        </button>
        <button 
          @click="checkResponsive"
          class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Vérifier Responsive
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineOptions({
  name: 'TestMobile'
})

const screenWidth = ref(window.innerWidth)
const displayType = ref('')

const updateScreenSize = () => {
  screenWidth.value = window.innerWidth
  if (window.innerWidth < 640) {
    displayType.value = 'Mobile'
  } else if (window.innerWidth < 1024) {
    displayType.value = 'Tablette'
  } else {
    displayType.value = 'Desktop'
  }
}

const testMobileMenu = () => {
  alert('Test du menu mobile : Cliquez sur le bouton ☰ en haut à gauche')
}

const showAlert = () => {
  alert('Navigation mobile testée avec succès !')
}

const checkResponsive = () => {
  const message = `
Largeur : ${screenWidth.value}px
Type : ${displayType.value}
Breakpoints :
- Mobile: < 640px
- Tablette: 640px - 1023px  
- Desktop: ≥ 1024px
  `
  alert(message.trim())
}

onMounted(() => {
  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})
</script>
