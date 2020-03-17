## Iniciar o package.json

--> yarn init -y

## Inicar aplicação

--> Instalar o express, para trabalhar com as rotas
--> Instalar o nodemon para monitorar as alterações
--> criar o script dev no arquivo "package.json":
"scripts": {
"dev": "nodemon src/server.js"
},
--> Criar arquivo routes.js

## criar pasta src

--> Nela, vão ser armazenado, todo nosso código da aplicação

## tipos de parametros

--> Query params: req.query.parametro = para filtros

--> Route params: req.query.parametro = para edição e delete

## Acessar corpo da requisição

--> req.body
