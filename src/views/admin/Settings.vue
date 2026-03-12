<template>
  <div class="space-y-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h1 class="text-2xl font-bold">Configuration</h1>
      <p class="text-gray-600 mt-1">Paramètres de la plateforme</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-4">Paramètres généraux</h2>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nom de la plateforme</label>
          <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg" value="Rusa Travel" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Commission par transaction (%)</label>
          <input type="number" class="w-full px-3 py-2 border border-gray-300 rounded-lg" value="10" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Settings component
</script>
