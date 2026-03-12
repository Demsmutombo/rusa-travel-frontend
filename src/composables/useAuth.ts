import { ref, computed, readonly } from 'vue'
import { useRouter } from 'vue-router'

interface User {
  id: string
  name: string
  email: string
  role: 'client' | 'carrier' | 'admin'
  agencyId?: string // Pour les transporteurs
}

const user = ref<User | null>(null)
const isLoading = ref(false)

export function useAuth() {
  const router = useRouter()

  const isAuthenticated = computed(() => !!user.value)
  const userRole = computed(() => user.value?.role)
  const isClient = computed(() => user.value?.role === 'client')
  const isCarrier = computed(() => user.value?.role === 'carrier')
  const isAdmin = computed(() => user.value?.role === 'admin')

  const login = async (credentials: {
    email: string
    password: string
    role: 'client' | 'carrier' | 'admin'
  }) => {
    isLoading.value = true
    
    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock user data - à remplacer par un vrai appel API
      const mockUser: User = {
        id: '1',
        name: credentials.role === 'admin' ? 'Super Admin' : 
              credentials.role === 'carrier' ? 'Transporteur Demo' : 'Client Demo',
        email: credentials.email,
        role: credentials.role,
        agencyId: credentials.role === 'carrier' ? 'agency-1' : undefined
      }
      
      user.value = mockUser
      
      // Sauvegarder dans localStorage
      localStorage.setItem('user', JSON.stringify(mockUser))
      localStorage.setItem('userRole', mockUser.role)
      
      // Rediriger vers le dashboard approprié
      const redirectPath = credentials.role === 'admin' ? '/admin/dashboard' :
                         credentials.role === 'carrier' ? '/carrier/dashboard' :
                         '/client'
      
      router.push(redirectPath)
      
      return { success: true }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: 'Identifiants incorrects' }
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('user')
    localStorage.removeItem('userRole')
    router.push('/auth/signin')
  }

  const initAuth = () => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      try {
        user.value = JSON.parse(savedUser)
      } catch (error) {
        console.error('Error parsing saved user:', error)
        localStorage.removeItem('user')
        localStorage.removeItem('userRole')
      }
    }
  }

  const requireAuth = (requiredRole?: 'client' | 'carrier' | 'admin') => {
    if (!isAuthenticated.value) {
      router.push('/auth/signin')
      return false
    }
    
    if (requiredRole && userRole.value !== requiredRole) {
      router.push('/auth/signin')
      return false
    }
    
    return true
  }

  return {
    user: readonly(user),
    isLoading: readonly(isLoading),
    isAuthenticated,
    userRole,
    isClient,
    isCarrier,
    isAdmin,
    login,
    logout,
    initAuth,
    requireAuth
  }
}
