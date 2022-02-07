const express = require('express');
const morgan =require('morgan');

// Je récupère le module router de express
const userRouter = require('./router/user');
const app = express();

// On définit le middleware morgan qui va nous permettre de logger les requêtes HTTP
app.use(morgan('tiny'));

// On définit le middleware json qui va nous permettre de parser les requêtes JSON
app.use(express.json());
// On définit le middleware userRouter qui va nous permettre de récupérer les routes de l'utilisateur
app.use(userRouter);

// Si aucune route n'est trouvée, on renvoie une 404
app.use((request, response) => {
    response
    .status(404)
    .send('Oups, mauvaise route');
  });

module.exports = app;

