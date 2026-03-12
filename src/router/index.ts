import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes: [
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
      component: () => import('../views/Auth/Login.vue'),
      meta: { public: true, title: 'Connexion - Rusa Travel' }
    },

    // Recherche publique (landing recherche)
    {
      path: '/search',
      name: 'SearchPublic',
      component: () => import('../views/client/Search.vue'),
      meta: { public: true, title: 'Recherche de trajets' }
    },

    // Résultats publics (liste des trajets)
    {
      path: '/results',
      name: 'ResultsPublic',
      component: () => import('../views/client/Results.vue'),
      meta: { public: true, title: 'Résultats de recherche' }
    },

    // Client Platform Routes (protégé - rôle client)
    {
      path: '/client',
      component: () => import('../components/layout/SimpleLayout.vue'),
      meta: { requiresAuth: true, role: 'client' },
      children: [
        { path: '', redirect: '/client/dashboard' },
        { path: 'dashboard', name: 'ClientDashboard', component: () => import('../views/client/Dashboard.vue'), meta: { title: 'Tableau de Bord Client' } },
        { path: 'search', name: 'ClientSearch', component: () => import('../views/client/Search.vue'), meta: { title: 'Recherche de trajets' } },
        { path: 'results', name: 'ClientResults', component: () => import('../views/client/Results.vue'), meta: { title: 'Résultats de recherche' } },
        { path: 'bus/:id', name: 'ClientBusDetails', component: () => import('../views/client/BusDetails.vue'), meta: { title: 'Détails du bus' } },
        { path: 'booking', name: 'ClientBooking', component: () => import('../views/client/SeatSelection.vue'), meta: { title: 'Sélection des sièges' } },
        { path: 'payment', name: 'ClientPayment', component: () => import('../views/client/Payment.vue'), meta: { title: 'Paiement' } },
        { path: 'ticket/:id', name: 'ClientTicket', component: () => import('../views/client/Ticket.vue'), meta: { title: 'Votre billet' } },
        { path: 'my-tickets', name: 'ClientMyTickets', component: () => import('../views/client/MyTickets.vue'), meta: { title: 'Mes billets' } },
        { path: 'profile', name: 'ClientProfile', component: () => import('../views/client/Profile.vue'), meta: { title: 'Mon profil' } }
      ]
    },

    // Carrier Platform Routes (protégé - rôle carrier)
    {
      path: '/carrier',
      component: () => import('../components/layout/SimpleLayout.vue'),
      meta: { requiresAuth: true, role: 'carrier' },
      children: [
        { path: '', redirect: '/carrier/dashboard' },
        { path: 'dashboard', name: 'CarrierDashboard', component: () => import('../views/carrier/Dashboard.vue'), meta: { title: 'Dashboard Transporteur' } },
        { path: 'buses', name: 'CarrierBuses', component: () => import('../views/carrier/Buses.vue'), meta: { title: 'Gestion des bus' } },
        { path: 'trips', name: 'CarrierTrips', component: () => import('../views/carrier/Routes.vue'), meta: { title: 'Gestion des trajets' } },
        { path: 'bookings', name: 'CarrierBookings', component: () => import('../views/carrier/Bookings.vue'), meta: { title: 'Réservations' } },
        { path: 'statistics', name: 'CarrierStatistics', component: () => import('../views/carrier/Statistics.vue'), meta: { title: 'Statistiques' } }
      ]
    },

    // Manager Platform Routes (protégé - rôle manager)
    {
      path: '/manager',
      component: () => import('../components/layout/ManagerLayout.vue'),
      meta: { requiresAuth: true, role: 'manager' },
      children: [
        { path: '', redirect: '/manager/dashboard' },
        { path: 'dashboard', name: 'ManagerDashboard', component: () => import('../views/Manager/Dashboard.vue'), meta: { title: 'Tableau de Bord Manager' } }
      ]
    },

    // Admin Platform Routes (protégé - rôle admin)
    {
      path: '/admin',
      component: () => import('../components/layout/SimpleLayout.vue'),
      meta: { requiresAuth: true, role: 'admin' },
      children: [
        { path: '', redirect: '/admin/dashboard' },
        { path: 'dashboard', name: 'AdminDashboard', component: () => import('../views/admin/Dashboard.vue'), meta: { title: 'Dashboard Global' } },
        { path: 'super', name: 'SuperAdminDashboard', component: () => import('../views/admin/SuperAdminDashboard.vue'), meta: { title: 'Dashboard Super Admin' } },
        { path: 'agencies', name: 'AdminAgencies', component: () => import('../views/admin/Agencies.vue'), meta: { title: 'Gestion des agences' } },
        { path: 'transactions', name: 'AdminTransactions', component: () => import('../views/admin/Transactions.vue'), meta: { title: 'Transactions' } },
        { path: 'users', name: 'AdminUsers', component: () => import('../views/admin/Users.vue'), meta: { title: 'Gestion des utilisateurs' } },
        { path: 'disputes', name: 'AdminDisputes', component: () => import('../views/admin/Disputes.vue'), meta: { title: 'Litiges' } },
        { path: 'settings', name: 'AdminSettings', component: () => import('../views/admin/Settings.vue'), meta: { title: 'Paramètres' } }
      ]
    },

    // Error Routes (publiques)
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('../views/Errors/NotFound.vue'),
      meta: { public: true, title: 'Page non trouvée' }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
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
    // Si l'utilisateur est déjà authentifié et accède à la page de login,
    // le rediriger vers son dashboard. La page d'accueil (/) reste accessible.
    if (authStore.isAuthenticated && to.path === '/login') {
      const role = authStore.currentRole
      if (role === 'admin') next('/admin/dashboard')
      else if (role === 'manager') next('/manager/dashboard')
      else if (role === 'carrier') next('/carrier/dashboard')
      else if (role === 'client') next('/client/dashboard')
      else next('/')
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
  if (requiredRole && !authStore.canAccessRoute(requiredRole as 'admin' | 'manager' | 'carrier' | 'client')) {
    const role = authStore.currentRole
    // Rediriger vers le dashboard approprié
    if (role === 'admin') next('/admin/dashboard')
    else if (role === 'manager') next('/manager/dashboard')
    else if (role === 'carrier') next('/carrier/dashboard')
    else if (role === 'client') next('/client/dashboard')
    else next('/login')
    return
  }

  next()
})

export default router
