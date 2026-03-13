<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <AppHeader />

    <!-- Hero Section - Style Liveto Travel -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image - Transport/Voyage -->
      <div class="absolute inset-0">
        <img 
          src="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg" 
          alt="Transport de voyage" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 text-center text-white px-4">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Voyagez en toute <span class="text-yellow-400">sécurité</span> avec Rusa Travel
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            La plateforme de transport la plus fiable de la République Démocratique du Congo
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              @click="goToSearch"
              class="px-10 py-4 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-300 font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Réserver maintenant
            </button>
            <button
              @click="goToLogin"
              class="px-10 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 font-bold text-lg transition-all duration-300 transform hover:scale-105 border border-white/30"
            >
              Connexion
            </button>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Commencez à rêver - Section Inspirée -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Commencez à <span class="text-blue-600">rêver</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Aventure ou immersion culturelle ? Explorer les villes vibrantes du Congo ou les paysages spectaculaires ? 
            Rusa Travel a sélectionné le meilleur de ce que nos destinations ont à offrir.
          </p>
        </div>

        <!-- Search Section - Style Premium -->
        <div class="max-w-5xl mx-auto mb-16">
          <div class="bg-gray-50 rounded-2xl p-8 shadow-xl">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div class="relative">
                <label class="block text-sm font-semibold text-gray-700 mb-3">
                  <svg class="w-5 h-5 inline mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                  Départ
                </label>
                <div class="relative">
                  <select 
                    v-model="searchData.departure" 
                    class="w-full px-4 py-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white hover:border-blue-400 transition-all text-lg"
                  >
                    <option value="">Choisissez votre ville</option>
                    <option value="Kinshasa">🏙️ Kinshasa</option>
                    <option value="Lubumbashi">⛏️ Lubumbashi</option>
                    <option value="Goma">🏞️ Goma</option>
                    <option value="Kisangani">🌊 Kisangani</option>
                    <option value="Kolwezi">💎 Kolwezi</option>
                    <option value="Matadi">🌊 Matadi</option>
                    <option value="Bukavu">🏞️ Bukavu</option>
                    <option value="Mbuji-Mayi">💎 Mbuji-Mayi</option>
                  </select>
                  <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div class="relative">
                <label class="block text-sm font-semibold text-gray-700 mb-3">
                  <svg class="w-5 h-5 inline mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Destination
                </label>
                <div class="relative">
                  <select 
                    v-model="searchData.destination" 
                    class="w-full px-4 py-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white hover:border-blue-400 transition-all text-lg"
                  >
                    <option value="">Choisissez votre destination</option>
                    <option value="Lubumbashi">⛏️ Lubumbashi</option>
                    <option value="Kinshasa">🏙️ Kinshasa</option>
                    <option value="Goma">🏞️ Goma</option>
                    <option value="Kisangani">🌊 Kisangani</option>
                    <option value="Kolwezi">💎 Kolwezi</option>
                    <option value="Matadi">🌊 Matadi</option>
                    <option value="Bukavu">🏞️ Bukavu</option>
                    <option value="Mbuji-Mayi">💎 Mbuji-Mayi</option>
                  </select>
                  <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div class="relative">
                <label class="block text-sm font-semibold text-gray-700 mb-3">
                  <svg class="w-5 h-5 inline mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Date
                </label>
                <div class="relative">
                  <input 
                    v-model="searchData.date" 
                    type="date" 
                    :min="minDate"
                    class="w-full px-4 py-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white hover:border-blue-400 transition-all text-lg"
                  />
                  <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div class="flex items-end">
                <button 
                  @click="swapLocations"
                  class="w-full px-4 py-4 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-all duration-300 flex items-center justify-center space-x-2 group"
                  title="Échanger départ et destination"
                >
                  <svg class="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                  <span class="font-medium">Échanger</span>
                </button>
              </div>
            </div>
            
            <button 
              @click="handleSearch" 
              class="w-full mt-8 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-3 shadow-lg"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Rechercher votre trajet</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Destinations Populaires - Style Premium -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Destinations <span class="text-blue-600">Populaires</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos destinations les plus prisées et commencez à planifier votre prochaine aventure
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <router-link to="/destination/kinshasa" class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 block">
            <div class="h-64 relative overflow-hidden">
              <img 
                src="https://picsum.photos/seed/kinshasa-bus/400/300.jpg" 
                alt="Bus de transport Kinshasa" 
                class="w-full h-full object-cover"
                onerror="this.style.display='none'"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white">
                <h3 class="text-2xl font-bold mb-2">Kinshasa</h3>
                <p class="text-lg opacity-90">Capitale vibrante</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-lg font-bold text-blue-600 mb-2">À partir de 50,000 FC</p>
              <div class="flex items-center text-gray-600">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>12 départs/jour</span>
              </div>
            </div>
          </router-link>
          
          <router-link to="/destination/lubumbashi" class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 block">
            <div class="h-64 relative overflow-hidden">
              <img 
                src="https://picsum.photos/seed/lubumbashi-transport/400/300.jpg" 
                alt="Transport routier Lubumbashi" 
                class="w-full h-full object-cover"
                onerror="this.style.display='none'"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white">
                <h3 class="text-2xl font-bold mb-2">Lubumbashi</h3>
                <p class="text-lg opacity-90">Capitale minière</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-lg font-bold text-blue-600 mb-2">À partir de 170,000 FC</p>
              <div class="flex items-center text-gray-600">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>6 départs/jour</span>
              </div>
            </div>
          </router-link>
          
          <router-link to="/destination/goma" class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 block">
            <div class="h-64 relative overflow-hidden">
              <img 
                src="https://picsum.photos/seed/goma-voyage/400/300.jpg" 
                alt="Voyage en bus vers Goma" 
                class="w-full h-full object-cover"
                onerror="this.style.display='none'"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white">
                <h3 class="text-2xl font-bold mb-2">Goma</h3>
                <p class="text-lg opacity-90">Ville lacustre</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-lg font-bold text-blue-600 mb-2">À partir de 130,000 FC</p>
              <div class="flex items-center text-gray-600">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>4 départs/jour</span>
              </div>
            </div>
          </router-link>
          
          <router-link to="/destination/kisangani" class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 block">
            <div class="h-64 relative overflow-hidden">
              <img 
                src="https://picsum.photos/seed/kisangani-bus/400/300.jpg" 
                alt="Transport de voyageurs Kisangani" 
                class="w-full h-full object-cover"
                onerror="this.style.display='none'"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white">
                <h3 class="text-2xl font-bold mb-2">Kisangani</h3>
                <p class="text-lg opacity-90">Cité de Stanley</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-lg font-bold text-blue-600 mb-2">À partir de 110,000 FC</p>
              <div class="flex items-center text-gray-600">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>5 départs/jour</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Pourquoi choisir <span class="text-blue-600">Rusa Travel</span>?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre partenaire de confiance pour tous vos voyages en République Démocratique du Congo
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="text-center group">
            <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
              <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900">Sécurité</h3>
            <p class="text-gray-600 text-lg leading-relaxed">
              Voyagez en toute tranquillité avec nos véhicules modernes et nos chauffeurs expérimentés
            </p>
          </div>
          
          <div class="text-center group">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
              <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900">Ponctualité</h3>
            <p class="text-gray-600 text-lg leading-relaxed">
              Respect des horaires garantis avec un suivi en temps réel de vos trajets
            </p>
          </div>
          
          <div class="text-center group">
            <div class="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors">
              <svg class="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 4M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900">Service Client</h3>
            <p class="text-gray-600 text-lg leading-relaxed">
              Assistance 24/7 et support multilingue pour accompagner votre voyage
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section Premium -->
    <section class="relative py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-repeat" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2NGgydi00aDR2LTR6bTAtMzBWMGgtMnY0aC00djJoLTR2NGgtNHYyaDR2NGgydi00aDR2NHptMC0zMFYwaC0ydjRoLTR2MmgtNHY0aC00djJoLTR2NGgydi00aDR2NHptLTMwIDMwdi00aDR2MEgwdjJoNHYyaDR2NGgydi00aDR2NHptMC0zMFYwaC0ydjRoLTR2MmgtNHY0aC00djJoLTR2NGgydi00aDR2NHptLTQgNFY0SDRoNGg0djBIMHYySDRoNHYyaDR2NGgydi00aDR2NHptbm00IDRWMEg0aDRIMDBdjJoNHYySDRoNHYyaDR2NGgydi00aDR2NHpteloiLz48L2c+PC9nPjwvZz48L3N2Zz4='); background-size: 60px 60px;"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="mb-8">
            <div class="inline-flex items-center px-4 py-2 bg-yellow-400/20 rounded-full text-yellow-300 text-sm font-medium mb-6">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Dernières places disponibles
            </div>
          </div>
          
          <h2 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Prêt à <span class="text-yellow-400">voyager</span> avec nous?
          </h2>
          <p class="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Rejoignez des milliers de voyageurs qui nous font confiance pour leurs déplacements en toute sécurité à travers la République Démocratique du Congo
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button
              @click="goToSearch"
              class="group relative px-12 py-5 bg-yellow-400 text-blue-900 rounded-xl hover:bg-yellow-300 font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/25 overflow-hidden"
            >
              <span class="relative z-10 flex items-center">
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Réserver maintenant
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              @click="goToLogin"
              class="group px-12 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 font-bold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-white/30 hover:border-white/50 overflow-hidden"
            >
              <span class="relative z-10 flex items-center">
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Connexion
              </span>
            </button>
          </div>
          
          <!-- Stats Section -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div class="text-center">
              <div class="text-4xl font-bold text-yellow-400 mb-2">50K+</div>
              <div class="text-blue-200">Voyageurs satisfaits</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-yellow-400 mb-2">100+</div>
              <div class="text-blue-200">Destinations</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div class="text-blue-200">Assistance</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Premium -->
    <footer class="bg-gray-950 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- Brand Section -->
          <div class="space-y-6">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <img 
                  src="/images/logo/auth-logo (2).png" 
                  alt="Rusa Travel" 
                  class="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 class="text-2xl font-bold">Rusa Travel</h3>
                <p class="text-blue-400 text-sm">Votre voyage, notre expertise</p>
              </div>
            </div>
            <p class="text-gray-400 leading-relaxed">
              La plateforme de transport la plus fiable de la République Démocratique du Congo. 
              Voyagez en toute sécurité avec notre flotte moderne et nos chauffeurs professionnels.
            </p>
            <div class="flex space-x-3">
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group">
                <svg class="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-all duration-300 group">
                <svg class="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all duration-300 group">
                <svg class="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069 3.204 0 3.584.013 4.85.069 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 0 4 4 0 018 0zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Navigation -->
          <div class="space-y-6">
            <h4 class="text-lg font-bold text-blue-400">Navigation</h4>
            <ul class="space-y-3">
              <li><router-link to="/about" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                À propos
              </router-link></li>
              <li><router-link to="/search" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Destinations
              </router-link></li>
              <li><router-link to="/search" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Tarifs
              </router-link></li>
              <li><router-link to="/contact" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </router-link></li>
            </ul>
          </div>
          
          <!-- Services -->
          <div class="space-y-6">
            <h4 class="text-lg font-bold text-blue-400">Services</h4>
            <ul class="space-y-3">
              <li><router-link to="/search" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 4M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Transport passagers
              </router-link></li>
              <li><router-link to="/login" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Transport marchandises
              </router-link></li>
              <li><router-link to="/login" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Services entreprises
              </router-link></li>
              <li><router-link to="/contact" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Assistance 24/7
              </router-link></li>
            </ul>
          </div>
          
          <!-- Contact -->
          <div class="space-y-6">
            <h4 class="text-lg font-bold text-blue-400">Contact</h4>
            <div class="space-y-4">
              <a href="tel:+243123456789" class="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                <div class="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div class="font-medium">+243 123 456 789</div>
                  <div class="text-sm">Disponible 24/7</div>
                </div>
              </a>
              
              <a href="mailto:info@rusatravel.cd" class="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                <div class="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div class="font-medium">info@rusatravel.cd</div>
                  <div class="text-sm">Réponse sous 2h</div>
                </div>
              </a>
              
              <div class="flex items-start text-gray-400">
                <div class="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div class="font-medium">Kinshasa, RDC</div>
                  <div class="text-sm">Avenue des Aviateurs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Bottom Bar -->
        <div class="border-t border-gray-800 mt-12 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Rusa Travel. Tous droits réservés.
            </div>
            <div class="flex items-center space-x-6 text-sm">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">Mentions légales</a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">Confidentialité</a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">CGU</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '@/components/common/AppHeader.vue'

defineOptions({
  name: 'HomePage'
})

const router = useRouter()

// Fonctions explicites pour les boutons principaux (définies en premier)
const goToSearch = () => {
  console.log('Navigation vers /search')
  router.push('/search')
}

const goToLogin = () => {
  console.log('Navigation vers /login')
  router.push('/login')
}

// Form data for search
const searchData = ref({
  departure: '',
  destination: '',
  date: ''
})

// Date minimum pour le sélecteur (aujourd'hui)
const minDate = computed(() => {
  return new Date().toISOString().split('T')[0]
})

// Fonction pour échanger départ et destination
const swapLocations = () => {
  const temp = searchData.value.departure
  searchData.value.departure = searchData.value.destination
  searchData.value.destination = temp
}

const handleSearch = () => {
  // Navigate to search page with parameters
  router.push({
    name: 'SearchPublic',
    query: {
      from: searchData.value.departure,
      to: searchData.value.destination,
      date: searchData.value.date
    }
  })
}

const handleDestinationClick = (destination: string) => {
  console.log('Clic sur destination:', destination)
  try {
    // Navigate to destination details page
    const destinationId = destination.toLowerCase().replace(/\s+/g, '')
    console.log('Destination ID:', destinationId)
    console.log('URL complète:', `/destination/${destinationId}`)
    router.push(`/destination/${destinationId}`)
  } catch (error) {
    console.error('Erreur lors de la navigation:', error)
  }
}
</script>
