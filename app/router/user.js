const express = require('express');
const userController = require('./../controller/user');

// Router est une fonction qui permet de créer un routeur
const router = express.Router();

// Exemple de route respectant l'architecture REST
// on va récupérer la liste des utilisateurs
router.get('/api/users', userController.getAllUsers);
// on va récupérer l'utilisateur qui à pour identifiant ce qui est passé en paramètre
router.get('/api/users/:id', userController.getOneUser);
// on va créer un nouvelle utilisateur avec les données passé dans le corps de la requête (body)
router.post('/api/users', userController.createUser);
// on va mettre à jour l'utilisateur qui a pour identifiant l'id passé en paramètre avec les données passé dans le corps de la requête (body)
router.patch('/api/users/:id', userController.updateUser);
// on va supprimer l'utilisateur
router.delete('/api/users/:id', userController.deleteUser);

// Je mets à disposition le routeur à l'application
module.exports = router;