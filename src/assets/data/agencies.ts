/**
 * RUSA TRAVEL - Compagnies de transport
 * Données mock pour la plateforme
 */

export interface TransportAgency {
  id: string
  name: string
  logo: string
  rating: number
  reviewsCount: number
  busesCount: number
  routes: string[]
  phone: string
  email: string
  description: string
  verified: boolean
  status?: 'active' | 'pending' | 'suspended'
}

export const transportAgencies: TransportAgency[] = [
  {
    id: 'transco',
    name: 'TRANSCO',
    logo: '/images/agencies/transco.svg',
    rating: 4.7,
    reviewsCount: 1250,
    busesCount: 45,
    routes: ['kinshasa', 'lubumbashi', 'goma', 'kisangani', 'mbujimayi'],
    phone: '+243 81 234 5678',
    email: 'contact@transco.cd',
    description: 'Leader du transport interurbain en RDC depuis 2010. Confort et ponctualité garantis. Réseau national.',
    verified: true,
    status: 'active',
  },
  {
    id: 'trans-royaume',
    name: 'Trans Royaume',
    logo: '/images/agencies/trans-royaume.svg',
    rating: 4.5,
    reviewsCount: 890,
    busesCount: 32,
    routes: ['kinshasa', 'matadi', 'boma', 'kikwit'],
    phone: '+243 82 345 6789',
    email: 'info@transroyaume.cd',
    description: 'Vos trajets Kinshasa-Matadi en toute sécurité. Bus VIP disponibles. Départs quotidiens.',
    verified: true,
    status: 'active',
  },
  {
    id: 'city-express',
    name: 'City Express',
    logo: '/images/agencies/city-express.svg',
    rating: 4.3,
    reviewsCount: 620,
    busesCount: 28,
    routes: ['kinshasa', 'goma', 'lubumbashi', 'bukavu'],
    phone: '+243 99 456 7890',
    email: 'reservation@cityexpress.cd',
    description: 'Rapidité et prix compétitifs. Liaisons quotidiennes vers l\'est du pays. Wi-Fi à bord.',
    verified: true,
    status: 'active',
  },
  {
    id: 'congo-travel',
    name: 'Congo Travel Bus',
    logo: '/images/agencies/congo-travel.svg',
    rating: 4.6,
    reviewsCount: 1100,
    busesCount: 52,
    routes: ['kinshasa', 'lubumbashi', 'kisangani', 'mbujimayi', 'kananga'],
    phone: '+243 81 567 8901',
    email: 'hello@congotravel.cd',
    description: 'Le réseau national. Couverture de toutes les provinces. Plus de 50 bus sur les routes.',
    verified: true,
    status: 'active',
  },
]

export function getAgencyById(id: string): TransportAgency | undefined {
  return transportAgencies.find((a) => a.id === id)
}
