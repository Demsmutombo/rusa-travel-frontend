/**
 * RUSA TRAVEL - Trajets populaires
 * Données mock pour la page d'accueil
 */

export interface PopularRoute {
  from: string
  to: string
  priceFrom: number
  duration: string
  tripsPerDay: number
  badge?: string
}

export const popularRoutes: PopularRoute[] = [
  {
    from: 'kinshasa',
    to: 'lubumbashi',
    priceFrom: 75000,
    duration: '~12h',
    tripsPerDay: 8,
    badge: 'Le plus populaire',
  },
  {
    from: 'kinshasa',
    to: 'matadi',
    priceFrom: 20000,
    duration: '~5h',
    tripsPerDay: 12,
    badge: 'Meilleur rapport qualité-prix',
  },
  {
    from: 'kinshasa',
    to: 'goma',
    priceFrom: 85000,
    duration: '~11h',
    tripsPerDay: 5,
  },
  {
    from: 'lubumbashi',
    to: 'kinshasa',
    priceFrom: 78000,
    duration: '~12h',
    tripsPerDay: 6,
  },
  {
    from: 'kinshasa',
    to: 'kisangani',
    priceFrom: 65000,
    duration: '~24h',
    tripsPerDay: 3,
  },
  {
    from: 'kinshasa',
    to: 'mbujimayi',
    priceFrom: 55000,
    duration: '~18h',
    tripsPerDay: 4,
  },
]
