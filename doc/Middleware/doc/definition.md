- Middleware : c'est un moyen de faire passer des données entre les différentes parties d'un programme.
  Exécuter les données les unes après les autres. Le but est de ne pas répéter les actions.
  Il faut se rappeler que les middlewares interceptent les requêtes, ensuite on fait une action dans ce middleware (on vérifie si le user est connecté, s'il a les bons droits pour cette requête, etc.), et ensuite, on laisse passer la requête au middleware suivant, ou alors on fait autre chose (on redirige vers une autre requête, on renvoie vers une page d'erreur 403, etc.)

  - Toutes les fonctions dans Express sont des middlewares.