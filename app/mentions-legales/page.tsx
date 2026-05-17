
import Link from "next/link";
export const metadata = { title: "Mentions légales — Seyio Lab", description: "Mentions légales du site Seyio Lab." };
export default function MentionsLegales() {
  return <main className="container legal"><Link href="/">← Retour</Link><h1>Mentions légales</h1>
  <h2>Éditeur du site</h2><p>Le site seyiolab.com est édité par <strong>Seyio Lab</strong>.<br />Forme juridique : À COMPLÉTER<br />Capital social : À COMPLÉTER<br />SIREN / SIRET : À COMPLÉTER<br />RCS : À COMPLÉTER<br />Siège social : Courbevoie, France — adresse complète à compléter<br />Email : contact@seyiolab.com</p>
  <h2>Directeur de la publication</h2><p>Yacov Serero.</p>
  <h2>Hébergement</h2><p>Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.<br />Le nom de domaine est enregistré auprès de IONOS.</p>
  <h2>Propriété intellectuelle</h2><p>L’ensemble des contenus présents sur ce site, incluant les textes, logos, marques, éléments graphiques, interfaces et éléments visuels, est protégé par le droit de la propriété intellectuelle. Toute reproduction non autorisée est interdite.</p>
  <h2>Données personnelles</h2><p>Les données personnelles éventuellement transmises via email sont utilisées uniquement pour répondre aux demandes reçues. Conformément au RGPD, vous pouvez exercer vos droits d’accès, de rectification, d’opposition, d’effacement et de limitation en écrivant à contact@seyiolab.com.</p>
  <h2>Cookies</h2><p>Ce site ne dépose pas de cookies publicitaires. Si des outils de mesure d’audience sont ajoutés ultérieurement, cette page sera mise à jour.</p></main>;
}
