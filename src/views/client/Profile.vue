<template>
  <div class="space-y-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h1 class="text-2xl font-bold">Mon profil</h1>
      <p class="text-gray-600 mt-1">Gérez vos informations personnelles</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-4">Informations personnelles</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
          <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg" value="Jean Mugisha" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg" value="jean@example.com" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
          <input type="tel" class="w-full px-3 py-2 border border-gray-300 rounded-lg" value="+250 788 123 456" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Pièce d'identité</label>
          <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg" value="1199080012345678" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Profile component
</script>
