# Dunkan Sublimateur Automobile — site vitrine

Site Next.js (App Router) pour **Dunkan Sublimateur Automobile**, centre d'esthétique automobile à Jarry, Baie-Mahault (Guadeloupe).

## Ce qu'il contient

- **Accueil** : hero, concept (climat antillais → laver / corriger / protéger), 4 expertises, avant/après interactif, packs avec prix, process, galerie, avis Google, FAQ, contact + horaires « ouvert maintenant ».
- **/tarifs** : packs + toutes les prestations à la carte (prix selon la taille du véhicule) et **configurateur de devis** qui envoie la demande pré-remplie sur WhatsApp (ou par e-mail).
- **/services/…** : une page par expertise (detailing, céramique Hyperquartz® TITAN, film PPF, pare-brise VELMAX), optimisée SEO local.
- **/realisations** : galerie avec visionneuse.
- SEO : métadonnées, JSON-LD `AutomotiveBusiness` + `FAQPage`, `sitemap.xml`, `robots.txt`, redirections 308 depuis les anciennes URL WordPress.

## Modifier les contenus

Tout est centralisé dans **`src/data/site.ts`** : coordonnées, horaires, **tarifs**, packs, textes des services, avis, FAQ, galerie.

> ⚠️ Les tarifs sont des propositions « à partir de » basées sur une étude du marché (Guadeloupe, DOM, métropole). À valider avec Dunkan avant la mise en ligne.

## Développement

```bash
npm install
npm run dev
```

## Déploiement

Import du dépôt GitHub dans Vercel (framework détecté automatiquement : Next.js). Aucune variable d'environnement requise.
