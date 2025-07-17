# MonPortFolio sur Vercel

## Structure du projet

- `public/` : Contient tous les fichiers statiques (HTML, CSS, JS, images, CV)
- `api/` : Contient les fonctions serverless (backend) pour Vercel
- `package.json` : Dépendances Node.js (ici, nodemailer)
- `vercel.json` : Configuration Vercel

## Backend (API de contact)
- Endpoint : `/api/contact`
- Méthode : POST
- Corps attendu : `{ nom, email, message }`
- Envoie un email à l'adresse définie dans la variable d'environnement `MAIL_TO`.

## Variables d'environnement à définir sur Vercel
- `MAIL_USER` : Adresse email d'envoi (ex : Gmail)
- `MAIL_PASS` : Mot de passe ou App Password
- `MAIL_TO` : Adresse email de réception

## Déploiement
1. Poussez ce projet sur GitHub.
2. Connectez-le à Vercel.
3. Ajoutez les variables d'environnement dans le dashboard Vercel.
4. Déployez !

---

Pour toute question, ouvrez une issue ou contactez-moi. 