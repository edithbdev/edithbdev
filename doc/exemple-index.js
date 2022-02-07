// Création du serveur
// Permet de récupérer notre serveur
// Equivalent : 
// const http = require('http');
// const server = http.createServer();
// server.listen(3001);
const express = require('express');
const morgan =require('morgan');
// Pour récupérer les données dans le fichier data on utilise le require
const data = require('../data');

const app = express();

// Toutes les requêtes sont asynchrones (async), elles ne sont pas bloquantes
// Différent de synchrone qui attend que toutes les requêtes soient terminées avant de continuer

// On définit la route / qui renvoie un message de bienvenue au client
// https://expressjs.com/en/guide/routing.html
// On ajoute une route sur la méthode GET et l'url /.
// On répond à l'aide de la méthode send de response
app.get('/', (request, response) => {

    response.send('Hello World'); 
});

// app.get('/about', (request, response) => {
//     response.send('Hello About');
// });

// Création d'une route qui renvoie un tableau de personnes
app.get('/persons', (request, response) => {
    response.send(data);
});

// On définit une route avec un paramètre (n'importe quel nom)
app.get('/:name', (request, response, next) => {
    // On récupère le paramètre name
    const {name} = request.params;
    // Equivalent à :
    // const name = request.params.name;
    // On récupère la personne dans le tableau data
    const person = data.find(p => p.name === name);
    if(!person) {
        // Si je n'ai pas trouver la person, je vais passer la main au middleware suivant
        // Si aucun middleware suivant, retourne une 404
        next();
    } else {
        response.send(`${name} ${person?.age}`);
  }
    // On renvoie la personne et son age
    // '?' https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // L'opérateur de chaînage optionnel ?. permet de lire la valeur d'une propriété située profondément dans une chaîne d'objets 
    // connectés sans avoir à valider expressément que chaque référence dans la chaîne est valide
    // response.send(`${name} ${person?.age || "n'existe pas"}`); 
});

// Créer une nouvelle route ayant un paramètre qui contiendra le nom de la personne à rechercher
// Afficher dans un premier temps le nom dans la réponse à envoyer au navigateur
// Récupérer les données dans data.js et retourner l'âge de la personne à côté de son nom
app.get('/persons/:name', (request, response) => {
    const name = request.params.name;
    const person = data.find(person => person.name === name);
    if(person) {
    response.send(`${person.name} a ${person.age} ans`);
    } else {
        response.send('Personne introuvable');
    }
});

// Verbes HTTP
// get / post / patch / put / delete / options / head

// fonction générique pour toutes les routes
const genericResponse = (request, response) => {
    response.json({
      method: request.method,
      url: request.url
    });
  }

// Exemple de route respectant l'Architecture REST 
// On récupère la liste des utilisateurs
app.get('/api/users', genericResponse);
// On récupère un utilisateur
// on va récupérer l'utilisateur qui à pour identifiant ce qui est passé en paramètre
app.get('/api/users/:id', genericResponse);
// On crée un utilisateur
// on va créer un nouvelle utilisateur avec les données passé dans le corps de la requête (body)
app.post('/api/users', genericResponse);
// On met à jour un utilisateur
// on va mettre à jour l'utilisateur qui à pour identifiant ce qui est passé en paramètre
app.patch('/api/users/:id', )
app.put('/api/users/:id', genericResponse)
// on crée un utilisateur ou la modifie si l'id est situé dans le body mais il est préférable de créer un utilisateur avec un post
app.put('/api/users')
// On supprime un utilisateur
app.delete('/api/users/:id', genericResponse);
// Methode Soft Delete
// On supprime un utilisateur mais on le met dans un tableau de supprimés
app.delete('/api/users/:id', genericResponse);

app.use((request, response) => {
    response
    .status(404)
    .send('Oups, mauvaise route');
  });

module.exports = app;

