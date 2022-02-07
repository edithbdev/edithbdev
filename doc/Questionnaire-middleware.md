 
# Récupérer un module externe
const monModule = require('monSuperModule');
 
# Exporter son module maison
module.exports = {name: 'MonSuperModule'};
module.exports.name = 'monSuperModule';
const monSuperModule = {name: 'monSuperModule'}; module.exports = monSuperModule;
 
# Pour récupérer un module externe il faut mettre en paramètre
Le nom du module
 
# Pour récupérer un module interne il faut mettre en paramètre
Le chemin vers mon fichier

 
# Quelle phrase décrit le mieux le principe des middlewares
Une chaine de blocs d'instruction exécutés les uns à la suite des autres
 
# Les middlewares permettent
De stoper la chaine d'exécution des fonctions si besoin
Valider les données envoyées
Sécuriser l'accès de nos API
Mettre en place un système de log
 
# Quelle est la méthode utilisée le plus souvent pour renseigner un middleware global
app.use()

# Qu'est ce que le SOC
La séparation des concepts

# Qu'est est l'intérêt
Code plus facilement maintenable
Test facilité
Se repérer plus facilement dans le projet

# Qu'utilise-t-on pour "stocker" les routes déclarées dans d'autres fichiers
express.Router()

# Qu'utilise-t-on pour intégrer les routes créées par express.Router() dans notre application express
app.use()