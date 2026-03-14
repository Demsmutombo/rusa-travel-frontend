import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes: [
    // Page de splash screen - page de démarrage avec logo
    {
      path: '/splash',
      name: 'Splash',
      component: () => import('../views/Loading/SplashScreen.vue'),
      meta: { public: true, title: 'Rusa Travel - Chargement' }
    },

    // Page d'accueil publique - route principale
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home/HomePage.vue'),
      meta: { public: true, title: 'Rusa Travel - Accueil' }
    },

    // Page de login classique
    {
      path: '/simple-login',
      name: 'SimpleLogin',
      component: () => import('../views/SimpleLogin.vue'),
      meta: { public: true, title: 'Connexion Simple - Rusa Travel' }
    },

    // Page de login classique
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Auth/Login.vue'),
      meta: { public: true, title: 'Connexion - Rusa Travel' }
    },
    {
      path: '/login-test',
      name: 'LoginTest',
      component: () => import('../views/Auth/LoginPage_Test.vue'),
      meta: { public: true, title: 'Test Documentation - Rusa Travel' }
    },
    {
      path: '/login-final',
      name: 'LoginFinal',
      component: () => import('../views/Auth/LoginPage_Final.vue'),
      meta: { public: true, title: 'Documentation Final - Rusa Travel' }
    },
    {
      path: '/login-debug',
      name: 'LoginDebug',
      component: () => import('../views/Auth/LoginPage_Debug.vue'),
      meta: { public: true, title: 'Debug Documentation - Rusa Travel' }
    },
    {
      path: '/login-simple',
      name: 'LoginSimple',
      component: () => import('../views/Auth/LoginPage_Simple.vue'),
      meta: { public: true, title: 'Simple Documentation - Rusa Travel' }
    },
    {
      path: '/login-classic',
      name: 'LoginClassic',
      component: () => import('../views/Auth/LoginPage_Classic.vue'),
      meta: { public: true, title: 'Classic Documentation - Rusa Travel' }
    },
    {
      path: '/login-global',
      name: 'LoginGlobal',
      component: () => import('../views/Auth/LoginPage_Global.vue'),
      meta: { public: true, title: 'Global Documentation - Rusa Travel' }
    },
    {
      path: '/login-ultra',
      name: 'LoginUltra',
      component: () => import('../views/Auth/LoginPage_Ultra.vue'),
      meta: { public: true, title: 'Ultra Test - Rusa Travel' }
    },
    {
      path: '/documentation',
      name: 'Documentation',
      component: () => import('../views/Documentation/GuidePage.vue'),
      meta: { public: true, title: 'Documentation - Rusa Travel' }
    },
    
    // Page À propos
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About/AboutPage.vue'),
      meta: { public: true, title: 'À propos - Rusa Travel' }
    },

    // Page Contact
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact/ContactPage.vue'),
      meta: { public: true, title: 'Contact - Rusa Travel' }
    },

    // Page d'inscription
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Auth/RegisterPage.vue'),
      meta: { public: true, title: 'Inscription - Rusa Travel' }
    },

    // Détails des destinations
    {
      path: '/destination/:id',
      name: 'DestinationDetail',
      component: () => import('../views/Destination/DestinationDetailPage.vue'),
      meta: { public: true, title: 'Destination - Rusa Travel' }
    },

    // Recherche publique (landing recherche)
    {
      path: '/search',
      name: 'SearchPublic',
      component: () => import('../views/client/SearchTrips.vue'),
      meta: { public: true, title: 'Recherche de trajets' }
    },

    // Résultats publics (liste des trajets)
    {
      path: '/results',
      name: 'ResultsPublic',
      component: () => import('../views/client/Results.vue'),
      meta: { public: true, title: 'Résultats de recherche' }
    },

    // Client Routes (protégé - rôle client)
    {
      path: '/client',
      component: () => import('../layouts/DashboardLayout.vue'),
      meta: { requiresAuth: true, role: 'client' },
      children: [
        { path: '', redirect: '/client/dashboard' },
        { path: 'dashboard', name: 'ClientDashboard', component: () => import('../views/client/Dashboard.vue'), meta: { title: 'Tableau de bord' } },
        { path: 'search-trips', name: 'SearchTrips', component: () => import('../views/client/SearchTrips.vue'), meta: { title: 'Recherche de trajets' } },
        { path: 'my-bookings', name: 'MyBookings', component: () => import('../views/client/MyBookings.vue'), meta: { title: 'Mes réservations' } },
        { path: 'tickets', name: 'Tickets', component: () => import('../views/client/Tickets.vue'), meta: { title: 'Mes billets' } },
        { path: 'notifications', name: 'ClientNotifications', component: () => import('../views/client/Notifications.vue'), meta: { title: 'Notifications' } },
        { path: 'profile', name: 'ClientProfile', component: () => import('../views/client/Profile.vue'), meta: { title: 'Profil' } },
        { path: 'settings', name: 'ClientSettings', component: () => import('../views/client/Settings.vue'), meta: { title: 'Paramètres' } }
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
      component: () => import('../layouts/DashboardLayout.vue'),
      meta: { requiresAuth: true, role: 'manager' },
      children: [
        { path: '', redirect: '/manager/dashboard' },
        { path: 'dashboard', name: 'ManagerDashboard', component: () => import('../views/Manager/Dashboard.vue'), meta: { title: 'Tableau de Bord Manager' } },
        { path: 'buses', name: 'ManagerBuses', component: () => import('../views/Manager/Buses.vue'), meta: { title: 'Gestion des Bus' } },
        { path: 'routes', name: 'ManagerRoutes', component: () => import('../views/Manager/Routes.vue'), meta: { title: 'Gestion des Routes' } },
        { path: 'trips', name: 'ManagerTrips', component: () => import('../views/Manager/Trips.vue'), meta: { title: 'Gestion des Trajets' } },
        { path: 'bookings', name: 'ManagerBookings', component: () => import('../views/Manager/Bookings.vue'), meta: { title: 'Gestion des Réservations' } },
        { path: 'passengers', name: 'ManagerPassengers', component: () => import('../views/Manager/Passengers.vue'), meta: { title: 'Gestion des Passagers' } },
        { path: 'revenue', name: 'ManagerRevenue', component: () => import('../views/Manager/Revenue.vue'), meta: { title: 'Revenus' } },
        { path: 'settings', name: 'ManagerSettings', component: () => import('../views/Manager/Settings.vue'), meta: { title: 'Paramètres' } }
      ]
    },

    // Client Routes (protégé - rôle client)
    {
      path: '/client',
      component: () => import('../layouts/DashboardLayout.vue'),
      meta: { requiresAuth: true, role: 'client' },
      children: [
        { path: '', redirect: '/client/dashboard' },
        { path: 'dashboard', name: 'ClientDashboard', component: () => import('../views/client/Dashboard.vue'), meta: { title: 'Tableau de bord' } },
        { path: 'search-trips', name: 'SearchTrips', component: () => import('../views/client/SearchTrips.vue'), meta: { title: 'Recherche de trajets' } },
        { path: 'my-bookings', name: 'MyBookings', component: () => import('../views/client/MyBookings.vue'), meta: { title: 'Mes réservations' } },
        { path: 'tickets', name: 'Tickets', component: () => import('../views/client/Tickets.vue'), meta: { title: 'Mes billets' } },
        { path: 'notifications', name: 'ClientNotifications', component: () => import('../views/client/Notifications.vue'), meta: { title: 'Notifications' } },
        { path: 'profile', name: 'ClientProfile', component: () => import('../views/client/Profile.vue'), meta: { title: 'Profil' } },
        { path: 'settings', name: 'ClientSettings', component: () => import('../views/client/Settings.vue'), meta: { title: 'Paramètres' } }
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
        { path: 'super', name: 'SuperAdminDashboard', component: () => import('../views/admin/SuperAdminDashboard.vue'), meta: { title: 'Dashboard Super Admin' } },
        { path: 'users', name: 'AdminUsers', component: () => import('../views/admin/Users.vue'), meta: { title: 'Gestion des utilisateurs' } },
        { path: 'orders', name: 'AdminOrders', component: () => import('../views/admin/Orders.vue'), meta: { title: 'Gestion des commandes' } },
        { path: 'bookings', name: 'AdminBookings', component: () => import('../views/admin/Bookings.vue'), meta: { title: 'Gestion des réservations' } },
        { path: 'agencies', name: 'AdminAgencies', component: () => import('../views/admin/Agencies.vue'), meta: { title: 'Gestion des agences' } },
        { path: 'settings', name: 'AdminSettings', component: () => import('../views/admin/Settings.vue'), meta: { title: 'Paramètres' } },
        { path: 'buses', name: 'AdminBuses', component: () => import('../views/admin/Buses.vue'), meta: { title: 'Gestion des bus' } },
        { path: 'routes', name: 'AdminRoutes', component: () => import('../views/admin/Routes.vue'), meta: { title: 'Gestion des routes' } },
        { path: 'finance', name: 'AdminFinance', component: () => import('../views/admin/Finance.vue'), meta: { title: 'Dashboard Financier' } },
        { path: 'notifications', name: 'AdminNotifications', component: () => import('../views/admin/Notifications.vue'), meta: { title: 'Notifications' } },
        { path: 'test-mobile', name: 'AdminTestMobile', component: () => import('../views/admin/TestMobile.vue'), meta: { title: 'Test Mobile' } },
        { path: 'transactions', name: 'AdminTransactions', component: () => import('../views/admin/Transactions.vue'), meta: { title: 'Transactions' } },
        { path: 'disputes', name: 'AdminDisputes', component: () => import('../views/admin/Disputes.vue'), meta: { title: 'Litiges' } }
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

  // S'assurer que l'état d'authentification est cohérent
  authStore.checkAuthState()

  // Définir le titre de la page
  if (to.meta.title) {
    document.title = `${to.meta.title} | Rusa Travel`
  } else {
    document.title = 'Rusa Travel - Plateforme de Transport'
  }

  // Routes publiques accessibles sans authentification
  if (to.meta.public) {
    // Si l'utilisateur est déjà authentifié et accède à la page d'accueil ou login,
    // le rediriger vers son dashboard approprié
    if (authStore.isAuthenticated && (to.path === '/' || to.path === '/login')) {
      const role = authStore.currentRole
      if (role === 'admin') next('/admin/dashboard')
      else if (role === 'manager') next('/manager/dashboard')
      else if (role === 'carrier') next('/carrier/dashboard')
      else if (role === 'client') next('/client/dashboard')
      else next('/')
      return
    }
    // Pour toutes les autres pages publiques (about, contact, etc.),
    // permettre l'accès même si l'utilisateur est authentifié
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
    // Rediriger vers le dashboard approprié SEULEMENT si l'utilisateur n'a pas le bon rôle
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
