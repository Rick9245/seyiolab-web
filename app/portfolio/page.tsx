import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Portfolio — Seyio Lab",
  description:
    "Découvrez les produits SaaS, applications métiers et projets clients développés par Seyio Lab : Koprio, Tamario, Coblio, Leaxit, Ovelis, Buroprint et Everstone.",
};

const products = [
  {
    name: "Koprio",
    type: "Produit SaaS",
    description:
      "Application de gestion de copropriété pensée pour simplifier les échanges entre syndics, copropriétaires et professionnels de l’immobilier.",
    url: "https://koprio.app",
  },
  {
    name: "Tamario",
    type: "Secure Data Room",
    description:
      "Plateforme sécurisée pour organiser, protéger et partager des documents sensibles.",
    url: "https://tamario.app",
  },
  {
    name: "Coblio",
    type: "Legal-tech IA",
    description:
      "Solution de gestion et d’analyse de contrats augmentée par l’intelligence artificielle.",
    url: "https://coblio.app",
  },
  {
    name: "Leaxit",
    type: "Proptech",
    description:
      "Outil digital pour fluidifier la restitution de bail et les démarches locatives.",
    url: "https://leaxit.com",
  },
  {
    name: "Ovelis",
    type: "Application métier",
    description:
      "Solution digitale conçue pour répondre à des besoins métiers spécifiques.",
    url: "https://ovelis.app",
  },
];

const clients = [
  {
    name: "Buroprint",
    project: "Bulio & simulateurs en ligne",
    description:
      "Conception d’outils digitaux, simulateurs et parcours de conversion pour améliorer l’expérience client et qualifier les demandes.",
    url: "https://buroprint.fr",
  },
  {
    name: "Everstone",
    project: "CRM métier",
    description:
      "Développement d’un CRM sur mesure pour structurer le suivi commercial, les opportunités et les opérations internes.",
    url: "https://everstone.fr",
  },
];

export default function PortfolioPage() {
  return (
    <main className="container legal">
      <Link href="/">← Retour à l’accueil</Link>

      <h1>Portfolio</h1>

      <p>
        Seyio Lab conçoit, développe et fait évoluer des produits SaaS,
        applications métiers, CRM, plateformes web et outils digitaux pour ses
        propres marques ainsi que pour des clients.
      </p>

      <h2>Produits Seyio Lab</h2>

      <div className="services-grid">
        {products.map((product) => (
          <article className="service-card" key={product.name}>
            <h3>{product.name}</h3>
            <p>
              <strong>{product.type}</strong>
            </p>
            <p>{product.description}</p>
            <a
              className="client-link"
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le site ↗
            </a>
          </article>
        ))}
      </div>

      <h2>Projets clients</h2>

      <div className="clients-grid">
        {clients.map((client) => (
          <article className="client-card" key={client.name}>
            <h3>{client.name}</h3>
            <p>
              <strong>{client.project}</strong>
            </p>
            <p>{client.description}</p>
            <a
              className="client-link"
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le site ↗
            </a>
          </article>
        ))}
      </div>

      <h2>Expertises mobilisées</h2>

      <div className="services-grid">
        <article className="service-card">
          <h3>SaaS & plateformes web</h3>
          <p>
            Architecture applicative, interfaces modernes, gestion des comptes,
            rôles, permissions et parcours utilisateurs.
          </p>
        </article>

        <article className="service-card">
          <h3>CRM & outils internes</h3>
          <p>
            Outils métiers sur mesure pour structurer les équipes, les ventes,
            les opérations et les données.
          </p>
        </article>

        <article className="service-card">
          <h3>IA & automatisation</h3>
          <p>
            Automatisation des tâches répétitives, analyse documentaire,
            génération de contenus et assistants métiers.
          </p>
        </article>
      </div>
    </main>
  );
}