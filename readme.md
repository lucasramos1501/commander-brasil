# magic-commander
<p>Projeto  voltado para estudar javascript, e suas derivações NodeJs, ReactJs e React Native.
A ideia e desenvolver um web app voltado para jogadores de <a href="https://pt.wikipedia.org/wiki/Magic:_The_Gathering">Magic: the Gathering</a>, permitinado ao jogador realizar buscas sobre determindadas cartas, que podem ser organizadas em dois formatos: Lista e Coleção. </p>
<p>Lista, assim como o nome sugere são lista em que podem ser adicionados  
sem qualquer critério de exclução, enquanto as collections você precisa
adicionar 99 cartas diferentes e uma carta para o sideboard.
Cada usuario da api precisara criar uma conta, primeiramente antes de utilizar 
as funcionalidade.</p>

## magic-commander-brasil


## magic-api-consulte
<p>Essa api tem como principal objetivos estudar as funcionalidades do 
nodejs, para isso foi usando a api https://docs.magicthegathering.io/.<p>

### Funções

<p>Cadastrar uma conta</p>
<p>Editar sua uma conta</p>
<p>Adicionar foto de perfil</p>
<p>Consutar carta por nome pt-br ou eng</p>
<p>Consutar e criar suas coleção</p>
<p>Consutar coleções de outros jogadores</p>

### Rotas

##### Acessar API

``` http
POST /login
GET /logout
```

##### Rotas de Usuario

``` http
POST /user/new
GET /user/list
GET /user/:id
PUT /user/update/:id
DELETE /user/delete/:id
```

##### Roda de Upload

``` http
POST /upload/:id

```

##### Rotas de Lista de Cartas 

``` http
POST /cardlist/new
GET /cardlist/list
GET /cardlist/:id
PUT /cardlist/update/:id
DELETE /cardlist/delete/:id
```

##### Rotas de Coleções

``` http
POST /collection/new
GET /collection/list
GET /collection/:id
PUT /collection/update/:id
DELETE /collection/delete/:id
```

### Códigos de Estado

| Código de Estado| Descrição |
| :--- | :--- |
| 200 | `Requisição bem Sucedida` |
| 201 | `Requisição bem Sucedida, um novo recurso foi criado` |
| 401 | `Não autorizado` |
| 404 | `Não encontrado` |