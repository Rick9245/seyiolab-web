import ServicePageView, {
  serviceMetadata,
  type ServiceData,
} from "../service-page";

const data: ServiceData = {
  slug: "intelligence-artificielle",
  badge: "Intelligence artificielle · Automatisation",
  h1: "Intelligence artificielle & automatisation métier",
  metaTitle: "Intelligence artificielle & automatisation",
  metaDescription:
    "Seyio Lab intègre l’IA dans vos applications métiers : analyse documentaire, génération de contenu, assistants, classification et automatisation des tâches répétitives.",
  keywords: [
    "intelligence artificielle",
    "IA métier",
    "automatisation",
    "analyse documentaire",
    "assistant IA",
    "intégration IA application",
  ],
  intro:
    "Nous intégrons l’intelligence artificielle là où elle crée une vraie valeur : analyser, classer, générer, assister et accélérer vos tâches à fort volume. Des cas d’usage concrets, intégrés directement dans vos applications et vos flux métier.",
  benefits: [
    {
      title: "IA appliquée au métier",
      text: "Des cas d’usage utiles et mesurables, pas des gadgets — au service de vos opérations.",
    },
    {
      title: "Gain de temps",
      text: "Automatisation des tâches répétitives et chronophages pour libérer vos équipes.",
    },
    {
      title: "Analyse documentaire",
      text: "Extraction, synthèse et classification de documents, contrats et données non structurées.",
    },
    {
      title: "Intégration native",
      text: "L’IA est intégrée dans vos outils existants, sans rupture dans les usages.",
    },
  ],
  useCases: [
    {
      title: "Assistants métiers",
      text: "Assistants conversationnels connectés à vos données pour répondre et guider.",
    },
    {
      title: "Traitement de contrats & documents",
      text: "Analyse, résumé et suivi intelligent de documents juridiques ou administratifs.",
    },
    {
      title: "Génération & qualification",
      text: "Génération de contenus, qualification de demandes et tri automatique des entrées.",
    },
  ],
  approach: [
    {
      title: "Identification des cas d’usage",
      text: "Nous ciblons les processus où l’IA apporte un retour concret et rapide.",
    },
    {
      title: "Prototype & mesure",
      text: "Un prototype rapide pour valider la valeur avant d’industrialiser.",
    },
    {
      title: "Mise en production fiable",
      text: "Garde-fous, supervision et amélioration continue pour une IA fiable dans la durée.",
    },
  ],
};

export const metadata = serviceMetadata(data);

export default function Page() {
  return <ServicePageView data={data} />;
}
