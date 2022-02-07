# Comment installer express
npm install express

# Express sert à
créer un serveur HTTP
Intercepter des requêtes HTTP
envoyer des réponses aux requêtes HTTP

# Express repose sur quel principe
les middlewares

# A quoi sert `app.use(...)`
A renseigner un middleware

# Quelles méthodes va intercepter une requête faite depuis l'url de mon navigateur
app.get()
app.all()
app.use()

# Les tests unitaires sont faits pour
tester chaque morceau de code
tester les fonctions une à une

# Les tests d'intégrations sont faits pour
tester une application de bout en bout

test unitaire = test de mes fonctions
test intégration = je teste mes routes
test fonctionnel = je test mon appli depuis l'interface client

# Comment lancer les tests unitaires / d'intégrations
en ligne de commande : npm test

# 'intérêt de la programmation fonctionnelle
c'est que l'on peut faire des tests facilement

# `describe()` sert à 
décrire une suite de tests

# `test()` sert à
faire un test

# Pour tester une fonction pure il faut
appeler la fonction
tester le retour de la fonction

# Quels sont les intérêts d'un gestionnaire de packages ?
avoir des modules externes tout-compris
gérer les versions des dépendances
vérifier l'intégrité des dépendances
ne pas stocker trop de code sur nos serveurs
réutiliser du code déjà produit et testé


# Comment installer une nouvelle dépendance de production au projet avec npm ?
npm i maDependance
npm install maDependance

# Comment vérifier l'intégrité des dépendance avec npm ?
npm audit

# Comment créer la fiche d'identité du projet ?
npm init

# Comment installer une nouvelle dépendance de développement au projet avec npm ?
npm i -D maDependance