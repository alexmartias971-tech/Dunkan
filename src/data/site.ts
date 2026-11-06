/* =========================================================
   Toutes les infos du site sont ici : coordonnées, services,
   tarifs, avis, FAQ, galerie. Modifier ce fichier suffit.
   ========================================================= */

export const business = {
  name: "Dunkan Sublimateur Automobile",
  short: "Dunkan",
  tagline: "Centre d'esthétique automobile",
  since: 2015,
  phone: "0690 18 59 68",
  phoneIntl: "+590690185968",
  whatsapp: "590690185968",
  email: "contact@dunkanauto.com",
  address: {
    street: "Immeuble La Verderie, Jarry",
    zip: "97122",
    city: "Baie-Mahault",
    region: "Guadeloupe",
  },
  mapsQuery: "Dunkan Sublimateur Automobile, Jarry, Baie-Mahault",
  instagram: "https://instagram.com/dunkan_sublimateur_automobile",
  facebook: "https://www.facebook.com/Dunkan-Sublimateur-Automobile-124701191501629",
  url: "https://dunkanauto.com",
  // 0 = dimanche … 6 = samedi. Heures au format décimal (8.5 = 8h30).
  hours: [
    { day: 1, label: "Lundi", open: 8.5, close: 16 },
    { day: 2, label: "Mardi", open: 8.5, close: 16 },
    { day: 3, label: "Mercredi", open: 8.5, close: 16 },
    { day: 4, label: "Jeudi", open: 8.5, close: 16 },
    { day: 5, label: "Vendredi", open: 8.5, close: 12 },
    { day: 6, label: "Samedi", open: null, close: null },
    { day: 0, label: "Dimanche", open: null, close: null },
  ] as { day: number; label: string; open: number | null; close: number | null }[],
};

export const waLink = (text?: string) =>
  `https://wa.me/${business.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const telLink = `tel:${business.phoneIntl}`;

/* ---------- Catégories de véhicule ---------- */

export type VehicleKey = "citadine" | "berline" | "suv";

export const vehicles: { key: VehicleKey; label: string; hint: string }[] = [
  { key: "citadine", label: "Citadine", hint: "Clio, 208, Yaris, Juke…" },
  { key: "berline", label: "Berline / SUV", hint: "Série 3, Leon, Tucson, Q5…" },
  { key: "suv", label: "Grand SUV / 4x4", hint: "Cayenne, Q7, X5, Range Rover…" },
];

type Price = Record<VehicleKey, number>;

/* ---------- Prestations à la carte ----------
   Prix « à partir de », TTC, indicatifs.
   À valider avec Dunkan avant mise en ligne. */

export type CarteItem = {
  id: string;
  name: string;
  desc: string;
  price: Price;
  duration?: string;
};

export type CarteGroup = {
  id: string;
  title: string;
  service: string; // slug de la page service
  items: CarteItem[];
};

export const carte: CarteGroup[] = [
  {
    id: "soins",
    title: "Soins & detailing",
    service: "detailing-renovation",
    items: [
      {
        id: "ext",
        name: "Lavage extérieur premium",
        desc: "Prélavage mousse, lavage 2 seaux, jantes, décontamination, séchage soufflé",
        price: { citadine: 59, berline: 69, suv: 89 },
        duration: "2 h",
      },
      {
        id: "int",
        name: "Nettoyage intérieur complet",
        desc: "Aspiration, plastiques, vitres, joints, désinfection vapeur",
        price: { citadine: 99, berline: 129, suv: 159 },
        duration: "3 h",
      },
      {
        id: "complet",
        name: "Soin complet intérieur + extérieur",
        desc: "Les deux soins réunis + cire de protection 3 mois",
        price: { citadine: 149, berline: 179, suv: 219 },
        duration: "½ journée",
      },
      {
        id: "cuir",
        name: "Shampoing sièges & cuirs",
        desc: "Injection-extraction des tissus ou nettoyage + nourrissage cuir",
        price: { citadine: 79, berline: 99, suv: 119 },
      },
      {
        id: "optiques",
        name: "Rénovation des optiques",
        desc: "Ponçage, polissage et protection UV des deux phares",
        price: { citadine: 89, berline: 99, suv: 119 },
        duration: "1 h 30",
      },
      {
        id: "entretien",
        name: "Lavage d'entretien céramique",
        desc: "Lavage adapté aux véhicules traités + ravivage de l'effet déperlant",
        price: { citadine: 79, berline: 89, suv: 109 },
        duration: "2 h",
      },
    ],
  },
  {
    id: "correction",
    title: "Polissage & correction",
    service: "detailing-renovation",
    items: [
      {
        id: "lustrage",
        name: "Lustrage 1 étape",
        desc: "Ravive la brillance, retire 50 à 70 % des micro-rayures",
        price: { citadine: 249, berline: 299, suv: 379 },
        duration: "1 jour",
      },
      {
        id: "correction2",
        name: "Correction de vernis 2 étapes",
        desc: "Polissage + finition : jusqu'à 90 % des défauts, effet miroir",
        price: { citadine: 449, berline: 549, suv: 690 },
        duration: "1 à 2 jours",
      },
    ],
  },
  {
    id: "ceramique",
    title: "Traitement Hyperquartz® TITAN",
    service: "traitement-ceramique-hyperquartz",
    items: [
      {
        id: "zeus",
        name: "TITAN Zeus — garanti 5 ans",
        desc: "Préparation + lustrage inclus, carrosserie & jantes face avant",
        price: { citadine: 790, berline: 890, suv: 990 },
        duration: "2 jours",
      },
      {
        id: "vulcan",
        name: "TITAN Vulcan TX155 — garanti 9 ans",
        desc: "Correction 2 étapes incluse, membrane élastomère ultra-durable",
        price: { citadine: 1290, berline: 1490, suv: 1690 },
        duration: "3 jours",
      },
      {
        id: "vitres",
        name: "Vitres & jantes hydrophobes",
        desc: "Traitement déperlant pare-brise, vitres et 4 jantes",
        price: { citadine: 99, berline: 119, suv: 139 },
      },
    ],
  },
  {
    id: "ppf",
    title: "Film de protection PPF",
    service: "film-protection-ppf",
    items: [
      {
        id: "ppf-zones",
        name: "Pack zones exposées",
        desc: "Pare-chocs avant, rétroviseurs, phares, seuils et cuvettes de poignées",
        price: { citadine: 590, berline: 690, suv: 850 },
        duration: "1 à 2 jours",
      },
      {
        id: "ppf-avant",
        name: "Face avant complète",
        desc: "Pare-chocs, capot, ailes, rétroviseurs et optiques",
        price: { citadine: 1490, berline: 1690, suv: 1990 },
        duration: "2 à 3 jours",
      },
      {
        id: "ppf-full",
        name: "Full body transparent",
        desc: "Toute la carrosserie, garantie 10 ans anti-jaunissement",
        price: { citadine: 3990, berline: 4690, suv: 5690 },
        duration: "5 à 7 jours",
      },
      {
        id: "ppf-mat",
        name: "Full body mat / satiné",
        desc: "Change l'aspect de la peinture et la protège : effet satiné premium",
        price: { citadine: 4690, berline: 5490, suv: 6690 },
        duration: "5 à 7 jours",
      },
    ],
  },
  {
    id: "parebrise",
    title: "Film pare-brise VELMAX",
    service: "film-pare-brise-velmax",
    items: [
      {
        id: "velmax",
        name: "Film VELMAX pare-brise",
        desc: "Jusqu'à 80 % de risques d'éclats en moins, 99,9 % des UV bloqués",
        price: { citadine: 290, berline: 340, suv: 390 },
        duration: "½ journée",
      },
    ],
  },
];

export const allItems = carte.flatMap((g) => g.items.map((i) => ({ ...i, group: g.title })));

/* ---------- Packs ---------- */

export type Pack = {
  id: string;
  name: string;
  tagline: string;
  price: Price;
  featured?: boolean;
  badge?: string;
  meta: string[];
  includes: string[];
  items: string[]; // ids préremplis dans le configurateur
};

export const packs: Pack[] = [
  {
    id: "eclat",
    name: "Éclat",
    tagline: "Le grand soin qui remet votre voiture à neuf, dedans comme dehors.",
    price: { citadine: 149, berline: 179, suv: 219 },
    meta: ["½ journée", "Idéal 2 à 4×/an"],
    includes: [
      "Lavage extérieur premium & décontamination",
      "Nettoyage intérieur complet + vapeur",
      "Jantes, vitres, plastiques",
      "Cire de protection 3 mois",
    ],
    items: ["complet"],
  },
  {
    id: "sublimation",
    name: "Sublimation",
    tagline: "Brillance retrouvée et protégée 5 ans face au soleil des Antilles.",
    price: { citadine: 790, berline: 890, suv: 990 },
    featured: true,
    badge: "Le plus choisi",
    meta: ["2 jours", "Garantie 5 ans"],
    includes: [
      "Décontamination complète de la carrosserie",
      "Lustrage 1 étape (micro-rayures)",
      "Traitement Hyperquartz® TITAN Zeus",
      "Effet déperlant, entretien facilité",
      "Certificat de garantie TITAN",
    ],
    items: ["zeus"],
  },
  {
    id: "signature",
    name: "Signature",
    tagline: "L'effet miroir et la protection la plus durable que nous proposons.",
    price: { citadine: 1390, berline: 1590, suv: 1790 },
    meta: ["3 jours", "Garantie 9 ans"],
    includes: [
      "Correction de vernis 2 étapes",
      "Traitement TITAN Vulcan TX155",
      "Vitres & jantes hydrophobes",
      "Nettoyage intérieur complet",
      "Suivi et contrôle à 1 mois",
    ],
    items: ["vulcan", "vitres", "int"],
  },
  {
    id: "bouclier",
    name: "Bouclier",
    tagline: "Pour les véhicules neufs : zéro impact de gravillon, zéro compromis.",
    price: { citadine: 1990, berline: 2290, suv: 2690 },
    meta: ["3 à 4 jours", "Film garanti 10 ans"],
    includes: [
      "PPF face avant complète (pare-chocs, capot, ailes, rétros)",
      "TITAN Zeus sur le reste de la carrosserie",
      "Film auto-cicatrisant à la chaleur",
      "Finition transparente ou mate",
    ],
    items: ["ppf-avant", "zeus"],
  },
];

/* ---------- Pages services ---------- */

export type Service = {
  slug: string;
  short: string;
  title: string;
  kicker: string;
  hero: string;
  card: string;
  summary: string;
  seoTitle: string;
  seoDesc: string;
  chips: string[];
  intro: string[];
  benefits: { title: string; text: string }[];
  groups: string[]; // ids de carte
  gallery: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "detailing-renovation",
    short: "Detailing & rénovation",
    title: "Detailing & rénovation",
    kicker: "Soins automobiles",
    hero: "/images/suv-noir-reflets.jpg",
    card: "/images/cayenne-coupe.jpg",
    summary:
      "Lavage premium, nettoyage intérieur, polissage et correction de vernis. Votre voiture retrouve l'éclat de ses premiers jours.",
    seoTitle: "Detailing, lavage premium & polissage en Guadeloupe",
    seoDesc:
      "Nettoyage intérieur, lavage extérieur premium, lustrage et correction de vernis à Jarry, Baie-Mahault. Tarifs à partir de 59 €.",
    chips: ["Intérieur & extérieur", "Polissage", "Rénovation optiques"],
    intro: [
      "Le detailing, c'est bien plus qu'un lavage. Chaque centimètre est traité à la main, avec des produits professionnels et des méthodes qui respectent votre vernis : prélavage mousse, lavage deux seaux, décontamination ferreuse, séchage soufflé.",
      "Pour les vernis marqués par le temps, nos lustrages et corrections en plusieurs étapes effacent micro-rayures, hologrammes et voile terne. Le résultat : une profondeur de couleur et des reflets qui changent complètement la voiture.",
    ],
    benefits: [
      { title: "Méthodes sans rayure", text: "Lavage 2 seaux, microfibres premium, séchage à l'air." },
      { title: "Intérieur assaini", text: "Vapeur, injection-extraction, nourrissage des cuirs." },
      { title: "Vernis corrigé", text: "Jusqu'à 90 % des défauts effacés en 2 étapes." },
      { title: "Valeur préservée", text: "Une voiture soignée se revend mieux et plus vite." },
    ],
    groups: ["soins", "correction"],
    gallery: ["/images/gallery/10.jpg", "/images/gallery/13.jpg", "/images/gallery/25.jpg", "/images/optique-audi.jpg", "/images/gallery/07.jpg", "/images/atelier-precision.jpg"],
    faq: [
      {
        q: "Combien de temps dure un soin complet ?",
        a: "Comptez environ une demi-journée pour un soin complet intérieur + extérieur. Un lustrage demande une journée, une correction 2 étapes un à deux jours selon l'état du vernis.",
      },
      {
        q: "Quelle différence entre lustrage et correction ?",
        a: "Le lustrage (1 étape) ravive la brillance et atténue la majorité des micro-rayures. La correction (2 étapes) commence par un polissage plus abrasif pour effacer les défauts profonds, puis une finition pour l'effet miroir.",
      },
    ],
  },
  {
    slug: "traitement-ceramique-hyperquartz",
    short: "Céramique Hyperquartz®",
    title: "Traitement Hyperquartz® TITAN",
    kicker: "Protection longue durée",
    hero: "/images/vulcan-tx155.jpg",
    card: "/images/vulcan-tx155.jpg",
    summary:
      "Zeus (5 ans) ou Vulcan TX155 (9 ans) : une membrane hydrophobe qui protège votre vernis du soleil, du sel et des pluies.",
    seoTitle: "Traitement céramique Hyperquartz® TITAN Coatings en Guadeloupe",
    seoDesc:
      "Représentant accrédité TITAN Coatings en Guadeloupe. Traitements Zeus garanti 5 ans et Vulcan TX155 garanti 9 ans. Devis gratuit à Jarry.",
    chips: ["Représentant accrédité TITAN", "Zeus · 5 ans", "Vulcan TX155 · 9 ans"],
    intro: [
      "Dunkan est le représentant accrédité TITAN Coatings en Guadeloupe. Les revêtements Hyperquartz® Zeus et Vulcan TX155 forment une membrane hybride, flexible comme du caoutchouc une fois durcie, qui s'ancre dans le vernis.",
      "Résultat : une hydrophobicité permanente, une résistance chimique très élevée et une surface ultra-lisse sur laquelle la poussière, le sable et les fientes n'accrochent plus. Les tests de vieillissement accéléré indiquent 0 % de perte d'hydrophobicité et de brillance sur 1 500 heures.",
    ],
    benefits: [
      { title: "Garantie 5 ou 9 ans", text: "Zeus garanti 5 ans, Vulcan TX155 garanti 9 ans." },
      { title: "Anti-UV & anti-sel", text: "Le vernis ne s'oxyde plus sous le soleil tropical." },
      { title: "Effet déperlant", text: "L'eau perle et emporte la saleté : lavages 2× plus rapides." },
      { title: "Brillance profonde", text: "Un effet « verre liquide » qui sublime chaque couleur." },
    ],
    groups: ["ceramique"],
    gallery: ["/images/gallery/01.jpg", "/images/gallery/04.jpg", "/images/gallery/21.jpg", "/images/gallery/23.jpg", "/images/gallery/16.jpg", "/images/gallery/19.jpg"],
    faq: [
      {
        q: "Zeus ou Vulcan TX155 : lequel choisir ?",
        a: "Zeus est idéal pour un véhicule récent ou que vous gardez 3 à 5 ans. Vulcan TX155 est notre protection la plus durable (9 ans) : nous la recommandons pour les véhicules haut de gamme et ceux que vous gardez longtemps.",
      },
      {
        q: "Faut-il un entretien particulier ?",
        a: "Un lavage doux toutes les 2 à 3 semaines suffit. Nous vous remettons les consignes et vous proposons un contrôle annuel pour faire vivre la garantie.",
      },
    ],
  },
  {
    slug: "film-protection-ppf",
    short: "Film PPF",
    title: "Film de protection PPF",
    kicker: "Protection anti-impacts",
    hero: "/images/ppf-pose-bmw.jpg",
    card: "/images/ppf-macan-mat.jpg",
    summary:
      "Un film invisible (ou mat satiné) auto-cicatrisant qui encaisse gravillons, rayures et fientes. Garanti 10 ans.",
    seoTitle: "Film de protection carrosserie PPF transparent & mat en Guadeloupe",
    seoDesc:
      "Pose de film PPF auto-cicatrisant, transparent ou mat satiné, garanti 10 ans anti-jaunissement. Face avant, zones exposées ou full body à Baie-Mahault.",
    chips: ["Auto-cicatrisant", "Transparent ou mat satiné", "Garanti 10 ans"],
    intro: [
      "Le PPF (Paint Protection Film) est un film polyuréthane épais et transparent, posé sur la carrosserie. Il absorbe les impacts de gravillons, les rayures, les fientes et la pollution : votre peinture d'origine reste intacte dessous.",
      "Sa couche supérieure s'auto-régénère à la chaleur — le soleil guadeloupéen ou un peu d'eau chaude suffit à faire disparaître les micro-rayures. En finition mate satinée, il transforme aussi l'aspect de votre voiture, sans toucher à la peinture.",
    ],
    benefits: [
      { title: "Garanti 10 ans", text: "Anti-jaunissement et anti-craquèlement." },
      { title: "Auto-cicatrisant", text: "Les micro-rayures disparaissent à la chaleur." },
      { title: "Invisible ou mat", text: "Finition transparente brillante ou mate satinée." },
      { title: "Réversible", text: "Retirable sans abîmer la peinture d'origine." },
    ],
    groups: ["ppf"],
    gallery: ["/images/ppf-macan-mat.jpg", "/images/juke-mat.jpg", "/images/ppf-film.jpg", "/images/ppf-retro.jpg", "/images/gallery/36.jpg", "/images/gallery/30.jpg"],
    faq: [
      {
        q: "Le film se voit-il ?",
        a: "En finition transparente, le film est quasiment invisible : les bords sont repliés ou découpés au plus près des arêtes. En finition mate satinée, il change volontairement l'aspect de la carrosserie.",
      },
      {
        q: "Peut-on combiner PPF et traitement céramique ?",
        a: "Oui, c'est même la protection ultime : le PPF sur les zones exposées aux impacts, et le traitement Hyperquartz® sur le reste — voire sur le film lui-même pour l'effet déperlant.",
      },
    ],
  },
  {
    slug: "film-pare-brise-velmax",
    short: "Pare-brise VELMAX",
    title: "Film pare-brise VELMAX",
    kicker: "Vision claire & sûre",
    hero: "/images/jaguar-xf-arriere.jpg",
    card: "/images/cupra-leon.jpg",
    summary:
      "Le film qui réduit jusqu'à 80 % le risque d'éclats sur votre pare-brise et bloque 99,9 % des UV.",
    seoTitle: "Film de protection pare-brise VELMAX en Guadeloupe",
    seoDesc:
      "Film VELMAX : jusqu'à 80 % de risque d'éclats en moins, hyper hydrophobe, anti-UV. Posé chez Dunkan à Jarry, Baie-Mahault.",
    chips: ["−80 % de risque d'éclats", "99,9 % des UV bloqués", "Hyper hydrophobe"],
    intro: [
      "Un pare-brise fissuré, c'est une franchise, une immobilisation et parfois un capteur ADAS à recalibrer. Le film VELMAX est conçu spécifiquement pour les pare-brise : il réduit jusqu'à 80 % le risque de fissures et d'éclats causés par les gravillons et petits projectiles.",
      "Il limite aussi les micro-rayures dues aux essuie-glaces et au sable, fait perler la pluie pour une meilleure visibilité, et bloque jusqu'à 99,99 % des UV pour protéger votre habitacle de la chaleur et de la décoloration.",
    ],
    benefits: [
      { title: "Film invisible", text: "Aucune gêne pour la visibilité, de jour comme de nuit." },
      { title: "Protection des impacts", text: "Jusqu'à 80 % de risques d'éclats en moins." },
      { title: "Bouclier anti-UV", text: "Jusqu'à 99,99 % des UV bloqués." },
      { title: "Hyper hydrophobe", text: "La pluie glisse, la visibilité reste nette." },
    ],
    groups: ["parebrise"],
    gallery: ["/images/gallery/08.jpg", "/images/gallery/12.jpg", "/images/gallery/05.jpg"],
    faq: [
      {
        q: "Combien de temps dure la pose ?",
        a: "Environ une demi-journée. Nous recommandons de ne pas actionner les essuie-glaces à sec pendant les premiers jours.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/* ---------- Avant / Après ---------- */

export const beforeAfter = [
  {
    id: "q7",
    title: "Audi Q7 — PPF mat satiné",
    text: "Le blanc brillant devient satiné, et protégé 10 ans.",
    before: "/images/ba/4av.jpg",
    after: "/images/ba/4ap.jpg",
    w: 1000,
    h: 638,
  },
  {
    id: "vernis",
    title: "Correction de vernis",
    text: "Hologrammes et micro-rayures effacés.",
    before: "/images/ba/03-av.jpg",
    after: "/images/ba/03-ap.jpg",
    w: 600,
    h: 800,
  },
  {
    id: "jante",
    title: "Jantes Mercedes",
    text: "Poussière de frein incrustée : décontaminée.",
    before: "/images/ba/01-av.jpg",
    after: "/images/ba/01-ap.jpg",
    w: 600,
    h: 800,
  },
];

/* ---------- Avis Google (repris du site actuel) ---------- */

export const reviews = [
  {
    name: "Samson S.",
    stars: 5,
    text: "Franchement, le service est juste exceptionnel de l'accueil jusqu'à la livraison. La voiture est sublimée à la perfection ! Un grand merci à l'équipe Dunkan qui saura vous conseiller et prendre soin de votre bijou.",
  },
  {
    name: "Carle L.",
    stars: 5,
    text: "Je remercie l'équipe de Dunkan pour son professionnalisme, son souci du détail, ses conseils avisés et ses surprenantes attentions ! Très très beau résultat sur ma voiture vieille de 9 ans.",
  },
  {
    name: "Nadine C.",
    stars: 5,
    text: "Accueil vraiment très agréable, service client impeccable et la voiture encore plus magnifique que lors de l'achat. Chapeau bas !",
  },
  {
    name: "Cyndie T.",
    stars: 5,
    text: "Travail sérieux de M. Dunkan et de sa femme ! La sublimation de notre Q7 a été magnifique. En plus gâtés à la livraison 💐",
  },
  {
    name: "Christelle G.",
    stars: 5,
    text: "Professionnalisme vraiment top… Accueil excellent avec une magnifique équipe dynamique et de bon conseil. Je suis vraiment satisfaite.",
  },
  {
    name: "David R.",
    stars: 5,
    text: "Très bon accueil, des conseils et astuces de qualité ainsi qu'une prestation à la hauteur de vos attentes. Je vous recommande fortement Dunkan.",
  },
  {
    name: "Murielle T.",
    stars: 4,
    text: "Très attentif aux souhaits du client, travail soigné, efficace et rapide. Prenez vite RDV pour que votre véhicule brille de mille éclats et soit protégé des aléas climatiques.",
  },
  {
    name: "Lewall",
    stars: 5,
    text: "Merci pour ce professionnalisme et pour ma voiture qui est juste magnifique 🤩",
  },
];

/* ---------- FAQ générale ---------- */

export const faq = [
  {
    q: "Céramique ou film PPF : quelle différence ?",
    a: "Le traitement céramique Hyperquartz® protège le vernis chimiquement (UV, sel, fientes, pluies) et le rend déperlant et brillant. Le film PPF protège physiquement : il encaisse les impacts de gravillons et les rayures. Pour un véhicule neuf, l'idéal est de combiner les deux — c'est notre pack Bouclier.",
  },
  {
    q: "Pourquoi protéger sa voiture en Guadeloupe ?",
    a: "Le soleil tropical (indice UV souvent extrême), l'air salin, les brumes de sable du Sahara et les averses tropicales attaquent le vernis bien plus vite qu'en Europe. Une peinture non protégée peut s'oxyder et se ternir en quelques années seulement.",
  },
  {
    q: "Combien de temps dois-je laisser mon véhicule ?",
    a: "Une demi-journée pour un soin complet, environ 2 jours pour un traitement Zeus, 3 jours pour Vulcan TX155 ou une face avant PPF, et 5 à 7 jours pour un full body. Nous vous donnons un planning précis au moment du devis.",
  },
  {
    q: "Les tarifs affichés sont-ils définitifs ?",
    a: "Ce sont des prix « à partir de », TTC, pour un véhicule en état normal. Le prix final dépend de la taille exacte et de l'état du vernis : il est fixé après un diagnostic gratuit, sans engagement.",
  },
  {
    q: "Quelles garanties proposez-vous ?",
    a: "TITAN Zeus est garanti 5 ans, Vulcan TX155 9 ans, et nos films PPF 10 ans contre le jaunissement et le craquèlement. Chaque traitement est accompagné de son certificat.",
  },
  {
    q: "Mon véhicule est neuf : est-ce utile ?",
    a: "C'est le meilleur moment ! Un vernis neuf n'a pas encore de défauts : on le protège tel quel, sans correction lourde. Beaucoup de nos clients passent chez nous juste après la livraison concession.",
  },
  {
    q: "Comment se passe la prise de rendez-vous ?",
    a: "Envoyez-nous un message WhatsApp ou appelez-nous : on fixe ensemble un diagnostic gratuit à l'atelier de Jarry, on vous remet un devis clair, puis on planifie l'intervention.",
  },
];

/* ---------- Galerie ---------- */

export const gallery: { src: string; alt: string; w: number; h: number }[] = [
  ["01", "Porsche Cayenne Coupé noir sublimé dans l'atelier Dunkan", 800, 600],
  ["16", "BMW X6 gris après traitement céramique", 480, 640],
  ["29", "Porsche Macan avec film PPF mat satiné", 480, 640],
  ["02", "Arrière du Porsche Cayenne Coupé, reflets de l'atelier", 800, 600],
  ["35", "Audi Q7 blanc avec film PPF mat satiné", 1000, 638],
  ["17", "Feux arrière Cupra Formentor allumés", 480, 640],
  ["11", "Jaguar XF noire, face avant", 800, 600],
  ["31", "Nissan Juke avec film PPF mat", 640, 640],
  ["03", "Porsche Cayenne Coupé trois-quarts arrière", 800, 600],
  ["23", "Hyundai Tucson rouge sublimé", 480, 640],
  ["13", "Audi Q5 Sportback gris argent", 800, 600],
  ["18", "Jante cuivre Cupra Formentor", 480, 640],
  ["04", "BMW bleue, détail des jantes", 800, 600],
  ["30", "BMW Série 4 noire après traitement", 853, 640],
  ["21", "Mercedes GLA gris métal", 480, 640],
  ["05", "Hyundai Tucson noir", 800, 600],
  ["33", "Cupra Formentor, détail des sorties d'échappement", 750, 1000],
  ["10", "Jaguar XF noire, arrière", 800, 600],
  ["25", "Peugeot 308 bleue", 480, 640],
  ["19", "Cupra Formentor blanc", 480, 640],
  ["08", "Cupra Leon blanche", 800, 600],
  ["36", "Film PPF posé sur bas de caisse", 800, 810],
  ["14", "Audi Q5 Sportback, arrière", 800, 600],
  ["27", "Renault Captur bleu", 480, 640],
  ["06", "Hyundai Tucson noir, arrière", 800, 600],
  ["20", "Opel Mokka blanc", 480, 640],
  ["32", "Nissan Juke PPF mat, arrière", 640, 640],
  ["12", "Jaguar XF noire, profil", 800, 600],
  ["24", "Hyundai Tucson rouge, arrière", 480, 640],
  ["07", "Jante Hyundai après nettoyage", 800, 600],
  ["22", "Jante noire, véhicule blanc", 480, 640],
  ["34", "Dacia Duster noir", 750, 1000],
  ["09", "Cupra Leon, monogramme", 800, 600],
  ["26", "Jante Peugeot 308", 480, 640],
  ["15", "Jante Audi Q5", 800, 600],
  ["28", "Jante Range Rover", 480, 640],
  ["37", "Badge S line sur Audi blanche", 800, 810],
  ["38", "Jante Jaguar XF", 800, 600],
].map(([id, alt, w, h]) => ({ src: `/images/gallery/${id}.jpg`, alt: alt as string, w: w as number, h: h as number }));

export const marqueeModels = [
  "Porsche Cayenne",
  "Audi Q7",
  "Jaguar XF",
  "BMW X6",
  "Porsche Macan",
  "Mercedes GLA",
  "Cupra Formentor",
  "Audi Q5 Sportback",
  "Range Rover",
  "BMW Série 4",
  "Hyundai Tucson",
  "Peugeot 308",
];

export const minPrice = (p: Price) => Math.min(p.citadine, p.berline, p.suv);

export const eur = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n) + " €";
