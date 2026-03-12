<template>
  <ThemeProvider>
    <div>
      <RouterView />
    </div>
  </ThemeProvider>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import ThemeProvider from '@/components/layout/ThemeProvider.vue'

onMounted(() => {
  console.log('Application Rusa Travel initialisée')
})
</script>
