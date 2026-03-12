import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes: [
    // Page de splash screen - page de démarrage
    {
      path: '/splash',
      name: 'Splash',
      component: () => import('../views/SplashScreen.vue'),
      meta: { public: true, title: 'Rusa Travel - Chargement' }
    },

    // Page d'accueil publique - route principale
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home/HomePage.vue'),
      meta: { public: true, title: 'Rusa Travel - Accueil' }
    },

    // Page de login simple
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Auth/LoginPage.vue'),
      meta: { public: true, title: 'Connexion - Rusa Travel' }
    },

    // Page de recherche publique
    {
      path: '/search',
      name: 'Search',
      component: () => import('../views/Search/SearchPage.vue'),
      meta: { public: true, title: 'Recherche de trajets - Rusa Travel' }
    },

    // Client Platform Routes (protégé - rôle client)
    {
      path: '/client',
      component: () => import('../layouts/DashboardLayout.vue'),
      meta: { requiresAuth: true, role: 'client' },
      children: [
        { path: '', redirect: '/client/home' },
        { path: 'home', name: 'ClientHome', component: () => import('../views/client/ClientHome.vue'), meta: { title: 'Espace Client' } },
        { path: 'dashboard', name: 'ClientDashboard', component: () => import('../views/client/ClientHome.vue'), meta: { title: 'Espace Client' } },
        { path: 'orders', name: 'ClientOrders', component: () => import('../views/client/MyTickets.vue'), meta: { title: 'Mes Commandes' } },
        { path: 'bookings', name: 'ClientBookings', component: () => import('../views/client/MyTickets.vue'), meta: { title: 'Mes Réservations' } },
        { path: 'search', name: 'ClientSearch', component: () => import('../views/client/Search.vue'), meta: { title: 'Recherche de trajets' } },
        { path: 'results', name: 'ClientResults', component: () => import('../views/client/Results.vue'), meta: { title: 'Résultats de recherche' } },
        { path: 'bus/:id', name: 'ClientBusDetails', component: () => import('../views/client/BusDetails.vue'), meta: { title: 'Détails du bus' } },
        { path: 'booking', name: 'ClientBooking', component: () => import('../views/client/SeatSelection.vue'), meta: { title: 'Sélection des sièges' } },
        { path: 'payment', name: 'ClientPayment', component: () => import('../views/client/Payment.vue'), meta: { title: 'Paiement' } },
        { path: 'ticket/:id', name: 'ClientTicket', component: () => import('../views/client/Ticket.vue'), meta: { title: 'Votre billet' } },
        { path: 'my-tickets', name: 'ClientMyTickets', component: () => import('../views/client/MyTickets.vue'), meta: { title: 'Mes billets' } },
        { path: 'profile', name: 'ClientProfile', component: () => import('../views/client/Profile.vue'), meta: { title: 'Mon profil' } },
        { path: 'support', name: 'ClientSupport', component: () => import('../views/client/Support.vue'), meta: { title: 'Support' } }
      ]
    },

    // Carrier Platform Routes (protégé - rôle carrier)
    {
      path: '/carrier',
      component: () => import('../layouts/DashboardLayout.vue'),
      meta: { requiresAuth: true, role: 'carrier' },
      children: [
        { path: '', redirect: '/carrier/dashboard' },
        { path: 'dashboard', name: 'CarrierDashboard', component: () => import('../views/carrier/Dashboard.vue'), meta: { title: 'Dashboard Transporteur' } },
        { path: 'routes', name: 'CarrierRoutes', component: () => import('../views/carrier/Routes.vue'), meta: { title: 'Courses' } },
        { path: 'history', name: 'CarrierHistory', component: () => import('../views/carrier/History.vue'), meta: { title: 'Historique' } },
        { path: 'profile', name: 'CarrierProfile', component: () => import('../views/carrier/Profile.vue'), meta: { title: 'Profil' } },
        { path: 'buses', name: 'CarrierBuses', component: () => import('../views/carrier/Buses.vue'), meta: { title: 'Gestion des bus' } },
        { path: 'trips', name: 'CarrierTrips', component: () => import('../views/carrier/Routes.vue'), meta: { title: 'Gestion des trajets' } },
        { path: 'bookings', name: 'CarrierBookings', component: () => import('../views/carrier/Bookings.vue'), meta: { title: 'Réservations' } },
        { path: 'statistics', name: 'CarrierStatistics', component: () => import('../views/carrier/Statistics.vue'), meta: { title: 'Statistiques' } }
      ]
    },

    // Manager Platform Routes (protégé - rôle manager)
    {
      path: '/manager',
      component: () => import('../layouts/DashboardLayout.vue'),
      meta: { requiresAuth: true, role: 'manager' },
      children: [
        { path: '', redirect: '/manager/dashboard' },
        { path: 'dashboard', name: 'ManagerDashboard', component: () => import('../views/manager/Dashboard.vue'), meta: { title: 'Tableau de Bord Manager' } },
        { path: 'bookings', name: 'ManagerBookings', component: () => import('../views/manager/Bookings.vue'), meta: { title: 'Réservations' } },
        { path: 'orders', name: 'ManagerOrders', component: () => import('../views/manager/Orders.vue'), meta: { title: 'Commandes' } },
        { path: 'analytics', name: 'ManagerAnalytics', component: () => import('../views/manager/Analytics.vue'), meta: { title: 'Statistiques' } },
        { path: 'teams', name: 'ManagerTeams', component: () => import('../views/manager/Teams.vue'), meta: { title: 'Équipes' } },
        { path: 'performance', name: 'ManagerPerformance', component: () => import('../views/manager/Performance.vue'), meta: { title: 'Performance' } },
        { path: 'reports', name: 'ManagerReports', component: () => import('../views/manager/Reports.vue'), meta: { title: 'Rapports' } },
        { path: 'settings', name: 'ManagerSettings', component: () => import('../views/manager/Settings.vue'), meta: { title: 'Paramètres' } }
      ]
    },

    // Admin Platform Routes (protégé - rôle admin)
    {
      path: '/admin',
      component: () => import('../layouts/DashboardLayout.vue'),
      meta: { requiresAuth: true, role: 'admin' },
      children: [
        { path: '', redirect: '/admin/dashboard' },
        { path: 'dashboard', name: 'AdminDashboard', component: () => import('../views/admin/Dashboard.vue'), meta: { title: 'Dashboard Global' } },
        { path: 'users', name: 'AdminUsers', component: () => import('../views/admin/Users.vue'), meta: { title: 'Gestion des utilisateurs' } },
        { path: 'orders', name: 'AdminOrders', component: () => import('../views/admin/Transactions.vue'), meta: { title: 'Commandes' } },
        { path: 'bookings', name: 'AdminBookings', component: () => import('../views/admin/Transactions.vue'), meta: { title: 'Réservations' } },
        { path: 'products', name: 'AdminProducts', component: () => import('../views/admin/Agencies.vue'), meta: { title: 'Produits' } },
        { path: 'settings', name: 'AdminSettings', component: () => import('../views/admin/Settings.vue'), meta: { title: 'Paramètres' } },
        { path: 'super', name: 'SuperAdminDashboard', component: () => import('../views/admin/SuperAdminDashboard.vue'), meta: { title: 'Dashboard Super Admin' } },
        { path: 'agencies', name: 'AdminAgencies', component: () => import('../views/admin/Agencies.vue'), meta: { title: 'Gestion des agences' } },
        { path: 'transactions', name: 'AdminTransactions', component: () => import('../views/admin/Transactions.vue'), meta: { title: 'Transactions' } },
        { path: 'disputes', name: 'AdminDisputes', component: () => import('../views/admin/Disputes.vue'), meta: { title: 'Litiges' } }
      ]
    },

    // Staff Platform Routes (protégé - rôle staff)
    {
      path: '/staff',
      component: () => import('../layouts/DashboardLayout.vue'),
      meta: { requiresAuth: true, role: 'staff' },
      children: [
        { path: '', redirect: '/staff/dashboard' },
        { path: 'dashboard', name: 'StaffDashboard', component: () => import('../views/Staff/Dashboard.vue'), meta: { title: 'Tableau de Bord Staff' } },
        { path: 'reservations', name: 'StaffReservations', component: () => import('../views/Staff/Dashboard.vue'), meta: { title: 'Réservations' } },
        { path: 'incidents', name: 'StaffIncidents', component: () => import('../views/Staff/Dashboard.vue'), meta: { title: 'Incidents' } },
        { path: 'reports', name: 'StaffReports', component: () => import('../views/Staff/Dashboard.vue'), meta: { title: 'Rapports' } },
        { path: 'settings', name: 'StaffSettings', component: () => import('../views/Staff/Dashboard.vue'), meta: { title: 'Paramètres' } }
      ]
    },

    // Page 404 personnalisée
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/errors/NotFoundPage.vue'),
      meta: { public: true, title: 'Page non trouvée - Rusa Travel' }
    }
  ]
})

// Route guard - Authentification et contrôle d'accès par rôle
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // Définir le titre de la page
  if (to.meta.title) {
    document.title = `${to.meta.title} | Rusa Travel`
  } else {
    document.title = 'Rusa Travel - Plateforme de Transport'
  }

  // Routes publiques accessibles sans authentification
  if (to.meta.public) {
    // Si l'utilisateur est déjà authentifié et accède aux pages publiques
    if (authStore.isAuthenticated && (to.path === '/' || to.path === '/login')) {
      const role = authStore.currentRole
      // Rediriger selon le rôle
      if (role === 'admin') next('/admin/dashboard')
      else if (role === 'manager') next('/manager/dashboard')
      else if (role === 'carrier') next('/carrier/dashboard')
      else if (role === 'client') next('/client/dashboard')
      else if (role === 'staff') next('/staff/dashboard')
      else next()
      return
    }
    next()
    return
  }

  // Vérifier l'authentification pour les routes protégées
  if (!authStore.isAuthenticated) {
    next({ path: '/login', query: { redirect: to.fullPath } })
    return
  }

  // Vérifier les autorisations par rôle
  const requiredRole = (to.meta.role ?? to.matched.find((r) => r.meta.role)?.meta.role) as string | undefined
  if (requiredRole && !authStore.canAccessRoute(requiredRole as 'admin' | 'manager' | 'carrier' | 'client' | 'staff')) {
    const role = authStore.currentRole
    // Rediriger vers le dashboard approprié
    if (role === 'admin') next('/admin/dashboard')
    else if (role === 'manager') next('/manager/dashboard')
    else if (role === 'carrier') next('/carrier/dashboard')
    else if (role === 'client') next('/client/dashboard')
    else if (role === 'staff') next('/staff/dashboard')
    else next('/login')
    return
  }

  next()
})

export default router
