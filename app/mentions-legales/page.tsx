
import Link from "next/link";

export const metadata = { title: "Mentions légales — Seyio Lab", description: "Mentions légales du site officiel de Seyio Lab." };

export default function MentionsLegales() {
  return (
    <main className="container legal">
      <Link href="/">← Retour</Link>
      <h1>Mentions légales</h1>
      <h2>Éditeur du site</h2>
      <p>Le site <strong>seyiolab.com</strong> est édité par <strong>SEYIO LAB</strong>, société par actions simplifiée.</p>
      <p>Nom commercial : SEYIO LAB<br />Forme juridique : Société par actions simplifiée<br />SIRET : 104 780 986 00014<br />Code NAF / APE : 5829C — Édition de logiciels applicatifs<br />Siège social : 21 Boulevard Georges Clémenceau, 92400 Courbevoie, France<br />Site internet : https://seyiolab.com<br />Email : contact@seyiolab.com</p>
      <h2>Directeur de la publication</h2><p>Yacov SERERO, dirigeant de SEYIO LAB.</p>
      <h2>Hébergement</h2><p>Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Le nom de domaine est enregistré auprès de IONOS.</p>
      <h2>Propriété intellectuelle</h2><p>L’ensemble des contenus présents sur ce site, incluant notamment les textes, logos, marques, éléments graphiques, interfaces, visuels et éléments de design, est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation, modification, adaptation ou exploitation, totale ou partielle, sans autorisation écrite préalable de SEYIO LAB est interdite.</p>
      <h2>Données personnelles</h2><p>Les données personnelles éventuellement transmises par email sont utilisées uniquement pour répondre aux demandes reçues et assurer le suivi des échanges professionnels. Conformément au RGPD, vous pouvez exercer vos droits d’accès, de rectification, d’opposition, d’effacement et de limitation en écrivant à contact@seyiolab.com.</p>
      <h2>Cookies</h2><p>Ce site ne dépose pas de cookies publicitaires. Si des outils de mesure d’audience ou des services tiers sont ajoutés ultérieurement, cette page sera mise à jour.</p>
      <h2>Responsabilité</h2><p>SEYIO LAB s’efforce d’assurer l’exactitude des informations publiées sur ce site. Toutefois, la société ne peut garantir l’absence totale d’erreurs ou d’omissions et se réserve le droit de modifier le contenu du site à tout moment.</p>
    </main>
  );
}
