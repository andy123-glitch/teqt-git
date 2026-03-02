# 🏡 Kasa - Application de location de logements

Bienvenue sur le dépôt du projet **Kasa**, une application web de location de logements entre particuliers. Ce projet a été réalisé dans le cadre de la formation Intégrateur Web (OpenClassrooms).

L'objectif de ce projet est de créer une **Single Page Application (SPA)** moderne et réactive avec **React** et **React Router**.

🌐 **[Voir le site en ligne (Live Demo)](https://kasa.andy-azerot.fr/)**

## 📋 Fonctionnalités principales

- **Navigation fluide (SPA)** : Utilisation de React Router pour naviguer entre l'accueil, les fiches de logements et la page À propos sans rechargement de page.
- **Composants réutilisables** : Architecture basée sur des composants React (Collapse/Accompagnements, Carrousel/Galerie d'images, Étoiles de notation, Cartes de logements).
- **Gestion des erreurs** : Page 404 personnalisée qui s'affiche si l'utilisateur tente d'accéder à une route inexistante ou à un logement qui n'existe pas.
- **Design Responsive** : Interface qui s'adapte à toutes les tailles d'écrans (Mobile, Tablette, Desktop).

## 🛠️ Technologies utilisées

- **React** (v18)
- **Vite** (Outil de build rapide)
- **React Router DOM** (Gestion des routes de l'application)
- **CSS / Sass** (Stylisation des composants)
- **JavaScript (ES6+)**

## 🚀 Installation et exécution en local

Si vous souhaitez cloner et tester ce projet sur votre machine, suivez ces étapes :

### Prérequis

- [Node.js](https://nodejs.org/) (version 16 ou supérieure recommandée)
- `npm` (généralement installé avec Node.js) ou `yarn`

### Étapes

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/andy123-glitch/Kasa-React.git
   ```

2. **Accéder au dossier du projet**

   ```bash
   cd Kasa-React
   ```

3. **Installer les dépendances**

   ```bash
   npm install
   ```

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
   _L'application sera accessible à l'adresse indiquée dans votre terminal (généralement `http://localhost:5173/` ou `5174`)._

## 📦 Commandes de Build (Production)

Pour compiler l'application en vue d'un déploiement en production :

```bash
# Crée une version optimisée pour la production dans le dossier /dist
npm run build

# Permet de prévisualiser la version de production en local
npm run preview
```

_Note pour le déploiement : L'application utilisant React Router côté client, une configuration spécifique du serveur (comme un fichier `.htaccess` pour Apache ou `_redirects` pour Netlify) est nécessaire pour rediriger toutes les requêtes vers `index.html`._

## 👤 Auteur

**Andy Azerot**

- GitHub : [@andy123-glitch](https://github.com/andy123-glitch)
- Portfolio / Démo : [test.andy-azerot.fr](https://test.andy-azerot.fr/)
