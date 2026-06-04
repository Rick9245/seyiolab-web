import ServicePageView, {
  serviceMetadata,
  type ServiceData,
} from "../service-page";

const data: ServiceData = {
  slug: "crm-outils-internes",
  badge: "CRM · Outils internes",
  h1: "CRM & outils internes sur mesure",
  metaTitle: "CRM & outils internes sur mesure",
  metaDescription:
    "Seyio Lab développe des CRM métiers et outils internes sur mesure : suivi commercial, tableaux de bord, workflows et automatisations pour structurer vos opérations.",
  keywords: [
    "CRM sur mesure",
    "outils internes",
    "logiciel métier",
    "suivi commercial",
    "tableau de bord",
    "automatisation interne",
  ],
  intro:
    "Quand les tableurs et les outils génériques atteignent leurs limites, nous concevons des CRM et outils internes taillés pour vos opérations réelles : suivi commercial, pilotage, workflows et automatisations, dans une interface claire et adoptée par vos équipes.",
  benefits: [
    {
      title: "Sur mesure, pas générique",
      text: "Un outil qui épouse vos processus plutôt que l’inverse — sans fonctionnalités inutiles.",
    },
    {
      title: "Visibilité en temps réel",
      text: "Tableaux de bord et indicateurs pour piloter l’activité et décider plus vite.",
    },
    {
      title: "Automatisations",
      text: "Relances, attributions, notifications et tâches répétitives prises en charge automatiquement.",
    },
    {
      title: "Adoption par les équipes",
      text: "Une UX pensée pour le quotidien, qui réduit la friction et la double saisie.",
    },
  ],
  useCases: [
    {
      title: "Suivi commercial",
      text: "Gestion des prospects, opportunités, pipelines et relances centralisée au même endroit.",
    },
    {
      title: "Pilotage des opérations",
      text: "Suivi des dossiers, des projets et des tâches internes dans un outil unique.",
    },
    {
      title: "Connexion à vos outils",
      text: "Intégrations avec vos services existants (email, facturation, data…) pour un flux unifié.",
    },
  ],
  approach: [
    {
      title: "Audit des processus",
      text: "Nous partons de vos flux réels pour identifier ce qui doit être structuré et automatisé.",
    },
    {
      title: "Outil évolutif",
      text: "Une base solide que l’on enrichit module par module selon vos priorités.",
    },
    {
      title: "Accompagnement",
      text: "Formation, support et évolutions pour que l’outil reste aligné avec votre activité.",
    },
  ],
};

export const metadata = serviceMetadata(data);

export default function Page() {
  return <ServicePageView data={data} />;
}
