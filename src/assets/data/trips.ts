/**
 * RUSA TRAVEL - Trajets disponibles
 * Données mock pour la plateforme
 */

export type BusType = 'standard' | 'vip'

export interface Trip {
  id: string
  agencyId: string
  busId: string
  from: string
  to: string
  departureTime: string
  arrivalTime: string
  duration: string
  price: number
  currency: string
  busType: BusType
  totalSeats: number
  availableSeats: number
  date: string
  departureStation: string
  arrivalStation: string
  amenities?: string[]
  occupiedSeats?: number[]
}

export const trips: Trip[] = [
  {
    id: 'trip-001',
    agencyId: 'transco',
    busId: 'bus-transco-01',
    from: 'kinshasa',
    to: 'lubumbashi',
    departureTime: '06:00',
    arrivalTime: '18:30',
    duration: '12h 30min',
    price: 85000,
    currency: 'CDF',
    busType: 'vip',
    totalSeats: 45,
    availableSeats: 12,
    date: '2024-03-15',
    departureStation: 'Gare Centrale Kinshasa, Avenue du Commerce',
    arrivalStation: 'Gare Lubumbashi, Avenue du Kasai',
    amenities: ['wifi', 'ac', 'usb', 'wc'],
    occupiedSeats: [1, 2, 3, 5, 8, 10, 12, 15, 20, 22, 25, 30, 35, 40, 42, 45],
  },
  {
    id: 'trip-002',
    agencyId: 'trans-royaume',
    busId: 'bus-tr-01',
    from: 'kinshasa',
    to: 'matadi',
    departureTime: '07:00',
    arrivalTime: '12:00',
    duration: '5h',
    price: 25000,
    currency: 'CDF',
    busType: 'standard',
    totalSeats: 50,
    availableSeats: 35,
    date: '2024-03-15',
    departureStation: 'Gare du Beach, Kinshasa',
    arrivalStation: 'Gare de Matadi',
    amenities: ['ac', 'wc'],
    occupiedSeats: [2, 4, 6, 8, 10, 15, 20, 25, 30, 35, 40, 45, 48, 49, 50],
  },
  {
    id: 'trip-003',
    agencyId: 'city-express',
    busId: 'bus-ce-01',
    from: 'kinshasa',
    to: 'goma',
    departureTime: '08:30',
    arrivalTime: '20:00',
    duration: '11h 30min',
    price: 95000,
    currency: 'CDF',
    busType: 'vip',
    totalSeats: 40,
    availableSeats: 8,
    date: '2024-03-15',
    departureStation: 'Terminal Limete, Kinshasa',
    arrivalStation: 'Gare de Goma',
    amenities: ['wifi', 'ac', 'usb', 'wc'],
    occupiedSeats: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 40],
  },
  {
    id: 'trip-004',
    agencyId: 'congo-travel',
    busId: 'bus-ct-01',
    from: 'kinshasa',
    to: 'kisangani',
    departureTime: '05:00',
    arrivalTime: '06:00',
    duration: '25h',
    price: 65000,
    currency: 'CDF',
    busType: 'standard',
    totalSeats: 50,
    availableSeats: 22,
    date: '2024-03-15',
    departureStation: 'Gare Ndjili, Kinshasa',
    arrivalStation: 'Gare Kisangani Centre',
    amenities: ['ac', 'wc'],
    occupiedSeats: [1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50],
  },
  {
    id: 'trip-005',
    agencyId: 'transco',
    busId: 'bus-transco-02',
    from: 'lubumbashi',
    to: 'kinshasa',
    departureTime: '07:00',
    arrivalTime: '19:30',
    duration: '12h 30min',
    price: 82000,
    currency: 'CDF',
    busType: 'vip',
    totalSeats: 45,
    availableSeats: 18,
    date: '2024-03-15',
    departureStation: 'Gare Lubumbashi, Avenue du Kasai',
    arrivalStation: 'Gare Centrale Kinshasa',
    amenities: ['wifi', 'ac', 'usb', 'wc'],
    occupiedSeats: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44],
  },
  {
    id: 'trip-006',
    agencyId: 'trans-royaume',
    busId: 'bus-tr-02',
    from: 'matadi',
    to: 'kinshasa',
    departureTime: '14:00',
    arrivalTime: '19:00',
    duration: '5h',
    price: 23000,
    currency: 'CDF',
    busType: 'standard',
    totalSeats: 50,
    availableSeats: 40,
    date: '2024-03-15',
    departureStation: 'Gare de Matadi',
    arrivalStation: 'Gare du Beach, Kinshasa',
    amenities: ['ac', 'wc'],
    occupiedSeats: [5, 15, 25, 35, 45, 50],
  },
]

export function getTripById(id: string): Trip | undefined {
  return trips.find((t) => t.id === id)
}

export function getTripsByRoute(from: string, to: string, date?: string): Trip[] {
  return trips.filter((t) => {
    const matchRoute = t.from === from && t.to === to
    const matchDate = !date || t.date === date
    return matchRoute && matchDate
  })
}
