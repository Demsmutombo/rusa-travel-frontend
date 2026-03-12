/**
 * RUSA TRAVEL - Témoignages clients
 * Données mock pour la plateforme
 */

export interface Testimonial {
  id: number
  author: string
  city: string
  avatar: string
  rating: number
  text: string
  date: string
  locale?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    author: 'Marie Kabila',
    city: 'Kinshasa',
    avatar: '/images/testimonials/avatar-1.svg',
    rating: 5,
    text: "Rusa Travel m'a fait gagner un temps fou. Plus besoin d'aller à la gare pour réserver. Le billet sur mon téléphone, c'est génial !",
    date: '2024-02-10',
    locale: 'fr',
  },
  {
    id: 2,
    author: 'Jean-Pierre Mutombo',
    city: 'Lubumbashi',
    avatar: '/images/testimonials/avatar-2.svg',
    rating: 5,
    text: "J'utilise Rusa Travel pour mes voyages Kinshasa-Lubumbashi. Prix corrects, réservation simple. Je recommande à tous.",
    date: '2024-02-15',
    locale: 'fr',
  },
  {
    id: 3,
    author: 'Grace Mwamba',
    city: 'Goma',
    avatar: '/images/testimonials/avatar-3.svg',
    rating: 4,
    text: 'Le QR code pour mon billet, c\'est pratique. Plus de stress de perdre mon ticket. Bon service client aussi.',
    date: '2024-02-20',
    locale: 'fr',
  },
  {
    id: 4,
    author: 'David Tshilombo',
    city: 'Matadi',
    avatar: '/images/testimonials/avatar-4.svg',
    rating: 5,
    text: 'Paiement M-Pesa direct depuis mon téléphone. Pas besoin de courir chercher du cash. Top !',
    date: '2024-02-25',
    locale: 'fr',
  },
  {
    id: 5,
    author: 'Sarah Kabongo',
    city: 'Kisangani',
    avatar: '/images/testimonials/avatar-5.svg',
    rating: 4,
    text: 'Interface simple et rapide. J\'ai réservé pour toute ma famille en quelques minutes. Merci Rusa Travel !',
    date: '2024-03-01',
    locale: 'fr',
  },
]
