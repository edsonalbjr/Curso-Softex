const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Configurando o body-parser
app.use(bodyParser.json());

// Lista de alunos
let alunos = [
  { id: 1, nome: "João Silva", idade: 20 },
  { id: 2, nome: "Maria Santos", idade: 22 },
  { id: 3, nome: "Carlos Oliveira", idade: 25 },
];

// Criação de um aluno (CREATE)
app.post("/alunos", (req, res) => {
  const aluno = req.body;
  aluno.id = alunos.length + 1;
  alunos.push(aluno);
  res.status(201).json(aluno);
});

// Leitura de todos os alunos (READ)
app.get("/alunos", (req, res) => {
  res.json(alunos);
});

// Leitura de um aluno específico (READ)
app.get("/alunos/:id", (req, res) => {
  const id = req.params.id;
  const aluno = alunos.find((a) => a.id === parseInt(id));
  if (!aluno) {
    res.status(404).json({ message: "Aluno não encontrado" });
  } else {
    res.json(aluno);
  }
});

// Atualização de um aluno (UPDATE)
app.put("/alunos/:id", (req, res) => {
  const id = req.params.id;
  const updatedAluno = req.body;
  const index = alunos.findIndex((a) => a.id === parseInt(id));
  if (index === -1) {
    res.status(404).json({ message: "Aluno não encontrado" });
  } else {
    alunos[index] = updatedAluno;
    res.json(updatedAluno);
  }
});

// Exclusão de um aluno (DELETE)
app.delete("/alunos/:id", (req, res) => {
  const id = req.params.id;
  const index = alunos.findIndex((a) => a.id === parseInt(id));
  if (index === -1) {
    res.status(404).json({ message: "Aluno não encontrado" });
  } else {
    alunos.splice(index, 1);
    res.status(204).send();
  }
});

// Iniciando o servidor
app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
