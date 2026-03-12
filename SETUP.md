# Rusa Travel - Guide de Démarrage

## Commandes pour lancer le projet

```bash
# Installer les dépendances (si pas déjà fait)
npm install

# Lancer en mode développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build de production
npm run preview
```

## Structure du projet

```
Rusa Travel/
├── public/                 # Assets statiques
│   └── images/
│       └── logo/          # Logos Rusa Travel (SVG)
├── src/
│   ├── assets/            # CSS, styles
│   ├── components/        # Composants réutilisables
│   │   ├── common/       # Composants communs
│   │   ├── layout/       # Layouts (Client, Admin, Carrier)
│   │   ├── ui/           # Composants UI
│   │   └── icons/        # Icônes
│   ├── composables/      # Logic réutilisable (useAuth, useTheme, useSidebar)
│   ├── router/           # Configuration des routes
│   ├── views/            # Pages/Vues
│   │   ├── admin/       # Dashboard admin
│   │   ├── Auth/        # Authentification
│   │   ├── carrier/     # Espace transporteur
│   │   ├── client/      # Espace client/voyageur
│   │   ├── Errors/      # Pages d'erreur
│   │   └── Loading/     # Splash screen
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Routes principales

| Route | Description |
|-------|-------------|
| `/` | Redirige vers /splash |
| `/splash` | Écran de chargement (3s puis redirection vers connexion) |
| `/auth/signin` | Connexion |
| `/client` | Accueil client |
| `/client/search` | Recherche de trajets |
| `/client/results` | Résultats de recherche |
| `/carrier/dashboard` | Dashboard transporteur |
| `/admin/dashboard` | Dashboard admin |
| `/404` | Page non trouvée |

## Notes

- **Backend** : Le projet utilise actuellement des données mock. Pour une connexion API réelle, créer un service dans `src/services/` et configurer les variables d'environnement (`.env`).
- **Authentification** : L'auth est simulée. Les credentials sont stockés dans localStorage.
- **Logos** : Remplacer les SVG dans `public/images/logo/` par vos logos finaux si nécessaire.
