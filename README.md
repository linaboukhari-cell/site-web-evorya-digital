# Evorya Digital — site officiel

Site vitrine d'Evorya Digital (ingénierie logicielle, automatisation, intelligence artificielle), construit avec **Next.js 14 (App Router)**, **React 18** et **Tailwind CSS 3**, en JavaScript (JSX).

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start
```

## Pages

| Route        | Contenu                                         |
|--------------|-------------------------------------------------|
| `/`          | Hero, services, projets, à propos, contact      |
| `/services`  | Services                                        |
| `/projets`   | Nos projets : INNVORIQ, Tunisia Study, prospection, assistant admissions |
| `/about`     | À propos                                        |
| `/contact`   | Coordonnées et formulaire de contact            |

## Où modifier le contenu

- **Coordonnées** (e-mail, adresse, LinkedIn, Facebook, lien Google Maps) : `src/data/company.js`. Elles alimentent la section Contact et le footer.
- **Nos projets** : `src/data/projects.js` (textes, fonctionnalités, indicateurs, lien de Tunisia Study) et `src/components/Projects.jsx` (cartes). Règles à respecter : présenter des solutions et leurs fonctionnalités, pas des réalisations client ; l'objectif de 80 % d'INNVORIQ reste un *objectif du projet* ; ne rien affirmer qui ne soit confirmé (CRM, campagnes multicanales, statistiques, API WhatsApp Business, système de réservation, connexion à un système universitaire).
- **Visuels des projets** : `src/components/ProjectVisuals.jsx`. Ce sont des illustrations conceptuelles, jamais des captures d'écran, et elles sont signalées comme telles sur la page. Seule exception : l'aperçu de Tunisia Study (`public/projects/tunisia-study-interface.webp`) est une vraie capture de la plateforme, fournie par l'équipe et légendée comme telle. Pour un autre projet, remplacer son visuel par une capture fournie et changer la légende en « Capture de la plateforme ».
- **Services** : tableau `services` dans `src/components/Services.jsx`. Les textes de « Automatisation » et « Intelligence artificielle » sont rédigés à partir du positionnement de l'entreprise : à relire et valider.
- **Navigation** : `src/data/navigation.js`.

## Identité visuelle

Les couleurs et la géométrie viennent du logo officiel (E + demi-disque).

| Rôle                        | Valeur    |
|-----------------------------|-----------|
| Marine (fonds sombres, titres) | `#0F172A` |
| Bleu (actions sur fond clair)  | `#1D6FEB` |
| Ciel (actions sur fond sombre) | `#38BDF8` |
| Ardoise (texte secondaire)     | `#475569` |

- Polices : **Space Grotesk** (titres, police du logotype) et **IBM Plex Sans** (texte), chargées avec `next/font`.
- Formes : un angle droit de 6 px (`rounded-box`) et le demi-disque (boutons « D »). Une seule ombre (`shadow-float`).
- Tous les jetons sont dans `tailwind.config.js` et `src/app/globals.css`. Le logo est le composant `src/components/Logo.jsx` (proportions des fichiers officiels).

## Formulaire de contact

Le formulaire est **statique** : aucun service d'envoi n'est configuré, et il n'affiche donc jamais de faux succès. Après validation, il prépare un e-mail adressé à l'adresse officielle dans la messagerie de l'utilisateur. Pour brancher un service d'envoi, remplacer `buildMailto` par un appel API dans `handleSubmit` (`src/components/ContactForm.jsx`).

## Accessibilité

Lien d'évitement, repères sémantiques, focus clavier visible, menu mobile utilisable au clavier (Échap pour fermer), fenêtre de détails d'INNVORIQ basée sur l'élément `<dialog>` natif (focus placé dans la fenêtre, Échap, retour du focus, défilement verrouillé), erreurs de formulaire annoncées et reliées aux champs, `prefers-reduced-motion` respecté, `lang="fr"`.

## Note

Le dossier `ui-ux-pro-max-skill-main/` contient les sources d'un skill d'assistant de code ; il ne fait pas partie du site et est ignoré par Git et par ESLint.
