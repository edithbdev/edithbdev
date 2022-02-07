const users = require('./../../data');

// fonction générique pour toutes les routes
const userController = {
    getAllUsers: (request, response) => {
        response.json(users);
    },

    // id === index de notre tableau
    getOneUser: (request, response, next) => {
        const id = request.params.id;
        const user = users[id];
        if (user) {
            response.json(user);
        } else {
          next();
            // res.status(404).json({
            //     error: 'User not found'
            // });
        }
    },
    createUser: (request, response) => {
        // const user = {
        //     id: users.length + 1,
        //     ...req.body
        // };
        // users.push(user);
        // res.json(user);
        const user = request.body;
        users.push(user);
        response.json(user);
    },
    // id === index de notre tableau
    // updateUser: (req, res, next) => {
    //    const user = users[req.params.id];
    //     if (user) {
    //         user.name = req.body.name;
    //         user.age = req.body.age;
    //         res.json(user);
    //     } else {
    //       next();
            // res.status(404).json({
            //     error: 'User not found'
            // });
    //     }
    // },
    updateUser(request, response, next) {
      // request.params contient les paramètre de notre route
      // Les paramètres sont défini sur la route avec les :monParametre
      const { id } = request.params;
      // request.body contient le corps (body) de la requête http. On met souvent dedans les données que l'on souhaite créer / modifier
      const user = request.body;
  
      if(!users[id]) {
        next();
      } else {
        users[id] = user;
        response.json(user);
      }
    },
    // id === index de notre tableau
    // deleteUser: (req, res) => {
    //     const id = req.params.id;
    //     const user = users[id];
    //     if (user) {
    //         users.splice(id, 1);
    //         res.json(user);
    //     } else {
    //         res.status(404).json({
    //             error: 'User not found'
    //         });
    //     }
    // }
    deleteUser(request, response) {
      const { id } = request.params;
      users.splice(id, 1);
      response.json({
        message: `User ${id} deleted successfully`
      });
    },
};

  module.exports = userController;
   