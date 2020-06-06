import express, { request } from 'express';

const app = express();

//Use seve para colocar um plugin
app.use(express.json());

/*
  Criando rota
  Recebe dois parametro:
  1 - Rota: Endereço completo da requisição
  2 - Recurso: Qual entidade estamos acessando do sistema

  Request = Obter dados sobre a requisição
  Response = Devover uma resposta o navegador (Browser) ou aplicação que esteva consumindo.

  Tipo de Requisições
  GET: Buscar uma ou mais informações do Back-end
  POST: Criar uma nova informação do back-end
  PUT: Atualizar uma informaçã exisyente no back-end
  DELETE: Remover uma informação do back-end

  Request Param: Parâmetros que vem na própria rota que identifica um recurso;
  Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros,
               paginação;
  Request Body: Parâmetros para criação e atualização de informação
*/
const users = [
    'Alessandro', //0
    'Kelly', //1
    'Eduarda', //2
    'Junior', //3
    'Silas' //4
];
app.get('/users', (request, response) => {
    const search = String(request.query.search);
    //If Ternário
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    
   return response.json(filteredUsers);
});

//Lista um usuário passando o id
/*
    Fiu convertido para Number porque o browser devolve uma string
    e precisamos usar para pesquisa o numero quando usamos o array
*/
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];

    return response.json(user);
});


app.post('/users', (request, response) => {
    const data = request.body;
    const user = {
        name: data.name,
        email: data.email,
    };

    //É sempre bom colocar o retun quando for devolver uma requisição ao usuário
    return response.json(user);
});

// Porta que deseja executar a aplicação
app.listen(3333);

