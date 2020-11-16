const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/alunos').get((request, response) => {
  response.send(ALUNOS);
});

app.route('/api/alunos').post((request, response) => {
  let aluno = request.body;

  const firstId = ALUNOS ? Math.max.apply(null, ALUNOS.map(alunoIterator => alunoIterator.id)) + 1 : 1;
  aluno.id = firstId;
  ALUNOS.push(aluno);
  

  response.status(201).send(aluno);
});

app.route('/api/alunos/:id').put((request, response) => {
  const alunoId = +request.params['id'];
  const aluno = request.body;

  const index = ALUNOS.findIndex(alunoIterator => alunoIterator.id === alunoId);
  ALUNOS[index] = aluno;

  response.status(200).send(aluno);
});

app.route('/api/alunos/:id').get((request, response) => {
  const alunoId = +request.params['id'];

  response.status(200).send(ALUNOS.find(alunoIterator => alunoIterator.id === alunoId));
});

app.route('/api/alunos/:id').delete((request, response)=> {
  const alunoId = +request.params['id'];
  ALUNOS = ALUNOS.filter(alunoIterator => alunoIterator.id !== alunoId);
  
  response.status(204).send({});
});

var ALUNOS = [
  { 
    id: 1,
    name: 'Camila',
    idade: 27,
    email: 'camila.taruma@gmail.com',
    curso: 'Ciencia da Computacao' 
  },
  { 
    id: 2,
    name: 'Teste',
    idade: 25,
    email: 'Teste@gmail.com',
    curso: 'Analise e desenvolvimento de sistemas' 
  },
  { 
    id: 3,
    name: 'Teste 2',
    idade: 31,
    email: 'Teste2@gmail.com',
    curso: 'Engenharia da computacao' 
  },
  { 
    id: 4,
    name: 'Teste 3',
    idade: 45, 
    email: 'Teste3@gmail.com', 
    curso: 'Sistemas da informacao' 
  },
  { 
    id: 5,
    name: 'Teste 3',
    idade: 45, 
    email: 'Teste3@gmail.com', 
    curso: 'Sistemas da informacao' 
  },
  { 
    id: 2,
    name: 'Teste',
    idade: 25,
    email: 'Teste@gmail.com',
    curso: 'Analise e desenvolvimento de sistemas' 
  },
  { 
    id: 3,
    name: 'Teste 2',
    idade: 31,
    email: 'Teste2@gmail.com',
    curso: 'Engenharia da computacao' 
  },
  { 
    id: 4,
    name: 'Teste 3',
    idade: 45, 
    email: 'Teste3@gmail.com', 
    curso: 'Sistemas da informacao' 
  },
  { 
    id: 5,
    name: 'Teste 3',
    idade: 45, 
    email: 'Teste3@gmail.com', 
    curso: 'Sistemas da informacao' 
  }
]
