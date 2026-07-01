# CM Agent

CM Agent est une landing page moderne et immersive conçue pour présenter une plateforme d’intelligence artificielle dédiée à l’automatisation des réseaux sociaux. Le site met en avant les promesses de l’offre : publication automatique, engagement ciblé, prospection active et croissance pilotée sans effort manuel.

## Vue d’ensemble

Cette application est construite avec Nuxt 4 et un front-end orienté expérience visuelle, avec des animations, des composants UI premium et un parcours de conversion optimisé pour la collecte d’inscriptions via une liste d’attente.

### Objectif du site

- Présenter clairement la valeur de CM Agent
- Montrer les principaux piliers de l’offre
- Encourager l’inscription à la liste d’attente
- Offrir une expérience moderne et mémorable sur desktop et mobile

## Fonctionnalités principales

### 1. Landing page immersive

La page d’accueil combine :

- un storytelling produit structuré,
- des sections de preuve et d’offre,
- des visuels animés,
- un appel à l’action fort pour rejoindre la liste d’attente.

### 2. Présentation des super-pouvoirs de l’agent

Le site met en avant quatre grands axes :

- publication automatique,
- engagement intelligent,
- prospection automatisée,
- relances personnalisées et suivi commercial.

### 3. Formulaire d’inscription

Un modal de capture permet à l’utilisateur de saisir :

- nom et prénom,
- adresse e-mail,
- numéro de téléphone.

Les données sont ensuite envoyées vers une API interne puis intégrées à une source externe via Baserow.

### 4. Page de confirmation

Après soumission du formulaire, l’utilisateur est redirigé vers une page de remerciement claire et rassurante.

### 5. Expérience graphique premium

Le site propose une identité visuelle soignée avec :

- animations immersives,
- composants réutilisables,
- typographies personnalisées,
- une esthétique sobre, moderne et technologique.

## Stack technique

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS
- Nuxt Icon
- Nuxt Color Mode
- Nuxt Google Fonts
- API route server-side pour l’inscription

## Structure du projet

```text
app/
  components/      Composants UI et sections de la landing page
  pages/           Pages principales du site
  assets/          Styles globaux et ressources
server/
  api/             API serveur pour la liste d’attente
```

## Pages disponibles

- / : page d’accueil principale
- /thanks : page de confirmation après inscription
- /bg : page de fond visuel / animation

## Flux d’inscription

1. L’utilisateur clique sur un bouton d’action principal.
2. Une modale s’ouvre avec un formulaire.
3. Les informations sont validées côté client.
4. La requête est envoyée à l’API interne.
5. Les données sont enregistrées via Baserow.
6. L’utilisateur est redirigé vers la page de confirmation.

## Configuration locale

### Prérequis

- Node.js 20+
- npm, pnpm, yarn ou bun

### Installation

```bash
npm install
```

### Démarrage du serveur de développement

```bash
npm run dev
```

Le site sera accessible à l’adresse : http://localhost:3000

## Build et prévisualisation

### Build de production

```bash
npm run build
```

### Prévisualisation locale

```bash
npm run preview
```

## Variables d’environnement

Le dépôt attend une configuration runtime pour l’API de stockage :

```env
NUXT_BASEROW_API_TOKEN=your_token_here
```

Cette valeur est utilisée par l’API du endpoint de liste d’attente dans [server/api/waitlist.post.ts](server/api/waitlist.post.ts).

## Notes fonctionnelles

- Le formulaire vérifie les champs obligatoires.
- Les validations e-mail et téléphone sont gérées côté front.
- Le parcours utilisateur est pensé pour maximiser la conversion vers l’inscription.
- Les métadonnées SEO sont intégrées pour la page d’accueil, la page de confirmation et la page de fond.

## Contact

Pour toute question liée au produit, au site ou à l’intégration, vous pouvez contacter l’équipe derrière Tech2Work.
