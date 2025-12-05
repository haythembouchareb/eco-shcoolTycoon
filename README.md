# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# eco-shcoolTycoon

**eco-shcoolTycoon** est une application web de simulation/gestion d'école écologique.
*Description courte : Gérez une école en intégrant des pratiques durables et écologiques, tout en optimisant le budget et les ressources.*

## 🛠️ Technologies utilisées

* Frontend : **React** (JavaScript)
* Outils de build : **Vite**
* Markup : **HTML, CSS**
* Linter : **ESLint**

## Structure du projet

```
/ (racine)
  ├── public/         # Ressources publiques (images, index.html, etc.)
  ├── src/            # Code source (composants React, styles, logique)
  ├── .env            # Variables d'environnement (si nécessaire)
  ├── .gitignore
  ├── package.json
  ├── package-lock.json
  └── vite.config.js  # Configuration Vite
```

## Installation et lancement

```bash
# Cloner le dépôt
git clone https://github.com/cherifaBenGhorbel/eco-shcoolTycoon.git
cd eco-shcoolTycoon

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# (Ou build pour la production)
npm run build
```

Si des variables d'environnement sont utilisées (présence de `.env`), indiquez-les ici avec leurs valeurs types.

## Utilisation de l'application

* Ouvrir le navigateur sur [http:
