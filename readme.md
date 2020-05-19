# magic-api-consulte

Essa api tem como principal objetivos estudar as funcionalidades do 
nodejs, para isso foi usando a api https://docs.magicthegathering.io/ 
para realizar buscas sobre determindadas cartas, que podem ser organizadas 
em dois formatos: Lista e Coleção.
Lista, assim como o nome sugere são lista em que podem ser adicionados  
sem qualquer critério de exclução, enquanto as collections você precisa
adicionar 99 cartas diferentes e uma carta para o sideboard.
Cada usuario da api precisara criar uma conta, primeiramente antes de utilizar 
as funcionalidade.

## Funções

Cadastrar uma conta
Editar sua uma conta
Adicionar foto de perfil
Consutar carta por nome pt-br ou eng
Consutar e criar suas coleção
Consutar coleções de outros jogadores

## Rotas

#### Acessar API

``` http
POST /login
GET /logout
```

#### Rotas de Usuario

``` http
POST /user/new
GET /user/list
GET /user/:id
PUT /user/update/:id
DELETE /user/delete/:id
```

### Roda de Upload

``` http
POST /upload/:id

```

#### Rotas de Lista de Cartas 

``` http
POST /cardlist/new
GET /cardlist/list
GET /cardlist/:id
PUT /cardlist/update/:id
DELETE /cardlist/delete/:id
```

#### Rotas de Coleções

``` http
POST /collection/new
GET /collection/list
GET /collection/:id
PUT /collection/update/:id
DELETE /collection/delete/:id
```

## Códigos de Estado

magic-api-consulte retorna os seguintes códigos: 

| Código de Estado| Descrição |
| :--- | :--- |
| 200 | `Requisição bem Sucedida` |
| 201 | `Requisição bem Sucedida, um novo recurso foi criado` |
| 401 | `Não autorizado` |
| 404 | `Não encontrado` |

## Bibioteclas 

[axios](https://github.com/axios/axios)</br>
[bcrypt](https://github.com/kelektiv/node.bcrypt.js/)</br>
[body-parser](https://github.com/expressjs/body-parser)</br>
[express](https://github.com/expressjs/express)</br>
[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)</br>
[mongoose](https://github.com/Automattic/mongoose)</br>
[multer](https://github.com/expressjs/multer)</br>


