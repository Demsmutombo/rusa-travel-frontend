# RUSA TRAVEL — Spécification Frontend Complète

> Plateforme de réservation de bus interurbains en République Démocratique du Congo  
> Spécification produit niveau startup — Démo investisseurs

---

## Table des matières

1. [Vue d'ensemble](#1-vue-densemble)
2. [Architecture des dossiers](#2-architecture-des-dossiers)
3. [Structure des composants Vue](#3-structure-des-composants-vue)
4. [Données mock (JSON)](#4-données-mock-json)
5. [Plateforme Client](#5-plateforme-client)
6. [Dashboard Transporteur](#6-dashboard-transporteur)
7. [Plateforme Super Admin](#7-plateforme-super-admin)
8. [Flux de navigation](#8-flux-de-navigation)
9. [Interactions UX](#9-interactions-ux)
10. [Multi-langue & Responsive](#10-multi-langue--responsive)

---

## 1. Vue d'ensemble

### Stack technique

| Technologie | Usage |
|-------------|-------|
| Vue 3 (Composition API) | Framework principal |
| Tailwind CSS v4 | Styles |
| Vue Router 4 | Navigation |
| Pinia | Gestion d'état |
| Vite 6 | Build |

### Rôles utilisateurs

| Rôle | Description | Accès |
|------|-------------|-------|
| **Client** | Passagers réservant des billets | Plateforme Client |
| **Transporteur** | Compagnies de transport | Dashboard Transporteur |
| **Super Admin** | Propriétaire (Kansa Business) | Plateforme Admin |

---

## 2. Architecture des dossiers

```
src/
├── assets/
│   ├── main.css
│   ├── data/                    # Données mock
│   │   ├── cities.ts
│   │   ├── agencies.ts
│   │   ├── trips.ts
│   │   ├── bookings.ts
│   │   └── testimonials.ts
│   └── locales/
│       ├── fr.json
│       ├── ln.json              # Lingala
│       └── sw.json              # Swahili
│
├── components/
│   ├── common/
│   │   ├── AppButton.vue
│   │   ├── AppInput.vue
│   │   ├── AppSelect.vue
│   │   ├── LanguageSwitcher.vue
│   │   ├── NotificationBell.vue
│   │   └── MobileAppBanner.vue
│   │
│   ├── client/
│   │   ├── TripSearchForm.vue
│   │   ├── BusCard.vue
│   │   ├── SeatMap.vue
│   │   ├── PassengerForm.vue
│   │   ├── PaymentMethodCard.vue
│   │   ├── QRTicket.vue
│   │   ├── TestimonialCard.vue
│   │   └── PopularRouteCard.vue
│   │
│   ├── carrier/
│   │   ├── StatsCard.vue
│   │   ├── BusForm.vue
│   │   ├── TripForm.vue
│   │   ├── BookingTable.vue
│   │   └── RevenueChart.vue
│   │
│   ├── admin/
│   │   ├── AgencyApprovalCard.vue
│   │   ├── TransactionTable.vue
│   │   ├── UserTable.vue
│   │   ├── SystemLogViewer.vue
│   │   └── FraudAlertCard.vue
│   │
│   └── layout/
│       ├── ClientLayout.vue
│       ├── CarrierLayout.vue
│       ├── AdminLayout.vue
│       ├── AuthLayout.vue
│       └── AppHeader.vue
│
├── composables/
│   ├── useBooking.ts
│   ├── useAuth.ts
│   ├── useI18n.ts
│   └── useNotifications.ts
│
├── stores/
│   ├── auth.ts
│   ├── booking.ts
│   ├── notifications.ts
│   └── locale.ts
│
├── services/
│   ├── api.ts
│   ├── payment.ts
│   └── email.ts                  # Simulation emails
│
├── router/
│   └── index.ts
│
├── views/
│   ├── client/
│   │   ├── Home.vue
│   │   ├── Search.vue
│   │   ├── Results.vue
│   │   ├── BusDetails.vue
│   │   ├── SeatSelection.vue
│   │   ├── Booking.vue
│   │   ├── Payment.vue
│   │   ├── Ticket.vue
│   │   ├── Profile.vue
│   │   ├── MyBookings.vue
│   │   └── TravelHistory.vue
│   │
│   ├── carrier/
│   │   ├── Dashboard.vue
│   │   ├── Buses.vue
│   │   ├── BusForm.vue
│   │   ├── Trips.vue
│   │   ├── TripForm.vue
│   │   ├── Bookings.vue
│   │   └── Statistics.vue
│   │
│   ├── admin/
│   │   ├── Dashboard.vue
│   │   ├── Agencies.vue
│   │   ├── AgencyApproval.vue
│   │   ├── Users.vue
│   │   ├── Transactions.vue
│   │   ├── SystemMonitoring.vue
│   │   └── Settings.vue
│   │
│   └── Auth/
│       └── Signin.vue
│
├── App.vue
└── main.ts
```

---

## 3. Structure des composants Vue

### Composants réutilisables (common)

| Composant | Props | Usage |
|-----------|-------|-------|
| `AppButton` | variant, size, loading, disabled | Boutons primaires/secondaires |
| `AppInput` | label, type, modelValue, error, placeholder | Champs de formulaire |
| `AppSelect` | label, options, modelValue | Sélecteurs |
| `LanguageSwitcher` | — | FR / LN / SW |
| `NotificationBell` | count, items | Cloche notifications |
| `MobileAppBanner` | — | Promo app mobile |

### Composants Client

| Composant | Description |
|-----------|-------------|
| `TripSearchForm` | Formulaire départ/arrivée/date/passagers |
| `BusCard` | Carte bus avec infos essentielles |
| `SeatMap` | Grille sièges interactive (cliquable) |
| `PassengerForm` | Nom, email, téléphone, pièce d'identité |
| `PaymentMethodCard` | M-Pesa, Airtel, Orange, Carte bancaire |
| `QRTicket` | QR code + détails billet |
| `TestimonialCard` | Avis client |
| `PopularRouteCard` | Trajet populaire (Kinshasa→Lubumbashi) |

---

## 4. Données mock (JSON)

### 4.1 Villes (cities.ts)

```typescript
export const cities = [
  { id: 'kinshasa', name: 'Kinshasa', nameLn: 'Kinsásá', nameSw: 'Kinshasa', region: 'Kinshasa' },
  { id: 'matadi', name: 'Matadi', nameLn: 'Matádi', nameSw: 'Matadi', region: 'Kongo Central' },
  { id: 'boma', name: 'Boma', nameLn: 'Bóma', nameSw: 'Boma', region: 'Kongo Central' },
  { id: 'kikwit', name: 'Kikwit', nameLn: 'Kikwít', nameSw: 'Kikwit', region: 'Kwilu' },
  { id: 'lubumbashi', name: 'Lubumbashi', nameLn: 'Lubumbáshi', nameSw: 'Lubumbashi', region: 'Haut-Katanga' },
  { id: 'goma', name: 'Goma', nameLn: 'Góma', nameSw: 'Goma', region: 'Nord-Kivu' },
  { id: 'kisangani', name: 'Kisangani', nameLn: 'Kisángáni', nameSw: 'Kisangani', region: 'Tshopo' },
  { id: 'mbujimayi', name: 'Mbuji-Mayi', nameLn: 'Mbújí-Mayí', nameSw: 'Mbuji-Mayi', region: 'Kasaï Oriental' },
]
```

### 4.2 Compagnies de transport (agencies.ts)

```typescript
export const transportAgencies = [
  {
    id: 'transco',
    name: 'TRANSCO',
    logo: '/images/agencies/transco.png',
    rating: 4.7,
    reviewsCount: 1250,
    busesCount: 45,
    routes: ['kinshasa', 'lubumbashi', 'goma', 'kisangani'],
    phone: '+243 81 234 5678',
    email: 'contact@transco.cd',
    description: 'Leader du transport interurbain en RDC depuis 2010. Confort et ponctualité garantis.',
    verified: true,
  },
  {
    id: 'trans-royaume',
    name: 'Trans Royaume',
    logo: '/images/agencies/trans-royaume.png',
    rating: 4.5,
    reviewsCount: 890,
    busesCount: 32,
    routes: ['kinshasa', 'matadi', 'boma', 'kikwit'],
    phone: '+243 82 345 6789',
    email: 'info@transroyaume.cd',
    description: 'Vos trajets Kinshasa-Matadi en toute sécurité. Bus VIP disponibles.',
    verified: true,
  },
  {
    id: 'city-express',
    name: 'City Express',
    logo: '/images/agencies/city-express.png',
    rating: 4.3,
    reviewsCount: 620,
    busesCount: 28,
    routes: ['kinshasa', 'goma', 'lubumbashi'],
    phone: '+243 99 456 7890',
    email: 'reservation@cityexpress.cd',
    description: 'Rapidité et prix compétitifs. Liaisons quotidiennes vers l\'est du pays.',
    verified: true,
  },
  {
    id: 'congo-travel',
    name: 'Congo Travel Bus',
    logo: '/images/agencies/congo-travel.png',
    rating: 4.6,
    reviewsCount: 1100,
    busesCount: 52,
    routes: ['kinshasa', 'lubumbashi', 'kisangani', 'mbujimayi'],
    phone: '+243 81 567 8901',
    email: 'hello@congotravel.cd',
    description: 'Le réseau national. Couverture de toutes les provinces.',
    verified: true,
  },
]
```

### 4.3 Trajets (trips.ts)

```typescript
export const trips = [
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
  },
  // ... plus de trajets
]
```

### 4.4 Plan des sièges (seat layout)

```typescript
// Format: 2-2 (2 sièges de chaque côté de l'allée)
// A=fenêtre gauche, B=allée gauche, C=allée droite, D=fenêtre droite
export const seatLayout = {
  rows: 12,
  columns: ['A', 'B', 'C', 'D'],
  layout: '2-2',  // Standard bus
  vipLayout: '2-1', // VIP: 2 gauche, 1 droite (plus spacieux)
}
```

### 4.5 Témoignages (testimonials.ts)

```typescript
export const testimonials = [
  {
    id: 1,
    author: 'Marie Kabila',
    city: 'Kinshasa',
    avatar: '/images/testimonials/1.jpg',
    rating: 5,
    text: 'Rusa Travel m\'a fait gagner un temps fou. Plus besoin d\'aller à la gare pour réserver. Le billet sur mon téléphone, c\'est génial !',
    date: '2024-02-10',
  },
  {
    id: 2,
    author: 'Jean-Pierre Mutombo',
    city: 'Lubumbashi',
    avatar: '/images/testimonials/2.jpg',
    rating: 5,
    text: 'J\'utilise Rusa Travel pour mes voyages Kinshasa-Lubumbashi. Prix corrects, réservation simple. Je recommande à tous.',
    date: '2024-02-15',
  },
  {
    id: 3,
    author: 'Grace Mwamba',
    city: 'Goma',
    avatar: '/images/testimonials/3.jpg',
    rating: 4,
    text: 'Le QR code pour mon billet, c\'est pratique. Plus de stress de perdre mon ticket. Bon service client aussi.',
    date: '2024-02-20',
  },
]
```

### 4.6 Trajets populaires

```typescript
export const popularRoutes = [
  { from: 'kinshasa', to: 'lubumbashi', priceFrom: 75000, duration: '~12h', tripsPerDay: 8 },
  { from: 'kinshasa', to: 'matadi', priceFrom: 20000, duration: '~5h', tripsPerDay: 12 },
  { from: 'kinshasa', to: 'goma', priceFrom: 85000, duration: '~11h', tripsPerDay: 5 },
  { from: 'lubumbashi', to: 'kinshasa', priceFrom: 78000, duration: '~12h', tripsPerDay: 6 },
  { from: 'kinshasa', to: 'kisangani', priceFrom: 65000, duration: '~24h', tripsPerDay: 3 },
]
```

---

## 5. Plateforme Client

### 5.1 Page d'accueil (Home.vue)

#### Structure des sections

| Section | Contenu |
|---------|---------|
| **Hero** | Titre « Voyagez en toute sérénité à travers la RDC », sous-titre, formulaire de recherche intégré |
| **Formulaire recherche** | Départ (select), Arrivée (select), Date (datepicker), Passagers (number), bouton « Rechercher » |
| **Trajets populaires** | 5 cartes : Kinshasa→Lubumbashi, Kinshasa→Matadi, Kinshasa→Goma, etc. Prix dès X CDF |
| **Partenaires** | Logos TRANSCO, Trans Royaume, City Express, Congo Travel Bus |
| **Comment ça marche** | 4 étapes : 1. Recherchez 2. Choisissez 3. Réservez 4. Voyagez |
| **Témoignages** | Carousel 3 avis clients avec photo, note, texte |
| **App mobile** | Bannière « Téléchargez l'app Rusa Travel » avec QR code et liens App Store / Play Store |
| **Footer** | Liens, contact, réseaux sociaux |

#### Textes de contenu

```
Hero titre: "Voyagez en toute sérénité à travers la RDC"
Hero sous-titre: "Réservez vos billets de bus en ligne. Simple, rapide, sécurisé. Paiement M-Pesa, Airtel Money, Orange Money."

Comment ça marche:
Étape 1: "Recherchez votre trajet" — Indiquez votre ville de départ, d'arrivée et la date.
Étape 2: "Choisissez votre bus" — Comparez les horaires, prix et compagnies.
Étape 3: "Réservez en 2 clics" — Sélectionnez votre siège et payez en ligne.
Étape 4: "Voyagez serein" — Recevez votre billet digital avec QR code.
```

---

### 5.2 Page Recherche (Search.vue)

- Même formulaire que la home, pré-rempli avec les paramètres de l'URL
- Redirection automatique vers Results si des paramètres sont présents
- Message « Indiquez vos critères pour trouver des trajets »

---

### 5.3 Page Résultats (Results.vue)

#### Filtres (sidebar ou barre horizontale)

- Compagnie (checkbox)
- Type de bus (Standard / VIP)
- Prix (slider ou min-max)
- Heure de départ (matin / après-midi / soir)
- Tri : Prix croissant, Prix décroissant, Départ plus tôt, Durée

#### Carte bus (BusCard)

- Logo compagnie + nom
- Badge VIP ou Standard
- Heure départ → Heure arrivée
- Durée
- Prix (en gras, en CDF)
- Sièges restants (« Plus que 5 places » si < 10)
- Bouton « Voir détails » / « Choisir »

---

### 5.4 Page Détails Bus (BusDetails.vue)

- Informations compagnie (logo, nom, note, description)
- Détails du trajet (gare départ, gare arrivée, horaires, durée)
- Caractéristiques bus : Wi-Fi, Climatisation, Prise USB, WC
- Plan des sièges (aperçu, pas sélection)
- Prix et bouton « Sélectionner un siège »

---

### 5.5 Page Sélection sièges (SeatSelection.vue)

- Plan interactif : grille sièges (A1, A2, B1, B2, etc.)
- États : disponible (vert), occupé (gris), sélectionné (bleu)
- Légende : Disponible, Occupé, Votre sélection
- Récapitulatif : Siège(s) choisi(s), Prix total
- Bouton « Continuer vers la réservation »

---

### 5.6 Page Réservation (Booking.vue)

- Formulaire passager : Nom, Prénom, Email, Téléphone, Pièce d'identité
- Récapitulatif : Trajet, Siège(s), Prix
- Case « J'accepte les conditions »
- Bouton « Procéder au paiement »

---

### 5.7 Page Paiement (Payment.vue)

#### Méthodes de paiement (cartes cliquables)

| Méthode | Icône | Description |
|---------|-------|-------------|
| M-Pesa | Logo Vodacom | Paiement via M-Pesa. Vous recevrez un code USSD. |
| Airtel Money | Logo Airtel | Paiement via Airtel Money. |
| Orange Money | Logo Orange | Paiement via Orange Money. |
| Carte bancaire | Visa/MC | Paiement sécurisé par carte (simulation). |

- Formulaire selon méthode (numéro téléphone pour mobile money)
- Récapitulatif commande
- Bouton « Payer X CDF »
- Simulation : après 2 secondes, redirection vers Ticket

---

### 5.8 Page Billet digital (Ticket.vue)

- QR Code (librairie qrcode.vue ou similar)
- Numéro de réservation (ex: RUSA-2024-ABC123)
- Nom passager
- Compagnie
- Trajet (départ → arrivée)
- Date et heure
- Siège(s)
- Boutons : Télécharger PDF, Partager, Imprimer

---

### 5.9 Compte utilisateur

#### Profil (Profile.vue)

- Photo, Nom, Email, Téléphone
- Modifier mot de passe
- Langue préférée
- Notifications (email, SMS)

#### Mes réservations (MyBookings.vue)

- Liste des réservations : À venir, Passées, Annulées
- Carte par réservation : Trajet, Date, Statut, bouton « Voir billet »

#### Historique voyages (TravelHistory.vue)

- Liste des voyages effectués
- Possibilité de « Réserver à nouveau » le même trajet

---

## 6. Dashboard Transporteur

### 6.1 Dashboard (Dashboard.vue)

#### Cartes statistiques

| Carte | Donnée | Icône |
|-------|--------|-------|
| Total bus | 24 | Bus |
| Trajets ce mois | 156 | Route |
| Réservations | 1 234 | Ticket |
| Revenus (CDF) | 45 000 000 | Argent |
| Taux remplissage | 78 % | Graphique |

#### Graphiques

- Revenus des 7 derniers jours (bar chart)
- Taux d'occupation par trajet (pie ou bar)
- Prochains départs (liste)

---

### 6.2 Gestion des bus (Buses.vue + BusForm.vue)

#### Liste

- Tableau : Immatriculation, Type, Capacité, Statut (Actif/En maintenance), Actions (Modifier, Désactiver)

#### Formulaire Ajout/Édition

- Immatriculation
- Type : Standard / VIP
- Nombre de sièges
- Caractéristiques : Wi-Fi, Climatisation, Prise USB
- Photo du bus

---

### 6.3 Gestion des trajets (Trips.vue + TripForm.vue)

#### Liste

- Tableau : Trajet, Bus, Date, Heure, Prix, Places, Statut

#### Formulaire Création

- Ville départ (select)
- Ville arrivée (select)
- Bus (select)
- Date
- Heure départ
- Heure arrivée (calculable)
- Prix billet
- Gare départ
- Gare arrivée

---

### 6.4 Réservations (Bookings.vue)

- Filtres : Date, Trajet, Statut
- Tableau : ID, Passager, Trajet, Siège, Date, Montant, Statut
- Détails passager au clic
- Export CSV

---

### 6.5 Statistiques (Statistics.vue)

- Performances par trajet (tableau + graphique)
- Taux d'occupation par ligne
- Revenus journaliers
- Revenus hebdomadaires
- Comparaison mois précédent

---

## 7. Plateforme Super Admin

### 7.1 Dashboard Admin (Dashboard.vue)

| Carte | Donnée |
|-------|--------|
| Agences total | 12 |
| Réservations totales | 45 678 |
| Revenus plateforme | 125 000 000 CDF |
| Commission ce mois | 8 500 000 CDF |
| Utilisateurs actifs | 3 245 |

- Graphique : Revenus plateforme sur 30 jours
- Liste : Dernières transactions
- Alertes : Agences en attente de validation, litiges ouverts

---

### 7.2 Compagnies de transport (Agencies.vue)

- Liste : Nom, Statut (Approuvé/En attente/Suspendu), Buses, Revenus, Actions
- Bouton « Approbations en attente » (badge si > 0)

#### Page Approbation (AgencyApproval.vue)

- Dossiers en attente : documents, infos, boutons Approuver / Refuser

---

### 7.3 Utilisateurs (Users.vue)

- Recherche par nom, email
- Tableau : Nom, Email, Rôle, Inscriptions, Dernière activité
- Actions : Suspendre, Réactiver, Voir détails

---

### 7.4 Transactions (Transactions.vue)

- Filtres : Date, Agence, Statut
- Tableau : ID, Utilisateur, Montant, Commission (5 %), Agence, Date
- Export CSV / Excel
- Résumé : Total transactions, Total commission

---

### 7.5 Monitoring système (SystemMonitoring.vue)

- Activité en temps réel (logs simulés)
- Connexions actives
- Alertes fraude (ex: réservations multiples suspectes)
- Santé des services (API, base de données — simulé)

---

### 7.6 Paramètres (Settings.vue)

- Taux de commission plateforme
- Conditions générales
- Paramètres notifications
- Maintenance mode

---

## 8. Flux de navigation

```
┌─────────────────────────────────────────────────────────────────┐
│                        ENTRÉE (Non connecté)                     │
└─────────────────────────────────────────────────────────────────┘
    │
    ├── /splash ──────────────────────────────────────────────────┐
    │                                                              │
    ├── /auth/signin (Client / Transporteur / Admin)               │
    │       │                                                      │
    │       ├── Client ──► /client                                 │
    │       ├── Transporteur ──► /carrier/dashboard                │
    │       └── Admin ──► /admin/dashboard                         │
    │                                                              │
    └── /client (Accès partiel sans connexion pour recherche)      │
            │                                                      │
            ▼                                                      │
┌─────────────────────────────────────────────────────────────────┐
│                    FLUX RÉSERVATION CLIENT                       │
└─────────────────────────────────────────────────────────────────┘

/client (Home)
    │
    ├── [Recherche] ──► /client/results?from=kinshasa&to=matadi&date=...
    │
    └── /client/results
            │
            └── [Choisir bus] ──► /client/bus/:tripId
                    │
                    └── [Sélectionner siège] ──► /client/booking
                            │
                            └── [Continuer] ──► /client/booking (formulaire passager)
                                    │
                                    └── [Payer] ──► /client/payment
                                            │
                                            └── [Paiement simulé] ──► /client/ticket/:bookingId
```

---

## 9. Interactions UX

### Notifications

- Toast en haut à droite : succès (vert), erreur (rouge), info (bleu)
- Exemples : « Réservation confirmée », « Paiement effectué », « Erreur de connexion »
- Store Pinia : `notifications.add({ type, message })`

### Confirmations

- Modal avant suppression (bus, trajet, compte)
- « Êtes-vous sûr ? » avec Annuler / Confirmer

### États de chargement

- Skeleton sur cartes et tableaux
- Spinner sur boutons (« Chargement… »)
- Overlay lors du « paiement »

### Validation formulaires

- Champs requis marqués *
- Messages d’erreur sous les champs
- Désactivation du bouton si formulaire invalide

### Responsive

- Mobile : menu hamburger, formulaire en colonne, cartes empilées
- Tablette : 2 colonnes pour les résultats
- Desktop : sidebar fixe, contenu fluide

---

## 10. Multi-langue & Responsive

### Langues

| Code | Langue | Fichier |
|------|--------|---------|
| fr | Français | fr.json |
| ln | Lingala | ln.json |
| sw | Swahili | sw.json |

### Exemples de clés (fr.json)

```json
{
  "common": {
    "search": "Rechercher",
    "book": "Réserver",
    "cancel": "Annuler",
    "confirm": "Confirmer",
    "loading": "Chargement..."
  },
  "home": {
    "heroTitle": "Voyagez en toute sérénité à travers la RDC",
    "heroSubtitle": "Réservez vos billets de bus en ligne. Simple, rapide, sécurisé.",
    "from": "Départ",
    "to": "Arrivée",
    "date": "Date",
    "passengers": "Passagers",
    "popularRoutes": "Trajets populaires",
    "howItWorks": "Comment ça marche",
    "testimonials": "Ce que disent nos clients",
    "downloadApp": "Téléchargez l'application"
  },
  "booking": {
    "seatSelection": "Sélection des sièges",
    "passengerInfo": "Informations passager",
    "payment": "Paiement",
    "ticket": "Votre billet"
  }
}
```

### Composable useI18n

```typescript
// Usage: const { t, locale, setLocale } = useI18n()
// t('home.heroTitle') => "Voyagez en toute sérénité..."
```

### Breakpoints Tailwind

- Mobile : < 640px
- Tablette : 640px – 1024px
- Desktop : > 1024px

---

## Annexe : Routes complètes

### Client

| Route | Composant | Méta |
|-------|-----------|------|
| /client | Home | public |
| /client/search | Search | public |
| /client/results | Results | public |
| /client/bus/:id | BusDetails | public |
| /client/booking | SeatSelection → Booking | auth |
| /client/payment | Payment | auth |
| /client/ticket/:id | Ticket | auth |
| /client/profile | Profile | auth |
| /client/my-bookings | MyBookings | auth |
| /client/history | TravelHistory | auth |

### Transporteur

| Route | Composant |
|-------|-----------|
| /carrier | Redirect → dashboard |
| /carrier/dashboard | Dashboard |
| /carrier/buses | Buses |
| /carrier/buses/new | BusForm |
| /carrier/buses/:id/edit | BusForm |
| /carrier/trips | Trips |
| /carrier/trips/new | TripForm |
| /carrier/bookings | Bookings |
| /carrier/statistics | Statistics |

### Admin

| Route | Composant |
|-------|-----------|
| /admin | Redirect → dashboard |
| /admin/dashboard | Dashboard |
| /admin/agencies | Agencies |
| /admin/agencies/approvals | AgencyApproval |
| /admin/users | Users |
| /admin/transactions | Transactions |
| /admin/monitoring | SystemMonitoring |
| /admin/settings | Settings |

---

---

## Annexe B : Checklist d'implémentation

### Dépendances à installer

```bash
npm install pinia qrcode.vue
```

- **Pinia** : Gestion d'état (auth, booking, notifications, locale)
- **qrcode.vue** : Génération QR code pour les billets digitaux

### Étapes d'implémentation suggérées

1. **Phase 1 — Fondations**
   - [ ] Installer Pinia, configurer dans main.ts
   - [ ] Créer stores: auth, booking, notifications, locale
   - [ ] Intégrer useI18n et LanguageSwitcher
   - [ ] Créer composants common (AppButton, AppInput, AppSelect)

2. **Phase 2 — Plateforme Client**
   - [ ] Home avec Hero + TripSearchForm + PopularRoutes
   - [ ] Search + Results avec filtres
   - [ ] BusDetails
   - [ ] SeatSelection (SeatMap interactif)
   - [ ] Booking + Payment
   - [ ] Ticket avec QR code
   - [ ] Profile, MyBookings, TravelHistory

3. **Phase 3 — Dashboard Transporteur**
   - [ ] Dashboard avec stats + graphiques
   - [ ] Buses CRUD
   - [ ] Trips CRUD
   - [ ] Bookings liste
   - [ ] Statistics

4. **Phase 4 — Super Admin**
   - [ ] Dashboard admin
   - [ ] Agencies + Approbations
   - [ ] Users
   - [ ] Transactions
   - [ ] SystemMonitoring
   - [ ] Settings

5. **Phase 5 — Polish**
   - [ ] Notifications toast
   - [ ] Simulation email confirmation
   - [ ] Responsive mobile
   - [ ] Tests et corrections UX

---

*Document généré pour RUSA TRAVEL — Spécification produit v1.0*
