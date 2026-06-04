import ServicePageView, {
  serviceMetadata,
  type ServiceData,
} from "../service-page";

const data: ServiceData = {
  slug: "simulateurs-en-ligne",
  badge: "Simulateurs · Configurateurs",
  h1: "Simulateurs & configurateurs en ligne",
  metaTitle: "Simulateurs & configurateurs en ligne",
  metaDescription:
    "Seyio Lab crée des simulateurs, calculateurs et configurateurs en ligne orientés conversion : parcours interactifs, qualification des demandes et génération de leads.",
  keywords: [
    "simulateur en ligne",
    "configurateur",
    "calculateur en ligne",
    "parcours de conversion",
    "qualification de leads",
    "simulateur de devis",
  ],
  intro:
    "Nous concevons des simulateurs, calculateurs et configurateurs en ligne qui transforment un visiteur en prospect qualifié. Des parcours interactifs clairs, rapides et orientés conversion, intégrés à votre site et à vos outils.",
  benefits: [
    {
      title: "Orienté conversion",
      text: "Des parcours pensés pour guider l’utilisateur jusqu’à la prise de contact ou au devis.",
    },
    {
      title: "Qualification automatique",
      text: "Chaque simulation qualifie la demande et alimente vos équipes avec des leads exploitables.",
    },
    {
      title: "Expérience fluide",
      text: "Interfaces rapides et responsive, utilisables sur mobile comme sur desktop.",
    },
    {
      title: "Sur mesure",
      text: "Logique de calcul et design adaptés à votre offre et à votre image de marque.",
    },
  ],
  useCases: [
    {
      title: "Simulateurs de prix & devis",
      text: "Estimation instantanée pour rassurer et engager le visiteur dès sa visite.",
    },
    {
      title: "Configurateurs de produit",
      text: "Personnalisation guidée d’une offre ou d’un produit complexe, étape par étape.",
    },
    {
      title: "Parcours de qualification",
      text: "Formulaires intelligents qui orientent et priorisent les demandes entrantes.",
    },
  ],
  approach: [
    {
      title: "Logique & parcours",
      text: "Nous modélisons votre logique métier et le parcours idéal de conversion.",
    },
    {
      title: "Design & intégration",
      text: "Un simulateur cohérent avec votre marque, intégré à votre site et vos outils.",
    },
    {
      title: "Optimisation",
      text: "Mesure des conversions et itérations pour améliorer les résultats dans le temps.",
    },
  ],
};

export const metadata = serviceMetadata(data);

export default function Page() {
  return <ServicePageView data={data} />;
}
