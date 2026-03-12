<template>
  <div class="space-y-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h1 class="text-2xl font-bold">Transactions</h1>
      <p class="text-gray-600 mt-1">Suivez toutes les transactions financières</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="space-y-4">
        <div class="border border-gray-200 rounded-lg p-4">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-semibold">TXN123456789</h3>
              <p class="text-gray-600">Jean Mugisha • M-Pesa</p>
              <p class="text-sm text-gray-500">Kigali → Bujumbura • 15 Mars 2024</p>
            </div>
            <div class="text-right">
              <span class="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">Succès</span>
              <p class="font-semibold mt-2">15,000 Fb</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Transactions management component

// Define component name to satisfy ESLint
defineOptions({
  name: 'TransactionsView'
})
</script>
