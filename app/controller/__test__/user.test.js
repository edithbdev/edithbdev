// npm i jest
// npm run test
// Un mock est un objet qui permet de simuler un comportement d'un objet

// https://jestjs.io/fr/docs/mock-functions

// dans le fonctionnement normal du code, request et response proviennent d'express. 
// Là on teste uniquement la fonction createUser, hors express, 
// donc on n'a pas accès à request et response, on les fabrique de toute pièce. 
// Et c'est pour cette raison qu'on a besoin de simuler le fait que 
// response.json et response.status sont des fonctions.

const { createUser, getAllUsers, getOneUser, updateUser, deleteUser } = require('./../user');
const users = require('./../../../data');
describe('createUser controller', () => {
  test('create user', () => {
    // Je vais créer de fausse données. On appel ça faire des mocks
    // user va contenir l'utilsateur que l'on est censé créer
    const user = {
      name: 'Scoubidou',
      age: 50
    };
    // Je créer un objet request et response car mon controlleur utilise le request et response d'express.
    // Ne les ayant pas sous la main, je créer des objets qui représente ses paramètres
    const request = {
      body: user
    };
    // response est particulier car il contient des méthodes qui vont être appeler par mon controller. Je vais donc simuler ses fonctions à l'aide de jest.fn();
    // response est une boite à outils qui permet de retourner une réponse
    const response = {
      json: jest.fn(),
      status: jest.fn()
    }

    // Avec express on ne test pas un retour de fonction, mais on test les fonctions devant être appeler.
    // On execute alors simplement notre méthode sans stocker le retour
    createUser(request, response);

    // On vérifie que nos méthodes json et status ai bien été appelé et ceux avec les bonnes informations
    expect(response.json).toHaveBeenCalled();
    expect(response.json).toBeCalledTimes(1);
    expect(response.json).toBeCalledWith(user);
    // expect(response.status).toBeCalledTimes(1);
    // expect(response.status).toBeCalledWith(201);
  });
});

describe('getAllUsers controller', () => {
    test('getAllUser result when success', () => {
        const response = {
            json: jest.fn()
        };

        users = [];
        // getAllUsers({}, response);
        getAllUsers(null, response);
        expect(response.json).toBeCalledTimes(1);
        expect(response.json).toBeCalledWith(expect.any(Array));
    });
});

describe('getOneUser controller', () => {
    // beforeAll va executer la fonction avant de lancer les tests.
    beforeAll(() => {
      users = [{
        name: 'Cédric',
        age: 21
      }];
    });
    test('getOneUser result when success', () => {
      const request = {
        params: {
          id: 0
        }
      };
      const response = {
        json: jest.fn()
      };
      const next = jest.fn();
  
      const mockedUser = expect.objectContaining({
        name: expect.any(String),
        age: expect.any(Number)
      });
  
      getOneUser(request, response, next);
  
      expect(response.json).toBeCalledTimes(1);
      expect(response.json).toBeCalledWith(expect.any(Object));
      expect(response.json).toBeCalledWith(mockedUser);
      expect(next).toBeCalledTimes(0);
    });
  
    test('getOneUser result when not found', () => {
      const request = {
        params: {
          id: 5000
        }
      };
      const response = {
        json: jest.fn()
      };
      const next = jest.fn();
  
      getOneUser(request, response, next);
  
      expect(response.json).toBeCalledTimes(0);
      expect(next).toBeCalledTimes(1);
    });
  });
  
  


describe ('updateUser controller', () => {
    test ('updateUser result when success', () => {
        const request = {
            params: {
                id: 1
                },
            body: {
                name: 'Scoubidou',
                age: 50
                }
        };
        const response = {
            json: jest.fn()
        };
        const next = jest.fn();

        if (users[request.params.id]) {
        updateUser(request, response, next);
        expect(response.json).toBeCalledTimes(1);
        expect(response.json).toBeCalledWith(expect.any(Object));
        }
        else {
            next();
            expect(next).not.toBeCalled();
        }
    });
});

describe ('deleteUser controller', () => {
    test ('deleteUser result when success', () => {
        const request = {
            params: {
                id: 1
            }
        };
        const response = {
            json: jest.fn()
        };
        deleteUser(request, response);
        expect(response.json).toBeCalledTimes(1);
        expect(response.json).toBeCalledWith(expect.any(Object));
    });
});



  