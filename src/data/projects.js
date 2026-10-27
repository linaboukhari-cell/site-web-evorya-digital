// Contenu de la section « Nos projets » : source unique pour la page d'accueil et /projets.
//
// Règles de rédaction (à respecter pour toute modification) :
// - présenter des solutions et leurs fonctionnalités, pas des réalisations client commercialisées ;
// - l'objectif de 80 % d'INNVORIQ est un objectif du projet, jamais une performance mesurée ;
// - ne rien affirmer qui ne soit confirmé (CRM, campagnes multicanales, statistiques,
//   API WhatsApp Business, système de réservation, connexion à un système universitaire) ;
// - les visuels sont des illustrations conceptuelles, pas des captures d'écran.

export const innvoriq = {
  id: "innvoriq",
  name: "INNVORIQ",
  category: "Intelligence artificielle et finance",
  fullName: "Système intelligent pour l’analyse et le traitement automatisé des factures",
  description:
    "Une solution intelligente destinée à automatiser le traitement des factures, à fiabiliser l’extraction des données et à faciliter le contrôle des opérations financières.",
  indicators: [
    { value: "80 %", label: "des factures traitées sans intervention humaine", objective: true },
    { value: "15", label: "catégories d’entités extraites" },
    { value: "18", label: "règles de validation DGI, de R1 à R18" },
  ],
  features: [
    {
      icon: "target",
      title: "Automatisation",
      text: "Objectif de 80 % des factures traitées sans intervention humaine.",
      objective: true,
    },
    {
      icon: "search",
      title: "Extraction précise",
      text: "Extraction de 15 catégories d’entités, notamment les montants, identifiants et dates.",
    },
    {
      icon: "shieldCheck",
      title: "Conformité DGI",
      text: "Validation native selon 18 règles, identifiées de R1 à R18.",
    },
    {
      icon: "refresh",
      title: "Auto-correction",
      text: "Correction automatique des erreurs d’extraction détectées.",
    },
    {
      icon: "alert",
      title: "Détection d’anomalies",
      text: "Signalement des incohérences et envoi d’alertes ciblées par e-mail.",
    },
    {
      icon: "chat",
      title: "Assistant chatbot",
      text: "Interrogation des données en langage naturel pour les équipes financières.",
    },
  ],
};

export const tunisiaStudy = {
  id: "tunisia-study",
  name: "Tunisia Study",
  category: "Éducation en ligne",
  description:
    "Une plateforme d’éducation en ligne destinée aux élèves du collège et du lycée, conçue pour faciliter l’accès aux ressources pédagogiques et accompagner les élèves dans leur parcours scolaire.",
  highlights: [
    { icon: "laptop", text: "Apprentissage en ligne" },
    { icon: "book", text: "Accès aux ressources pédagogiques" },
    { icon: "compass", text: "Accompagnement des élèves du collège au lycée" },
    { icon: "layout", text: "Univers éducatif et outils numériques d’apprentissage" },
  ],
  href: "https://tunisia-study.com/",
};

export const prospection = {
  id: "prospection",
  name: "Système d’automatisation de la prospection et du marketing",
  category: "Automatisation",
  description:
    "Une solution conçue pour structurer et automatiser certaines opérations de prospection et de marketing, afin de fluidifier les workflows et de faciliter le suivi des actions.",
  // Reformulation de la description ci-dessus, sans aucune fonctionnalité supplémentaire.
  highlights: [
    { icon: "layout", text: "Structuration des opérations de prospection et de marketing" },
    { icon: "flow", text: "Automatisation de certaines opérations" },
    { icon: "refresh", text: "Workflows plus fluides" },
    { icon: "target", text: "Suivi des actions facilité" },
  ],
};

export const assistantAdmissions = {
  id: "assistant-admissions",
  name: "Assistant intelligent WhatsApp pour les admissions universitaires",
  category: "Assistant conversationnel",
  description:
    "Un assistant conversationnel destiné aux universités et aux centres de formation, conçu pour faciliter les échanges avec les candidats et simplifier l’accès aux informations relatives aux admissions.",
  highlights: [
    { icon: "chat", text: "Assistance conversationnelle" },
    { icon: "search", text: "Accès simplifié aux informations sur les admissions" },
    { icon: "compass", text: "Orientation des candidats" },
    { icon: "check", text: "Amélioration de l’expérience d’information des étudiants" },
  ],
};
