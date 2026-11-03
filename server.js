// sprint 1: 

import express from 'express';
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Seja muito bem-vindo à central informativa da escola!!");
});

app.get('/status', (req, res) => {
  res.json({ status: 'online', sprint: 1 });
});

app.get('/escola', (req, res) => {
  res.json({ nome: 'Escola SENAI', local: 'Valinhos', tipo: 'Escola Técnica' });
});

app.get('/cursos', (req, res) => {
  res.json([
    { id: 1, nome: "Desenvolvimento de sistemas" },
    { id: 2, nome: "Redes de computadores" },
    { id: 3, nome: "Administração" }
  ]);
});

app.get('/professor', (req, res) => {
  res.json([
    { nome: 'Felipe', disciplina: "Desenvolvimento de sistemas" },
    { nome: 'Luciana', disciplina: "Redes de computadores" },
    { nome: 'Carla', disciplina: "Administração" }
  ]);
});

app.get('/ajuda', (req, res) => {
  res.send(`
    <strong>Rotas disponíveis:</strong><br>
    / : página de início<br>
    /status : verificar status do servidor<br>
    /escola : armazena as informações da escola<br>
    /cursos : lista os cursos disponíveis<br>
    /professor : lista os professores e suas disciplinas<br>
    /ajuda : exibe informações sobre as rotas disponíveis<br>
    /requisicao : exibe o método da requisição
  `);
});

app.get('/requisicao', (req, res) => {
  res.send(`Solicitação de requisição recebida com sucesso! O método usado é: ${req.method}`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

//Sprint 2 :

const mensagens = [
  { id: 1, usuario: "Ana", texto: "Bom dia!" },
  { id: 2, usuario: "Pedro", texto: "Olá!" },
  { id: 3, usuario: "Maria", texto: "Tudo bem?" },
  { id: 4, usuario: "Lucas", texto: "Como vai?" },
  { id: 5, usuario: "Carla", texto: "Até logo!" }
];

function listarMensagens() { return mensagens; }

app.get("/", (req, res) => res.send("Servidor rodando! 🚀"));
app.get("/status", (req, res) => res.json({ status: "online", sprint: 2 }));
app.get("/sobre", (req, res) => res.send("Projeto Mensageiro Local"));
app.get("/mensagens", (req, res) => res.json(listarMensagens()));
app.get("/mensagens/:id", (req, res) => {
  const mensagem = mensagens.find(m => m.id === Number(req.params.id));
  if (!mensagem) return res.status(404).json({ erro: "Não encontrada" });
  res.json(mensagem);
});

app.get("/total-mensagens", (req, res) => res.json({ total: mensagens.length }));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor em http://localhost:${PORT}`);
});
