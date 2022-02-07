- npm init -y
- npm install express (https://expressjs.com/fr/)
- creation du serveur express dans index.js
- lancer le serveur dans le terminal

- Installation de nodemon, pour le démarrage automatique du serveur
npm install -D nodemon 
- Dans le fichier package.json, ajouter le démarrage automatique du serveur
 "scripts": {
    "dev": "nodemon index.js",
  },
- Dans le terminal : npm run dev pour démarrer le serveur
- Construire ses routes https://expressjs.com/en/guide/routing.html
- Thunder client pour tester ses routes api
  

- https://github.com/sequelize/cli
- npm install --save-dev sequelize-cli
- npm i sequelize mysql2