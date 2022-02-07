## Express
```bash
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
```

## Api
```bash
Api is a set of functions that can be used to perform a variety of tasks.
Exemple : 
- module NodeJs est une api qui permet de gérer les fichiers.

### Formats :
- json (jason format est le plus utilisé)
    - JSON.stringify()
    - JSON.parse()
exemple : const monObjet = {
    name: 'John',
    age: 30
}
=> en json :
{
    "name": "John",
    "age": 30
}
- xml 
    - xml2js
    - js2xml
exemple : const monObjet = {
    name: 'John',
    age: 30
}
=> en xml :
<monObjet>
    <name>John</name>
    <age>30</age>
</monObjet>
- yaml
    - yaml2js
    - js2yaml
exemple : const monObjet = {
    name: 'John',
    age: 30
}
=> en yaml (les espaces sont important) :
monObjet:
    name: John
    age: 30
```

## Sequelize 
C'est un ORM (Object Relational Mapping) qui permet de gérer les données dans la base de données.
Design pattern : Active Record