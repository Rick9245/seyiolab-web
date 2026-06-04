import ServicePageView, {
  serviceMetadata,
  type ServiceData,
} from "../service-page";

const data: ServiceData = {
  slug: "developpement-saas",
  badge: "Studio SaaS · Applications métiers",
  h1: "Développement d’applications SaaS sur mesure",
  metaTitle: "Développement SaaS sur mesure",
  metaDescription:
    "Seyio Lab conçoit et développe des applications SaaS sur mesure : plateformes web multi-utilisateurs, performantes, sécurisées et évolutives, de l’idée au produit en production.",
  keywords: [
    "développement SaaS",
    "application SaaS sur mesure",
    "plateforme web",
    "studio SaaS France",
    "développement logiciel métier",
  ],
  intro:
    "Nous concevons des plateformes web SaaS robustes et évolutives, pensées pour vos processus métier. De l’architecture à la mise en production, Seyio Lab transforme une idée en produit exploitable, sécurisé et maintenable.",
  benefits: [
    {
      title: "Multi-utilisateurs & rôles",
      text: "Gestion fine des comptes, des permissions et des espaces de travail pour adapter l’outil à chaque profil d’utilisateur.",
    },
    {
      title: "Performance & scalabilité",
      text: "Architecture cloud moderne capable d’accompagner votre croissance sans dégrader l’expérience.",
    },
    {
      title: "Sécurité by design",
      text: "Authentification, chiffrement, séparation des données et bonnes pratiques intégrées dès la conception.",
    },
    {
      title: "Time-to-market maîtrisé",
      text: "Une approche itérative pour livrer rapidement une première version exploitable, puis l’enrichir.",
    },
  ],
  useCases: [
    {
      title: "Plateformes métiers",
      text: "Digitalisation d’un métier ou d’un secteur : immobilier, legal-tech, gestion, data room…",
    },
    {
      title: "Espaces clients & portails",
      text: "Portails self-service pour vos clients, partenaires ou équipes, avec données et documents centralisés.",
    },
    {
      title: "Produits SaaS B2B",
      text: "Édition d’un produit commercialisable en abonnement, du MVP à la version scalable.",
    },
  ],
  approach: [
    {
      title: "Cadrage produit",
      text: "Nous clarifions les objectifs, les utilisateurs et le périmètre pour construire la bonne solution.",
    },
    {
      title: "Design & développement",
      text: "Interfaces claires, code maintenable et architecture pensée pour durer.",
    },
    {
      title: "Évolution continue",
      text: "Mises en production régulières, nouvelles fonctionnalités et accompagnement long terme.",
    },
  ],
};

export const metadata = serviceMetadata(data);

export default function Page() {
  return <ServicePageView data={data} />;
}
