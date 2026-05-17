# Seyio Lab — Site Next.js / Vercel

## 1. Lancer en local
```bash
npm install
npm run dev
```

## 2. Déployer sur Vercel
1. Crée un compte sur Vercel.
2. Crée un nouveau projet.
3. Importe ce dossier depuis GitHub ou via Vercel CLI.
4. Dans Vercel : Project Settings > Domains.
5. Ajoute `seyiolab.com` puis `www.seyiolab.com`.

## 3. DNS chez IONOS
Dans IONOS > Domaines & SSL > seyiolab.com > DNS :
- type `A`, hôte `@`, valeur `76.76.21.21`
- type `CNAME`, hôte `www`, valeur `cname.vercel-dns.com`

Vérifie toujours les valeurs exactes affichées par Vercel.

## 4. À compléter avant publication
Dans `app/mentions-legales/page.tsx`, remplace :
- forme juridique
- capital social
- SIREN / SIRET
- RCS
- adresse complète
- email officiel
- directeur de publication si différent.
