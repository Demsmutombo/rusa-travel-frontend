<template>
  <div style="min-height: 100vh; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); padding: 20px;">
    <!-- Header -->
    <div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center;">
          <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
            <svg style="width: 24px; height: 24px; fill: white;" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
            </svg>
          </div>
          <h1 style="font-size: 24px; font-weight: bold; color: #1a202c; margin: 0;">Rusa Travel</h1>
        </div>
        <router-link to="/login" style="background: #3182ce; color: white; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 500;">
          Retour à la Connexion
        </router-link>
      </div>
    </div>

    <!-- Hero Section -->
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 60px 20px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
      <div style="width: 80px; height: 80px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
        <svg style="width: 48px; height: 48px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <h1 style="font-size: 48px; font-weight: bold; margin: 0 0 20px 0;">Guide d'Utilisation</h1>
      <p style="font-size: 20px; opacity: 0.9; margin: 0; max-width: 600px; margin: 0 auto;">Maîtrisez toutes les fonctionnalités de la plateforme Rusa Travel</p>
    </div>

    <!-- Table of Contents -->
    <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); margin-bottom: 30px;">
      <h2 style="font-size: 32px; font-weight: bold; color: #1a202c; margin: 0 0 30px 0; display: flex; align-items: center;">
        <svg style="width: 32px; height: 32px; margin-right: 15px; color: #3182ce;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        Sommaire
      </h2>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px;">
        <a href="#getting-started" style="display: flex; align-items: center; padding: 20px; background: #f7fafc; border-radius: 10px; text-decoration: none; color: #2d3748; transition: all 0.3s;">
          <span style="width: 40px; height: 40px; background: #3182ce; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold;">1</span>
          <div>
            <div style="font-weight: 600; color: #1a202c;">Démarrage Rapide</div>
            <div style="font-size: 14px; color: #718096;">Premiers pas</div>
          </div>
        </a>
        
        <a href="#user-roles" style="display: flex; align-items: center; padding: 20px; background: #f7fafc; border-radius: 10px; text-decoration: none; color: #2d3748; transition: all 0.3s;">
          <span style="width: 40px; height: 40px; background: #48bb78; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold;">2</span>
          <div>
            <div style="font-weight: 600; color: #1a202c;">Rôles Utilisateurs</div>
            <div style="font-size: 14px; color: #718096;">Permissions et accès</div>
          </div>
        </a>
        
        <a href="#admin-guide" style="display: flex; align-items: center; padding: 20px; background: #f7fafc; border-radius: 10px; text-decoration: none; color: #2d3748; transition: all 0.3s;">
          <span style="width: 40px; height: 40px; background: #e53e3e; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold;">3</span>
          <div>
            <div style="font-weight: 600; color: #1a202c;">Administrateur</div>
            <div style="font-size: 14px; color: #718096;">Gestion système</div>
          </div>
        </a>
      </div>
    </div>

    <!-- Getting Started Section -->
    <section id="getting-started" style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); margin-bottom: 30px;">
      <h2 style="font-size: 32px; font-weight: bold; color: #1a202c; margin: 0 0 30px 0; display: flex; align-items: center;">
        <span style="width: 48px; height: 48px; background: #3182ce; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 20px; font-size: 20px; font-weight: bold;">1</span>
        Démarrage Rapide
      </h2>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
        <div>
          <h3 style="font-size: 24px; font-weight: 600; color: #1a202c; margin: 0 0 20px 0;">🚀 Premiers Pas</h3>
          
          <div style="margin-bottom: 20px;">
            <div style="display: flex; align-items: flex-start;">
              <div style="width: 32px; height: 32px; background: #48bb78; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; margin-top: 5px;">
                <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 style="font-weight: 600; color: #1a202c; margin: 0 0 8px 0;">Choisissez votre rôle</h4>
                <p style="color: #4a5568; margin: 0;">Utilisez l'email approprié pour accéder à votre espace de travail.</p>
                <div style="background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; margin-top: 8px;">
                  <code style="color: #2d3748; font-size: 14px;">admin@rusatravel.com</code>
                </div>
              </div>
            </div>
            
            <div style="display: flex; align-items: flex-start; margin-top: 20px;">
              <div style="width: 32px; height: 32px; background: #48bb78; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; margin-top: 5px;">
                <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 style="font-weight: 600; color: #1a202c; margin: 0 0 8px 0;">Entrez vos identifiants</h4>
                <p style="color: #4a5568; margin: 0;">Mot de passe : utilisez n'importe quel mot de passe.</p>
                <div style="background: #ebf8ff; border: 1px solid #90cdf4; border-radius: 8px; padding: 12px; margin-top: 8px;">
                  <p style="color: #2b6cb0; font-size: 14px; margin: 0;">💡 <strong>Astuce :</strong> Cochez "Se souvenir de moi"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 style="font-size: 24px; font-weight: 600; color: #1a202c; margin: 0 0 20px 0;">💡 Conseils Utiles</h3>
          
          <div style="space-y: 15px;">
            <div style="background: #ebf8ff; border-left: 4px solid #3182ce; padding: 15px;">
              <h4 style="font-weight: 600; color: #2b6cb0; margin: 0 0 8px 0;">Détection Automatique</h4>
              <p style="color: #2b6cb0; margin: 0; font-size: 14px;">Votre rôle est automatiquement détecté selon votre email.</p>
            </div>
            
            <div style="background: #fef5e7; border-left: 4px solid #ed8936; padding: 15px;">
              <h4 style="font-weight: 600; color: #c05621; margin: 0 0 8px 0;">Mode Démonstration</h4>
              <p style="color: #c05621; margin: 0; font-size: 14px;">Toutes les fonctionnalités sont disponibles en mode démo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- User Roles Section -->
    <section id="user-roles" style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); margin-bottom: 30px;">
      <h2 style="font-size: 32px; font-weight: bold; color: #1a202c; margin: 0 0 30px 0; display: flex; align-items: center;">
        <span style="width: 48px; height: 48px; background: #48bb78; color: white; border-radius: 50%; display: flex; align-items: center; justify-center; margin-right: 20px; font-size: 20px; font-weight: bold;">2</span>
        Rôles Utilisateurs
      </h2>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
        <!-- Admin Role -->
        <div style="border: 2px solid #feb2b2; border-radius: 12px; padding: 25px;">
          <div style="display: flex; align-items: center; margin-bottom: 15px;">
            <div style="width: 48px; height: 48px; background: #fed7d7; color: #e53e3e; border-radius: 50%; display: flex; align-items: center; justify-center; margin-right: 15px;">
              <svg style="width: 24px; height: 24px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <div>
              <h3 style="font-size: 18px; font-weight: bold; color: #e53e3e; margin: 0;">Administrateur</h3>
              <p style="font-size: 14px; color: #718096; margin: 0;">admin@rusatravel.com</p>
            </div>
          </div>
          <p style="color: #4a5568; margin: 0 0 15px 0;">Contrôle total du système, gestion des utilisateurs</p>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="display: flex; align-items: center; margin-bottom: 8px; color: #4a5568; font-size: 14px;">
              <svg style="width: 16px; height: 16px; margin-right: 8px; color: #48bb78;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Gestion des utilisateurs
            </li>
            <li style="display: flex; align-items: center; margin-bottom: 8px; color: #4a5568; font-size: 14px;">
              <svg style="width: 16px; height: 16px; margin-right: 8px; color: #48bb78;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Configuration système
            </li>
          </ul>
        </div>

        <!-- Manager Role -->
        <div style="border: 2px solid #90cdf4; border-radius: 12px; padding: 25px;">
          <div style="display: flex; align-items: center; margin-bottom: 15px;">
            <div style="width: 48px; height: 48px; background: #dbeafe; color: #3182ce; border-radius: 50%; display: flex; align-items: center; justify-center; margin-right: 15px;">
              <svg style="width: 24px; height: 24px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 style="font-size: 18px; font-weight: bold; color: #3182ce; margin: 0;">Manager</h3>
              <p style="font-size: 14px; color: #718096; margin: 0;">manager@rusatravel.com</p>
            </div>
          </div>
          <p style="color: #4a5568; margin: 0 0 15px 0;">Gestion des opérations, planification</p>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="display: flex; align-items: center; margin-bottom: 8px; color: #4a5568; font-size: 14px;">
              <svg style="width: 16px; height: 16px; margin-right: 8px; color: #48bb78;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Gestion des bus
            </li>
            <li style="display: flex; align-items: center; margin-bottom: 8px; color: #4a5568; font-size: 14px;">
              <svg style="width: 16px; height: 16px; margin-right: 8px; color: #48bb78;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Planification
            </li>
          </ul>
        </div>

        <!-- Client Role -->
        <div style="border: 2px solid #9ae6b4; border-radius: 12px; padding: 25px;">
          <div style="display: flex; align-items: center; margin-bottom: 15px;">
            <div style="width: 48px; height: 48px; background: #c6f6d5; color: #48bb78; border-radius: 50%; display: flex; align-items: center; justify-center; margin-right: 15px;">
              <svg style="width: 24px; height: 24px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 style="font-size: 18px; font-weight: bold; color: #48bb78; margin: 0;">Client</h3>
              <p style="font-size: 14px; color: #718096; margin: 0;">client@rusatravel.com</p>
            </div>
          </div>
          <p style="color: #4a5568; margin: 0 0 15px 0;">Réservation de voyages, gestion des billets</p>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="display: flex; align-items: center; margin-bottom: 8px; color: #4a5568; font-size: 14px;">
              <svg style="width: 16px; height: 16px; margin-right: 8px; color: #48bb78;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Recherche de trajets
            </li>
            <li style="display: flex; align-items: center; margin-bottom: 8px; color: #4a5568; font-size: 14px;">
              <svg style="width: 16px; height: 16px; margin-right: 8px; color: #48bb78;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Réservation en ligne
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer style="background: #1a202c; color: white; padding: 40px 20px; border-radius: 15px; text-align: center;">
      <h3 style="font-size: 24px; font-weight: bold; margin: 0 0 15px 0;">Besoin d'aide supplémentaire ?</h3>
      <p style="color: #a0aec0; margin: 0 0 25px 0;">Notre équipe est là pour vous accompagner</p>
      
      <router-link to="/login" style="background: #3182ce; color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center;">
        <svg style="width: 20px; height: 20px; margin-right: 10px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
        Retour à la Connexion
      </router-link>
      
      <div style="margin-top: 30px; padding-top: 30px; border-top: 1px solid #2d3748; color: #a0aec0;">
        <p style="margin: 0;">&copy; 2024 Rusa Travel. Guide d'utilisation complet.</p>
      </div>
    </footer>
  </div>
</template>

<script>
console.log('GuidePage chargé - Documentation complète')
alert('GuidePage chargé - Documentation complète!')

export default {
  name: 'GuidePage',
  mounted() {
    console.log('GuidePage mounted - Documentation complète')
    alert('GuidePage mounted - Documentation complète!')
  }
}
</script>
