# magic-commander
<p>Projeto  voltado para estudar javascript, e suas derivações NodeJs, ReactJs e React Native.
A ideia e desenvolver um web app voltado para jogadores de <a href="https://pt.wikipedia.org/wiki/Magic:_The_Gathering">Magic: the Gathering</a>, permitinado ao jogador realizar buscas sobre determindadas cartas, que podem ser organizadas em dois formatos: Lista e Coleção. </p>
<p>Lista, assim como o nome sugere são lista em que podem ser adicionados sem qualquer critério de exclução, enquanto as collections você precisaadicionar 99 cartas diferentes e uma carta para o sideboard.
Cada usuario da api precisara criar uma conta, primeiramente antes de utilizar 
as funcionalidade.</p>

### Funções

* Cadastrar uma conta
* Editar sua uma conta
* Adicionar foto de perfil
* Consutar carta por nome pt-br ou eng(usando essa [api](https://docs.magicthegathering.io/.)) 
* Consutar e criar suas coleção
* Consutar coleções de outros jogadores

## Back-End

### Rotas

##### Acessar API

``` http
POST /login
GET /logout
```

##### Rotas de Usuario

``` http
POST /user/
GET /user/
GET /user/:id
PUT /user/:id
DELETE /user/:id
```

##### Roda de Upload

``` http
POST /upload/:id

```

##### Rotas de Lista de Cartas 

``` http
POST /cardlist/
GET /cardlist/
GET /cardlist/:id
PUT /cardlist/:id
DELETE /cardlist/:id
```

##### Rotas de Coleções

``` http
POST /collection/
GET /collection/
GET /collection/:id
PUT /collection/:id
DELETE /collection/:id
```

### Códigos de Estado

| Código de Estado| Descrição |
| :--- | :--- |
| 200 | `Requisição bem Sucedida` |
| 201 | `Requisição bem Sucedida, um novo recurso foi criado` |
| 401 | `Não autorizado` |
| 404 | `Não encontrado` |

## Front-End