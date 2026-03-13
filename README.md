# Rusa Travel - Plateforme de Transport en République Démocratique du Congo

![Rusa Travel Logo](/images/logo/auth-logo.svg)

## 🚌 Description

**Rusa Travel** est une plateforme moderne de gestion de transport basée sur Vue 3 et Tailwind CSS, spécialement conçue pour les besoins de transport en République Démocratique du Congo.

### 🎯 Fonctionnalités Principales

- 🚌 **Gestion de flotte**: Suivi des bus et itinéraires
- 👥 **Réservation en ligne**: Système de réservation intuitive
- 📊 **Tableaux de bord**: Dashboards par rôle (Admin, Manager, Carrier, Client)
- 📱 **Responsive Design**: Compatible mobile, tablette et desktop
- 🔐 **Authentification sécurisée**: Gestion des rôles et permissions
- 💳 **Paiement intégré**: Système de paiement multiple
- 📍 **Suivi GPS**: Localisation en temps réel des véhicules

### 🛠️ Stack Technique

- **Frontend**: Vue 3 + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Pinia
- **Routing**: Vue Router
- **Charts**: Chart.js
- **Build Tool**: Vite
- **Icons**: Lucide Icons

### 📋 Structure du Projet

```
src/
├── components/           # Composants réutilisables
├── layouts/            # Layouts principaux
├── views/              # Pages par rôle
│   ├── admin/         # Dashboard administrateur
│   ├── manager/       # Dashboard manager
│   ├── carrier/        # Dashboard transporteur
│   ├── client/         # Dashboard client
│   └── auth/          # Pages d'authentification
├── stores/             # Gestion d'état (Pinia)
├── router/             # Configuration des routes
└── assets/             # Images et ressources
```

### 🚀 Démarrage Rapide

#### Prérequis
- Node.js 16+ 
- npm ou yarn
- Git

#### Installation
```bash
# Cloner le projet
git clone https://github.com/votre-username/rusa-travel.git

# Installer les dépendances
cd rusa-travel
npm install

# Démarrer le serveur de développement
npm run dev
```

#### Build de Production
```bash
# Build pour production
npm run build

# Aperçu du build
npm run preview
```

### 🎨 Personnalisation

#### Thème et Couleurs
- **Bleu primaire**: `#3B82F6` (Blue 600)
- **Vert succès**: `#10B981` (Green 500)
- **Jaune action**: `#F59E0B` (Yellow 400)
- **Rouge erreur**: `#EF4444` (Red 500)

#### Configuration
- Modifier `src/assets/styles/` pour les thèmes
- Configurer les variables dans `src/config/`

### 📊 Dashboards par Rôle

#### 🏢 Admin Dashboard
- Vue d'ensemble de la plateforme
- Gestion des utilisateurs et agences
- Statistiques globales et rapports

#### 👔 Manager Dashboard
- Gestion des équipes et tâches
- Performance et analytics
- Planning et ressources

#### 🚌 Carrier Dashboard
- Gestion de la flotte de bus
- Itinéraires et horaires
- Maintenance et rapports

#### 👤 Client Dashboard
- Réservations personnelles
- Historique des voyages
- Points fidélité et notifications

### 🔐 Sécurité

- **Authentification**: JWT tokens
- **Rôles**: Admin, Manager, Carrier, Client
- **Permissions**: Contrôle d'accès granulaire
- **Validation**: Input validation et sanitization

### 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablette**: 768px - 1024px  
- **Desktop**: 1024px+
- **Adaptatif**: Menu hamburger, grilles flexibles

### 🚀 Déploiement

#### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
```

#### Netlify
```bash
# Build statique
npm run build

# Déployer le dossier dist
```

### 🤝 Contribution

Nous apprécions les contributions ! Voici comment contribuer :

1. **Fork** le projet
2. **Créer** une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. **Commit** vos changements (`git commit -am 'Ajout de nouvelle fonctionnalité'`)
4. **Push** vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. **Ouvrir** une Pull Request

### � Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

### 📞 Support

- **Email**: support@rusatravel.cd
- **Site Web**: [rusatravel.cd](https://rusatravel.cd)
- **Documentation**: [docs.rusatravel.cd](https://docs.rusatravel.cd)

---

**🚌 Rusa Travel - Le transport moderne pour la RDC** 🇨🇩

- [Free Version](https://free-vue-demo.tailadmin.com/)
- [Pro Version](https://vue-demo.tailadmin.com)

### Other Versions

- [HTML Version](https://github.com/TailAdmin/tailadmin-free-tailwind-dashboard-template)
- [Next.js Version](https://github.com/TailAdmin/free-nextjs-admin-dashboard)
- [React Version](https://github.com/TailAdmin/free-react-tailwind-admin-dashboard)
- [Angular Version](https://github.com/TailAdmin/free-angular-tailwind-dashboard)

## Installation

### Prerequisites

To get started with TailAdmin, ensure you have the following prerequisites installed and set up:

- Node.js 18.x or later (recommended to use Node.js 20.x or later)
- Recommended IDE Setup: [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

#### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

### Cloning the Repository

Clone the repository using the following command:

```bash
git clone https://github.com/TailAdmin/vue-tailwind-admin-dashboard.git
```

> Windows Users: place the repository near the root of your drive if you face issues while cloning.

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Production build:
   ```bash
   npm run build
   # or
   yarn build
   ```

## Feature Comparison

### Free Version

- 1 Unique Dashboard
- 50+ Dashboard UI components
- Basic Figma design files
- Community support

### Pro Version

- 7 Unique Dashboards: Analytics, Ecommerce, Marketing, CRM, Stocks (more coming soon)
- 500+ dashboard components and UI elements
- Complete Figma design file
- Email support

To learn more about pro version features and pricing, visit our [pricing page](https://tailadmin.com/pricing).

## Components

TailAdmin is a pre-designed starting point for building a web-based dashboard using Vue.js and Tailwind CSS. The template includes:

- Sophisticated and accessible sidebar
- Data visualization components
- Prebuilt profile management and 404 page
- Tables and Charts(Line and Bar)
- Authentication forms and input elements
- Alerts, Dropdowns, Modals, Buttons and more
- Can't forget Dark Mode 🕶️

All components are built with Vue and styled using Tailwind CSS for easy customization.

## Features

**💎 High-quality, Premium Modern Design:**
A thoughtfully designed dashboard template with a deep focus on UX/UI, already trusted and utilized by over 10K+ web apps worldwide.

**✨ Vue 3:**
Get enhanced performance with the latest Vue version.

**⚡ Vite Build System:**
Enjoy quick development with Vite, ensuring fast code compilation.

**🔀 Vue Router:**
Manage app navigation with ease using Vue Router for seamless transitions.

**💡 Reactive Utilities:**
Enhance component reactivity with @vueuse/core utilities.

**📊 Charting with ApexCharts:**
Visualize data with ApexCharts for beautiful analytics.

**🗺️ Vector Maps with JSVectorMap:**
Easily integrate interactive vector maps with JSVectorMap.

**🖌️ UI with Tailwind CSS:**
Frontend UI built on the powerful and versatile Tailwind CSS framework.

**💫 TypeScript Support:**
Write safer, maintainable code with TailAdmin Vue's TypeScript Support.

**✅ Linting and Formatting:**
Maintain a clean codebase with built-in linting and formatting.

**🗃️ State Management with Pinia:**
Handle your app's state with Pinia for clean, organized code.

## Update Logs

### Version 2.0.2 - [December 30, 2025]

#### Enhancements

- Added date range picker to Statistics Chart component.
- Improved responsive design for chart header.

### Version 2.0.1 - [February 27, 2025]

#### Update Overview

- Upgraded to Tailwind CSS v4 for better performance and efficiency.
- Updated class usage to match the latest syntax and features.
- Replaced deprecated class and optimized styles.

#### Next Steps

- Run npm install or yarn install to update dependencies.
- Check for any style changes or compatibility issues.
- Refer to the Tailwind CSS v4 [Migration Guide](https://tailwindcss.com/docs/upgrade-guide) on this release. if needed.
- This update keeps the project up to date with the latest Tailwind improvements. 🚀

### Version 2.0.0 - [February 2025]

Major update with Vue 3 migration and comprehensive redesign.

#### Major Improvements

- Complete migration to Vue 3 Composition API
- Updated to Vue Router 4
- Enhanced user interface with new Vue 3 components
- Improved performance with Vue 3's virtual DOM
- Better accessibility and responsive design

#### New Features

- Redesigned dashboards (Ecommerce, Analytics, Marketing, CRM)
- Collapsible sidebar with Vue 3 integration
- Enhanced navigation with Vue Router 4
- Real-time chat functionality
- Full-featured calendar with drag-and-drop
- Advanced table components
- Updated data visualization with ApexCharts

#### Breaking Changes

- Requires Vue 3 and Vue Router 4
- Chart components migrated to ApexCharts for Vue 3
- Modified routing implementation
- Updated component APIs for Vue 3 compatibility

[Read more](https://tailadmin.com/docs/update-logs/vue) on this release.

### Version 1.0.2 - [June 19, 2024]

#### Issues

- Fix Mobile Menu Hamburger Icon issue.

### Version 1.0.1 - [Feb 08, 2024]

#### Enhancements

- Make it functional [Multiselect Dropdown/Form Elements].
- Delete SelectGroup Components then create a SelectGroup folder and create two files under this
  folder SelectGroupOne.vue SelectGroupTwo.vue [Select Group/Form Elements & Layout].
- Update style.css file.

### Version 1.0.0 - Initial Release - [Jan 22, 2024]

- Initial release of TailAdmin Vue.
