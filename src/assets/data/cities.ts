/**
 * RUSA TRAVEL - Villes RDC
 * Données mock pour la plateforme
 */

export interface City {
  id: string
  name: string
  nameLn: string
  nameSw: string
  region: string
  coordinates?: { lat: number; lng: number }
}

export const cities: City[] = [
  { id: 'kinshasa', name: 'Kinshasa', nameLn: 'Kinsásá', nameSw: 'Kinshasa', region: 'Kinshasa' },
  { id: 'matadi', name: 'Matadi', nameLn: 'Matádi', nameSw: 'Matadi', region: 'Kongo Central' },
  { id: 'boma', name: 'Boma', nameLn: 'Bóma', nameSw: 'Boma', region: 'Kongo Central' },
  { id: 'kikwit', name: 'Kikwit', nameLn: 'Kikwít', nameSw: 'Kikwit', region: 'Kwilu' },
  { id: 'lubumbashi', name: 'Lubumbashi', nameLn: 'Lubumbáshi', nameSw: 'Lubumbashi', region: 'Haut-Katanga' },
  { id: 'goma', name: 'Goma', nameLn: 'Góma', nameSw: 'Goma', region: 'Nord-Kivu' },
  { id: 'kisangani', name: 'Kisangani', nameLn: 'Kisángáni', nameSw: 'Kisangani', region: 'Tshopo' },
  { id: 'mbujimayi', name: 'Mbuji-Mayi', nameLn: 'Mbújí-Mayí', nameSw: 'Mbuji-Mayi', region: 'Kasaï Oriental' },
  { id: 'bukavu', name: 'Bukavu', nameLn: 'Bukávu', nameSw: 'Bukavu', region: 'Sud-Kivu' },
  { id: 'kananga', name: 'Kananga', nameLn: 'Kanánga', nameSw: 'Kananga', region: 'Kasaï Central' },
]

export function getCityById(id: string): City | undefined {
  return cities.find((c) => c.id === id)
}

export function getCityName(id: string, locale: 'fr' | 'ln' | 'sw' = 'fr'): string {
  const city = getCityById(id)
  if (!city) return id
  if (locale === 'ln') return city.nameLn
  if (locale === 'sw') return city.nameSw
  return city.name
}
