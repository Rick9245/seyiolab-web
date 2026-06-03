
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const products = [{"name": "Koprio", "description": "Gestion de copropriété moderne pour syndics, copropriétaires et professionnels de l’immobilier.", "url": "https://koprio.app", "logo": "/apps/koprio.png", "type": "wide"}, {"name": "Tamario", "description": "Secure data room pensée pour organiser, protéger et partager les documents sensibles.", "url": "https://tamario.app", "logo": "/apps/tamario.png", "type": "wide"}, {"name": "Leaxit", "description": "Solution digitale pour simplifier la restitution de bail et fluidifier les démarches locatives.", "url": "https://leaxit.com", "logo": "/apps/leaxit.png", "type": "app"}, {"name": "Coblio", "description": "Legal-tech IA pour la gestion, l’analyse et le suivi intelligent des contrats.", "url": "https://coblio.app", "logo": "/apps/coblio.png", "type": "wide"}, {"name": "Ovelis", "description": "Application SaaS en ligne, conçue pour répondre à des besoins métiers spécifiques.", "url": "https://ovelis.app", "logo": "/apps/ovelis.svg", "type": "app"}];

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollProducts = (direction: "prev" | "next") => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".product-card");
    const step = card ? card.offsetWidth + 22 : 330;
    el.scrollBy({ left: direction === "next" ? step : -step, behavior: "smooth" });
    setActive((current) => {
      const next = direction === "next" ? current + 1 : current - 1;
      return Math.max(0, Math.min(products.length - 1, next));
    });
  };

  return (
    <>
      <header className="container nav">
        <Image src="/logo.svg" alt="Seyio Lab" width={210} height={50} priority />
        <nav className="navlinks">
          <a href="#produits">Produits</a>
          <a href="#vision">Vision</a>
          <Link href="/mentions-legales">Mentions légales</Link>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-card container">
            <div className="logo-wrap">
              <Image className="logo-main" src="/logo.svg" alt="Logo Seyio Lab avec effet de lumière" width={720} height={180} priority />
            </div>
            <div className="kicker">Studio SaaS · IA · Cloud</div>
            <h1>Construire les logiciels métiers de demain.</h1>
            <p className="lead">Seyio Lab est un studio français d’édition de logiciels SaaS basé à Courbevoie. Nous concevons des produits digitaux professionnels, pensés pour devenir des entités indépendantes à maturité commerciale.</p>
            <div className="actions"><a className="btn" href="#produits">Découvrir nos produits</a><a className="btn secondary" href="mailto:contact@seyiolab.com">Nous contacter</a></div>
          </div>
        </section>

        <section id="produits" className="container section">
          <h2>Une pépinière de produits digitaux.</h2>
          <p className="text">Chaque application répond à un besoin métier clair : immobilier, legal-tech, gestion, data room, IA et expériences cloud. Le portefeuille est évolutif et s’enrichira avec les prochaines mises en ligne.</p>

          <div className="products-carousel">
            <button className="carousel-arrow prev" type="button" aria-label="Produit précédent" onClick={() => scrollProducts("prev")}>‹</button>
            <div className="carousel-viewport">
              <div className="carousel-track" ref={carouselRef}>
                {products.map((product) => (
                  <article className="product-card" key={product.name}>
                    <div className="product-logo-box">
                      <Image className={`product-logo ${product.type === "wide" ? "wide" : ""}`} src={product.logo} alt={`Logo ${product.name}`} width={220} height={120} />
                    </div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <a className="product-link" href={product.url} target="_blank" rel="noopener noreferrer">Ouvrir le site ↗</a>
                  </article>
                ))}
              </div>
            </div>
            <button className="carousel-arrow next" type="button" aria-label="Produit suivant" onClick={() => scrollProducts("next")}>›</button>
          </div>

          <div className="dots" aria-hidden="true">
            {products.map((_, index) => <span key={index} className={`dot ${index === active ? "active" : ""}`} />)}
          </div>
        </section>

        <section id="vision" className="container section two">
          <h2>Technologique, clair, fiable.</h2>
          <div className="text"><p>Seyio Lab développe des outils professionnels avec une vision long terme : innovation utile, interfaces lisibles, architectures modernes et ambition européenne.</p><p>Nos produits s’appuient sur des technologies cloud, React et intelligence artificielle pour créer des solutions robustes, accessibles et évolutives.</p></div>
        </section>
      </main>
      <footer className="container footer"><span>© {new Date().getFullYear()} Seyio Lab — Courbevoie, France</span><span><Link href="/mentions-legales">Mentions légales</Link> · <Link href="/politique-confidentialite">Confidentialité</Link></span></footer>
    </>
  );
}
