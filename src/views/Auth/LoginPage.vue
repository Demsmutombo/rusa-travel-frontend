<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
    <div class="max-w-md w-full mx-4">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-white mb-2">Rusa Travel</h1>
        <p class="text-blue-100">Plateforme de Transport</p>
      </div>

      <!-- Login Card -->
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Connexion</h2>
          <p class="text-gray-600">Accédez à votre espace</p>
        </div>

        <!-- Demo Info -->
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p class="text-blue-800 text-sm text-center">
            <strong>Mode Démonstration</strong><br>
            Utilisez les emails ci-dessous pour tester
          </p>
        </div>

        <!-- Role List -->
        <div class="space-y-2 mb-6">
          <div class="bg-gray-50 rounded-lg p-3">
            <p class="text-sm"><strong>Admin:</strong> admin@rusatravel.com</p>
          </div>
          <div class="bg-gray-50 rounded-lg p-3">
            <p class="text-sm"><strong>Manager:</strong> manager@rusatravel.com</p>
          </div>
          <div class="bg-gray-50 rounded-lg p-3">
            <p class="text-sm"><strong>Client:</strong> client@rusatravel.com</p>
          </div>
        </div>

        <!-- Login Button -->
        <button 
          onclick="window.location.href='/'"
          class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Accéder à la Connexion
        </button>
        
        <p class="text-xs text-gray-500 text-center mt-3">
          Mot de passe: utilisez n'importe quelle valeur
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>
